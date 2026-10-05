# Lecture Notes QC Report

Session folder: `New SAL Temp Notes/Session18`  
File checked: `Lecture Notes.md`  
Title: Excel — VLOOKUP, XLOOKUP & HLOOKUP

---

## QC Iteration 1

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 4 |
| **Creativity** | 4 |
| **Structural Adherence** | 3 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### What passed

- Exact-match `VLOOKUP` arguments, the leftmost-column limit, the `TRUE` / omitted-fourth-argument pitfall, `HLOOKUP` downward, and `XLOOKUP` with if-not-found and a leftward return are present and factually aligned.
- Fee-code and city-code examples use `FALSE` or `XLOOKUP`’s exact default. No conditional formatting, colour scales, `SUMIF`, or pivot content. `SUM` and `IF` are not re-taught.
- The closing is one sentence: the next session is about making the sheet readable as a report. No session number.

### Gaps found

- **Structure / length:** The first full draft was 406 lines, below the 480-line floor.
- **Coverage:** Students were not shown how to read a filled formula bar to catch a slipped table range or a column index that returns the course name instead of the fee.
- **Creativity:** The same code was not placed side by side under `VLOOKUP`, `HLOOKUP`, and `XLOOKUP`, so the three return directions were easy to mix up.

### Action

Added a formula-bar reading table, a second exact formula for the filled `EXL` row, a course-name-plus-fee mini sheet, and a same-code comparison table. Line count was raised into range without adding report layout or approximate-match practice.

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

- `VLOOKUP` searches the leftmost column and returns to the right. Column index `3` on `$F$2:$H$4` is the fee. `FALSE` is exact. A missing code returns `#N/A`. An index past the table returns `#REF!`.
- Approximate match is explained as a pitfall: omitted fourth argument means `TRUE` and can return a neighbour without an error. Worked examples stay on exact match.
- `HLOOKUP` returns a lower row only. `XLOOKUP` can return a fee to the left and a city row above, and its fourth argument replaces `#N/A`. Default match is exact. `#NAME?` is limited to installs without `XLOOKUP`.
- Activity 1: `DAT` → `4000`, `WEB` → `#N/A` or `Code not found`, `PYT` → `5500`, `EXL` → `2500`. Activity 2: `DEL` → Delhi, `HYD` → Hyderabad.
- Two mermaid diagrams, two checked activities, definition triples, and the terminology table are in place. No session number in the student notes.

Line count: **499** lines (`wc -l`).

**Expected QC result achieved.** No further revision required for this QC cycle.
