# Enrollment timing vs batch start

**Source:** [`query_result_2026-08-21T06_54_20.438329Z.csv`](query_result_2026-08-21T06_54_20.438329Z.csv)  
**Query date:** 21 Aug 2026  
**Coverage:** 27,570 students across 153 batches (150 with at least one student). Five timing buckets are mutually exclusive and sum to the total with zero remainder.

Timing is days between **enrollment / payment** and **that batch’s start date**, not a calendar admission month.

**Sep–Nov 2026 batches are included.** Those courses start in the next ~90 days, so they are the live 60–90 and 90+ pipeline. They are not dropped from the overall.

---

## Overall

| When they enrolled | Students | Share |
|---|---:|---:|
| Last 30 days before start | 8,069 | 29.3% |
| 30–60 days before start | 7,951 | 28.8% |
| 60–90 days before start | 3,853 | 14.0% |
| 90+ days before start | 3,431 | 12.4% |
| Paid after the batch already started | 4,266 | 15.5% |
| **All** | **27,570** | **100%** |

58.1% enrolled in the last 60 days before start. 26.4% enrolled 60+ days early. 15.5% paid after start.

### 90-day-ahead book (Sep–Nov 2026)

Included in the 27,570. Query date 21 Aug 2026, so these courses have not started yet: **1,982 students** across 27 batches (25 with headcount). Only 17 paid after start (0.9%).

| Batch start | Days out from 21 Aug | Students | Batches | &lt;30 days | 30–60 days | 60–90 days | 90+ days | After start |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Sep 2026 | 11–40 days | 1,293 | 8 | 161 (12.5%) | 538 (41.6%) | 477 (36.9%) | 111 (8.6%) | 6 |
| Oct 2026 | 41–71 days | 581 | 13 | 9 (1.5%) | 112 (19.3%) | 439 (75.6%) | 11 (1.9%) | 10 |
| Nov 2026 | 72–101 days | 108 | 6 | 0 (0.0%) | 1 (0.9%) | 13 (12.0%) | 93 (86.1%) | 1 |
| **Sep–Nov** | | **1,982** | **27** | **170 (8.6%)** | **651 (32.8%)** | **929 (46.9%)** | **215 (10.8%)** | **17 (0.9%)** |

Sep fills the 30–60 window, Oct the 60–90 window, Nov the 90+ window. That is how 90-day-ahead data shows up.

---

## Domain-wise split

**Rules (in order):**

1. Name contains **AIML**, or a standalone **ML** token → **AIML**
2. **GenAI** or **GAIPX** → **GenAI**
3. **BSAI** or **CYB**, or **SD / SE / AS** → **SDAI**
4. **PM** or **DM** in a name segment → **Non-tech**
5. **AAI**, **BA**, or **DA** → **Analytics**
6. Leftover codes are folded into the same five domains (no Other row): **DSAI / GDS / DSR / PRAI / FTAI / AIDA / AIO / AAGI / AIAG** → AIML; **CSE / FT / FTDE / EDGE / FITT / IITMDES** → SDAI; **FA / IMTG** → Non-tech.

IIMSDM is Non-tech (DM is checked before SD). PMAI is Non-tech (PM, not AIML). AAIPX sits in Analytics (AAI). GAIPX sits in GenAI.

### Share of book, then % of that domain in each window

Each domain row’s five buckets add to 100%. Every batch sits in one of these five domains.

| Domain | Share of book | Students | Batches | &lt;30 days | 30–60 days | 60–90 days | 90+ days | After start |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| AIML | 62.6% | 17,272 | 52 | 26.3% | 28.8% | 14.8% | 11.6% | 18.5% |
| Analytics | 14.2% | 3,928 | 30 | 26.3% | 29.4% | 15.6% | 22.9% | 5.8% |
| Non-tech | 13.6% | 3,752 | 38 | 37.6% | 24.1% | 11.6% | 10.3% | 16.3% |
| SDAI | 7.5% | 2,068 | 24 | 41.9% | 38.2% | 5.2% | 3.5% | 11.2% |
| GenAI | 2.0% | 550 | 9 | 40.4% | 23.6% | 24.9% | 10.5% | 0.5% |
| **All** | **100%** | **27,570** | **153** | **29.3%** | **28.8%** | **14.0%** | **12.4%** | **15.5%** |

### Counts

| Domain | Students | &lt;30 days | 30–60 days | 60–90 days | 90+ days | After start |
|---|---:|---:|---:|---:|---:|---:|
| AIML | 17,272 | 4,535 | 4,973 | 2,558 | 2,011 | 3,195 |
| Analytics | 3,928 | 1,033 | 1,153 | 614 | 901 | 227 |
| Non-tech | 3,752 | 1,412 | 905 | 437 | 388 | 610 |
| SDAI | 2,068 | 867 | 790 | 107 | 73 | 231 |
| GenAI | 550 | 222 | 130 | 137 | 58 | 3 |
| **All** | **27,570** | **8,069** | **7,951** | **3,853** | **3,431** | **4,266** |

AIML after-start rises to 18.5% once IITGDS / PRAI are included (those older batches paid after start). SDAI is 80.1% last-60-days. Non-tech still has the strongest last-month rush (37.6%). Analytics has the most 90+ early book (22.9%).

### What was in Other (26 batches, 5,190 students = 18.8%)

That 18.8% was **26 batches**. They are now assigned as follows.

**→ AIML (18 batches, 4,989 students)**

| Batch | Students | Code |
|---|---:|---|
| IITGDS-250120 | 1,225 | GDS |
| IITREICT-DSAI-2603 | 944 | DSAI |
| IITRPRAI-2501 | 768 | PRAI |
| IITREICT-DSAI-2605 | 618 | DSAI |
| IITGDS-2501 | 423 | GDS |
| IITMD-DSAI-2512 | 404 | DSAI |
| IITREICT-DSAI-EN-III-2609 | 270 | DSAI |
| IITGDS-2505 | 149 | GDS |
| BITSoM-FTAI-2601 | 95 | FTAI |
| IIMT-FTAI-2602 | 37 | FTAI |
| IITMDDSAI-2505 | 24 | DSAI |
| IITP-AIDA-TA-III-2611 | 14 | AIDA |
| IITMD-DSR-EN-I-2605 | 7 | DSR |
| IITRPRAI-2409 | 5 | PRAI |
| IITP-AIO-EN-I-2610 | 4 | AIO |
| IITP-AAGI-EN-I-2611 | 1 | AAGI |
| IITP-AIAG-TA-I-2610 | 1 | AIAG |
| IITP-AIDA-EN-III-2610 | 0 | AIDA |

**→ SDAI (6 batches, 196 students)**

| Batch | Students | Code |
|---|---:|---|
| IITMDCSE-2501 | 152 | CSE |
| FITT-EN-2604 | 24 | FITT |
| IITMDES-2503 | 11 | DES |
| PWC-FT-2604 | 5 | FT |
| IIMSI-EDGE-2511 | 3 | EDGE |
| IITB-FTDE-EN-I-2609 | 1 | FTDE |

**→ Non-tech (2 batches, 5 students)**

| Batch | Students | Code |
|---|---:|---|
| SPJIMR-FA-EN-I-2609 | 4 | FA |
| IMTG-M-EN-I-2607 | 1 | IMTG |

**Other remaining: 0 batches, 0 students.**
