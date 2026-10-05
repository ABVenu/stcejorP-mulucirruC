# Assignment Subjective

## Task

Define three functions, then call them with values read from input.

1. Define plate_cost(plates, rate). Return plates * rate. Do not print inside this function.
2. Define fee_note(marks, passing=40). Return "Pass" when marks >= passing. Otherwise return "Retry".
3. Define upi_line(payer, amount, receiver). Return payer + " paid Rs " + str(amount) + " to " + receiver.
4. Read plates with input("Type plates: ") and convert with int().
5. Read rate with input("Type rate: ") and convert with int().
6. Call plate_cost(plates, rate), store the returned number in bill, and print bill.
7. Read marks with input("Type marks: ") and convert with int().
8. Print the result of fee_note(marks). This call uses the default passing line.
9. Print the result of fee_note(marks, 30).
10. Print the result of upi_line("Ananya", bill, "Canteen").

Sample input:

```
3
45
35
```

Expected output:

```
135
Retry
Pass
Ananya paid Rs 135 to Canteen
```

The expected output above is what print() shows. The input() prompts appear while the program waits and are not part of that output.

Constraints:

- Use one .py file.
- Define every function before its first call.
- Do not use a loop inside the functions.
- The three prompts must match the text above exactly.

### Submission Instruction
- Code all the points in VS Code in a single .py file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

plate_cost(3, 45) returns 135, and that number is stored in bill and printed. fee_note(35) omits the second argument, so passing is 40. 35 >= 40 is false, so the call returns Retry. fee_note(35, 30) uses 30 as the line. 35 >= 30 is true, so it returns Pass. upi_line joins the name, str(135), and Canteen into one sentence and returns it for the last print.

```python
def plate_cost(plates, rate):
    total = plates * rate
    return total

def fee_note(marks, passing=40):
    if marks >= passing:
        return "Pass"
    else:
        return "Retry"

def upi_line(payer, amount, receiver):
    text = payer + " paid Rs " + str(amount) + " to " + receiver
    return text

plates = int(input("Type plates: "))
rate = int(input("Type rate: "))
bill = plate_cost(plates, rate)
print(bill)
marks = int(input("Type marks: "))
print(fee_note(marks))
print(fee_note(marks, 30))
print(upi_line("Ananya", bill, "Canteen"))
```

Alternative approach: fee_note can store the word in a name and use one return after if and else, instead of returning inside each branch. The calls and the printed lines stay the same. plate_cost can return plates * rate on one line without a total name.
