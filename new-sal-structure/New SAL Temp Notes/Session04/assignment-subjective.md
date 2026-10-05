# Assignment Subjective

## Task

Skip one day, skip one stall, then stop a number loop after 4.

1. Use an outer for loop for day in range(1, 4), so the days are 1, 2, and 3.
2. If day == 2, use continue so the inner loop does not run on that day.
3. Use an inner for loop for stall in range(1, 4), so the stalls are 1, 2, and 3.
4. If stall == 3, use continue so that stall is not printed.
5. Otherwise print day and stall on one line, with a space between them.
6. After both loops, use for number in range(1, 7).
7. Print number, then if number == 4 use break.
8. After that loop, print Done.
9. Day 2 must not print any stall. Days 1 and 3 must still print stalls 1 and 2.
10. Numbers 5 and 6 must not be printed.

Sample input: none. The program reads no input.

Expected output:

```
1 1
1 2
3 1
3 2
1
2
3
4
Done
```

There is no input. The expected output above is the full screen.

Constraints:

- Use one .py file.
- The program reads no input.
- Use break, continue, and one nested loop. Do not use a function.

### Submission Instruction
- Code all the points in VS Code in a single .py file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

Day 1 runs the inner loop: stall 1 prints 1 1, stall 2 prints 1 2, and stall 3 continues. Day 2 continues before the inner loop, so no stall line uses day 2. Day 3 prints 3 1 and 3 2, then skips stall 3. The second loop prints 1, 2, 3, and 4, then break stops it before 5 and 6. Done is outside that loop, so it still prints.

```python
for day in range(1, 4):
    if day == 2:
        continue
    for stall in range(1, 4):
        if stall == 3:
            continue
        print(day, stall)
for number in range(1, 7):
    print(number)
    if number == 4:
        break
print("Done")
```

Alternative approach: The number loop can be a while that starts at 1, prints, breaks when the value is 4, and otherwise adds 1. The day and stall output can stay in the nested for loops. The printed lines stay the same because the outer continue still skips day 2 and the inner continue still skips stall 3.
