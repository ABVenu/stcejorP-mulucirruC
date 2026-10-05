# Assignment Objective

## Q1 (MCQ, Easy)

What is the result of `10 / 2`?

**Options:**
1. 5
2. 2
3. 10
4. 5.0

**Correct:** 4

**Answer Explanation:**
In Python 3, `/` divides and keeps a float, even when the division comes out even. `10 / 2` is `5.0`, not the int `5`.

**Why other options are wrong:**
- Option 1: 5 would be a whole number. `/` does not drop the decimal form.
- Option 2: 2 is not the quotient of 10 divided by 2.
- Option 3: 10 is the first number, not the result of the division.

## Q2 (MCQ, Easy)

What is the result of `20 // 6`?

**Options:**
1. 3
2. 3.3333333333333335
3. 2
4. 6

**Correct:** 1

**Answer Explanation:**
`//` divides and keeps only the whole-number part. 6 fits into 20 three full times, so `20 // 6` is `3`.

**Why other options are wrong:**
- Option 2: That decimal result belongs to `/`. `20 / 6` keeps a float. `//` drops the fraction.
- Option 3: 2 is the remainder from `20 % 6`, not the full-group count from `//`.
- Option 4: 6 is the second number in the expression, not how many full times it fits into 20.

## Q3 (MCQ, Easy)

What does this code display?

```python
marks = 78
pass_mark = 40
print(marks >= pass_mark)
print(marks == 100)
```

**Options:**
1. 78 and then 100
2. False and then True
3. True and then False
4. True and then True

**Correct:** 3

**Answer Explanation:**
A comparison produces a bool, not the number itself. 78 is at least 40, so the first print is True. 78 and 100 are not the same, so `==` is False.

**Why other options are wrong:**
- Option 1: The prints show the yes-or-no results, not the stored marks.
- Option 2: The two bools are reversed. The pass check is True and the exact-100 check is False.
- Option 4: The second comparison is False because 78 is not equal to 100.

## Q4 (MCQ, Easy)

What does this code display?

```python
fee_paid = True
form_submitted = False
print(fee_paid and form_submitted)
print(not form_submitted)
```

**Options:**
1. True and then False
2. False and then True
3. True and then True
4. False and then False

**Correct:** 2

**Answer Explanation:**
`and` is True only when both parts are True. True and False is False. `not` flips False to True, so the second print is True.

**Why other options are wrong:**
- Option 1: The prints are in the opposite order. `and` fails first, and `not False` is True.
- Option 3: The first result is not True, because `form_submitted` is False.
- Option 4: The second result is not False. `not False` is True.

## Q5 (MCQ, Moderate)

What does this code display?

```python
bill = 10 + 2 * 5
print(bill)
```

**Options:**
1. 60
2. 17
3. 12
4. 20

**Correct:** 4

**Answer Explanation:**
Without brackets, multiplication runs before addition. `2 * 5` is 10, then `10 + 10` is 20. The screen shows 20.

**Why other options are wrong:**
- Option 1: 60 is `(10 + 2) * 5`. This line has no brackets, so the addition does not run first.
- Option 2: 17 would require adding 10, 2, and 5. The `*` is multiplication, not another addition.
- Option 3: 12 is not a step in this expression. The product 10 is added to 10.

## Q6 (MCQ, Moderate)

What does this code display?

```python
marks = 63
if marks >= 75:
    print("Distinction")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")
```

**Options:**
1. Pass
2. Distinction
3. Fail
4. Distinction and then Pass

**Correct:** 1

**Answer Explanation:**
The `if` check `63 >= 75` is False, so Python tries the `elif`. `63 >= 40` is True, so that block prints Pass and the chain stops. `else` does not run.

**Why other options are wrong:**
- Option 2: Distinction needs marks of at least 75. 63 does not take that path.
- Option 3: Fail runs only when every earlier condition is false. The pass check is true.
- Option 4: One chain prints one path. A true `elif` does not also print the `if` message.

## Q7 (MSQ, Moderate)

Which statements are true?

**Options:**
1. `20 % 6` is 2
2. `2 ** 3` is 6
3. `20 // 6` is 3
4. `10 / 2` is the int 5

**Correct:** 1, 3

**Answer Explanation:**
`%` is the leftover after full groups: 20 minus 18 is 2. `//` counts those full groups, so `20 // 6` is 3.

**Why other options are wrong:**
- Option 2: `**` is power. `2 ** 3` is 2 × 2 × 2, which is 8, not 6.
- Option 4: `/` keeps a float. `10 / 2` is 5.0, not the int 5.

## Q8 (MSQ, Moderate)

Which statements are true?

**Options:**
1. `10 + 2 * 5` equals 60
2. `*` runs before `+` when a line has no brackets
3. `(10 + 2) * 5` equals 20
4. Brackets run before multiplication and addition

**Correct:** 2, 4

**Answer Explanation:**
Multiplication is earlier in the precedence order than addition, so `10 + 2 * 5` multiplies first. Brackets are earlier than both, so a bracketed sum is calculated before it is multiplied.

**Why other options are wrong:**
- Option 1: Without brackets the result is 20, because `2 * 5` runs first.
- Option 3: The brackets add 10 and 2 first, then multiply by 5, so the result is 60.

## Q9 (MSQ, Hard)

Which statements are true about this code?

```python
marks = 80
if marks >= 40:
    print("Pass")
elif marks >= 75:
    print("Distinction")
else:
    print("Fail")
```

**Options:**
1. The screen shows Pass
2. The elif block does not run
3. The screen shows Distinction
4. A later elif is checked only when every earlier condition in the chain was false

**Correct:** 1, 2, 4

**Answer Explanation:**
`80 >= 40` is True, so the `if` block prints Pass and the chain stops. The `elif` is not checked. An `elif` runs only after earlier conditions in that chain were false, which is why a pass check placed first catches 80 before a distinction check.

**Why other options are wrong:**
- Option 3: Distinction is on the `elif`, and that block is skipped because the `if` condition was already true.

## Q10 (MSQ, Hard)

Which statements are true about this code?

```python
score = 4
score *= 3
if score >= 10:
    print("High")
else:
    print("Low")
print("Done")
```

**Options:**
1. After `score *= 3`, score stores 12
2. The else block runs
3. The screen shows High and then Done
4. The screen shows Low

**Correct:** 1, 3

**Answer Explanation:**
`*=` multiplies the stored number and stores the result back. 4 × 3 is 12. `12 >= 10` is True, so the `if` block prints High. `Done` is not indented under `if` or `else`, so it prints as well.

**Why other options are wrong:**
- Option 2: The `if` condition is true, so the `else` block is skipped.
- Option 4: Low is the `else` message. That path does not run for 12.
