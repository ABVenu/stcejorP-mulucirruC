# QC Report — SQL — Subqueries

## QC Pass 1

| Criterion | Result |
|---|---|
| **Content Coverage** | 4 / 5 |
| **Creativity** | 5 / 5 |
| **Structural Adherence** | 3 / 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | False |
| **No Previous Session Number References** | True |
| **No Metadata / Internal References in Student Notes** | True |

**Notes:** First draft explained IN, a comparison, a scalar SELECT subquery, FROM, EXISTS, and correlated versus non-correlated, but it was only 389 lines and several paragraphs ran past three sentences. The join contrast was one sentence, which is correct, but the walk-through of EXISTS and the derived-table filter were too thin for the lesson length. No session number appeared in the student notes.

**Pass 1 outcome:** REVISE — expand the worked traces, split long paragraphs, and land between 480 and 500 lines.

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

**Notes:** Length is 497 lines. Required heading order is present. Two mermaid diagrams use the required init line. SQL blocks are complete, with a `--` comment on every line and a "How the code works" list after each block. Window functions are not taught. Join types are not re-taught.

**Logic spot-checks:** Maths scores 88, 72, and 65 average to 75. `score >` that average keeps only student 1 (88). `IN` for Maths above 70 returns Anita and Rahul once each. `MAX` of Maths is 88, shown on every student row by the scalar SELECT subquery. The FROM subquery without Delhi returns Anita and Meera; the outer Pune filter leaves Anita. `EXISTS` for score >= 90 keeps Anita because of Science 91. A comparison subquery that returns many rows is described as an error. A FROM subquery without an alias is described as rejected by PostgreSQL and MySQL. NULL inside an IN list is described as making a non-match unknown rather than a simple false.

**Pass 2 outcome:** PASS — expected QC result achieved. Line count: 497.
