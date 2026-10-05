# Lecture Notes QC Report

Session folder: `New SAL Temp Notes/Session17`  
File checked: `Lecture Notes.md`  
Title: Excel — Functions in Excel

---

## QC Iteration 1

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 4 |
| **Creativity** | 4 |
| **Structural Adherence** | 4 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | False |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### What passed

- Formula versus function, the leading `=`, cell references, ranges, relative versus `$E$1`, `SUM`, `AVERAGE`, `COUNT`, `COUNTA`, `MIN`, `MAX`, a simple `IF`, and fill down are all taught on a marks sheet.
- Two activities have check-answer tables. Two mermaid diagrams use the required init line. No images. No VLOOKUP, charts, or conditional formatting.
- The closing mentions the next session only as looking up a code. No session number appears in the student notes.

### Gaps found

- **Coverage / length:** A second full expense walkthrough repeated the fill-down lesson and pushed the file to 539 lines, above the 500-line cap.
- **Presentation:** One sentence pointed ahead to report layout. The only forward pointer allowed here is the next session on lookups.
- **Structure:** The expense total formula repeated `SUM` without a new teaching point, which crowded the required marks-sheet path.

### Action

The extra expense chapter was removed. Activity 2 still uses a short expense list with a locked rate. The report-layout sentence was replaced with a plain-number instruction. Line count was brought inside the cap.

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

- Marks sheet totals: `72 + 45 + 38 + 91 = 246`, average `61.5`, count `4`, max `91`, min `38`. Pass mark `40` with `>=` gives Pass, Pass, Fail, Pass.
- Activity 1: empty mark is ignored by `SUM`, `AVERAGE`, `COUNT`, `MIN`, and `MAX`; `COUNTA` still counts the name; the blank fails `>=`. Activity 2 locks `$E$1` at `0.10` and fills `22`, `88`, and `165`.
- `COUNT` counts numbers. `COUNTA` counts non-empty cells. `AVERAGE` of an empty numeric range is `#DIV/0!`. A circular total is named and kept outside the range.
- Headings are `#`, `##`, and `###` only. Keyword triples, formula blocks with “How the formula works”, and mini-sheet tables are present. No session number, duration, or audience line in the student notes.

Line count: **500** lines (`wc -l`).

**Expected QC result achieved.** No further revision required for this QC cycle.
