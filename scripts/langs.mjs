
// Aggregates language bytes across public, non-fork repositories and renders
// a light and dark SVG card into dist/.
// Runs on the default GITHUB_TOKEN — no personal access token required.

import { mkdir, writeFile } from "node:fs/promises";

const USER = process.env.GITHUB_USER;
const TOKEN = process.env.GITHUB_TOKEN;
const LIMIT = 8;

// Markup, styling and config languages that would otherwise drown out the
// languages actually being written.
const IGNORED = new Set([
  "html",
  "css",
  "scss",
  "less",
  "blade",
  "hack",
  "dockerfile",
  "makefile",
  "shell",
  "batchfile",
  "procfile",
]);

const COLORS = {
  PHP: "#4F5D95",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  Java: "#B07219",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#701516",
  "C#": "#178600",
  "C++": "#F34B7D",
  C: "#555555",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  Shell: "#89E051",
  SQL: "#E38C00",
  PLpgSQL: "#336790",
};

const FALLBACK = ["#5865F2", "#7C3AED", "#0EA5E9", "#10B981", "#F59E0B", "#EF4444"];

async function api(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "language-card",
    },
  });
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} on ${path}`);
  }
  return response.json();
}

async function collectRepositories() {
  const repositories = [];
  for (let page = 1; ; page += 1) {
    const batch = await api(`/users/${USER}/repos?per_page=100&page=${page}&type=owner`);
    repositories.push(...batch);
    if (batch.length < 100) break;
  }
  return repositories.filter((repo) => !repo.fork && !repo.private);
}

async function aggregate(repositories) {
  const totals = new Map();
  for (const repo of repositories) {
    const languages = await api(`/repos/${USER}/${repo.name}/languages`);
    for (const [language, bytes] of Object.entries(languages)) {
      if (IGNORED.has(language.toLowerCase())) continue;
      totals.set(language, (totals.get(language) ?? 0) + bytes);
    }
  }
  return [...totals.entries()].sort((a, b) => b[1] - a[1]);
}

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function render(entries, dark) {
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);
  if (!total) return null;

  const ink = dark ? "#C9D1D9" : "#1F2328";
  const muted = dark ? "#8B949E" : "#59636E";
  const track = dark ? "#21262D" : "#EAEEF2";

  const width = 500;
  const barY = 12;
  const barHeight = 10;
  const rows = Math.ceil(entries.length / 2);
  const height = barY + barHeight + 22 + rows * 22;

  let cursor = 0;
  const segments = entries
    .map(([language, bytes], index) => {
      const span = (bytes / total) * width;
      const x = cursor;
      cursor += span;
      const color = COLORS[language] ?? FALLBACK[index % FALLBACK.length];
      return `<rect x="${x.toFixed(2)}" y="${barY}" width="${span.toFixed(2)}" height="${barHeight}" fill="${color}"/>`;
    })
    .join("");

  const legend = entries
    .map(([language, bytes], index) => {
      const color = COLORS[language] ?? FALLBACK[index % FALLBACK.length];
      const share = ((bytes / total) * 100).toFixed(1);
      const column = index % 2;
      const row = Math.floor(index / 2);
      const x = column * (width / 2);
      const y = barY + barHeight + 32 + row * 22;
      return [
        `<circle cx="${x + 6}" cy="${y - 4}" r="5" fill="${color}"/>`,
        `<text x="${x + 18}" y="${y}" fill="${ink}" font-size="13">${escapeXml(language)}</text>`,
        `<text x="${x + 18 + language.length * 7.5 + 8}" y="${y}" fill="${muted}" font-size="13">${share}%</text>`,
      ].join("");
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif">
<rect x="0" y="${barY}" width="${width}" height="${barHeight}" rx="5" fill="${track}"/>
<g clip-path="url(#round)">${segments}</g>
<defs><clipPath id="round"><rect x="0" y="${barY}" width="${width}" height="${barHeight}" rx="5"/></clipPath></defs>
${legend}
</svg>
`;
}

const repositories = await collectRepositories();
const entries = (await aggregate(repositories)).slice(0, LIMIT);

console.log(`Scanned ${repositories.length} public repositories.`);
for (const [language, bytes] of entries) {
  console.log(`  ${language}: ${bytes} bytes`);
}

await mkdir("dist", { recursive: true });
await writeFile("dist/languages.svg", render(entries, false));
await writeFile("dist/languages-dark.svg", render(entries, true));
