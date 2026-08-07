<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=26&duration=3500&pause=1000&color=5865F2&center=true&vCenter=true&width=600&lines=Ibrahim+Haykal+Alatas;Backend+%26+Operational+Systems;Systems+that+run+the+factory+floor" alt="Ibrahim Haykal Alatas">
</h1>

<p align="center">
  <a href="https://ibrahimhaykal.my.id"><img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white"></a>
  <a href="https://linkedin.com/in/ibrahimhaykalalatas"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="mailto:ibrahimhaykal@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white"></a>
</p>

<br>

```
Software Engineer @ Data Polis
Previously: System Engineer @ PT Gemala Kempa Daya (Astra Otoparts Group)
```

I build internal systems for real manufacturing operations: Production, PPIC,
Maintenance, and Accounting. Most of my work lives on top of legacy ERP
(Infor/Baan), where the interesting problems aren't features, they're
constraints. Transactional consistency, live workflows that can't be paused,
and data that has to stay correct across two databases at once.

<br>

### Selected Work

Internal systems, all closed source, so there is no repository to link. Details
below are what I can describe without exposing company data. Where a system is
still being built, it says so.

**Enterprise CRM** · *Actuarial Consulting Firm* · `in development`  
Laravel and React 19 + TypeScript. Full stack across both repos, roughly 230
commits over seven weeks. Six internal roles plus client-facing views, a
19-stage kanban board with realtime sync over Pusher, and an actuarial report
pipeline (PSAK 219) with per-version draft review.  
→ Drag and drop is fully optimistic with rollback. An in-flight move counter
holds refetches while moves are still pending, so rapid reordering doesn't get
overwritten by stale server state, then reconciles once on the last settle.  
→ Excel config uploads are edited in place. Cells are overwritten by address in
the original workbook rather than regenerated, so multi-sheet templates survive
the round trip intact. Forms are header-driven, so they adapt to template
variants instead of assuming a fixed column layout.  
→ AI summaries are cached against a hash of their input data, so they
regenerate when the underlying figures change rather than on a timer.

**FIFO Warehouse Monitoring** · *PT Gemala Kempa Daya* · `closed source`  
QR gate in/out across 48 material blocks, 400+ weekly transactions, digital
location visualization integrated into the plant's existing portal.  
→ Material search time down **76%** (103 → 24.6 min), measured by time study
across 5 operators × 30 cycles against the plant's internal QCC baseline.

**Oracle → PostgreSQL Migration** · *Trucking Control System* · `closed source`  
Phased migration using an application-level dual-write strategy. Both databases
stayed consistent throughout. Zero downtime during live production.

**Inventory Aging & Reconciliation** · *Accounting* · `closed source`  
30K+ row multi-sheet Excel exports in ~9 seconds, with drill-down tracing from
warehouse summary to individual transactions.

**Smart Andon** · *Maintenance* · `closed source`  
QR-validated issue lifecycle tracking with technician activity monitoring and
MTTR visibility.

<br>

### Public Repository Languages

Generated from the code in my public repositories, not a self-reported list.
This is a partial view of what I work with, not the whole of it.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api/top-langs/?username=ibrahimhaykal&layout=compact&langs_count=8&card_width=420&hide=html,css,blade,scss,hack&theme=github_dark&hide_border=true&bg_color=00000000&title_color=5865F2&text_color=c9d1d9">
    <source media="(prefers-color-scheme: light)" srcset="https://github-readme-stats.vercel.app/api/top-langs/?username=ibrahimhaykal&layout=compact&langs_count=8&card_width=420&hide=html,css,blade,scss,hack&theme=default&hide_border=true&bg_color=00000000&title_color=5865F2">
    <img alt="Top languages by repository" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ibrahimhaykal&layout=compact&langs_count=8&card_width=420&hide=html,css,blade,scss,hack&hide_border=true&bg_color=00000000">
  </picture>
</p>

<p align="center">
  <sub>Public repositories only. Language share is measured by bytes of code,
  so it reflects what I write most, not everything I've shipped. Production
  work on legacy ERP is closed source and won't appear here.</sub>
</p>

<br>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ibrahimhaykal/ibrahimhaykal/output/snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/ibrahimhaykal/ibrahimhaykal/output/snake.svg">
  <img alt="contribution snake" src="https://raw.githubusercontent.com/ibrahimhaykal/ibrahimhaykal/output/snake.svg">
</picture>

<br>

<p align="center">
  <sub>I care about turning operational problems into reliable system design,
  and about checking whether the system actually improved anything.</sub>
</p>
