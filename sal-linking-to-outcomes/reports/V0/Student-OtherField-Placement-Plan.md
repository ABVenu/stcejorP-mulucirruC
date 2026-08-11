# SAL → Outcomes Plan V0  
## Students + Working Professionals (Other Fields)

**Outcome:** Early-level **analytics** job readiness (Python + SQL + Excel) · main course can feel like revision  
**Working style:** Special cohort — **not just content release**; dedicated discipline + live connect + SAL  
**Personas (same track):** Student (**first**) · Working professional in a different field (same plan, next)  
**Window:** ~45 days (enrollment → course start)  
**Cadence:** 3 days / week  
**Deferred:** Working professionals in the *same* field (R2) — later  

### Before the special cohort starts

1. Connect with learners (esp. students)  
2. Explain why hard work in this gap matters  
3. Take a **pledge of hard work**  
4. Then open the special cohort  

### Daily timing (each session day)

| Block | Time |
|-------|------|
| Live connect | **8:00 pm – 8:20 pm** (20 min) |
| SAL session | **8:30 pm – 10:00 pm** (**90 min**) |

Prefer **fresh dedicated SAL videos** built for this cohort (90 min). Existing dump videos are fallback until those are ready.

---

### Design rules (V0)

| Rule | Detail |
|------|--------|
| Not content dump | Dedicated working style + accountability for a special cohort |
| Students first | Primary execution focus — they have more time to cope |
| Shared track | Students and Other-field workers get the **same** plan (no domain basics yet) |
| Foundations | Computer + Maths = **1 session each** (light) |
| Core stack | **Python → SQL → Excel** for analytics roles |
| Interview PS | **1 Interview Problem Solving session after every 3 learning sessions** |
| Weekly eval | End of each week — short quiz / practical check (not a full 90-min SAL) |
| Session length | **90 min SAL** + **20 min live connect** before it |
| Out of scope | ML maths (vectors, GD), GenAI depth, same-field worker path |

---

### Session rhythm

```
Learn → Learn → Learn → Interview PS → Learn → Learn → Learn → Interview PS → …
                                    ↑
                         every 4th slot in sequence
```

Weekly Eval sits at the **end of each calendar week** (async / short checkpoint).

---

## Full session plan + SAL dump reuse (same table)

English-only SAL dump · prefer **2026**, else **2025**.  
**Reuse:** Yes = reuse as-is · Partial = trim/adapt · No = net-new · N/A = eval (not a SAL video)

| # | Week | Type | Code | Session title | Pillar | Duration | Outcome link | Must complete | Reuse | Year | Existing SAL video (best match) | Fit | Reuse notes |
|---|------|------|------|---------------|--------|----------|--------------|---------------|-------|------|--------------------------------|-----|-------------|
| 1 | 1 | Learn | C1 | Computer Basics — Files, Browser & First Notebook | Computer | 90 min | Can open Colab / work with files without friction | Yes | Partial | 2025 | `FTSDM00S1_2512_Coding_S01: Programming Foundation` | Partial | No dedicated Colab session in dump; use Programming Foundation + short Colab wrap (net-new) |
| 2 | 1 | Learn | M1 | Maths for Analytics — %, Averages & Reading Tables | Maths | 90 min | Read metrics like an analyst | Yes | Yes | 2025 | `PBAU08-MU01_S01: Arithmetic Essentials: Averages, Ratios, Percentages` | Strong | Direct fit (~8706 sec) |
| 3 | 1 | Learn | P1 | Python — Variables, Types, Expressions & I/O | Python | 90 min | Write basic Python statements | Yes | Yes | 2026 | `FDN_Tech_1: Python Basics and Problem Discussions` | Strong | Alt 2026: `PSDU07-MU08_S1: Python Basics and problem discussions` |
| — | 1 | **Eval** | **E-W1** | **Weekly Eval 1 — Computer + Maths + Python basics** | Evaluation | ~30–45 min | Checkpoint before Week 2 | Yes | N/A | — | — | — | Build quiz/task bank (not a SAL video) |
| 4 | 2 | **IPS** | **IPS-1** | **Interview Problem Solving 1 — Logic & Simple Patterns** | Interview PS | 90 min | Practice thinking aloud on easy logic problems | Yes | Partial | 2025 | `FTSDM01S1_2512_DSA_S01: Introduction to FlowChart & Problem Solving -1` | Good | Alt: `FTSDM00S1_2512_PS_S01: Problem Solving: Logic Operator and Conditional statements` — retitle as interview PS |
| 5 | 2 | Learn | P2 | Python — Conditionals & Logical Operators | Python | 90 min | Encode business rules in `if/else` | Yes | Yes | 2026 | `FDN_Tech_2: Python Building Block: Operators and conditional statements in python` | Strong | Alt 2025: `cc_b4_s2: Python Building Block: Operators and conditional statements in python` |
| 6 | 2 | Learn | P3 | Python — Loops (`for` / `while`) | Python | 90 min | Automate repetitive calculations | Yes | Yes | 2026 | `FDN_Tech_4: Understanding break, continue, and Nested Loops` | Good | Alt 2025: `FDN_Tech_3: Mastering Control Flow: Conditional and Loop in Python` (do not use KAN_/TAM_/TEL_ 2026) |
| — | 2 | **Eval** | **E-W2** | **Weekly Eval 2 — Conditionals + Loops (+ IPS-1 themes)** | Evaluation | ~30–45 min | Checkpoint before Week 3 | Yes | N/A | — | — | — | Build quiz + 2 coding problems |
| 7 | 3 | Learn | P4 | Python — Functions (Reuse & Return) | Python | 90 min | Write reusable analyst helpers | Yes | Yes | 2025 | `CC_Block_02_S01: Advanced Python Functions` | Good | Trim to Launchpad/analytics scope; alt: `The Power of Python Functions (PT-PY205-*)` |
| 8 | 3 | **IPS** | **IPS-2** | **Interview Problem Solving 2 — Conditionals, Loops & Functions** | Interview PS | 90 min | Solve interview-style coding warmups | Yes | Partial | 2025 | `FTSDM00S1_2512_PS_S01: Problem Solving: Logic Operator and Conditional statements` | Partial | Combine with loop PS variants; may need net-new interview framing |
| 9 | 3 | Learn | P5 | Python — Strings & Lists | Python | 90 min | Clean text & work with collections | Yes | Partial | 2025 | `PTDSM00S1_2504_S05: Data Structures in Python` | Partial | Combined asset (lists/strings/dicts/sets) — extract strings+lists segment |
| — | 3 | **Eval** | **E-W3** | **Weekly Eval 3 — Functions + Strings/Lists** | Evaluation | ~30–45 min | Checkpoint before Week 4 | Yes | N/A | — | — | — | Build quiz + 2 coding problems |
| 10 | 4 | Learn | P6 | Python — Dictionaries & Lookups | Python | 90 min | Use key-value data like tables | Yes | Partial | 2025 | `PTDSM00S1_2504_S05: Data Structures in Python` | Partial | Same combined asset as P5 — use dict segment; alt: `Key-Value Data Structures` (DSA-leaning) |
| 11 | 4 | Learn | P7 | Python Problem Lab — Mix Structures & Functions | Python | 90 min | End-to-end mini analysis script | Yes | Partial | 2026 | `PSDU07-MU08_S1: Python Basics and problem discussions` | Partial | Practice flavour; supplement with analyst-style mini task (net-new wrap) |
| 12 | 4 | **IPS** | **IPS-3** | **Interview Problem Solving 3 — Data Structures (Lists/Dicts)** | Interview PS | 90 min | Interview problems on lists/dicts | Yes | Partial | 2025 | `FTSDM01S1_2512_DSA_S02: Introduction to Flowchart & Problem Solving 2` | Partial | Prefer net-new interview set using lists/dicts; DSA PS as support |
| — | 4 | **Eval** | **E-W4** | **Weekly Eval 4 — Python proficiency (P1–P7)** | Evaluation | ~30–45 min | Python gate before SQL | Yes | N/A | — | — | — | Timed mini-set (pass ≥70%) |
| 13 | 5 | Learn | Q1 | SQL — SELECT, WHERE, ORDER BY, LIMIT | SQL | 90 min | Pull the right rows from a table | Yes | Yes | 2025 | `FTTEM03S2_2515_JSQ206_S01: Introduction to SQL and Databases` | Good | Alt filter depth: `Data Sleuthing: Searching, Filtering & Power Functions in SQL` |
| 14 | 5 | Learn | Q2 | SQL — Aggregates & GROUP BY | SQL | 90 min | Answer “how many / average / by category” | Yes | Yes | 2025 | `PBAU02-MU01_S01: Mastering Aggregations: GROUP BY, HAVING, ORDER BY, LIMIT Demystified` | Strong | Direct analytics fit |
| 15 | 5 | Learn | Q3 | SQL — Joins (INNER / LEFT) Intro | SQL | 90 min | Combine tables for analysis | Yes | Yes | 2025 | `PBAU02-MU01_S02: Mastering SQL Joins: Connecting the Dots in Relational Databases` | Strong | Trim to INNER/LEFT only for V0 |
| — | 5 | **Eval** | **E-W5** | **Weekly Eval 5 — SQL SELECT → GROUP BY → Joins** | Evaluation | ~30–45 min | SQL checkpoint | Yes | N/A | — | — | — | Query worksheet |
| 16 | 6 | **IPS** | **IPS-4** | **Interview Problem Solving 4 — SQL Query Problems** | Interview PS | 90 min | Interview-style SQL questions | Yes | Partial | 2025 | Reuse problem sets from Q1–Q3 SALs + net-new interview prompts | Partial | No dedicated “SQL interview PS” SAL; wrap existing SQL labs as interview drills |
| 17 | 6 | Learn | X1 | Excel — Formulas, Lookups & Cleaning | Excel | 90 min | Day-to-day analyst spreadsheet work | Yes | Yes | 2025 | `CC_BLOCK_2_S4: Functions in Excel` | Strong | Alt: `PBAU06-MU01_S03: Functions in Excel`; lookups: `cc_b4_s2: VLookup, XLookup & HLookup` (unpublished — verify) |
| 18 | 6 | Learn | X2 | Excel — Pivot Tables, Charts & Quick Analysis | Excel | 90 min | Summarise & present data in Excel | Yes | Partial | 2025 | `PTDSM04S2_2518_EXL105_S02: Pivot tables and charts` | Good | Published=false on some rows — verify before assign; alt charts: `PBAU07-MU01_S03: Visualizing Data with Dashboards` |
| — | 6 | **Eval** | **E-W6** | **Weekly Eval 6 — Excel + SQL application** | Evaluation | ~30–45 min | Analytics tools checkpoint | Yes | N/A | — | — | — | Practical sheet + 1 query |
| 19 | 7 | Learn | Cap | Analytics Mini Capstone — Python + SQL + Excel Story | Capstone | 90 min | One small end-to-end analytics task | Yes | Partial | 2025 | `CC_BLOCK_2_S1: EDA case study - 1 (Beginning)` (+ Conclusion optional) | Partial | Adapt EDA case as mini capstone; add Excel/SQL story prompt (net-new brief) |
| — | 7 | **Eval** | **E-W7** | **Final Readiness Eval — Analytics placement bar** | Evaluation | ~45–60 min | Ready / Almost / Needs support | Yes | N/A | — | — | — | Mini case assessment |

### Reuse coverage (19 SAL sessions only)

| Reuse status | Count | Codes |
|--------------|-------|-------|
| **Yes** (direct) | 9 | M1, P1, P2, P3, P4, Q1, Q2, Q3, X1 |
| **Partial** (adapt) | 10 | C1, IPS-1, IPS-2, IPS-3, IPS-4, P5, P6, P7, X2, Cap |
| **N/A** (weekly evals) | 7 | E-W1 … E-W7 |

**Strongest 2026 reuse spine:** `FDN_Tech_1` → `FDN_Tech_2` → `FDN_Tech_4` (P1–P3)  
**Strongest 2025 analytics spine:** Arithmetic Essentials → SQL Aggregations/Joins → Functions in Excel 

---

## IPS placement rule (locked)

| After learning sessions | IPS session |
|-------------------------|-------------|
| #1–3 (Computer, Maths, P1) | **IPS-1** (#4) |
| #5–7 (P2, P3, P4) | **IPS-2** (#8) |
| #9–11 (P5, P6, P7) | **IPS-3** (#12) |
| #13–15 (Q1, Q2, Q3) | **IPS-4** (#16) |

Next IPS would fall after #17–19 if the window extends; V0 stops at 4 IPS blocks inside 45 days.

---

## Weekly evaluation map

| Week | Eval code | What is tested | Format (suggested) |
|------|-----------|----------------|--------------------|
| 1 | E-W1 | Files/Colab + %/averages + Python variables | Quiz + 1 short Colab task |
| 2 | E-W2 | Conditionals + loops | Quiz + 2 coding problems |
| 3 | E-W3 | Functions + strings/lists | Quiz + 2 coding problems |
| 4 | E-W4 | Full Python spine | Timed mini-set (pass ≥70%) |
| 5 | E-W5 | SQL SELECT / WHERE / GROUP BY / light JOIN | Query worksheet |
| 6 | E-W6 | Excel formulas + pivot + light SQL | Practical sheet + 1 query |
| 7 | E-W7 | End-to-end analytics readiness | Mini case (Python or SQL + Excel insight) |

**Readiness bar (end of V0):**

| Status | Meaning |
|--------|---------|
| **Ready** | All must-complete learning + IPS done; weekly evals average ≥70%; E-W7 pass |
| **Almost** | 50–69% or 1–2 missed evals |
| **Needs support** | Below that / inactive |

---

## Hours summary

| Item | Count | Hours |
|------|-------|-------|
| Learning SAL sessions | 15 | 22.5 |
| Interview PS sessions | 4 | 6.0 |
| **Total SAL (recorded) sessions** | **19** | **28.5** |
| Weekly evals (short) | 7 | ~4–5 (not full SAL blocks) |
| Cadence | 3 SAL sessions / week over ~6.5 weeks | fits 45-day window |

---

## Pillar mix (learning sessions only)

| Pillar | Sessions | Share of learning |
|--------|----------|-------------------|
| Computer | 1 | Light foundation |
| Maths | 1 | Light foundation |
| Python | 7 | Core for analytics |
| SQL | 3 | Core for analytics |
| Excel | 2 | Core for analytics |
| Capstone | 1 | Integration |
| Interview PS | 4 (separate type) | Placement practice |

---

## What changed vs previous Launchpad S3

| Old Launchpad S3 | New Outcomes V0 |
|------------------|-----------------|
| Prep for AIML Module 1 Day 1 | Prep for **analytics placement** |
| Heavy ML maths (vectors, GD) | **1** light maths session |
| No SQL / Excel | **SQL + Excel** included |
| No weekly evals | **Eval every week** |
| No interview practice | **IPS after every 3 learning sessions** |
| Separate S3 vs D3 flavour | **Same plan** for Student + Other field |

---

## Next (after V0 table)

1. Write eval question banks for E-W1…E-W7  
2. Design **Same-field working professional** path (shorter / compressed)  
3. Export this combined plan+reuse table as CSV for Google Sheets  
4. QC publish flags on Excel Pivot SAL (`PTDSM04S2_*`) before assign 

---

*V0 — Students + Other Fields only · SAL linking to placement outcomes*
