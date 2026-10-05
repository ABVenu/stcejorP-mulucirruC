# Lecture Notes QC Report

File checked: `Lecture Notes.md`  
Title: Python — Lists & Strings

---

## QC Iteration 1

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 5 |
| **Structural Adherence** | 4 |
| **No Logical Mistakes** | False |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference** | True |

### What passed

- Strings cover indexing, slicing, `len`, `upper`, `lower`, `strip`, `replace`, `split`, `join`, and immutability.
- Lists cover create, index, slice, `append`, `insert`, `pop`, `remove`, `len`, mutability, and looping.
- No sets, tuples, dictionaries, comprehensions, or a functions chapter. Two activities have check answers. Two mermaid diagrams use the required init line.

### Gaps found

- The first draft was 429 lines, under the 480-line floor.
- A reminder table said a bare list literal grows when `append` is called. That call returns `None` and the temporary list is discarded.

### Action

A canteen-note walk and a comma `split` were added. The reminder row now uses a stored list: `append` returns `None` and the stored list gains the item.

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

- `"Paid 250"` has length 8. `"CS24018"[0:2]` is `CS`. Queue activity ends as `["Dev", "Cara"]`. Marks total after edits is 333. `"78,86,91".split(",")` yields three strings.
- `"  Tea  ".upper()` keeps the end spaces. `join` on subject names produces `Maths, Science, English`.
- The closing sentence points to the next session’s collections without a number. No duration or internal labels in the student notes.

**Expected QC result achieved.** Final line count: 484.
