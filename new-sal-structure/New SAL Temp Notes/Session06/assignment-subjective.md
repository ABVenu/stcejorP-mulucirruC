# Assignment Subjective

## Task

Write one Python program that completes Question 1 through Question 8 in order. Print only the values described below, in that order.

Question 1. Set a global name `counter` to `0`. Define `add_one` so that it uses `global`, adds `1` to `counter`, and returns `counter`. Call `add_one` twice. Print each returned value, then print `counter`.

Question 2. Define `local_value` so that it assigns a local `counter` of `7` and returns that local value. Do not use `global` in this function. Print the returned value, then print the global `counter`.

Question 3. Define `sum_of(*args)` so that it returns the sum of the numbers it receives. A call with no arguments returns `0`. Print `sum_of(10, 20, 30)` and print `sum_of()`.

Question 4. Define `scored(name, *args)` so that it adds only the numbers after `name` and returns `name`, one space, and that total converted with `str`. Print `scored("Ria", 8, 12)`.

Question 5. Define `show_labels(**kwargs)` so that it prints each label and then the value stored under that label. Call `show_labels(item="pen", price=15)`.

Question 6. Set `bill` to a lambda with parameters `qty` and `rate` that multiplies them. Print `bill(4, 25)`.

Question 7. Define a recursive function `factorial`. When `n == 0`, return `1`. Otherwise return `n * factorial(n - 1)`. Print `factorial(5)`.

Question 8. Define a recursive function `countdown`. When `n == 0`, print `Stop` and return. Otherwise print `n`, then call `countdown(n - 1)`. Call `countdown(3)`.

### Sample Output

```text
1
2
2
7
2
60
0
Ria 20
item
pen
price
15
100
120
3
2
1
Stop
```

### Constraints

- Use one `.py` file.
- Do not call `input()`.
- Do not store the results in a list, set, tuple, or dictionary.
- Question 3 must use `*args`. Question 5 must use `**kwargs`. Question 6 must use `lambda`.
- Question 7 and Question 8 must call themselves and must include a base case.
- Print the values in the order shown. Extra headings are not required.

### Submission Instruction

- Code all the points mentioned in VS Code in a single `.py` file.
- Run the code and verify it is working.
- Then submit the code in the code editor/answer box in the LMS.

## Answer Explanation

Question 1 updates one shared `counter` because `global` is declared before the assignment. The first call changes `0` to `1`. The second call changes `1` to `2`. Printing `counter` afterward still shows `2`.

Question 2 assigns `counter = 7` inside the function with no `global` line, so that name is local. The return value is `7`. The global `counter` from Question 1 is still `2`.

Question 3 starts a total at `0` and adds each value in `args`. `10 + 20 + 30` is `60`. With no arguments, the loop never runs, so the total stays `0`.

Question 4 stores `"Ria"` in `name` and `8` and `12` in `args`. The sum is `20`. The returned text is `Ria 20`.

Question 5 walks the keyword labels in call order. It prints `item`, then `pen`, then `price`, then `15`.

Question 6 evaluates `4 * 25`, which is `100`. The expression after the colon is the result.

Question 7 expands `factorial(5)` through `factorial(0)`. The base case returns `1`. The multiplications on the way back are `1 * 1`, `2 * 1`, `3 * 2`, `4 * 6`, and `5 * 24`, so the printed result is `120`.

Question 8 prints `3`, `2`, and `1`, then the base case prints `Stop` and returns.

```python
counter = 0

def add_one():
    global counter
    counter = counter + 1
    return counter

print(add_one())
print(add_one())
print(counter)

def local_value():
    counter = 7
    return counter

print(local_value())
print(counter)

def sum_of(*args):
    total = 0
    for n in args:
        total = total + n
    return total

print(sum_of(10, 20, 30))
print(sum_of())

def scored(name, *args):
    total = 0
    for n in args:
        total = total + n
    return name + " " + str(total)

print(scored("Ria", 8, 12))

def show_labels(**kwargs):
    for label in kwargs:
        print(label)
        print(kwargs[label])

show_labels(item="pen", price=15)

bill = lambda qty, rate: qty * rate
print(bill(4, 25))

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(5))

def countdown(n):
    if n == 0:
        print("Stop")
        return
    print(n)
    countdown(n - 1)

countdown(3)
```

One alternative for Question 7 is a `while` loop that starts at `1` and multiplies downward until `n` reaches `0`. The required function stays recursive, with the `n == 0` base case, because Question 7 asks for that form.
