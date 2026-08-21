# Foundation unlock cadence — typical demonstration

**What this is:** a dated walkthrough of *how* the adopted 15-week SAL libraries are released, not a new content plan.

**Adopted libraries (30 sessions each):**

| Track | Who | Source |
|-------|-----|--------|
| **Beginner** | Students + working professionals from a different field | [`Students-2xWeek-15Week-Plan.csv`](../Students-2xWeek-15Week/Students-2xWeek-15Week-Plan.csv) |
| **Expert** | Working professionals in the same / relevant field | [`Working-SameField-2xWeek-15Week-Plan.csv`](../Working-SameField-2xWeek-15Week/Working-SameField-2xWeek-15Week-Plan.csv) |

Session order never changes. Only the **unlock speed** changes with the learner’s interest.

---

## Unlock rules

1. At enrollment the learner picks how many SAL sessions they can **watch and work on** each week: **1, 2, or 3**. Floor is 1; ceiling is 3.
2. Sessions unlock **in plan order**. No skipping, no dumping the library.
3. **Till course start:** every Sunday, unlock the next **N** sessions (N = their interest). They have that week to watch and practise.
4. **Once the course starts:** leftover sessions unlock at a common catch-up of **2 sessions every Sunday for the next 1 month** (4 Sundays).
5. If anything is still locked after that month, keep **2 per Sunday** until the 30-session library is open. That is the same weekly volume as the adopted 2×/week plans.

Suggested watch days inside the week (so unlock ≠ binge):

| Interest | Watch days |
|----------|------------|
| 1 / week | Sunday |
| 2 / week | Sunday + Wednesday |
| 3 / week | Sunday + Tuesday + Thursday |

---

## Typical demonstration calendar

Illustrative dates only — same mechanics apply to any enrollment → start gap.

| Milestone | Date |
|-----------|------|
| Enrollment / first unlock Sunday | **Sun 6 Sep 2026** |
| Pre-course unlock Sundays | 6 Sep, 13 Sep, 20 Sep, 27 Sep, 4 Oct, 11 Oct (**6 weeks**) |
| **Course start** | **Mon 19 Oct 2026** (~43 days, same shape as the ~45-day wait window) |
| Month-1 catch-up Sundays | 25 Oct, 1 Nov, 8 Nov, 15 Nov (**4 Sundays × 2 = 8 sessions**) |

Late joiners get fewer pre-course Sundays at the same N; they simply carry more into the month-1 drip.

```
Enrollment ── N / week (1–3) ── Course start ── 2 / Sunday for 1 month ── 2 / Sunday until 30
   Sun 6 Sep                    Mon 19 Oct         25 Oct → 15 Nov
```

---

## What each interest level has by Day 1

Same 6 pre-course Sundays. Different N.

| Interest | Unlocked before Day 1 | Beginner last session | Expert last session |
|----------|----------------------:|-----------------------|---------------------|
| **1 / week** | 6 of 30 | 3.2 Python — Advanced functions | 3.2 Python mid — Code modularization |
| **2 / week** (typical) | 12 of 30 | 6.2 SQL — Joins | 6.2 Excel — Pivot tables and charts |
| **3 / week** | 18 of 30 | 9.2 Excel — End-to-end dashboard | 9.2 Maths — Arithmetic essentials |

After the 1-month catch-up (+8 sessions):

| Interest | Total by 15 Nov | Leftover | Extra Sundays at 2/week to finish |
|----------|----------------:|---------:|----------------------------------:|
| 1 / week | 14 | 16 | 8 (library open **10 Jan 2027**) |
| 2 / week | 20 | 10 | 5 (library open **20 Dec 2026**) |
| 3 / week | 26 | 4 | 2 (library open **29 Nov 2026**) |

Full numbers: [`Unlock-Summary.csv`](Unlock-Summary.csv).

---

## Typical plan to show the team — **2 sessions / week**

This is the default demo. It matches the adopted `2xWeek-15Week` libraries: 2 unlocks every Sunday, work Sun + Wed.

### Beginner · 2 / week

**By course start (19 Oct):** Python 8 + SQL 4 (through Joins). Live course can treat early Python/SQL as revision.

**By end of month 1 (15 Nov):** SQL finished + Excel 4 + Maths 2.

| Unlock Sunday | Watch | # | Session | Domain | Phase |
|---------------|-------|---|---------|--------|-------|
| 6 Sep | Sun | 1.1 | Python — Introduction to programming + Python basics | Python | Pre-course |
| 6 Sep | Wed | 1.2 | Python — Operators and conditional statements | Python | Pre-course |
| 13 Sep | Sun | 2.1 | Python — Control flow: conditionals and loops | Python | Pre-course |
| 13 Sep | Wed | 2.2 | Python — break, continue, and nested loops | Python | Pre-course |
| 20 Sep | Sun | 3.1 | Python — The power of functions | Python | Pre-course |
| 20 Sep | Wed | 3.2 | Python — Advanced functions | Python | Pre-course |
| 27 Sep | Sun | 4.1 | Python — Data structures (lists, strings, sets, tuples, dicts) | Python | Pre-course |
| 27 Sep | Wed | 4.2 | Python — Classes, objects and constructors (OOP) | Python | Pre-course |
| 4 Oct | Sun | 5.1 | SQL — Introduction to SQL and databases | SQL | Pre-course |
| 4 Oct | Wed | 5.2 | SQL — Searching, filtering & power functions | SQL | Pre-course |
| 11 Oct | Sun | 6.1 | SQL — Aggregations: GROUP BY, HAVING, ORDER BY, LIMIT | SQL | Pre-course |
| 11 Oct | Wed | 6.2 | SQL — Joins: connecting relational tables | SQL | Pre-course |
| **19 Oct** | — | — | **Course starts** | — | — |
| 25 Oct | Sun | 7.1 | SQL — Subqueries | SQL | Month 1 |
| 25 Oct | Wed | 7.2 | SQL — Window functions: ranking | SQL | Month 1 |
| 1 Nov | Sun | 8.1 | Excel — Functions in Excel | Excel | Month 1 |
| 1 Nov | Wed | 8.2 | Excel — VLOOKUP, XLOOKUP & HLOOKUP | Excel | Month 1 |
| 8 Nov | Sun | 9.1 | Excel — Pivot tables and charts | Excel | Month 1 |
| 8 Nov | Wed | 9.2 | Excel — End-to-end dashboard | Excel | Month 1 |
| 15 Nov | Sun | 10.1 | Maths — Arithmetic essentials | Maths | Month 1 |
| 15 Nov | Wed | 10.2 | Maths — Central tendency and dispersion | Maths | Month 1 |
| 22 Nov | Sun | 11.1 | NumPy — Arrays, operations & applications | Analytics | After month 1 |
| 22 Nov | Wed | 11.2 | Pandas — Introduction (Series & DataFrames) | Analytics | After month 1 |
| 29 Nov | Sun | 12.1 | Pandas — Grouping, filtering, and merging | Analytics | After month 1 |
| 29 Nov | Wed | 12.2 | Data Visualization — Matplotlib & Seaborn | Analytics | After month 1 |
| 6 Dec | Sun | 13.1 | ML — Introduction to machine learning | ML | After month 1 |
| 6 Dec | Wed | 13.2 | ML — Encoding & linear regression | ML | After month 1 |
| 13 Dec | Sun | 14.1 | ML — Logistic regression | ML | After month 1 |
| 13 Dec | Wed | 14.2 | ML — Decision trees | ML | After month 1 |
| 20 Dec | Sun | 15.1 | ML — Random forest | ML | After month 1 |
| 20 Dec | Wed | 15.2 | ML — K-Means clustering | ML | After month 1 |

### Expert · 2 / week

**By course start (19 Oct):** mid-Python 6 + Analytics 4 + Excel 2 (through Pivot). Same-field learners skip beginner Python/SQL and land on tools they will actually use in week 1.

**By end of month 1 (15 Nov):** Excel dashboard + both EDA case studies + Maths through central tendency.

| Unlock Sunday | Watch | # | Session | Domain | Phase |
|---------------|-------|---|---------|--------|-------|
| 6 Sep | Sun | 1.1 | Python mid — The power of functions | Python | Pre-course |
| 6 Sep | Wed | 1.2 | Python mid — Advanced functions | Python | Pre-course |
| 13 Sep | Sun | 2.1 | Python mid — Data structures | Python | Pre-course |
| 13 Sep | Wed | 2.2 | Python mid — OOP: classes, objects, constructors | Python | Pre-course |
| 20 Sep | Sun | 3.1 | Python mid — Regex, exceptions & Python in data science | Python | Pre-course |
| 20 Sep | Wed | 3.2 | Python mid — Code modularization | Python | Pre-course |
| 27 Sep | Sun | 4.1 | NumPy — Arrays, operations & applications | Analytics | Pre-course |
| 27 Sep | Wed | 4.2 | Pandas — Introduction (Series & DataFrames) | Analytics | Pre-course |
| 4 Oct | Sun | 5.1 | Pandas — Grouping, filtering, and merging | Analytics | Pre-course |
| 4 Oct | Wed | 5.2 | Data Visualization — Matplotlib & Seaborn | Analytics | Pre-course |
| 11 Oct | Sun | 6.1 | Excel — VLOOKUP, XLOOKUP & HLOOKUP | Excel | Pre-course |
| 11 Oct | Wed | 6.2 | Excel — Pivot tables and charts | Excel | Pre-course |
| **19 Oct** | — | — | **Course starts** | — | — |
| 25 Oct | Sun | 7.1 | Excel — End-to-end dashboard | Excel | Month 1 |
| 25 Oct | Wed | 7.2 | EDA Case Study 1 — Beginning | Analytics | Month 1 |
| 1 Nov | Sun | 8.1 | EDA Case Study 1 — Conclusion | Analytics | Month 1 |
| 1 Nov | Wed | 8.2 | EDA Case Study 2 — Beginning | Analytics | Month 1 |
| 8 Nov | Sun | 9.1 | EDA Case Study 2 — Conclusion | Analytics | Month 1 |
| 8 Nov | Wed | 9.2 | Maths — Arithmetic essentials | Maths | Month 1 |
| 15 Nov | Sun | 10.1 | Maths — Statistics in data science | Maths | Month 1 |
| 15 Nov | Wed | 10.2 | Maths — Central tendency and dispersion | Maths | Month 1 |
| 22 Nov | Sun | 11.1 | Maths — Probability distributions | Maths | After month 1 |
| 22 Nov | Wed | 11.2 | Maths — Hypothesis testing | Maths | After month 1 |
| 29 Nov | Sun | 12.1 | Maths — Inferential statistics using Python | Maths | After month 1 |
| 29 Nov | Wed | 12.2 | ML — Introduction to machine learning | ML | After month 1 |
| 6 Dec | Sun | 13.1 | ML — Encoding & linear regression | ML | After month 1 |
| 6 Dec | Wed | 13.2 | ML — Logistic regression | ML | After month 1 |
| 13 Dec | Sun | 14.1 | ML — Decision trees | ML | After month 1 |
| 13 Dec | Wed | 14.2 | ML — Random forest | ML | After month 1 |
| 20 Dec | Sun | 15.1 | ML — K-Means clustering | ML | After month 1 |
| 20 Dec | Wed | 15.2 | ML — KNN & Naive Bayes | ML | After month 1 |

---

## Same mechanism at 1 / week and 3 / week

Use these when someone asks “what if they can only do one?” or “what if they want three?”

### Beginner reach

| When | 1 / week | 2 / week | 3 / week |
|------|----------|----------|----------|
| Day 1 | Through **advanced functions** (Python only) | Through **SQL joins** | Through **Excel dashboard** |
| End of month 1 | Full **SQL** (window functions) | **Excel + Maths** | **ML encoding & linear regression** |

### Expert reach

| When | 1 / week | 2 / week | 3 / week |
|------|----------|----------|----------|
| Day 1 | Through **code modularization** (mid-Python) | Through **Excel pivot** | Through **arithmetic essentials** |
| End of month 1 | **EDA case study 1 beginning** | **Maths central tendency** | **Logistic regression** |

Session-level calendars for all three speeds:

- [`Beginner-Unlock-Calendar.csv`](Beginner-Unlock-Calendar.csv)
- [`Expert-Unlock-Calendar.csv`](Expert-Unlock-Calendar.csv)

---

## How to explain it in one minute

1. Learner is tagged **Beginner** or **Expert** from persona.
2. They say how many sessions they can actually do each week (1–3).
3. LMS unlocks that many, in order, every Sunday until Day 1.
4. From the first Sunday after course start, everyone gets **2 remaining sessions each Sunday for one month**.
5. Anything still locked keeps dripping at 2 / Sunday so the full 15-week library opens without a dump.

**Not in this demo:** live-connect / pledge / weekly eval (those sit in Report V0). This file is only the **content unlock clock**.

---

## Open product decision

After the 1-month catch-up, 1× learners still have 16 sessions locked and 2× learners have 10. This demo **continues 2 per Sunday** rather than unlocking the rest at once, so pacing stays honest. If product prefers a hard close (“everything open by 15 Nov”), that is a one-line change — it is not what this demonstration does.
