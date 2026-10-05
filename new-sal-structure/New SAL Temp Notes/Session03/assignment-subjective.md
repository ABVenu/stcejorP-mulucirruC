# Assignment Subjective

## Task

Call tokens with for, then pack copies with while, using if and else inside each loop.

1. Use a for loop and range() to visit the numbers 1 through 5. The stop value must be one past 5.
2. Inside that loop, if the number is 3, print Closed.
3. Otherwise print the number.
4. After the for loop, print Window shut once.
5. Store copies = 4.
6. Use a while loop that repeats while copies > 0.
7. Inside the while loop, if copies is 2, print Hold. Otherwise print copies.
8. On every pass, including the Hold pass, run copies -= 1 under the while, not only under else.
9. After the while loop, print Packed once.
10. Do not stop either loop early. Every planned value is still visited.

Sample input: none. The program reads no input.

Expected output:

```
1
2
Closed
4
5
Window shut
4
3
Hold
1
Packed
```

There is no input. The expected output above is the full screen.

Constraints:

- Use one .py file.
- The program reads no input.
- Use if and else inside the loops. Do not use break, continue, a nested loop, or a function.

### Submission Instruction
- Code all the points in VS Code in a single .py file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

range(1, 6) visits 1, 2, 3, 4, and 5. Number 3 prints Closed. The other numbers print themselves. Window shut is outside the for loop, so it prints once. copies then prints 4 and 3, prints Hold when it is 2, and prints 1. The subtraction sits under while, so the Hold pass still moves copies from 2 to 1. When copies becomes 0 the loop ends and Packed prints.

```python
for number in range(1, 6):
    if number == 3:
        print("Closed")
    else:
        print(number)
print("Window shut")
copies = 4
while copies > 0:
    if copies == 2:
        print("Hold")
    else:
        print(copies)
    copies -= 1
print("Packed")
```

Alternative approach: The token section can be a while that starts at 1, prints with the same if and else, and adds 1 until the value passes 5. The copy section can be a while that starts at 4 and subtracts 1, which is the version already used. Swapping which section uses for and which uses while still prints the same lines when every planned value is visited.
