# Lecture Notes QC Report

File checked: `Lecture Notes.md`  
Title: Python — Advanced Functions

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
| **No Metadata / internal reference** | True |

### What passed

- Local versus global, `global`, `*args`, `**kwargs`, lambda, countdown, and factorial with a base case are all present.
- `def` and `return` are only a short recall. No lists, strings, sets, decorators, or closures chapter.
- Two activities have check answers. Two mermaid diagrams use the required init line. Examples stay inside canteen, UPI, and marks.

### Gaps found

- The first complete draft was 465 lines, under the 480-line floor.
- The recursion walk table was only inside the factorial section, so the countdown stop was easier to miss on a quick read.

### Action

A paper walk for `countdown(3)` was added before Key Takeaways so the line count and the stop rule are both clear.

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
| **No Metadata / internal reference** | True |

### Recheck notes

- `add_pocket_cash` returns 40 and leaves the global at 100. `add_upi` ends at 125. `total_marks(70, 80, 90)` is 240. `factorial(4)` is 24. `factorial(3)` in the activity is 6.
- Keyword order for `print_upi(payer="Ananya", amount=250)` follows the call. The unsafe recursive call stays commented so the file does not raise `RecursionError`.
- The closing sentence points to the next session without a number. No duration or internal labels in the student notes.

**Expected QC result achieved.** Final line count: 482.
