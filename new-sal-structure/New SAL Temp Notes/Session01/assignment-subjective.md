# Assignment Subjective

## Task

Read a slip, convert the numbers, and print each value with its type.

1. Add a comment as the first line: Store a help-desk slip.
2. Read a name with input("Type your name: ") and store it in visitor_name.
3. Read marks as text with input("Type your marks: ") and store that text in marks_text.
4. Convert marks_text with int() and store the whole number in marks.
5. Read a fee as text with input("Type the fee: ") and store that text in fee_text.
6. Convert fee_text with float() and store the decimal number in fee.
7. Store has_id with the bool True. Do not read this value with input().
8. Print visitor_name, marks, fee, and has_id, in that order, each with its own print().
9. Print type(visitor_name), type(marks), type(fee), and type(has_id), in that order, each with its own print().
10. Print the text "Marks: " joined with str(marks). Use one print(). Do not join a str with an int.

Sample input:

```
Meera
81
99.5
```

Expected output:

```
Meera
81
99.5
True
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
Marks: 81
```

The expected output above is what print() shows. The input() prompts appear while the program waits and are not part of that output.

Constraints:

- Use one .py file.
- Use print, comments, variables, input, int, float, str, and type only.
- Do not use if, loops, or functions.
- The three prompts must match the text above exactly.
- has_id is stored in the file. It is not typed by the person.

### Submission Instruction
- Code all the points in VS Code in a single .py file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

The comment is skipped. input() stores each typed line as text. int() builds 81 from "81", and float() builds 99.5 from "99.5". has_id stores the bool True. The four value prints show the name, the whole number, the decimal number, and True. The four type() prints report str, int, float, and bool. str(marks) builds the text "81", so it can be joined with "Marks: " without a TypeError.

```python
# Store a help-desk slip.
visitor_name = input("Type your name: ")
marks_text = input("Type your marks: ")
marks = int(marks_text)
fee_text = input("Type the fee: ")
fee = float(fee_text)
has_id = True
print(visitor_name)
print(marks)
print(fee)
print(has_id)
print(type(visitor_name))
print(type(marks))
print(type(fee))
print(type(has_id))
print("Marks: " + str(marks))
```

Alternative approach: The conversions can sit directly on the input calls: marks = int(input("Type your marks: ")) and fee = float(input("Type the fee: ")). The printed lines stay the same. A second style for the last line is print("Marks:", marks), which prints a space between the two values without using +.
