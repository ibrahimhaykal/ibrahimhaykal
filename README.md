<h1 align="center">Ibrahim Haykal Alatas</h1>

<p align="center">
  Full Stack Developer · Jakarta, Indonesia<br>
  <sub>Systems that hold up on the factory floor, and in the back office.</sub>
</p>

<p align="center">
  <a href="https://ibrahimhaykal.my.id"><img alt="Portfolio" src="https://img.shields.io/badge/Portfolio-000000?style=flat-square&logo=vercel&logoColor=white"></a>
  <a href="https://linkedin.com/in/ibrahimhaykalalatas"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-000000?style=flat-square&logo=linkedin&logoColor=white"></a>
  <a href="mailto:ibrahimhaykal@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-000000?style=flat-square&logo=gmail&logoColor=white"></a>
</p>

```
Full Stack Developer @ PT Data Teknologi Terintegrasi (Datapolis)
Previously:  Full Stack Developer Intern
             @ PT Gemala Kempa Daya (Astra Otoparts Group)
```

I build internal systems for real operations: actuarial consulting today,
manufacturing before that (Production, PPIC, Maintenance, Accounting). Most of
that work sat on top of a read-only Infor/Baan ERP, where the interesting
problems are constraints, not features: live workflows that can't pause, and
data that has to stay correct across two databases at once.

**Stack:** Laravel · PHP · React · TypeScript · PostgreSQL · Oracle PL/SQL · MySQL

---

### Selected work

All of it is internal and closed source, so there is no repository to link.
What follows is what I can describe without exposing company or client data.

**VALAK CRM** · *Actuarial consulting firm* · `in daily use`  
Internal CRM that carries a PSAK 219 employee-benefit valuation from quotation
to billing, across 7 roles. Main frontend developer (React 19, TypeScript),
plus the Laravel endpoints those flows needed: 625 frontend and 116 backend
commits in four months, in a repo shared by several engineers.
- Built the digital PSAK 219 report module with multi-book projects and a
  final report release that replaced a manual process.
- Built the 18-stage project management board for 7 roles with realtime
  updates, now the firm's main workflow.
- Integrated the CRM with the valuation app through a backend relay: data
  upload, calculation runs, and status tracking from one place.
- Built the account and security module on both sides for an app holding
  client payroll data: server-side hashed credentials, session cleanup on
  rejected tokens, and per-account isolation on shared devices.
- Cut a 1,664-row company directory from 17 chained requests to 1, and merged
  filter-option queries from 930 ms to 205 ms.

**FIFO Warehouse Monitoring** · *PT Gemala Kempa Daya*  
QR gate in/out across 48 material blocks and 400+ weekly transactions, with
digital location visualization inside the plant's existing portal.
- Material search time down **76.10%** (103.00 → 24.62 min), measured by time
  study across 5 operators × 30 cycles against the plant's QCC baseline.
- The subject of my [published thesis](http://repository.stmi.ac.id/id/eprint/2840/).

**Oracle → PostgreSQL Migration** · *Trucking Control System*  
Phased migration with an application-level dual-write strategy. Both databases
stayed consistent throughout, with zero downtime during live production.

**Finished Goods Visualization** · *Giant Rack Plant 3*  
80+ rack columns mapped across multi-layer, top, and side U-shape layouts, with
customer filtering, barcode scanning, and shipment status.

**Inventory Aging & Reconciliation** · *Accounting*  
30K+ row multi-sheet Excel exports in about 9 seconds, with drill-down from
warehouse summary to individual transactions.

**Smart Andon & Maintenance Cost Approval** · *Maintenance × Accounting*  
QR-validated issue lifecycle with MTTR visibility, and spare-part costs routed
through multi-level approval so ownership stays traceable across two
departments that sign off separately.

---

### Recognition

- 2nd Place, National Hackathon 2025 · SME Digital Platform
- Certified Database Administrator · BNSP
- Applied Bachelor of Computer Science · Politeknik STMI Jakarta · GPA 3.77

---

### Public repository languages

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ibrahimhaykal/ibrahimhaykal/langcard/langcard-dark.svg?v=1">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/ibrahimhaykal/ibrahimhaykal/langcard/langcard.svg?v=1">
    <img alt="Top languages by repository" src="https://raw.githubusercontent.com/ibrahimhaykal/ibrahimhaykal/langcard/langcard.svg?v=1" width="460">
  </picture>
</p>

<p align="center">
  <sub>Public repositories only, measured by bytes of code. Production work is
  closed source and doesn't appear here.</sub>
</p>
