# Assignment Objective

## Q1 (MCQ, Easy)

What does this code display?

```python
# title
print("Fee counter")
print("Window 3")
```

**Options:**
1. Fee counter Window 3 on one line
2. Only Window 3
3. Fee counter on one line, then Window 3 on the next line
4. A SyntaxError, because a comment cannot sit above print

**Correct:** 3

**Answer Explanation:**
Each print() displays its value and then the next print starts on a new line. A line that starts with # is a comment, so the interpreter skips it and still runs both print calls. The screen shows Fee counter and then Window 3.

**Why other options are wrong:**
- Option 1: print() does not place both values on the same line. Each call starts a new line.
- Option 2: A comment is ignored. It does not cancel the print that follows it.
- Option 4: A comment above a complete print line is valid. The quotes and brackets on both print lines are closed.

## Q2 (MCQ, Easy)

What does this code display?

```python
roll_number = 42
roll_number = 17
print(roll_number)
```

**Options:**
1. 17
2. 42
3. 42 and then 17
4. A NameError, because the same name is stored twice

**Correct:** 1

**Answer Explanation:**
The = sign stores a value under a name. The second assignment replaces 42 with 17. print runs after that replacement, so the screen shows 17.

**Why other options are wrong:**
- Option 2: 42 was stored first, but the later assignment replaces it before print runs.
- Option 3: There is only one print, and it runs after the name already stores 17.
- Option 4: Storing a new value in an existing name is allowed. It does not raise NameError.

## Q3 (MCQ, Easy)

Which value is a bool?

**Options:**
1. "True"
2. "False"
3. 1
4. False

**Correct:** 4

**Answer Explanation:**
A bool is True or False written with a capital letter and no quotes. False matches that form.

**Why other options are wrong:**
- Option 1: Quotes make this a str, even though the characters spell True.
- Option 2: Quotes make this a str. A bool does not use quotes.
- Option 3: 1 is a whole number, so its type is int.

## Q4 (MCQ, Easy)

A person types 18 and presses Enter. What is the type of the value that input() returns?

**Options:**
1. str
2. int
3. float
4. bool

**Correct:** 1

**Answer Explanation:**
input() reads one typed line and gives it back as text. Digits typed at the prompt are still a str until a conversion such as int() builds a number.

**Why other options are wrong:**
- Option 2: The characters look like a whole number, but input() does not build an int.
- Option 3: input() does not build a float. A decimal conversion needs float() after the read.
- Option 4: 18 is not True or False. input() does not return a bool.

## Q5 (MCQ, Moderate)

What does this code display?

```python
marks_text = "78"
marks = int(marks_text)
print(marks)
print(type(marks))
```

**Options:**
1. 78 and then <class 'str'>
2. "78" and then <class 'int'>
3. 78 and then <class 'int'>
4. A TypeError, because int() cannot be used on text

**Correct:** 3

**Answer Explanation:**
int("78") builds the whole number 78 from whole-number text. type() reports that kind and does not change the stored value, so the two lines show 78 and then <class 'int'>.

**Why other options are wrong:**
- Option 1: After int(), marks is not text. type(marks) reports int, not str.
- Option 2: print(marks) shows the number 78 without quotes. The quotes were only on the original text.
- Option 4: int() can build a whole number from text such as "78". That call does not raise TypeError.

## Q6 (MCQ, Moderate)

What happens when this code runs?

```python
age = 18
print("Age: " + age)
```

**Options:**
1. It displays Age: 18
2. It raises NameError because age was never stored
3. It raises SyntaxError because a quote is missing
4. It raises TypeError because a str is joined with an int

**Correct:** 4

**Answer Explanation:**
Both sides of + must be text when the job is to join them. "Age: " is a str and age is an int, so the line raises TypeError. str(age) would build the text "18" and make the join valid.

**Why other options are wrong:**
- Option 1: The line does not display a message. The types do not fit the join.
- Option 2: age = 18 stores the name before it is used, so this is not a NameError.
- Option 3: The quotes and brackets are closed. The line is a valid form that fails because of types.

## Q7 (MSQ, Moderate)

Which of the following are valid variable names?

**Options:**
1. student_name
2. 2roll
3. roll number
4. _city

**Correct:** 1, 4

**Answer Explanation:**
A variable name starts with a letter or an underscore, then uses letters, digits, or underscores. student_name starts with a letter. _city starts with an underscore. Neither name contains a space.

**Why other options are wrong:**
- Option 2: 2roll starts with a digit. A name must start with a letter or an underscore.
- Option 3: roll number contains a space. A name cannot contain a space.

## Q8 (MSQ, Moderate)

Which statements are true?

**Options:**
1. 1250.50 is an int
2. "Pune" and 'Pune' are both str values
3. True without quotes is a bool
4. type() changes the stored value into a new type

**Correct:** 2, 3

**Answer Explanation:**
A str is text inside single or double quotes, so both spellings of Pune are str values. True with a capital letter and no quotes is a bool.

**Why other options are wrong:**
- Option 1: 1250.50 is written with a decimal point, so it is a float, not an int.
- Option 4: type() only reports the kind of value. It does not convert that value.

## Q9 (MSQ, Hard)

The person types Meera at the prompt. Which statements are true?

```python
visitor = input("Type your name: ")
code = "007"
count = int("12")
fee = float("10.5")
```

**Options:**
1. visitor stores the text Meera, and its type is str
2. code stores text, and its type is str
3. count stores the int 12
4. fee stores the int 10

**Correct:** 1, 2, 3

**Answer Explanation:**
input() returns text, so Meera is a str. Digits inside quotes, including a leading zero, stay text, so code is a str. int("12") builds the whole number 12.

**Why other options are wrong:**
- Option 4: float("10.5") builds a float. It does not drop the decimal and store an int.

## Q10 (MSQ, Hard)

Which statements are true?

**Options:**
1. print("Pune" raises SyntaxError
2. print(Station) raises NameError when the only stored name is station = "NDLS"
3. "Age: " + 18 raises TypeError
4. A comment that starts with # is displayed when the file runs

**Correct:** 1, 2, 3

**Answer Explanation:**
A missing closing quote means the line is not a form Python accepts, so it is a SyntaxError. Station and station are different names, so the unseen spelling raises NameError. Joining text with an int raises TypeError.

**Why other options are wrong:**
- Option 4: The interpreter ignores a comment. The note is not displayed.
