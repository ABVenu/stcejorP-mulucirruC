# Assignment Objective

## Q1 (MCQ, Easy)

This is the whole file. What does it display?

```python
def show_welcome():
    print("Welcome to the canteen counter")
```

**Options:**
1. Welcome to the canteen counter
2. A NameError
3. Nothing
4. Welcome to the canteen counter, twice

**Correct:** 3

**Answer Explanation:**
def stores the function. It does not run the body. There is no call with parentheses, so the print never runs and the screen stays empty.

**Why other options are wrong:**
- Option 1: The print is inside the function. It runs only when show_welcome() is called.
- Option 2: The name is created by def. Nothing uses a missing name, so there is no NameError.
- Option 4: A call would be needed for each print. This file has no call.

## Q2 (MCQ, Easy)

Which name is the parameter?

```python
def announce_token(token):
    print(token)

announce_token(14)
```

**Options:**
1. token
2. 14
3. announce_token
4. print

**Correct:** 1

**Answer Explanation:**
A parameter is a name listed in the parentheses of def. token is that blank. The call fills it with the argument 14.

**Why other options are wrong:**
- Option 2: 14 is the argument, the value supplied at the call. It is not the parameter name.
- Option 3: announce_token is the function name, the label used to call the job.
- Option 4: print is the instruction inside the body. It is not a parameter.

## Q3 (MCQ, Easy)

What does this code display?

```python
def doubled_marks(marks):
    doubled = marks * 2

print(doubled_marks(36))
```

**Options:**
1. 72
2. 36
3. doubled
4. None

**Correct:** 4

**Answer Explanation:**
The body calculates 72 and then ends with no return. A function that sends nothing back hands None to the caller. print shows that None. The multiplication did run. The result was not sent back.

**Why other options are wrong:**
- Option 1: 72 exists only in doubled inside the call. Without return, the caller does not receive 72.
- Option 2: 36 is the argument. The printed result of the call is not the argument.
- Option 3: doubled is a name inside the function. The call does not print that name.

## Q4 (MCQ, Easy)

What does this code display?

```python
def upi_note(payer, amount, receiver):
    text = payer + " paid Rs " + str(amount) + " to " + receiver
    return text

print(upi_note("Ananya", 250, "Canteen"))
```

**Options:**
1. Canteen paid Rs 250 to Ananya
2. Ananya paid Rs 250 to Canteen
3. Ananya 250 Canteen
4. A TypeError, because amount is a number

**Correct:** 2

**Answer Explanation:**
Arguments fill parameters from left to right. Ananya lands in payer, 250 in amount, and Canteen in receiver. str(amount) builds text so the pieces can be joined. The returned sentence is Ananya paid Rs 250 to Canteen.

**Why other options are wrong:**
- Option 1: That sentence would need the people in the opposite argument order.
- Option 3: The returned text includes the words paid Rs and to. It is not only the three arguments.
- Option 4: str(amount) makes the number text before it is joined, so this call does not raise TypeError.

## Q5 (MCQ, Moderate)

What does this code display?

```python
def canteen_bill(plates, price=40):
    total = plates * price
    return total

print(canteen_bill(2))
print(canteen_bill(2, 55))
```

**Options:**
1. 80 and then 110
2. 55 and then 110
3. 80 and then 80
4. A SyntaxError, because price has a default

**Correct:** 1

**Answer Explanation:**
plates has no default, so 2 is required. price=40 is used when the call omits that argument, so the first call returns 2 * 40, which is 80. The second call passes 55, so it returns 110. The default stays 40 for a later call that omits it.

**Why other options are wrong:**
- Option 2: The first call does not receive 55. The omitted price becomes 40.
- Option 3: The second call passes 55, so the default is not used for that call.
- Option 4: A default is valid when it comes after parameters that have no default. This definition follows that order.

## Q6 (MCQ, Moderate)

What does this code display?

```python
def result_status(marks):
    if marks >= 40:
        status = "Pass"
    else:
        status = "Retry"
    return status

print(result_status(40))
print(result_status(39))
```

**Options:**
1. Retry and then Pass
2. Pass and then Pass
3. Retry and then Retry
4. Pass and then Retry

**Correct:** 4

**Answer Explanation:**
Each call starts fresh. 40 >= 40 is true, so the first call returns Pass. 39 fails that test, so the second call returns Retry. The shared return sends the chosen word back, and the function itself does not print.

**Why other options are wrong:**
- Option 1: The boundary 40 takes the if path because >= includes 40. The order is Pass, then Retry.
- Option 2: 39 is below 40, so the second call takes else and returns Retry.
- Option 3: 40 meets the line, so the first call does not return Retry.

## Q7 (MSQ, Moderate)

Which statements are true?

**Options:**
1. A parameter is a name in the parentheses of def
2. An argument is the value supplied at the call
3. Writing the function name without parentheses runs the body
4. A call placed above its def raises NameError

**Correct:** 1, 2, 4

**Answer Explanation:**
Parameters are the blanks written in def. Arguments are the values in the call. Python reads from top to bottom, so a call before its def uses a name that does not exist yet and raises NameError.

**Why other options are wrong:**
- Option 3: The name without parentheses only points at the function. Parentheses are required to run the body.

## Q8 (MSQ, Moderate)

Which statements are true?

**Options:**
1. A default parameter may be placed before a required parameter
2. If a call omits an argument that has a default, Python uses the default
3. return only shows a value and does not hand it to the caller
4. After return, no further line inside that call runs

**Correct:** 2, 4

**Answer Explanation:**
A default is the value used when that argument is missing. return sends a value back to the caller and ends that call, so a line placed after return in the same call does not run.

**Why other options are wrong:**
- Option 1: Defaults must come after parameters that have no default. Putting a default first is a syntax error.
- Option 3: print shows a value. return hands the value back so the caller can store it.

## Q9 (MSQ, Hard)

Which statements are true about this code?

```python
def fee_status(marks, passing=40):
    if marks >= passing:
        return "Clear"
    else:
        return "Held"

print(fee_status(38))
print(fee_status(40))
print(fee_status(35, 30))
```

**Options:**
1. fee_status(38) returns Held
2. fee_status(40) returns Clear
3. fee_status(35, 30) returns Held
4. fee_status(35, 30) uses 30 as the passing line

**Correct:** 1, 2, 4

**Answer Explanation:**
The first call omits the second argument, so passing is 40 and 38 fails the test, returning Held. 40 >= 40 is true, so the second call returns Clear. The third call passes 30, so the test is 35 >= 30, which is true.

**Why other options are wrong:**
- Option 3: 35 meets the passing line 30, so that call returns Clear, not Held.

## Q10 (MSQ, Hard)

Which statements are true about this code?

```python
def average_of_two(first, second):
    total = first + second
    average = total / 2
    return average

maths = 78
science = 86
print(average_of_two(maths, science))
```

**Options:**
1. The call passes 78 and 86 into first and second
2. The printed result is the int 82
3. The printed result is 82.0
4. The function prints the average, so the outer print receives None

**Correct:** 1, 3

**Answer Explanation:**
The values of maths and science are passed in order into first and second. 78 + 86 is 164, and 164 / 2 uses `/`, which produces the float 82.0. return sends that float back, and the outer print shows it.

**Why other options are wrong:**
- Option 2: `/` keeps a float. The screen shows 82.0, not the int 82.
- Option 4: The function returns the average and does not print it. The outer print shows the returned float, not None.
