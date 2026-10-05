# Assignment Objective

## Q1 (MCQ, Easy)

What do these two prints display?

```python
token = "T14"
print(token[0])
print(token[-1])
```

**Options:**
1. `T` and `1`
2. `T` and `4`
3. `1` and `4`
4. `T14` and `4`

**Correct:** 2

**Answer Explanation:**
Index `0` is the first character, `T`. Index `-1` counts from the right, so it is the last character, `4`.

**Why other options are wrong:**
- Option 1: `1` is index `1`, not the last character.
- Option 3: The first print is index `0`, which is `T`, not `1`.
- Option 4: `token[0]` is one character. It is not the whole string `T14`.

## Q2 (MCQ, Easy)

What do these two prints display?

```python
roll = "CS24018"
print(roll[0:2])
print(len(roll))
```

**Options:**
1. `CS` and `7`
2. `CS2` and `7`
3. `C` and `6`
4. `CS24` and `8`

**Correct:** 1

**Answer Explanation:**
A slice `start:stop` keeps indexes from `start` up to, but not including, `stop`. `roll[0:2]` keeps indexes `0` and `1`, which are `C` and `S`. `CS24018` has seven characters, so `len(roll)` is `7`.

**Why other options are wrong:**
- Option 2: Index `2` is the character `2`, and the stop index is not included.
- Option 3: `roll[0]` alone would be `C`. The slice takes two characters, and the length is `7`, not `6`.
- Option 4: `CS24` would need a stop past index `4`. The length is `7`, so the last index is `6`, not `8`.

## Q3 (MCQ, Easy)

What do these two prints display?

```python
item = "  Tea  "
cleaned = item.strip()
print(cleaned)
print(item)
```

**Options:**
1. `Tea` and then `Tea`
2. `Tea` and then `  Tea  `
3. `tea` and then `  Tea  `
4. `TEA` and then `Tea`

**Correct:** 2

**Answer Explanation:**
`strip` returns a new string with spaces removed from both ends, so `cleaned` is `Tea`. The original `item` is unchanged, so the second print still has two spaces, `Tea`, and two spaces.

**Why other options are wrong:**
- Option 1: The second print reads `item`, which `strip` did not edit.
- Option 3: `strip` does not change letter case. `Tea` stays `Tea`.
- Option 4: This code does not call `upper`. The first result is `Tea`, and the original still has its end spaces.

## Q4 (MCQ, Easy)

What do these two prints display?

```python
order = ["tea", "samosa"]
order.append("water")
print(order[0])
print(len(order))
```

**Options:**
1. `tea` and `2`
2. `water` and `3`
3. `tea` and `3`
4. `samosa` and `2`

**Correct:** 3

**Answer Explanation:**
`append` adds `"water"` at the end of the same list. Index `0` is still `"tea"`. The list now has three items, so `len(order)` is `3`.

**Why other options are wrong:**
- Option 1: The length was `2` before `append`. After the call it is `3`.
- Option 2: `"water"` is the new last item, at index `2`, not index `0`.
- Option 4: `"samosa"` is index `1`. The length is no longer `2`.

## Q5 (MCQ, Moderate)

What do these two prints display?

```python
bill = "Rs 40"
updated = bill.replace("Rs", "INR")
print(updated)
print(bill)
```

**Options:**
1. `INR 40` and `INR 40`
2. `INR 40` and `Rs 40`
3. `Rs 40` and `INR 40`
4. `Rs 40` and `Rs 40`

**Correct:** 2

**Answer Explanation:**
`replace` returns a new string. `updated` holds `INR 40`. `bill` was not assigned again, so it still holds `Rs 40`.

**Why other options are wrong:**
- Option 1: `replace` does not edit `bill` in place. The second print is the original text.
- Option 3: The first print is the stored return value, `INR 40`, not the original.
- Option 4: The return value was stored in `updated` and printed. That line is `INR 40`.

## Q6 (MCQ, Moderate)

What do these three prints display, in order?

```python
queue = ["Ana", "Ben", "Cara"]
gone = queue.pop(0)
queue.remove("Ben")
print(gone)
print(queue[0])
print(len(queue))
```

**Options:**
1. `Ben`, `Ana`, and `2`
2. `Ana`, `Ben`, and `2`
3. `Cara`, `Ana`, and `2`
4. `Ana`, `Cara`, and `1`

**Correct:** 4

**Answer Explanation:**
`pop(0)` removes index `0` and returns it, so `gone` is `Ana` and the list is `["Ben", "Cara"]`. `remove("Ben")` deletes the first matching value, leaving `["Cara"]`. `queue[0]` is `Cara`, and `len(queue)` is `1`.

**Why other options are wrong:**
- Option 1: `pop(0)` returns `Ana`, not `Ben`. `Ben` is removed afterward by `remove`.
- Option 2: After both edits, index `0` is `Cara`. `Ben` is no longer in the list, and the length is `1`.
- Option 3: `Cara` is what remains at index `0`. It is not the value returned by `pop(0)`.

## Q7 (MSQ, Moderate)

Select every correct statement.

```python
text = "  Hi  "
parts = "78 86".split(" ")
```

**Options:**
1. `text.strip()` returns `Hi`, and `text` itself stays `  Hi  `.
2. `text.upper()` returns `  HI  `, with the end spaces still present.
3. `parts` is `["78", "86"]`, and each piece is a string.
4. `text[0] = "A"` replaces the first character of `text`.

**Correct:** 1, 2, 3

**Answer Explanation:**
`strip` returns a new string, `Hi`, and leaves `text` unchanged. `upper` also returns a new string. The capitals become `HI`, and the two spaces on each end remain. `split(" ")` cuts on each space, so the pieces are the strings `"78"` and `"86"`.

**Why other options are wrong:**
- Option 4: A string is immutable. Assigning to `text[0]` raises `TypeError`.

## Q8 (MSQ, Moderate)

Select every correct statement.

```python
marks = [70, 80, 90]
marks[1] = 85
first = marks[0:2]
```

**Options:**
1. After `marks[1] = 85`, `marks` is `[70, 85, 90]`.
2. `first` is `[70, 85]`, and the slice does not remove those items from `marks`.
3. `marks = marks.append(88)` stores the longer list in `marks`.
4. `len(marks)` counts the digits inside the numbers.

**Correct:** 1, 2

**Answer Explanation:**
Lists are mutable, so `marks[1] = 85` replaces `80` in the same list. The slice `marks[0:2]` copies indexes `0` and `1` into a new list, `[70, 85]`. `marks` still holds all three items.

**Why other options are wrong:**
- Option 3: `append` edits the list and returns `None`. Assigning that return value would replace `marks` with `None`.
- Option 4: `len` on a list counts items. Here that count is `3`.

## Q9 (MSQ, Hard)

Select every correct statement.

```python
subjects = ["Maths", "Science"]
line = ", ".join(subjects)
queue = ["Riya", "Arjun"]
queue.insert(0, "Kabir")
```

**Options:**
1. `line` is `Maths, Science`.
2. `join` places the separator after the last item as well as between items.
3. After `insert`, `queue[0]` is `Kabir` and `queue[1]` is `Riya`.
4. `", ".join([1, 2])` raises `TypeError` because those items are not strings.

**Correct:** 1, 3, 4

**Answer Explanation:**
The separator `", "` is placed between the two subject strings, so `line` is `Maths, Science`. `insert(0, "Kabir")` puts Kabir at index `0` and shifts Riya to index `1`. `join` can glue strings only. The numbers `1` and `2` cause `TypeError`.

**Why other options are wrong:**
- Option 2: `join` puts the separator between items. It does not add a separator after the last item.

## Q10 (MSQ, Hard)

Select every correct statement.

```python
raw = "  tea  "
item = raw.strip().upper()
order = [item]
order.append("SAMOSA")
order.insert(1, "WATER")
slip = " | ".join(order)
```

**Options:**
1. `item` is `TEA`, and `raw` is still `  tea  `.
2. After the list edits, `order` is `["WATER", "TEA", "SAMOSA"]`.
3. `slip` is `TEA | WATER | SAMOSA`, and `order` is still a list of three strings.
4. `len(order)` is `2` because `insert` replaces the item at index `1`.

**Correct:** 1, 3

**Answer Explanation:**
`strip` produces `tea`, and `upper` produces `TEA`. Those methods return new strings, so `raw` still has its end spaces. The list starts as `["TEA"]`, `append` makes `["TEA", "SAMOSA"]`, and `insert(1, "WATER")` makes `["TEA", "WATER", "SAMOSA"]`. `join` returns one new string and does not replace the list.

**Why other options are wrong:**
- Option 2: `insert(1, "WATER")` places `WATER` between `TEA` and `SAMOSA`. It does not move `TEA` off index `0`.
- Option 4: `insert` adds an item. The length goes from `2` after `append` to `3` after `insert`.
