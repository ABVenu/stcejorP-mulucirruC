# Assignment Objective

## Q1 (MCQ, Easy)

What does this code display?

```python
for token in range(1, 6):
    print(token)
    if token == 3:
        break
print("Window shut")
```

**Options:**
1. 1, 2, 3, 4, 5, and then Window shut
2. 1, 2, and then Window shut
3. Window shut only
4. 1, 2, 3, and then Window shut

**Correct:** 4

**Answer Explanation:**
The loop prints 1, then 2, then 3. When token is 3, break ends that loop before 4 and 5 are visited. Window shut is outside the loop, so it still prints.

**Why other options are wrong:**
- Option 1: break stops the remaining passes. 4 and 5 are never visited.
- Option 2: 3 is printed before the if, so the break happens after 3 is already on the screen.
- Option 3: The condition is false for 1 and 2, so those prints run, and 3 prints before the break.

## Q2 (MCQ, Easy)

What does this code display?

```python
for roll in range(1, 5):
    if roll == 2:
        continue
    print(roll)
```

**Options:**
1. 1, 3, and 4
2. 1, 2, 3, and 4
3. 1 only
4. 1 and 2

**Correct:** 1

**Answer Explanation:**
continue skips the rest of the current pass. Roll 2 never reaches print. The loop does not end, so 3 and 4 still print. The screen is 1, 3, 4.

**Why other options are wrong:**
- Option 2: Roll 2 hits continue before print, so 2 is not displayed.
- Option 3: continue does not end the loop. Later rolls still get a pass.
- Option 4: 2 is not printed, and the loop continues through 3 and 4.

## Q3 (MCQ, Easy)

What does this code display?

```python
for token in range(1, 6):
    if token == 3:
        break
    print(token)
```

**Options:**
1. 1, 2, and 3
2. 1, 2, 4, and 5
3. 1 and 2
4. 1, 2, 3, 4, and 5

**Correct:** 3

**Answer Explanation:**
Tokens 1 and 2 fail the if, so they print. Token 3 hits break before print, so 3 is not printed and 4 and 5 are never visited.

**Why other options are wrong:**
- Option 1: The break is above the print, so 3 is not shown.
- Option 2: That screen is what continue would produce. break ends the loop instead of skipping one value.
- Option 4: The loop stops at token 3. Later values do not run.

## Q4 (MCQ, Easy)

What does this code display?

```python
for coach in range(1, 3):
    for berth in range(1, 3):
        print(coach, berth)
```

**Options:**
1. 1 1 and then 2 2
2. 1 1, 1 2, 2 1, and 2 2
3. 1 2 and then 2 1
4. 1 1, 1 2, 1 3, 2 1, 2 2, and 2 3

**Correct:** 2

**Answer Explanation:**
The inner loop runs all of its passes for each outer pass. Coach 1 prints 1 1 and 1 2. Coach 2 starts the inner loop again and prints 2 1 and 2 2.

**Why other options are wrong:**
- Option 1: Each coach has two berths, so there are four lines, not two.
- Option 3: The inner loop starts at berth 1 for each coach. It does not start at berth 2.
- Option 4: range(1, 3) stops before 3, so berth 3 is not visited.

## Q5 (MCQ, Moderate)

What does this code display?

```python
for coach in range(1, 3):
    for berth in range(1, 4):
        if berth == 2:
            break
        print(coach, berth)
```

**Options:**
1. 1 1 and 1 2
2. 1 1 only
3. 1 1, 1 2, 2 1, and 2 2
4. 1 1 and 2 1

**Correct:** 4

**Answer Explanation:**
break is indented in the inner loop, so it stops only that inner loop. Coach 1 prints 1 1 and then breaks at berth 2. The outer loop continues, and coach 2 prints 2 1 before its own inner break.

**Why other options are wrong:**
- Option 1: Berth 2 triggers break before the print, so 1 2 is not shown, and coach 2 still runs.
- Option 2: The outer loop is not broken. Coach 2 starts a new inner loop.
- Option 3: Berth 2 and berth 3 do not print. The inner break happens at berth 2.

## Q6 (MCQ, Moderate)

What does this code display?

```python
roll = 1
while roll <= 4:
    current = roll
    roll += 1
    if current == 2:
        continue
    print(current)
```

**Options:**
1. 1, 3, and 4
2. 1, 2, 3, and 4
3. 2 forever
4. 1 and 2

**Correct:** 1

**Answer Explanation:**
roll increases before continue, so the next check sees a larger number. current holds the roll being judged. current 2 is skipped, and 1, 3, and 4 are printed.

**Why other options are wrong:**
- Option 2: current 2 hits continue before print, so 2 is not displayed.
- Option 3: The update is above continue, so roll does not stay 2.
- Option 4: After the skipped pass the loop still prints 3 and 4.

## Q7 (MSQ, Moderate)

Which statements are true?

**Options:**
1. break ends the loop that immediately contains it
2. break skips one pass and then continues the same loop
3. continue skips the rest of the current pass and starts the next pass of the same loop
4. continue ends the whole file

**Correct:** 1, 3

**Answer Explanation:**
break finishes the loop that contains it, and the first line after that loop can still run. continue leaves the rest of this pass unused and comes back for the next value of the same loop.

**Why other options are wrong:**
- Option 2: Skipping one pass and continuing is what continue does. break does not start another pass of that loop.
- Option 4: continue does not stop the file. Later passes of the same loop can still run, and lines after the loop still run when the loop ends.

## Q8 (MSQ, Moderate)

Which statements are true?

**Options:**
1. In a while loop, an update written below continue still runs on the skipped pass
2. In a while loop, continue jumps back to the condition
3. A break in the inner loop always ends the outer loop too
4. A break indented inside the inner for stops only that inner loop

**Correct:** 2, 4

**Answer Explanation:**
continue in a while loop goes back to the condition, so lines under it on that pass do not run. Indentation decides which loop break belongs to. A break inside the inner for leaves the outer loop free to take its next pass.

**Why other options are wrong:**
- Option 1: Lines below continue are skipped on that pass. An update placed there does not run when continue is hit.
- Option 3: An inner break stops the inner loop only. The outer loop continues unless the break is indented in the outer loop.

## Q9 (MSQ, Hard)

Which statements are true about this code?

```python
for day in range(1, 3):
    for stall in range(1, 4):
        if stall == 3:
            continue
        print(day, stall)
```

**Options:**
1. Day 1 prints 1 1 and 1 2
2. Stall 3 prints nothing
3. Day 2 is skipped entirely
4. The screen is 1 1, 1 2, 2 1, 2 2

**Correct:** 1, 2, 4

**Answer Explanation:**
The inner continue skips the print for stall 3 and then the inner loop ends. Day 2 starts the inner loop again at stall 1, so it prints 2 1 and 2 2. The four printed lines are 1 1, 1 2, 2 1, and 2 2.

**Why other options are wrong:**
- Option 3: continue is on the inner loop. Day 2 still runs. Only stall 3 of that day is skipped.

## Q10 (MSQ, Hard)

Which statements are true about this code?

```python
parcel = 1
while parcel <= 2:
    for slip in range(1, 4):
        if slip == 2:
            break
        print(parcel, slip)
    parcel += 1
print("Packed")
```

**Options:**
1. The screen shows 1 1, then 2 1, then Packed
2. Slip 3 is printed for each parcel
3. The inner break does not cancel the outer while
4. Packed is skipped because break ran

**Correct:** 1, 3

**Answer Explanation:**
Each parcel prints slip 1 and then the inner break stops slips 2 and 3. parcel += 1 is under the while, after the inner loop, so parcel 2 still runs. Packed is outside both loops, so it prints after the while ends.

**Why other options are wrong:**
- Option 2: The inner loop breaks when slip is 2, before slip 3, and before any print of slip 2.
- Option 4: break ends the inner for only. The line after the while still runs.
