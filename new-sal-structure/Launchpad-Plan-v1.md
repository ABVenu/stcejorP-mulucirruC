# Course Launchpad — Plan v1.1 (AIML)

**Goal:** Use the enrollment → start gap (~45 days) so learners enter **Project X – AIML** closer to a shared baseline — especially **computer literacy, programming, and maths intuition for AI/ML**.

**Fixed constraints**
- Window: **45 days** (~6.5 weeks)
- Session length: **1.5 hours**
- Launchpad ≠ Module 1 clone (no full SQL joins / Pandas pipelines / ML model training)

---

## 1. Locked cases (v1) — only 3

| Case ID | Persona | Sessions / week | Total sessions | Total hours |
|--------|---------|-----------------|----------------|-------------|
| **S3** | Student | **3** | **19** | 28.5 |
| **R2** | Working — **relevant** field | **2** | **13** | 19.5 |
| **D3** | Working — **different** field | **3** | **19** | 28.5 |

Notes:
- **S3 and D3 share the same cadence** (3×/week, 19 sessions). Content order/emphasis differs; many blocks are reused.
- **R2** is shorter → compress computer basics; keep Python + maths essentials + AI map.

**Persona intent**
- **S3 Student:** Build computer habits + programming + maths from the ground up.
- **R2 Relevant:** Already in a related domain → refresh programming, fill maths/AI gaps, skip “what is a file/folder” depth.
- **D3 Different field:** Career switcher → same hour budget as student; add early career/domain framing; still teach computer + programming + maths foundations.

---

## 2. Foundational pillars (what we make them learn)

These are the foundations that make starting the AIML course smoother. Everything in Launchpad maps to one of these.

### Pillar A — Computer & digital literacy
So Day 1 is not lost on tooling.

| Topic | Why it matters for AIML |
|-------|-------------------------|
| Files, folders, downloads, browser tabs | Submitting work, datasets, notebooks |
| Google account + **Google Colab** | Course runs on Colab from Session 1.1 |
| Running a notebook cell, reading red errors | Debugging without panic |
| Copy/paste, screenshots, asking for help with context | Mentorship efficiency |
| Light: what is terminal / VS Code (optional awareness) | Later Git / local work |

### Pillar B — Programming & computational thinking
So Weeks 1–2 Python sessions feel familiar, not foreign.

| Topic | Why it matters for AIML |
|-------|-------------------------|
| Problem → steps → pseudo-code | Every coding + ML pipeline problem |
| Variables, types, expressions | Session 1.1 |
| Conditionals & logic | Session 1.1 |
| Loops | Session 1.2 |
| Functions | Session 1.2 |
| Strings, lists, dictionaries | Sessions 2.1–2.2 |
| Trace code + fix simple bugs | Survival skill for whole course |
| (Light) Git/GitHub idea: save history of work | Session 6.1 later |

### Pillar C — Maths & quantitative intuition for AI/ML
So Module 1 stats/linear-algebra sessions are not the first time they see these ideas.  
**Keep it intuition + tiny calculations — not a full maths degree.**

Aligned to current curriculum (esp. Weeks 9–10 and ML later):

| Topic | Prepares for | Launchpad depth |
|-------|--------------|-----------------|
| Numbers, %, ratios, reading a table/chart | Data literacy, business metrics | Required |
| Mean / median / mode, spread (range, “how varied”) | Descriptive stats (9.1) | Required |
| What a **function** is; reading a simple graph; slope intuition | Masterclass + models as functions | Required |
| Sets, counting (“how many ways”) — light | Combinatorics masterclass | Light |
| Probability in plain language (chance, events) | 9.1 Probability | Required (intuition) |
| “Is this difference real?” intuition (no formal t-tests) | 10.1 Hypothesis testing | Light |
| **Vectors** as lists of numbers; **matrix** as table of numbers | 9.2 Vectors & matrices | Required (intuition + tiny examples) |
| Multiply/scale vectors (very small examples) | Model “weighing” features | Light |
| Derivative = slope; **gradient descent** = walk downhill to improve | 9.2 + every ML model | Required (story + picture, almost no heavy calculus) |

**Explicitly out of Launchpad maths:** full calculus proofs, eigendecomposition, formal hypothesis testing in Python, information theory, etc.

### Pillar D — Data & AI orientation (thin layer)
So they know *why* they’re learning A–C.

| Topic | Why |
|-------|-----|
| What is data (rows/columns/CSV) | On-ramp to SQL/Pandas |
| SQL SELECT/WHERE at hello-world level (if hours allow) | Week 3 less scary |
| What is AI vs ML vs GenAI — map of *this* course | Motivation + expectations |
| Career/role map (especially D3) | Reduce early dropout |

---

## 3. Content catalogue (1.5h blocks)

| Code | Block | Pillar |
|------|-------|--------|
| **O1** | Launchpad orientation + how to learn | — |
| **O2** | Computer basics + Colab setup | A |
| **O3** | Working in notebooks: run, error messages, save, share | A |
| **T1** | Computational thinking + pseudo-code | B |
| **T2** | Logic, tracing, debugging mindset | B |
| **P1** | Python: variables, types, expressions, I/O | B |
| **P2** | Python: conditionals | B |
| **P3** | Python: loops | B |
| **P4** | Python: functions | B |
| **P5** | Python: strings | B |
| **P6** | Python: lists | B |
| **P7** | Python: dictionaries | B |
| **P8** | Python problem lab | B |
| **P9** | Python stretch mini-project (Colab) | B |
| **G1** | Git & GitHub basics (light) | B |
| **D1** | Data literacy: tables, CSV, “what is a dataset” | D |
| **Q1** | SQL intro: SELECT, WHERE, ORDER BY, LIMIT | D |
| **M1** | Numbers for data: %, averages, reading charts | C |
| **M2** | Descriptive stats intuition (centre & spread) | C |
| **M3** | Functions & graphs + slope intuition | C |
| **M4** | Probability intuition (events, chance) | C |
| **M5** | Vectors & matrices as data (tiny examples) | C |
| **M6** | Gradient descent story (downhill = learning) | C |
| **A1** | AI / ML / Data Science + map of this course | D |
| **A2** | GenAI literacy (what LLMs are / aren’t) | D |
| **C1** | Career map for switchers / students | D |

---

## 4. Sequences per locked case

### S3 — Student · 3/week · 19 sessions

**Focus:** Computer → Thinking → Python spine → Maths for AI/ML → light data/AI.

| # | Block | Focus |
|---|-------|--------|
| 1 | O1 | Orientation |
| 2 | O2 | Computer + Colab |
| 3 | O3 | Notebook fluency |
| 4 | T1 | Thinking |
| 5 | T2 | Debugging |
| 6 | P1 | Python |
| 7 | P2 | Python |
| 8 | P3 | Python |
| 9 | P4 | Python |
| 10 | P5 | Python |
| 11 | P6 | Python |
| 12 | P7 | Python |
| 13 | P8 | Python lab |
| 14 | M1 | Maths |
| 15 | M2 | Maths |
| 16 | M3 | Maths |
| 17 | M4 | Maths |
| 18 | M5 + M6 *(combined denser session: vectors + GD story)* | Maths for ML |
| 19 | A1 | Course/AI map |

**Must-complete:** O2–O3, P1–P8, M1–M3 + checkpoint ≥70%.

*If needed later:* swap A1 for P9, or add Q1 by compressing M5+M6 differently — not for v1 lock.

---

### R2 — Relevant field · 2/week · 13 sessions

**Focus:** Skip deep computer literacy; Python refresh + maths for ML + AI map.

| # | Block | Focus |
|---|-------|--------|
| 1 | O1 | Goals + self-check |
| 2 | O3 | Colab/notebook quick (assume computer OK) |
| 3 | P2+P3 compressed | Python refresh |
| 4 | P4+P5 compressed | Python refresh |
| 5 | P6 | Lists |
| 6 | P7 | Dicts |
| 7 | P8 | Problem lab |
| 8 | M2 | Stats intuition |
| 9 | M3 | Functions & graphs |
| 10 | M4 | Probability intuition |
| 11 | M5 | Vectors/matrices |
| 12 | M6 | Gradient descent story |
| 13 | A1 | Course/AI map |

**Must-complete:** P refresh through P8, M2–M6, checkpoint ≥70%.

---

### D3 — Different field · 3/week · 19 sessions  
*(same length as S3; different emphasis)*

**Focus:** Motivation early → computer → Python (same spine as student) → maths → domain map.  
**Collides with S3 only on schedule**, not identical content order.

| # | Block | vs S3 |
|---|-------|--------|
| 1 | O1 | Same |
| 2 | **C1** | Career framing early (S3 puts AI map at end) |
| 3 | O2 | Same |
| 4 | O3 | Same |
| 5 | T1 | Same (drop separate T2 to free a slot — fold debug tips into P labs) |
| 6–13 | P1 → P8 | Same Python spine |
| 14 | M1 | Same |
| 15 | M2 | Same |
| 16 | M3 | Same |
| 17 | M4 | Same |
| 18 | M5 + M6 combined | Same |
| 19 | **A1** | Domain “what am I entering” |

**Must-complete:** Same as S3 (computer + Python + core maths).

---

## 5. S3 vs D3 — what actually differs

| | S3 Student | D3 Different field |
|--|------------|-------------------|
| Sessions/week | 3 | 3 (same) |
| Computer basics | Yes | Yes |
| Python spine P1–P8 | Yes | Yes |
| Maths M1–M6 | Yes | Yes |
| Early career framing (C1) | No | **Yes (session 2)** |
| Separate debug session (T2) | Yes | Folded into Python labs |
| Tone | “Learn to learn + code” | “You’re switching — here’s why + foundations” |

Shared recorded blocks can be ~80% identical; wrap with persona-specific intro outros where needed.

---

## 6. Readiness bar

| Status | Meaning |
|--------|---------|
| **Ready** | Must-blocks done + checkpoint ≥70% |
| **Almost** | 50–69% or missing 1–2 must-blocks |
| **Needs support** | Inactive / below 50% |

**Checkpoint (all 3 cases):** Colab runs · variables · conditionals · loops · functions · lists · one maths item (mean or % or “what is a vector”).

---

## 7. Decisions locked in this version

1. Only **S3, R2, D3**.  
2. Foundations = **Computer + Programming + Maths for AI/ML** (+ thin AI orientation).  
3. Maths is **intuition for stats / functions / probability / vectors / gradient descent**, not full Module 1 maths replacement.  
4. S3 and D3 share cadence and most blocks; D3 adds early career framing.

---

## 8. Next steps

1. Approve this 3-case + pillars list.  
2. Write **LOs (3–5 bullets)** per block, especially **M1–M6**.  
3. Map existing SAL/recorded dump → which blocks already exist.  
4. Intake form v1: persona only (sessions/week implied by persona).
