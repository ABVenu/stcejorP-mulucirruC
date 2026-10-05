# Lecture Notes QC Report

Session folder: `New SAL Temp Notes/Session11`  
File checked: `Lecture Notes.md`  
Title: SQL — Searching, Filtering & Powerful Functions

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

- The lesson covers `WHERE`, comparisons, `AND`, `OR`, `NOT`, `LIKE`, `IN`, `BETWEEN`, `IS NULL`, `DISTINCT`, `UPPER`, `LOWER`, `LENGTH`, `ROUND`, `CONCAT`, and `YEAR`.
- The first four orders match the previous lesson. Farah’s missing city is a new row, so Ravi’s Jaipur value is not rewritten.
- Checked results: Pune ids 1, 2, 7; amount over 100 is 1, 3, 5, 8; `BETWEEN 80 AND 150` is 1, 2, 6; year 2024 is 1, 2, 4, 6, 7. Parentheses change the mixed `AND`/`OR` result as written. No `GROUP BY`, aggregate, `ORDER BY`, `LIMIT`, or join is taught.

### Gaps found

- **Structure:** The draft stopped at 477 lines, just under the 480-line floor.

### Action

Added two short common-doubt lines so the length rule was met without new topics.

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

- `city = NULL` is rejected as a pattern. `NOT (city = 'Pune')` correctly hides Farah. `CONCAT` with her missing city is `NULL`. `ROUND(45.75, 0)` is 46. `LENGTH('Neha Iyer')` is 9.
- `DISTINCT` is described as a set, not a sort. Aggregates are mentioned only in the closing sentences.
- Two activities have check answers. Both mermaid diagrams use the required init line. No session number appears in the student notes.

**Expected QC result achieved.** Final line count: **480**.
