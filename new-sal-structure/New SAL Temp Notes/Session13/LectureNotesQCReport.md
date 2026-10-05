# QC Report — SQL — Joins: Connecting Relational Tables

## QC Pass 1

| Criterion | Result |
|---|---|
| **Content Coverage** | 5 / 5 |
| **Creativity** | 5 / 5 |
| **Structural Adherence** | 4 / 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / Internal References in Student Notes** | True |

**Notes:** Join types, keys, ON, and NULL-for-no-match were covered on customers and orders. Row counts checked: INNER 3, LEFT 5, RIGHT 4, FULL OUTER 6. A WHERE test on the right-hand key correctly shown as dropping unmatched left rows. Draft length was 509 lines, above the 500-line maximum. No session number in the student notes. Subqueries, window functions, UNION, and a new GROUP BY lesson were not introduced.

**Pass 1 outcome:** REVISE — shorten to the required length, then re-check.

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

**Notes:** Length is 496 lines. Title is the exact lesson title. Two mermaid diagrams use the required init line. Every SQL line has a `--` comment, followed by "How the code works". Paragraphs stay within three sentences. Closing line points to the next session (a question inside a question) without a session number.

**Logic spot-checks:** Anita (two orders) repeats on two result rows. Meera and Kabir are absent from INNER and present with NULL order columns on LEFT. Order 504 (customer 9) is absent from LEFT, present with NULL customer columns on RIGHT, and present on FULL OUTER JOIN. NULL is not treated as zero. `FULL JOIN` is named as the shorter form some tools accept. MySQL's lack of FULL OUTER JOIN is stated without a UNION workaround.

**Pass 2 outcome:** PASS — expected QC result achieved. Line count: 496.
