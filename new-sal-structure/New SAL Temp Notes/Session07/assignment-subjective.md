# Assignment Subjective

## Task

Write one Python program that completes Question 1 through Question 9 in order.

Question 1. Set `code` to `"ME21045"`. Print `code[0]`, `code[-1]`, `code[0:2]`, and `len(code)`, on separate lines.

Question 2. Set `item` to `"  Tea  "`. Print `item.strip()`, then `item.upper()`, then `item.lower().strip()`, then `item`.

Question 3. Set `bill_text` to `"Rs 40 for tea"`. Store `bill_text.replace("Rs", "INR")` in `updated`. Print `updated`, then print `bill_text`.

Question 4. Set `marks_line` to `"78 86 91"`. Split it on a single space and store the result in `parts`. Print `parts`, then `len(parts)`, then `parts[0]`.

Question 5. Set `subjects` to `["Maths", "Science", "English"]`. Print the string made by `", ".join(subjects)`.

Question 6. Start `queue` as `["Neel", "Omar"]`. Append `"Pia"`, then insert `"Raj"` at index `1`, then `pop` index `0` into `gone`, then `remove` `"Omar"`. After each of those four edits, print the current `queue`. Also print `gone` immediately after the `pop`, and print `len(queue)` at the end.

Question 7. Start `marks` as `[10, 20, 30]`. Set index `1` to `25`, then append `40`. Print `marks`. Add the items in a `for` loop and print the total. Print `len(marks)`.

Question 8. Using the `marks` list from Question 7, set `index` to `0`. With a `while` loop, print `index` and then `marks[index]` while `index` is less than `len(marks)`. Add `1` to `index` on each pass.

Question 9. Set `word` to `"cat"`. Print `word.replace("c", "b")`, then print `word`.

### Sample Output

```text
M
5
ME
7
Tea
  TEA  
tea
  Tea  
INR 40 for tea
Rs 40 for tea
['78', '86', '91']
3
78
Maths, Science, English
['Neel', 'Omar', 'Pia']
['Neel', 'Raj', 'Omar', 'Pia']
Neel
['Raj', 'Omar', 'Pia']
['Raj', 'Pia']
2
[10, 25, 30, 40]
105
4
0
10
1
25
2
30
3
40
bat
cat
```

The `upper` line and the later print of `item` still contain the leading and trailing spaces.

### Constraints

- Use one `.py` file.
- Do not call `input()`.
- Do not use a set, tuple, or dictionary.
- Do not write `queue = queue.append(...)`, `queue = queue.insert(...)`, or `queue = queue.remove(...)`.
- `pop` may be stored, because `gone = queue.pop(0)` keeps the removed item.
- Calculate the total in Question 7 with the loop. Do not print a hard-coded `105` in place of that addition.

### Submission Instruction

- Code all the points mentioned in VS Code in a single `.py` file.
- Run the code and verify it is working.
- Then submit the code in the code editor/answer box in the LMS.

## Answer Explanation

Question 1 reads index `0` as `M`, index `-1` as `5`, the slice `0:2` as `ME`, and the length as `7`.

Question 2 prints the new stripped string, the new uppercase string with end spaces kept, the lowercased string after `strip`, and the original `item`, which is still unchanged.

Question 3 stores the new string from `replace`. The original `bill_text` still begins with `Rs`.

Question 4 cuts on each space. The pieces stay strings, there are three of them, and index `0` is `78`.

Question 5 places `", "` between the names and not after `English`.

Question 6 grows and edits the same list. After `append`, the list is `["Neel", "Omar", "Pia"]`. After `insert(1, "Raj")`, it is `["Neel", "Raj", "Omar", "Pia"]`. `pop(0)` returns `Neel` and leaves `["Raj", "Omar", "Pia"]`. `remove("Omar")` leaves `["Raj", "Pia"]`, whose length is `2`.

Question 7 replaces index `1`, then appends, so the list is `[10, 25, 30, 40]`. The loop adds `10 + 25 + 30 + 40`, which is `105`. The length is `4`.

Question 8 uses indexes `0`, `1`, `2`, and `3`. Each pass prints the seat and the value in that seat.

Question 9 prints the new string `bat` and then the original `word`, which is still `cat`.

```python
code = "ME21045"
print(code[0])
print(code[-1])
print(code[0:2])
print(len(code))

item = "  Tea  "
print(item.strip())
print(item.upper())
print(item.lower().strip())
print(item)

bill_text = "Rs 40 for tea"
updated = bill_text.replace("Rs", "INR")
print(updated)
print(bill_text)

marks_line = "78 86 91"
parts = marks_line.split(" ")
print(parts)
print(len(parts))
print(parts[0])

subjects = ["Maths", "Science", "English"]
print(", ".join(subjects))

queue = ["Neel", "Omar"]
queue.append("Pia")
print(queue)
queue.insert(1, "Raj")
print(queue)
gone = queue.pop(0)
print(gone)
print(queue)
queue.remove("Omar")
print(queue)
print(len(queue))

marks = [10, 20, 30]
marks[1] = 25
marks.append(40)
print(marks)
total = 0
for mark in marks:
    total = total + mark
print(total)
print(len(marks))

index = 0
while index < len(marks):
    print(index)
    print(marks[index])
    index = index + 1

word = "cat"
print(word.replace("c", "b"))
print(word)
```

One alternative for Question 7 is to add the four known numbers in one expression after the edits, `10 + 25 + 30 + 40`. The required program uses the `for` loop so the total follows whatever items are in the list.
