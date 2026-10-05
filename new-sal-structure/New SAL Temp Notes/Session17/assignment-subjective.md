# Assignment Subjective

## Task

Use this grid. E1 holds the pass mark 40. B5 is empty on purpose.

|  | A | B | C | E |
| --- | --- | --- | --- | --- |
| 1 | Student | Marks | Result | 40 |
| 2 | Lata | 40 |  |  |
| 3 | Om | 39 |  |  |
| 4 | Priya | 80 |  |  |
| 5 | Dev |  |  |  |

Question 1. Write one formula for B6 that adds the marks in B2:B5.
Question 2. What number does that formula return?
Question 3. Write one formula for B7 that returns the average of the numbers in B2:B5.
Question 4. What number does that average formula return?
Question 5. Write one formula that counts how many cells in B2:B5 contain a number.
Question 6. What number does that count formula return?
Question 7. Write one formula that counts how many cells in A2:A5 are not empty, and state the number it returns.
Question 8. Write one IF formula for C2 that returns Pass when B2 is greater than or equal to E1, and Fail otherwise. Lock E1 so a fill down keeps that cell.
Question 9. That IF formula is filled down to C5. State what C5 displays, and state which mark cell the formula in C5 uses.
Question 10. Write one formula for the highest mark in B2:B5, and state the number it returns.

### Submission Instruction

- Type the answer in the answer box

## Answer Explanation

### Ideal answers

Question 1. =SUM(B2:B5)
Question 2. 159
Question 3. =AVERAGE(B2:B5)
Question 4. 53
Question 5. =COUNT(B2:B5)
Question 6. 3
Question 7. =COUNTA(A2:A5), which returns 4
Question 8. =IF(B2>=$E$1,"Pass","Fail")
Question 9. C5 displays Fail. The formula in C5 uses B5.
Question 10. =MAX(B2:B5), which returns 80

### Walkthrough

The marks that are numbers are 40, 39, and 80. Dev's B5 is blank.

40 + 39 + 80 = 159, so SUM returns 159. The blank adds nothing.

AVERAGE ignores the blank and divides by 3, not by 4. 159 / 3 = 53.

COUNT counts numeric cells, so it returns 3. COUNTA on A2:A5 counts Lata, Om, Priya, and Dev, so it returns 4. Names are text, which COUNT would not count.

The IF test uses >=, so Lata's 40 passes. Om's 39 fails. An empty B5 fails the test, so C5 displays Fail. B2 is relative, so the filled formula on row 5 reads B5. $E$1 stays locked on the pass mark.

MAX ignores the blank and returns 80. MIN on the same range would return 39, because 0 was not typed.

Place the total outside B2:B5. A SUM in B6 that includes B6 itself would be a circular reference.

### Alternative

=B2+B3+B4+B5 also returns 159, because addition treats the blank B5 as 0. =SUM(B2,B3,B4,B5) returns 159 as well.

=IF(B2<$E$1,"Fail","Pass") is another valid formula for C2. It swaps the two results and the comparison, and it still returns Pass for Lata and Fail for an empty B5.
