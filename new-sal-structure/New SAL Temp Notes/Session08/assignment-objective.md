# Assignment Objective

## Q1 (MCQ, Easy)

What do these two prints display?

```python
slip = (78, "Pass")
print(slip[0])
print(len(slip))
```

**Options:**
1. `78` and `2`
2. `Pass` and `2`
3. `78` and `1`
4. `78` and `Pass`

**Correct:** 1

**Answer Explanation:**
Index `0` of the tuple is `78`. `len` counts the items in the pack, and this pack has two items, so the second print is `2`.

**Why other options are wrong:**
- Option 2: `Pass` is index `1`, not index `0`.
- Option 3: The tuple has two items. A length of `1` would need a one-item tuple such as `(78,)`.
- Option 4: The second print is `len(slip)`, not `slip[1]`.

## Q2 (MCQ, Easy)

What do these two prints display?

```python
only_marks = (78,)
not_a_tuple = (78)
print(len(only_marks))
print(not_a_tuple)
```

**Options:**
1. `78` and `78`
2. `1` and `78`
3. `2` and `78`
4. `1` and `(78,)`

**Correct:** 2

**Answer Explanation:**
The trailing comma in `(78,)` makes a one-item tuple, so its length is `1`. Parentheses around `78` with no comma do not make a tuple. `not_a_tuple` is the number `78`.

**Why other options are wrong:**
- Option 1: `len(only_marks)` counts items. It does not print the number stored inside the tuple.
- Option 3: The one-item tuple has length `1`, not `2`.
- Option 4: `not_a_tuple` prints as `78`. It is not the tuple `(78,)`.

## Q3 (MCQ, Easy)

What does this print display?

```python
rolls = {"CS01", "EC02", "CS01"}
print(len(rolls))
```

**Options:**
1. `3`
2. `1`
3. `2`
4. `0`

**Correct:** 3

**Answer Explanation:**
A set keeps each value once. `"CS01"` is written twice and stored once. Together with `"EC02"`, the set has two items, so `len` is `2`.

**Why other options are wrong:**
- Option 1: The written duplicate does not create a second `"CS01"`.
- Option 2: `"EC02"` is a different value, so it stays in the set.
- Option 4: The set is not empty. Two unique values were stored.

## Q4 (MCQ, Easy)

What do these two prints display?

```python
upi = {"payer": "Ananya", "amount": 250}
print(upi.get("note", "No note"))
print(upi.get("amount", 0))
```

**Options:**
1. `None` and `0`
2. `No note` and `0`
3. `Ananya` and `250`
4. `No note` and `250`

**Correct:** 4

**Answer Explanation:**
`"note"` is missing, so `get` returns the fallback `"No note"`. `"amount"` is present, so `get` returns `250` and does not use the fallback `0`.

**Why other options are wrong:**
- Option 1: The first call passes a fallback, so a missing key returns `"No note"`, not `None`. The second key exists, so it does not return `0`.
- Option 2: The fallback `0` is used only when `"amount"` is missing. That key is present.
- Option 3: The first call looks up `"note"`, not `"payer"`.

## Q5 (MCQ, Moderate)

What do these two prints display?

```python
token_and_bill = 14, 40
token, bill = token_and_bill
print(token)
print(bill)
```

**Options:**
1. `40` and `14`
2. `14` and `40`
3. `(14, 40)` and `(14, 40)`
4. `14` and `None`

**Correct:** 2

**Answer Explanation:**
The comma packs `14` and `40` into one tuple. Unpacking copies those items into names in the same order, so `token` is `14` and `bill` is `40`.

**Why other options are wrong:**
- Option 1: Unpacking follows the stored order. It does not swap the two values.
- Option 3: Each name receives one item from the tuple, not the whole tuple.
- Option 4: Both items are unpacked. `bill` receives `40`.

## Q6 (MCQ, Moderate)

What do these three prints display, in order?

```python
canteen = {"Riya", "Arjun", "Meera"}
library = {"Meera", "Kabir"}
print(len(canteen & library))
print(len(canteen | library))
print(len(canteen - library))
```

**Options:**
1. `1`, `4`, and `2`
2. `1`, `5`, and `2`
3. `2`, `4`, and `2`
4. `1`, `4`, and `3`

**Correct:** 1

**Answer Explanation:**
`&` keeps names in both sets. Only `Meera` is shared, so the length is `1`. `|` keeps each unique name from either set: `Riya`, `Arjun`, `Meera`, and `Kabir`, so the length is `4`. `-` keeps canteen names that are not in library: `Riya` and `Arjun`, so the length is `2`.

**Why other options are wrong:**
- Option 2: The union does not keep a second `Meera`. Its length is `4`, not `5`.
- Option 3: The intersection has one name, not two.
- Option 4: The difference drops `Meera` because `Meera` is also in `library`. Its length is `2`, not `3`.

## Q7 (MSQ, Moderate)

Select every correct statement.

**Options:**
1. Assigning `slip[0] = 80` when `slip = (78, "Pass")` raises `TypeError`.
2. `(78)` is a one-item tuple of length `1`.
3. `set()` creates an empty set, and `{}` creates an empty dictionary.
4. Calling `add` again with a value that is already in the set does not increase `len`.

**Correct:** 1, 3, 4

**Answer Explanation:**
A tuple cannot have an item replaced, so `slip[0] = 80` raises `TypeError`. Empty curly braces are a dictionary. An empty set is written `set()`. `add` inserts a value only when that value is not already present, so a duplicate leaves the length unchanged.

**Why other options are wrong:**
- Option 2: `(78)` is the number `78` grouped in parentheses. A one-item tuple needs the trailing comma, as in `(78,)`.

## Q8 (MSQ, Moderate)

Select every correct statement about this code.

```python
marks = {"Maths": 78, "Science": 86}
extra = {"Science": 90, "English": 91}
marks.update(extra)
```

**Options:**
1. After `update`, `marks["Science"]` is `90`.
2. After `update`, `marks["Maths"]` is removed.
3. After `update`, `len(marks)` is `3`.
4. `marks.get("English")` raises `KeyError`.

**Correct:** 1, 3

**Answer Explanation:**
`update` writes pairs from `extra` into `marks`. The shared key `"Science"` takes the new value `90`. `"English"` is new, so it is added. `"Maths"` is not in `extra`, so it stays `78`. The keys are `Maths`, `Science`, and `English`, and the length is `3`.

**Why other options are wrong:**
- Option 2: A missing key in `extra` does not delete that key from `marks`. `"Maths"` remains `78`.
- Option 4: After the update, `"English"` is present. `get` returns `91`. `get` also does not raise `KeyError` for a missing key.

## Q9 (MSQ, Hard)

Select every correct statement.

```python
def token_bill(plates):
    amount = plates * 40
    return plates, amount

got_plates, got_amount = token_bill(3)
paid = set()
paid.add("CS01")
paid.add("CS01")
```

**Options:**
1. `got_plates` is `3` and `got_amount` is `120`.
2. `return plates, amount` packs one tuple for the caller.
3. `len(paid)` is `2` because `add` ran twice.
4. `paid[0]` raises `TypeError` because a set has no index.

**Correct:** 1, 2, 4

**Answer Explanation:**
`token_bill(3)` computes `3 * 40`, which is `120`, and `return plates, amount` packs `(3, 120)`. Unpacking stores `3` in `got_plates` and `120` in `got_amount`. The second `add("CS01")` does not create a second copy. A set has no index, so `paid[0]` raises `TypeError`.

**Why other options are wrong:**
- Option 3: Both calls add the same value. The set length is `1`, not `2`.

## Q10 (MSQ, Hard)

Select every correct statement.

```python
fees = {"Tuition": 40000, "Mess": 2500}
total = 0
for head, amount in fees.items():
    total = total + amount
```

**Options:**
1. The loop gives `head` a key and leaves `amount` unset.
2. After the loop, `total` is `42500`.
3. `list(fees.keys())` contains `Tuition` and `Mess`.
4. `fees["Hostel"]` returns `None` when that key is missing.

**Correct:** 2, 3

**Answer Explanation:**
`items` yields each pair, and the `for` line unpacks that pair into `head` and `amount`. The amounts are `40000` and `2500`, so `total` becomes `42500`. `keys` yields the labels `Tuition` and `Mess`.

**Why other options are wrong:**
- Option 1: `fees.items()` supplies both the key and the value on every pass. `amount` is set to `40000` and then to `2500`.
- Option 4: Square brackets on a missing key raise `KeyError`. A fallback of `None` comes from `get` when no second argument is passed, not from `fees["Hostel"]`.
