# Assignment Subjective

## Task

Read a canteen order, update the bill, and print one result word.

1. Read the tea count with input("Type tea count: "), convert it with int(), and store it in tea_count.
2. Read the samosa count with input("Type samosa count: "), convert it with int(), and store it in samosa_count.
3. Store bill as tea_count * 15 + samosa_count * 20. One tea costs 15 and one samosa costs 20.
4. Read the parcel charge with input("Type parcel charge: "), convert it with int(), and add it with bill += that charge.
5. Print bill.
6. Read marks with input("Type marks: "), convert them with int(), and store them in marks.
7. If marks >= 75, print Distinction.
8. Otherwise, if marks >= 40, print Pass. Use elif.
9. Otherwise print Fail. Use else.
10. Print only one of those three words.

Sample input:

```
2
1
20
63
```

Expected output:

```
70
Pass
```

The expected output above is what print() shows. The input() prompts appear while the program waits and are not part of that output.

Constraints:

- Use one .py file.
- Use one if, one elif, and one else.
- Do not use a loop or a function.
- The four prompts must match the text above exactly.

### Submission Instruction
- Code all the points in VS Code in a single .py file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

tea_count is 2 and samosa_count is 1. Multiplication runs before addition, so bill starts as 2 * 15 + 1 * 20, which is 50. bill += 20 stores 70, and that value is printed. marks is 63. 63 >= 75 is false, and 63 >= 40 is true, so the elif path prints Pass. The else path does not run.

```python
tea_count = int(input("Type tea count: "))
samosa_count = int(input("Type samosa count: "))
bill = tea_count * 15 + samosa_count * 20
parcel = int(input("Type parcel charge: "))
bill += parcel
print(bill)
marks = int(input("Type marks: "))
if marks >= 75:
    print("Distinction")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")
```

Alternative approach: The bill can be written with brackets as (tea_count * 15) + (samosa_count * 20) + parcel, then printed once, without +=. The result is the same 70. The result chain can also store the word in a name and print that name once after the chain. The comparisons and the order of the paths stay the same.
