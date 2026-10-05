# Lecture Notes QC Report

Session folder: `New SAL Temp Notes/Session12`  
File checked: `Lecture Notes.md`  
Title: SQL — Aggregations: GROUP BY, HAVING, ORDER BY & LIMIT

---

## QC Iteration 1

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 5 |
| **Structural Adherence** | 4 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### What passed

- The lesson covers `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`, `GROUP BY`, `HAVING` versus `WHERE`, `ORDER BY ASC`/`DESC`, and `LIMIT`.
- Checked arithmetic: all amounts sum to 931.50; average is 116.4375; `COUNT(city)` is 7. City sums are Pune 260.50, Nashik 275.00, Jaipur 245.75, and the missing city 150.25. Those four sums add back to 931.50.
- Bills of at least 100 total 650.75. After `amount >= 80`, `HAVING COUNT(*) >= 2` leaves Pune 200.50 and Nashik 275.00. The top-three amounts are 200.00, 180.00, and 150.25. No join, subquery, window, or string-function chapter is included.

### Gaps found

- **Structure:** The first full draft was under 480 lines.

### Action

Added a paper-check section for the city totals and the descending order used by `LIMIT`. Rechecked every total after the addition.

---

## QC Iteration 2

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 5 |
| **Structural Adherence** | 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### Recheck notes

- Activity 2 is Nashik with total 275.00. `WHERE COUNT(*)` is marked invalid. `LIMIT` without `ORDER BY` is not treated as “the largest.”
- `WHERE` is only a short recall that it filters rows before grouping. Joins are named only in the closing sentences.
- Two activities have check answers. Both mermaid diagrams use the required init line. No session number appears in the student notes.

**Expected QC result achieved.** Final line count: **480**.
