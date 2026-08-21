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
6. Else → **Other**

IIMSDM is Non-tech (DM is checked before SD). PMAI is Non-tech (PM, not AIML). AAIPX sits in Analytics (AAI). GAIPX sits in GenAI.

### Share of book, then % of that domain in each window

Each domain row’s five buckets add to 100%.

| Domain | Share of book | Students | Batches | &lt;30 days | 30–60 days | 60–90 days | 90+ days | After start |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| AIML | 44.6% | 12,283 | 34 | 29.1% | 32.0% | 17.8% | 12.9% | 8.2% |
| Analytics | 14.2% | 3,928 | 30 | 26.3% | 29.4% | 15.6% | 22.9% | 5.8% |
| Non-tech | 13.6% | 3,747 | 36 | 37.7% | 24.1% | 11.6% | 10.4% | 16.3% |
| SDAI | 6.8% | 1,872 | 18 | 45.5% | 41.1% | 5.7% | 3.2% | 4.6% |
| GenAI | 2.0% | 550 | 9 | 40.4% | 23.6% | 24.9% | 10.5% | 0.5% |
| Other | 18.8% | 5,190 | 26 | 18.8% | 20.5% | 7.2% | 8.5% | 44.9% |
| **All** | **100%** | **27,570** | **153** | **29.3%** | **28.8%** | **14.0%** | **12.4%** | **15.5%** |

### Counts

| Domain | Students | &lt;30 days | 30–60 days | 60–90 days | 90+ days | After start |
|---|---:|---:|---:|---:|---:|---:|
| AIML | 12,283 | 3,573 | 3,929 | 2,188 | 1,583 | 1,010 |
| Analytics | 3,928 | 1,033 | 1,153 | 614 | 901 | 227 |
| Non-tech | 3,747 | 1,412 | 903 | 434 | 388 | 610 |
| SDAI | 1,872 | 851 | 770 | 106 | 59 | 86 |
| GenAI | 550 | 222 | 130 | 137 | 58 | 3 |
| Other | 5,190 | 978 | 1,066 | 374 | 442 | 2,330 |
| **All** | **27,570** | **8,069** | **7,951** | **3,853** | **3,431** | **4,266** |

SDAI is 86.6% last-60-days. Non-tech has the strongest last-month rush (37.7%). Analytics has the most 90+ early book among named domains (22.9%). Other’s 44.9% after-start is driven by older IITGDS / PRAI batches.

**Other (26 batches, 5,190 students)** is still unmatched: mainly DSAI / IITGDS, IITRPRAI, IITMDCSE, FTAI, plus small AIDA / AIO / AAGI / AIAG / FT / EDGE / FITT codes.
