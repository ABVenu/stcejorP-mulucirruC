# Assignment Objective

## Q1 (MCQ, Easy)

What do the two `print` calls display?

```python
score = 10

def bump():
    score = 4
    return score

print(bump())
print(score)
```

**Options:**
1. `4` on the first line and `4` on the second line
2. `4` on the first line and `10` on the second line
3. `10` on the first line and `10` on the second line
4. `None` on the first line and `10` on the second line

**Correct:** 2

**Answer Explanation:**
`score = 10` creates a global name. Inside `bump`, the line `score = 4` creates a local name with the same spelling. That local assignment does not edit the global. `return score` sends the local value `4` back, so the first print is `4`. The second print reads the global name, which is still `10`.

**Why other options are wrong:**
- Option 1: The global would become `4` only if `bump` contained `global score` before the assignment.
- Option 3: The function returns the local `4`, so the first line is not the global `10`.
- Option 4: `return score` is present, so the first print is `4`, not `None`.

## Q2 (MCQ, Easy)

What is printed on the last line?

```python
total = 0

def add(amount):
    global total
    total = total + amount
    return total

print(add(5))
print(add(3))
print(total)
```

**Options:**
1. `0`
2. `5`
3. `3`
4. `8`

**Correct:** 4

**Answer Explanation:**
`global total` tells Python to update the global name. `add(5)` sets `total` to `0 + 5`, which is `5`. `add(3)` sets `total` to `5 + 3`, which is `8`. The last print reads that same global, so it prints `8`.

**Why other options are wrong:**
- Option 1: `0` is only the value before either call runs.
- Option 2: `5` is the total after the first call, before `3` is added.
- Option 3: `3` is the second argument. The stored total is `5 + 3`.

## Q3 (MCQ, Easy)

What does this call print?

```python
def add_all(*args):
    total = 0
    for n in args:
        total = total + n
    return total

print(add_all(2, 3, 4))
```

**Options:**
1. `9`
2. `2`
3. `(2, 3, 4)`
4. `None`

**Correct:** 1

**Answer Explanation:**
`*args` collects the positional values `2`, `3`, and `4`. The loop starts at `0`, then adds `2` to make `2`, adds `3` to make `5`, and adds `4` to make `9`. `return total` sends `9` back, and that is what is printed.

**Why other options are wrong:**
- Option 2: `2` is only the first value, before `3` and `4` are added.
- Option 3: The function returns the sum. It does not return the bundle of arguments.
- Option 4: The function has a `return`, so the printed result is not `None`.

## Q4 (MCQ, Easy)

What does this call print?

```python
double = lambda n: n * 2
print(double(7))
```

**Options:**
1. `lambda n: n * 2`
2. `None`
3. `14`
4. `7`

**Correct:** 3

**Answer Explanation:**
A lambda's result is the value of the expression after the colon. `double(7)` evaluates `7 * 2`, which is `14`. The call uses parentheses, the same way a function defined with `def` is called.

**Why other options are wrong:**
- Option 1: The call runs the lambda. It does not print the lambda expression as text.
- Option 2: The expression is the result. A missing `return` keyword does not make a lambda return `None`.
- Option 4: `7` is the argument. The expression multiplies that argument by `2`.

## Q5 (MCQ, Moderate)

What does this call print?

```python
def report(code, *args):
    total = 0
    for n in args:
        total = total + n
    return str(total)

print(report("X", 4, 6))
```

**Options:**
1. `X`
2. `10`
3. `X10`
4. `46`

**Correct:** 2

**Answer Explanation:**
`"X"` fills the required parameter `code`. The star collects only the later positional values, so `args` holds `4` and `6`. The loop adds those numbers: `4 + 6` is `10`. `str(total)` produces the text `"10"`, and the print shows `10`. The value in `code` is never joined onto that text.

**Why other options are wrong:**
- Option 1: `"X"` is stored in `code`, but the returned value is the sum of `args`.
- Option 3: The `return` line does not concatenate `code` with the total.
- Option 4: Gluing the digits `4` and `6` would be text joining. This loop adds the numbers.

## Q6 (MCQ, Moderate)

What does this call print?

```python
def fact(n):
    if n == 0:
        return 1
    return n * fact(n - 1)

print(fact(3))
```

**Options:**
1. `0`
2. `3`
3. `1`
4. `6`

**Correct:** 4

**Answer Explanation:**
`fact(3)` calls `fact(2)`, which calls `fact(1)`, which calls `fact(0)`. `fact(0)` matches the base case, returns `1`, and does not call `fact` again. On the way back, `fact(1)` returns `1 * 1`, which is `1`. `fact(2)` returns `2 * 1`, which is `2`. `fact(3)` returns `3 * 2`, which is `6`.

**Why other options are wrong:**
- Option 1: The base case returns `1`. A base case of `0` would force every product above it to `0`.
- Option 2: `3` is the starting argument. The printed result is `3` multiplied by `fact(2)`.
- Option 3: `1` is what `fact(0)` and `fact(1)` return. `fact(3)` still multiplies by `3` and by `2`.

## Q7 (MSQ, Moderate)

Select every correct statement about this code.

```python
fee = 20

def show():
    print(fee)

def change():
    fee = 5
    return fee
```

**Options:**
1. `show()` prints `20` because it reads the global `fee` and does not assign to `fee`.
2. `change()` updates the global `fee` to `5`.
3. After `result = change()`, the global `fee` is still `20`.
4. A name assigned inside a function is local unless `global` names that same variable.

**Correct:** 1, 3, 4

**Answer Explanation:**
`show` never assigns to `fee`, so Python uses the global value `20`. `change` does assign `fee = 5`, and it has no `global` line, so that assignment creates a local `fee`. The returned local value is `5`, while the global `fee` stays `20`. Option 4 states that same rule: an assignment inside a function creates a local name unless `global` is used.

**Why other options are wrong:**
- Option 2: `change` does not declare `global fee`. The assignment creates a separate local name and leaves the global at `20`.

## Q8 (MSQ, Moderate)

Select every correct statement.

```python
show = lambda a, b: a + b

def note(**kwargs):
    for label in kwargs:
        print(label)
        print(kwargs[label])
```

**Options:**
1. `show(2, 3)` returns `5`, because the expression after the colon is the result.
2. A lambda must include the keyword `return`, or the call returns `None`.
3. `note(city="Pune", code=4)` prints each label and then the value stored under that label.
4. `**kwargs` collects extra positional numbers in the same way `*args` does.

**Correct:** 1, 3

**Answer Explanation:**
`show(2, 3)` evaluates `2 + 3`, which is `5`. That expression is the lambda result, with no `return` keyword. `note` collects keyword arguments. For the call shown, the loop first uses the label `city` and the value `"Pune"`, then the label `code` and the value `4`. `kwargs[label]` is how each value is fetched.

**Why other options are wrong:**
- Option 2: A lambda does not use `return`. The expression after the colon is the result.
- Option 4: `*args` collects extra positional values. `**kwargs` collects named extras written as `name=value`.

## Q9 (MSQ, Hard)

Select every correct statement.

```python
def countdown(n):
    if n == 0:
        print("Done")
        return
    print(n)
    countdown(n - 1)

def bad(n):
    print(n)
    bad(n - 1)
```

**Options:**
1. `countdown(2)` prints `2`, then `1`, then `Done`.
2. `if n == 0` is the base case of `countdown` because that branch does not call `countdown` again.
3. `bad(2)` prints `2`, `1`, and `0`, then stops because the argument became `0`.
4. A recursive call chain that never reaches a base case ends with `RecursionError`.

**Correct:** 1, 2, 4

**Answer Explanation:**
`countdown(2)` prints `2` and calls `countdown(1)`. That call prints `1` and calls `countdown(0)`. The call with `0` prints `Done` and returns, so the chain stops. The `if n == 0` branch is the base case because it does not call `countdown`. `bad` has no such branch. Each call prints `n` and calls `bad(n - 1)`, including `0` and negative numbers, until the chain is too long and Python raises `RecursionError`.

**Why other options are wrong:**
- Option 3: Reaching `0` does not stop `bad`, because nothing returns before the next call. The calls continue past `0`.

## Q10 (MSQ, Hard)

Select every correct statement.

```python
box = 9

def take(*args):
    total = 0
    for n in args:
        total = total + n
    return total

def set_box(value):
    global box
    box = value

triple = lambda n: n * 3
```

**Options:**
1. `take()` returns `0` because the loop never runs.
2. After `set_box(2)`, the global `box` is still `9`.
3. `triple(4)` returns `12`, and the lambda does not use the keyword `return`.
4. `take(1, "2")` adds the two arguments and returns `3`.

**Correct:** 1, 3

**Answer Explanation:**
`take()` receives no positional extras, so the loop body never runs and the returned total stays `0`. `triple(4)` evaluates `4 * 3`, which is `12`. A lambda returns that expression without a `return` keyword.

**Why other options are wrong:**
- Option 2: `set_box` declares `global box` before assigning, so the global `box` becomes `2`.
- Option 4: `1` is a number and `"2"` is text. Adding them raises `TypeError`. The call does not return `3`.
