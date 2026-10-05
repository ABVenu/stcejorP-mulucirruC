# Lecture Notes QC Report

Session folder: `New SAL Temp Notes/Session19`  
File checked: `Lecture Notes.md`  
Title: Excel — Report Making: Basic & Conditional Formatting

---

## QC Iteration 1

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 4 |
| **Creativity** | 4 |
| **Structural Adherence** | 3 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | False |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### What passed

- Column width, bold header, title row, currency, percent, date, borders, alignment, wrap text, print area, and fit-to-page are taught on a fee report whose total is already `20000`.
- Greater than, colour scales, data bars, and duplicate values are taught as rules that do not change the stored number. `4000` is not highlighted by a greater-than-`4000` rule. Pune is the only duplicate city.
- No VLOOKUP chapter and no function-library reteach. The close talks about later data work in general words and does not name a next session.

### Gaps found

- **Structure / length:** The first full draft was 361 lines and contained only one mermaid diagram. The floor is 480 lines and two diagrams.
- **Presentation:** Desktop Page Layout and Excel for the web File > Print were easy to blur, and Clear Formats was not distinguished from Clear Rules.
- **Coverage:** The stored-value versus display check was not tabulated for currency, percent, and date together.

### Action

Added the stored-versus-display table, a manual-versus-rule table, a layout reread, a visual-mistake list, a desktop-and-web click table, and a second mermaid diagram. The closing still has no next-session title or number.

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

- Fees `1000`, `2000`, `3000`, `4000`, and `10000` sum to the stated total `20000`. Shares `0.05`, `0.10`, `0.15`, `0.20`, and `0.50` display as `5%` through `50%` and still store the decimals.
- Currency and date formats, borders, wrap text, merge-and-center on the title only, print area `A1:D10`, and fit-to-one-page width are present. `#####` is treated as a narrow-column display, not a lost value.
- Greater than `4000` highlights only `10000`. Color Scales and Data Bars use the selection’s low and high values. Duplicate Values highlights the three Pune cells and does not delete rows. Clear Rules leaves manual formatting.
- Two mermaid diagrams use the required init line. Two activities have check answers. No images, no session number, no metadata fields in the student notes, and no scheduled next lecture.

Line count: **499** lines (`wc -l`).

**Expected QC result achieved.** No further revision required for this QC cycle.
