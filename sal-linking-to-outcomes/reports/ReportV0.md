# Report V0 — SAL Linking to Outcomes

**Theme:** A **special cohort** in the enrollment → course-start gap — not a content dump, a dedicated working style — so heterogeneous learners get grip before Day 1.  
**Window:** ~45 days · **SAL session:** 90 minutes · **Primary focus first:** Students  

---

## 1. Problem

Same course, **heterogeneous students**. Some already cope; some need an **extra push**.

There is usually unused time between **enrollment** and the **actual course start date**. Today that gap is mostly idle.

- Learners who lack basics struggle when the main course begins  
- SAL videos exist, but are not clearly sequenced for this wait window or for outcomes  
- Placement readiness starts late, after the course is already underway  

**What we want from the gap:** use it so students build a **good grip** on foundations and early analytics skills — enough that parts of the **main course can feel like revision**, not first exposure.

---

## 2. Solution we want

This is **not only content release**. It is a **dedicated working style** for a **special cohort**: paced SAL sessions, live connect, pledge of hard work, weekly checks, and interview practice.

| Aim | What it means |
|-----|----------------|
| Working style | Special cohort discipline — show up, practice, get evaluated — not passive video watching |
| Course grip | Foundations + core tools before Day 1 → main course becomes smoother / revision-like |
| Placement angle | Early **analytics** bar: **Python + SQL + Excel** (+ light computer & maths) |
| Practice | **IPS** (Interview Problem Solving) after every 3 learning sessions |
| Check | **Weekly evaluation** — real progress, not only watch-time |
| Video fit | Prefer **fresh dedicated 90-min SAL videos** built for this cohort (reuse dump only where it truly fits) |

**Promise:** *Arrive on Day 1 with grip — not from zero.*

---

## 2.0 Advantages of this project

| Advantage | Why it matters |
|-----------|----------------|
| **Better grip before Day 1** | Foundations + core tools are practised in the wait window, not rushed in Week 1 |
| **Main sessions become easier** | Much of early Project X content feels like **revision**, not first exposure |
| **Hard-work habit** | Special cohort + pledge + live connect + weekly evals builds discipline early |
| **Indirect placement help** | Stronger foundations → better assignment quality, confidence, and interview readiness later |

---

## 2.1 Special cohort — before we release

More focus first on **students** (they usually have better time to cope). Before the special cohort starts:

1. **Connect** with them (why this gap matters)  
2. Make them understand the **importance of hard work** in this window  
3. Ask them to take a **pledge of hard work**  
4. Then **start** the special cohort  

No pledge / buy-in → do not treat them as part of this special track casually.

---

## 2.2 Session timing (initial plan for V0)

| Block | Time | What |
|-------|------|------|
| **Live connect** | **8:00 pm – 8:20 pm** (20 min) | Previous session doubts + quick summary |
| Break | 8:20 pm – 8:30 pm | Short buffer |
| **SAL session** | **8:30 pm – 10:00 pm** (90 min) | Dedicated recorded SAL for this cohort |

Sessions are **90 minutes**. Fresh, dedicated SAL videos for this special cohort are the preferred fit.

---

## 3. Personas & time they can give

| Persona | Who | Time they can give (V0) | Priority |
|---------|-----|-------------------------|----------|
| **Student** | College / fresher — often needs extra push; more time to cope | **3 sessions / week** | **First** — execute here first |
| **Other field** | Working, different domain — also needs basics | **3 / week** preferred · **2 / week** fallback if time is tight | After students; use D3 or D2 |
| **Same / relevant field** | Working in analytics / related tech — wants AI/ML engineer fit | **2 sessions / week** | **R2** track in §6.2 |

Fixed: SAL = **90 min** · live connect = **20 min** before · window ≈ **45 days** (~19 SAL sessions).

---

## 4. Cases we defined

| Case ID | Persona | Sessions / week | ~Total sessions | Core stack | In V0 execution? |
|---------|---------|-----------------|---------------|------------|------------------|
| **S3** | Student | 3 | ~19 | Python / SQL / Excel (7 / 3 / 2 + Cap) | **Yes — primary** |
| **D3** | Other field | 3 | ~19 | Same as S3 | **Yes** (after students) |
| **D2** | Other field (time-constrained) | 2 | ~13 | **4 Python / 2 SQL / 2 Excel** | **Yes** (fallback) |
| **R2** | Relevant / same field (analytics → AI/ML) | 2 | ~13 | **2 Python brush-up + core ML bridge** | **Yes** |

**Why S3/D3 shared:** both need the extra push on basics. **D2:** same analytics outcome, tighter week. **R2:** already knows Python/SQL/analytics — skip Excel/SQL intro; bridge into Project X Module 1 late + Module 2. **Execution order:** students first.

---

## 5. What V0 executes

**Students first**, then Other field (D3/D2), then Relevant field (R2):

1. Pre-start connect + hard-work pledge → open special cohort  
2. **S3/D3/D2:** light foundations + Python → SQL → Excel (+ Cap on 3/week)  
3. **R2:** 2 Python brush-ups → NumPy/Pandas-for-ML → ML maths → classical ML (no mini project)  
4. IPS after every 3 learning sessions (all tracks)  
5. Weekly eval at week end (all tracks)  
6. Session timing: **20 min live connect (8:00–8:20)** + **90 min SAL (8:30–10:00)**  
7. Prefer **fresh dedicated SAL** for this cohort; reuse dump only where fit is strong  

**Out of V0 gap phase:** GenAI depth · agents · full MLOps · mini projects on R2 · “dump and forget” content release  

---

## 6. Plan + SAL reuse table

Each row below is one special-cohort day: **8:00–8:20 live connect** + **8:30–10:00 SAL (90 min)**.  
Prefer **fresh dedicated SAL** for this cohort; dump matches below are fallback / reference until new videos are shot.  
**Reuse:** Yes = dump can stand in · Partial = adapt or re-record · N/A = eval (not a SAL video)  
**IPS** = Interview Problem Solving 

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
| 7 | 3 | Learn | P4 | Python — Functions (Reuse & Return) | Python | 90 min | Write reusable analyst helpers | Yes | Yes | 2025 | `CC_Block_02_S01: Advanced Python Functions` | Good | Trim to analytics scope; alt: `The Power of Python Functions (PT-PY205-*)` |
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
| 17 | 6 | Learn | X1 | Excel — Formulas, Lookups & Cleaning | Excel | 90 min | Day-to-day analyst spreadsheet work | Yes | Yes | 2025 | `CC_BLOCK_2_S4:Functions in Excel` | Strong | Alt: `PBAU06-MU01_S03: Functions in Excel`; lookups: `cc_b4_s2: VLookup, XLookup & HLookup` (verify) |
| 18 | 6 | Learn | X2 | Excel — Pivot Tables, Charts & Quick Analysis | Excel | 90 min | Summarise & present data in Excel | Yes | Partial | 2025 | `PTDSM04S2_2518_EXL105_S02: Pivot tables and charts` | Good | Published=false on some rows — verify before assign; alt charts: `PBAU07-MU01_S03: Visualizing Data with Dashboards` |
| — | 6 | **Eval** | **E-W6** | **Weekly Eval 6 — Excel + SQL application** | Evaluation | ~30–45 min | Analytics tools checkpoint | Yes | N/A | — | — | — | Practical sheet + 1 query |
| 19 | 7 | Learn | Cap | Analytics Mini Capstone — Python + SQL + Excel Story | Capstone | 90 min | One small end-to-end analytics task | Yes | Partial | 2025 | `CC_BLOCK_2_S1: EDA case study - 1 (Beginning)` (+ Conclusion optional) | Partial | Adapt EDA case as mini capstone; add Excel/SQL story prompt (net-new brief) |
| — | 7 | **Eval** | **E-W7** | **Final Readiness Eval — Analytics placement bar** | Evaluation | ~45–60 min | Ready / Almost / Needs support | Yes | N/A | — | — | — | Mini case assessment |

### Reuse snapshot

| Reuse status | Count | Codes |
|--------------|-------|-------|
| **Yes** (direct) | 9 | M1, P1, P2, P3, P4, Q1, Q2, Q3, X1 |
| **Partial** (adapt) | 10 | C1, IPS-1…4, P5, P6, P7, X2, Cap |
| **N/A** (weekly evals) | 7 | E-W1 … E-W7 |

---

## 6.1 Fallback plan — **D2** Other field · 2 sessions/week

If a learner from **Working in a different field** cannot do 3 sessions/week, use **case D2** (same outcome, tighter cadence).

**Balance (learning only):** **4 Python · 2 SQL · 2 Excel** (+ light Computer + Maths foundations)  
**IPS rule remains same:** after every **3 learning sessions** (**IPS-1, IPS-2, IPS-3**).  
**Weekly eval remains:** end of every week (**E-W1 … E-W7**).

| # | Week | Type | Code | Session title | Pillar | Duration | Must complete | Reuse | Year | Existing SAL video (best match) | Fit | Reuse notes |
|---|------|------|------|---------------|--------|----------|--------------|--------|-------|--------------------------------|-----|-------------|
| 1 | 1 | Learn | C1 | Computer Basics — Files, Browser & First Notebook | Computer | 90 min | Yes | Partial | 2025 | `FTSDM00S1_2512_Coding_S01: Programming Foundation` | Partial | Colab wrap net-new |
| 2 | 1 | Learn | M1 | Maths for Analytics — %, Averages & Reading Tables | Maths | 90 min | Yes | Yes | 2025 | `PBAU08-MU01_S01: Arithmetic Essentials: Averages, Ratios, Percentages` | Strong | Direct fit |
| — | 1 | Eval | E-W1 | Weekly Eval 1 — Computer + Maths | Evaluation | ~30–45 min | Yes | N/A | — | — | — | Quiz + 1 short task |
| 3 | 2 | Learn | P1 | Python — Variables, Types, Expressions & I/O | Python | 90 min | Yes | Yes | 2026 | `FDN_Tech_1: Python Basics and Problem Discussions` | Strong | Alt: PSDU07-MU08_S1 |
| 4 | 2 | IPS | IPS-1 | Interview Problem Solving 1 — Logic & Simple Patterns | Interview PS | 90 min | Yes | Partial | 2025 | `FTSDM01S1_2512_DSA_S01: Introduction to FlowChart & Problem Solving -1` | Good | Retitle as interview PS |
| — | 2 | Eval | E-W2 | Weekly Eval 2 — Python basics + IPS-1 themes | Evaluation | ~30–45 min | Yes | N/A | — | — | — | Quiz + 1 coding problem |
| 5 | 3 | Learn | P2 | Python — Conditionals & Loops (compressed) | Python | 90 min | Yes | Yes | 2026 | `FDN_Tech_2` + `FDN_Tech_4` (trim to one 90-min dedicated video) | Good | Prefer fresh dedicated SAL combining both |
| 6 | 3 | Learn | P3 | Python — Functions (Reuse & Return) | Python | 90 min | Yes | Yes | 2025 | `CC_Block_02_S01: Advanced Python Functions` | Good | Trim to analytics scope |
| — | 3 | Eval | E-W3 | Weekly Eval 3 — Conditionals, Loops & Functions | Evaluation | ~30–45 min | Yes | N/A | — | — | — | 2 coding problems |
| 7 | 4 | Learn | P4 | Python — Strings, Lists, Dicts & Mini Lab | Python | 90 min | Yes | Partial | 2025 | `PTDSM00S1_2504_S05: Data Structures in Python` | Partial | One combined structures + practice session |
| 8 | 4 | IPS | IPS-2 | Interview Problem Solving 2 — Conditionals, Loops & Functions | Interview PS | 90 min | Yes | Partial | 2025 | `FTSDM00S1_2512_PS_S01: Problem Solving: Logic Operator and Conditional statements` | Partial | Add interview framing |
| — | 4 | Eval | E-W4 | Weekly Eval 4 — Python proficiency (P1–P4) | Evaluation | ~30–45 min | Yes | N/A | — | — | — | Timed mini-set (pass ≥70%) |
| 9 | 5 | Learn | Q1 | SQL — SELECT, WHERE, ORDER BY, LIMIT | SQL | 90 min | Yes | Yes | 2025 | `FTTEM03S2_2515_JSQ206_S01: Introduction to SQL and Databases` | Good | — |
| 10 | 5 | Learn | Q2 | SQL — Aggregates, GROUP BY & Joins Intro | SQL | 90 min | Yes | Yes | 2025 | `PBAU02-MU01_S01: Mastering Aggregations` + trim joins from `PBAU02-MU01_S02` | Strong | Prefer one fresh dedicated SAL covering both |
| — | 5 | Eval | E-W5 | Weekly Eval 5 — SQL SELECT → GROUP BY → light Joins | Evaluation | ~30–45 min | Yes | N/A | — | — | — | Query worksheet |
| 11 | 6 | Learn | X1 | Excel — Formulas, Lookups & Cleaning | Excel | 90 min | Yes | Yes | 2025 | `CC_BLOCK_2_S4:Functions in Excel` | Strong | Alt: `PBAU06-MU01_S03: Functions in Excel` |
| 12 | 6 | IPS | IPS-3 | Interview Problem Solving 3 — SQL Query Problems | Interview PS | 90 min | Yes | Partial | 2025 | Reuse Q1–Q2 problem sets + net-new interview prompts | Partial | SQL interview drills |
| — | 6 | Eval | E-W6 | Weekly Eval 6 — Excel formulas + SQL application | Evaluation | ~30–45 min | Yes | N/A | — | — | — | Practical sheet + 1 query |
| 13 | 7 | Learn | X2 | Excel — Pivot Tables, Charts & Quick Analysis | Excel | 90 min | Yes | Partial | 2025 | `PTDSM04S2_2518_EXL105_S02: Pivot tables and charts` | Good | Verify publish flag; alt: Visualizing Data with Dashboards |
| — | 7 | Eval | E-W7 | Final Readiness Eval — Analytics placement bar | Evaluation | ~45–60 min | Yes | N/A | — | — | — | Mini case (Python or SQL + Excel) |

### QC for fallback plan

| QC item | Expected |
|--------|----------|
| SAL sessions (learning + IPS) | **13** |
| Learning sessions | **10** (C1, M1, **P×4**, **Q×2**, **X×2**) |
| Python / SQL / Excel learning | **4 / 2 / 2** |
| IPS sessions | **3** |
| IPS placement rule | After learning #3, #6, #9 (P1 → IPS-1; P4 → IPS-2; X1 → IPS-3) |
| Weekly evals | **E-W1 … E-W7** (end of each week) |
| Session timing | Live connect 8:00–8:20 (previous doubts + quick summary), SAL 8:30–10:00 |

**Detail copy:** [`V0/DifferentField-2xWeek-Placement-Plan.md`](./V0/DifferentField-2xWeek-Placement-Plan.md)

---

## 6.2 **R2** — Relevant / same field · 2 sessions/week (analytics → AI/ML)

**Who:** Already knows Python, SQL, analytics · wants **AI/ML engineer–fit** readiness.  
**Based on:** Project X AIML (Module 1 late + Module 2 core).  
**Skip:** Computer basics, Excel track, SQL intro, Python-from-zero, mini project.  
**Include:** **2 Python brush-ups** + NumPy / Pandas-for-ML / ML maths + classical ML · IPS · weekly evals only.

| # | Week | Type | Code | Session title | Pillar | Duration | Must complete | Reuse | Year | Existing SAL video (best match) | Fit | Project X link |
|---|------|------|------|---------------|--------|----------|--------------|--------|-------|--------------------------------|-----|----------------|
| 1 | 1 | Learn | PB1 | Python brush-up — Conditionals, Loops & Functions | Python brush-up | 90 min | Yes | Yes | 2026 | Prefer fresh dedicated SAL (scope of `FDN_Tech_2` + `FDN_Tech_4`) | Good | Weeks 1.1–1.2 refresh |
| 2 | 1 | Learn | PB2 | Python brush-up — Lists, Dicts & Problem Practice | Python brush-up | 90 min | Yes | Partial | 2025 | `PTDSM00S1_2504_S05: Data Structures in Python` | Partial | Weeks 2.1–2.2 refresh |
| — | 1 | Eval | E-W1 | Weekly Eval 1 — Python brush-up | Evaluation | ~30–45 min | Yes | N/A | — | — | — | — |
| 3 | 2 | Learn | N1 | NumPy — Arrays, Operations & Broadcasting | NumPy | 90 min | Yes | Yes | 2025 | `CC_BLOCK_2_S1:Applications of Numpy` / `Introduction to Numpy (PY205-L10)` | Good | Session 6.2 |
| 4 | 2 | IPS | IPS-1 | Interview PS 1 — Python / Logic for ML | Interview PS | 90 min | Yes | Partial | 2025 | Flowchart / PS SALs + ML-flavoured prompts | Partial | — |
| — | 2 | Eval | E-W2 | Weekly Eval 2 — NumPy + IPS-1 | Evaluation | ~30–45 min | Yes | N/A | — | — | — | — |
| 5 | 3 | Learn | PD1 | Pandas for ML — Model-ready Tables | Pandas | 90 min | Yes | Yes | 2025 | `Introduction to Pandas (PY205-L7)` / `CCP_BLOCK_1: Introduction to Pandas` | Good | Sessions 7.1–8.1 |
| 6 | 3 | Learn | SM1 | Stats for ML — Distributions & Probability Intuition | ML maths | 90 min | Yes | Yes | 2025 | `PBAU04-MU01_S02: Central Tendency…` + `Probability Distribution` (trim) | Good | Session 9.1 |
| — | 3 | Eval | E-W3 | Weekly Eval 3 — Pandas + Stats | Evaluation | ~30–45 min | Yes | N/A | — | — | — | — |
| 7 | 4 | Learn | SM2 | Vectors, Matrices & Gradient Descent Story | ML maths | 90 min | Yes | Partial | — | Prefer **fresh dedicated SAL** (dump has weak GD match) | Partial | Session 9.2 |
| 8 | 4 | IPS | IPS-2 | Interview PS 2 — Metrics & Data Judgment | Interview PS | 90 min | Yes | Partial | 2025 | Net-new interview set | Partial | — |
| — | 4 | Eval | E-W4 | Weekly Eval 4 — Vectors / GD intuition | Evaluation | ~30–45 min | Yes | N/A | — | — | — | — |
| 9 | 5 | Learn | ML1 | Linear + Logistic Regression | Classical ML | 90 min | Yes | Yes | 2025 | `PDSU06-MU02_S04: Encoding & Linear Regression` + `PDSU06-MU02_S01: Logistic Regression` (prefer one fresh combined SAL) | Good | Sessions 11.1–11.2 |
| 10 | 5 | Learn | ML2 | Metrics + Decision Trees & Overfitting | Classical ML | 90 min | Yes | Yes | 2025 | `PDSU06-MU02_S04: Decision Tree` (+ metrics wrap) | Good | Sessions 12.1–12.2 |
| — | 5 | Eval | E-W5 | Weekly Eval 5 — Regression / trees / metrics | Evaluation | ~30–45 min | Yes | N/A | — | — | — | — |
| 11 | 6 | Learn | ML3 | Ensembles + Pipelines & Cross-Validation | Classical ML | 90 min | Yes | Partial | 2025 | `PDSU06-MU02_S01: Random Forest` + fresh pipelines/CV segment | Partial | Sessions 13.1–13.2 |
| 12 | 6 | IPS | IPS-3 | Interview PS 3 — Which Model / Which Metric? | Interview PS | 90 min | Yes | Partial | — | Net-new ML interview prompts | Partial | — |
| — | 6 | Eval | E-W6 | Weekly Eval 6 — Ensembles / pipelines | Evaluation | ~30–45 min | Yes | N/A | — | — | — | — |
| 13 | 7 | Learn | ML4 | Feature Engineering + K-Means (light) | Classical ML | 90 min | Yes | Yes | 2025 | Prefer fresh FE wrap + `PDSU06-MU02_S02: K-Means Clustering` | Good | Sessions 10.2 + 14.2 |
| — | 7 | Eval | E-W7 | Final Readiness Eval — Classical ML bar | Evaluation | ~45–60 min | Yes | N/A | — | — | — | — |

### R2 mix (learning only)

| Pillar | Count |
|--------|-------|
| Python brush-up | **2** |
| NumPy + Pandas-for-ML | 2 |
| ML maths / stats | 2 |
| Classical ML | **4** |
| IPS | 3 |
| Weekly evals | 7 |
| Mini project | **None** |

### QC for R2

| QC item | Expected |
|--------|----------|
| SAL sessions (learning + IPS) | **13** |
| Learning / IPS / Eval | **10 / 3 / 7** |
| Python brush-up | **2** |
| IPS after learning # | **3, 6, 9** |
| Weekly evals | E-W1 … E-W7 |
| Mini project | **No** |

**Detail copy:** [`V0/RelevantField-2xWeek-Placement-Plan.md`](./V0/RelevantField-2xWeek-Placement-Plan.md)

### QC results (re-run)

| Plan | Learn | IPS | Eval | Core mix | IPS after | Verdict |
|------|-------|-----|------|----------|-----------|---------|
| S3/D3 · 3/week (§6) | 15 | 4 | 7 | 7P / 3SQL / 2Excel (+ Cap) | 3,6,9,12 | **PASS** |
| **D2** · 2/week (§6.1) | 10 | 3 | 7 | **4P / 2SQL / 2Excel** | 3,6,9 | **PASS** |
| **R2** · 2/week (§6.2) | 10 | 3 | 7 | **2 Python brush-up + ML bridge** | 3,6,9 | **PASS** |

**2026 Python spine:** `FDN_Tech_1` → `FDN_Tech_2` → `FDN_Tech_4`  
**2025 Analytics spine:** Arithmetic Essentials → SQL Aggregations/Joins → Functions in Excel  
**R2 ML spine (Project X):** 6.2 NumPy → 7–8 Pandas → 9.x maths → 11–14 classical ML  

*S3/D3 detail:* [`V0/Student-OtherField-Placement-Plan.md`](./V0/Student-OtherField-Placement-Plan.md)  
*D2 detail:* [`V0/DifferentField-2xWeek-Placement-Plan.md`](./V0/DifferentField-2xWeek-Placement-Plan.md)  
*R2 detail:* [`V0/RelevantField-2xWeek-Placement-Plan.md`](./V0/RelevantField-2xWeek-Placement-Plan.md)

---

## 7. Status

| Item | Status |
|------|--------|
| Problem & solution framing | Defined (initial plan) |
| Advantages | Added |
| Working style + pledge + timing | Defined (initial plan) |
| Personas & cases | S3, D3, D2, **R2** |
| Execution order | **Students first**, then Other field, then Relevant field |
| Session + reuse tables | §6 S3/D3 · §6.1 D2 · **§6.2 R2** |
| Fresh dedicated 90-min SALs | Preferred (to produce) |
| Eval question banks | Pending |
| Latest QC | **PASS** — S3/D3 + D2 + R2 |

---

*Report V0*
