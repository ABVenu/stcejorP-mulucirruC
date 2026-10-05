# QC Report — SQL — Window Functions: Ranking

## QC Pass 1

| Criterion | Result |
|---|---|
| **Content Coverage** | 5 / 5 |
| **Creativity** | 5 / 5 |
| **Structural Adherence** | 4 / 5 |
| **No Logical Mistakes** | False |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / Internal References in Student Notes** | True |

**Notes:** Ranking functions, OVER, PARTITION BY, and ties were present, but one paragraph said RANK and DENSE_RANK ignore a student-name tie-break and still share rank 1. That is wrong: if `ORDER BY marks DESC, student_name ASC` is inside OVER, the rows are not peers, so RANK and DENSE_RANK also return 1 then 2. The draft was also under 480 lines. No session number appeared in the student notes. LAG, LEAD, and running frames were not taught.

**Pass 1 outcome:** REVISE — correct the tie rule, then bring the notes into the required length.

---

## QC Pass 2

| Criterion | Result |
|---|---|
| **Content Coverage** | 5 / 5 |
| **Creativity** | 5 / 5 |
| **Structural Adherence** | 5 / 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / Internal References in Student Notes** | True |

**Notes:** Length is 490 lines. The tie rule now matches the window ORDER BY. Two mermaid diagrams use the required init line. Every SQL line has a `--` comment and a "How the code works" explanation. GROUP BY is one contrast: it collapses rows, and a window does not. The closing line points to an upcoming session on a visible grid, with no session number.

**Logic spot-checks:** With `PARTITION BY subject ORDER BY marks DESC` only, Maths 92, 92, 85, 78 gives RANK 1, 1, 3, 4 and DENSE_RANK 1, 1, 2, 3. Science 95, 88, 88, 70 gives RANK 1, 2, 2, 4 and DENSE_RANK 1, 2, 2, 3. ROW_NUMBER stays unique; which tied row gets the smaller number is not fixed. Marks 10, 10, 10, 7 give RANK 1, 1, 1, 4 and DENSE_RANK 1, 1, 1, 2. Adding `student_name` inside OVER removes the tie for all three functions. A final ORDER BY does not assign the rank. Eight source rows stay eight output rows. Empty OVER () is described as one unordered window; RANK without ORDER BY is 1 for every peer in PostgreSQL, and that result is called useless for a published list.

**Pass 2 outcome:** PASS — expected QC result achieved. Line count: 490.
