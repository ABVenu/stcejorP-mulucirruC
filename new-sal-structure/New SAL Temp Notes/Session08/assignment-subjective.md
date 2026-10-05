# Assignment Subjective

## Task

Write one Python program that completes Question 1 through Question 9 in order.

Question 1. Set `slip` to `(78, "Pass")`. Print `slip[0]`, `slip[1]`, and `len(slip)` on separate lines.

Question 2. Set `only_marks` to `(78,)` and `plain` to `(78)`. Print `len(only_marks)`, then print `plain`.

Question 3. Pack `14, 40` into `token_and_bill`. Unpack it into `token` and `bill` in that order. Print `token`, then print `bill`.

Question 4. Define `token_bill(plates)` so that it returns `plates` and `plates * 40` as one tuple. Unpack `token_bill(3)` into `got_plates` and `got_amount`. Print both names.

Question 5. Start `seen` with `set()`. Add `"UPI-14"`, then `"UPI-15"`, then `"UPI-14"` again. Print `len(seen)` and print whether `"UPI-14"` is in `seen`. Remove `"UPI-15"`. Print `len(seen)` and print whether `"UPI-15"` is in `seen`.

Question 6. Set `hostel` to `{"Riya", "Arjun", "Meera"}` and `team` to `{"Arjun", "Kabir"}`. Print `len(hostel & team)`, then whether `"Arjun"` is in that intersection. Print `len(hostel | team)`. Print `len(hostel - team)`, then whether `"Kabir"` is in that difference.

Question 7. Set `marks` to `{"Maths": 78, "Science": 86}`. Print `marks["Maths"]`. Add `"English"` with value `91`. Change `"Maths"` to `80`. Print `marks["English"]`, `marks["Maths"]`, and `len(marks)`.

Question 8. Set `upi` to `{"payer": "Ananya", "amount": 250}`. Print `upi.get("payer")`, `upi.get("note")`, `upi.get("note", "No note")`, and `upi.get("amount", 0)`, each on its own line.

Question 9. Set `scores` to `{"Maths": 78, "Science": 86}` and `extra` to `{"Science": 90, "English": 91}`. Call `scores.update(extra)`. Print `scores["Science"]`, `scores["English"]`, and `scores["Maths"]`. Loop over `scores.items()`, add every score, and print the total. Print `len(scores)`.

### Sample Output

```text
78
Pass
2
1
78
14
40
3
120
2
True
1
False
1
True
4
2
False
78
91
80
3
Ananya
None
No note
250
90
91
78
259
3
```

Membership checks print `True` or `False`. Do not rely on the printed order of a set.

### Constraints

- Use one `.py` file.
- Do not call `input()`.
- Use a tuple for Question 1 through Question 4, a set for Question 5 and Question 6, and a dictionary for Question 7 through Question 9.
- Do not index a set.
- Build the total in Question 9 with the loop. Do not replace that loop with a hard-coded `259`.

### Submission Instruction

- Code all the points mentioned in VS Code in a single `.py` file.
- Run the code and verify it is working.
- Then submit the code in the code editor/answer box in the LMS.

## Answer Explanation

Question 1 reads the tuple by index. Index `0` is `78`, index `1` is `Pass`, and the length is `2`.

Question 2 uses the trailing comma to make a tuple of length `1`. `(78)` is the plain number `78`.

Question 3 packs two values with a comma and unpacks them in the same order.

Question 4 returns `(3, 120)` because `3 * 40` is `120`. Unpacking fills the two names.

Question 5 stores two payment references. The repeated `"UPI-14"` does not change the length, so the first length is `2` and membership is `True`. After `remove("UPI-15")`, the length is `1` and that reference is no longer present.

Question 6: the intersection contains `Arjun` only, so its length is `1`. The union has four names, so its length is `4`. The difference contains `Riya` and `Meera`, so its length is `2`, and `Kabir` is not in it.

Question 7 looks up `78`, adds `English`, replaces `Maths` with `80`, and ends with three pairs.

Question 8 returns the stored payer, `None` for a missing note, the fallback `"No note"`, and the stored amount `250` instead of the fallback `0`.

Question 9 replaces `Science` with `90`, adds `English`, and leaves `Maths` at `78`. The loop adds `78 + 90 + 91`, which is `259`. Three keys remain.

```python
slip = (78, "Pass")
print(slip[0])
print(slip[1])
print(len(slip))

only_marks = (78,)
plain = (78)
print(len(only_marks))
print(plain)

token_and_bill = 14, 40
token, bill = token_and_bill
print(token)
print(bill)

def token_bill(plates):
    amount = plates * 40
    return plates, amount

got_plates, got_amount = token_bill(3)
print(got_plates)
print(got_amount)

seen = set()
seen.add("UPI-14")
seen.add("UPI-15")
seen.add("UPI-14")
print(len(seen))
print("UPI-14" in seen)
seen.remove("UPI-15")
print(len(seen))
print("UPI-15" in seen)

hostel = {"Riya", "Arjun", "Meera"}
team = {"Arjun", "Kabir"}
both = hostel & team
either = hostel | team
only_hostel = hostel - team
print(len(both))
print("Arjun" in both)
print(len(either))
print(len(only_hostel))
print("Kabir" in only_hostel)

marks = {"Maths": 78, "Science": 86}
print(marks["Maths"])
marks["English"] = 91
marks["Maths"] = 80
print(marks["English"])
print(marks["Maths"])
print(len(marks))

upi = {"payer": "Ananya", "amount": 250}
print(upi.get("payer"))
print(upi.get("note"))
print(upi.get("note", "No note"))
print(upi.get("amount", 0))

scores = {"Maths": 78, "Science": 86}
extra = {"Science": 90, "English": 91}
scores.update(extra)
print(scores["Science"])
print(scores["English"])
print(scores["Maths"])
total = 0
for subject, score in scores.items():
    total = total + score
print(total)
print(len(scores))
```

One alternative for Question 3 is to read the packed values by index, `token_and_bill[0]` and `token_and_bill[1]`, instead of unpacking. The required program unpacks into `token` and `bill`.
