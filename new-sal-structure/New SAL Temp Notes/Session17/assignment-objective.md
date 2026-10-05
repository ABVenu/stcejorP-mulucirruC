# Assignment Objective

## Q1 (MCQ, Easy)

B2:B5 holds 72, 45, 38, and 91. A cell contains this text, with no equals sign:

SUM(B2:B5)

What does that cell show?

**Options:**
1. The text SUM(B2:B5)
2. 246
3. 61.5
4. #DIV/0!

**Correct:** 1

**Answer Explanation:**
The correct option is 1. A formula must start with =. Without it, Excel stores the characters as text and does not add the marks. The cell shows SUM(B2:B5), not 246.

**Why other options are wrong:**
- Option 2: 246 is 72 + 45 + 38 + 91, which is what =SUM(B2:B5) returns. The missing equals sign blocks that calculation.
- Option 3: 61.5 is the average, 246 / 4. This cell is not an AVERAGE formula, and it does not calculate.
- Option 4: #DIV/0! is what AVERAGE shows when a range contains no numbers. This cell is stored text.

## Q2 (MCQ, Easy)

What does =SUM(B2:B5) return?

|  | B |
| --- | --- |
| 2 | 72 |
| 3 | 45 |
| 4 | 38 |
| 5 | 91 |

**Options:**
1. 4
2. 61.5
3. 246
4. 91

**Correct:** 3

**Answer Explanation:**
The correct option is 3. SUM adds the numbers in B2:B5. 72 + 45 + 38 + 91 = 246. The cell displays 246, and the formula bar still shows =SUM(B2:B5).

**Why other options are wrong:**
- Option 1: 4 is how many numbers are in the range. That is what COUNT returns, not SUM.
- Option 2: 61.5 is 246 / 4, the average. SUM does not divide.
- Option 4: 91 is the largest mark. That is what MAX returns, not SUM.

## Q3 (MCQ, Easy)

What does COUNT count in a range?

**Options:**
1. Blank cells
2. Cells that contain text only
3. Only the largest number
4. Cells that contain a number

**Correct:** 4

**Answer Explanation:**
The correct option is 4. COUNT returns how many cells in the arguments contain a numeric value. Words and blank cells are not counted. A typed 0 is a number, so COUNT includes it.

**Why other options are wrong:**
- Option 1: Blank cells are skipped by COUNT. They are not what it counts.
- Option 2: Text such as Absent or a name is ignored by COUNT. COUNTA is the function that counts non-empty cells, including text.
- Option 3: The largest number is the job of MAX. COUNT returns how many numeric cells it found, not the biggest value.

## Q4 (MCQ, Easy)

Which reference stays on the same cell when the formula is filled down?

**Options:**
1. B2
2. $E$1
3. E2
4. B3

**Correct:** 2

**Answer Explanation:**
The correct option is 2. $E$1 locks both the column and the row. Filled down, it still means E1. A relative reference such as B2 shifts to B3 on the next row.

**Why other options are wrong:**
- Option 1: B2 has no dollar signs, so it is relative. On the next row it becomes B3.
- Option 3: E2 has no dollar signs, so the row number changes when the formula is filled down.
- Option 4: B3 is also a relative reference. It shifts with the row it is copied to.

## Q5 (MCQ, Moderate)

What does =AVERAGE(A1:A3) return?

|  | A |
| --- | --- |
| 1 | 72 |
| 2 |  |
| 3 | 48 |

**Options:**
1. 60
2. 40
3. 120
4. #DIV/0!

**Correct:** 1

**Answer Explanation:**
The correct option is 1. AVERAGE ignores blank cells. It uses 72 and 48 only, so (72 + 48) / 2 = 60. A blank is not treated as zero.

**Why other options are wrong:**
- Option 2: 40 would be the average if A2 held the number 0, because (72 + 0 + 48) / 3 = 40. This A2 is empty, so 0 is not included.
- Option 3: 120 is the sum of 72 and 48. AVERAGE divides that sum by how many numbers it found.
- Option 4: #DIV/0! appears when the range contains no numbers. This range contains two numbers.

## Q6 (MCQ, Moderate)

E1 holds 40. B4 holds 38. What does =IF(B4>=$E$1,"Pass","Fail") return?

**Options:**
1. Pass
2. 40
3. Fail
4. 38

**Correct:** 3

**Answer Explanation:**
The correct option is 3. The test is whether 38 is greater than or equal to 40. It is not, so IF returns the false result, Fail. The quotes make Pass and Fail text, and the quotes do not appear in the cell.

**Why other options are wrong:**
- Option 1: Pass is returned when the test is true. 38 is below 40, so the test is false. A mark of exactly 40 would pass, because the test uses >=.
- Option 2: 40 is the pass mark stored in E1. IF does not return the pass mark. It returns one of the two labels.
- Option 4: 38 is the mark being tested. The formula returns Fail, not the mark itself.

## Q7 (MSQ, Moderate)

Which statements are true?

|  | A |
| --- | --- |
| 1 | 72 |
| 2 | Absent |
| 3 |  |
| 4 | 15 |

**Options:**
1. =COUNT(A1:A4) returns 2
2. =COUNTA(A1:A4) returns 4
3. =SUM(A1:A4) returns 87
4. =COUNTA(A1:A4) returns 3

**Correct:** 1, 3, 4

**Answer Explanation:**
The correct options are 1, 3, and 4. COUNT counts numbers only, so 72 and 15 give 2. SUM adds those numbers and skips the word Absent and the blank cell, so 72 + 15 = 87. COUNTA counts cells that are not empty: 72, Absent, and 15, which is 3. The empty cell is skipped by both COUNT and COUNTA.

**Why other options are wrong:**
- Option 2: COUNTA does not return 4. A3 is empty, so it is not counted. The non-empty count is 3.

## Q8 (MSQ, Moderate)

E1 holds 40. C2 contains =IF(B2>=$E$1,"Pass","Fail"), and the formula is filled down through C4.

|  | B |
| --- | --- |
| 2 | 72 |
| 3 | 45 |
| 4 | 38 |

Which statements are true?

**Options:**
1. The formula in C4 still uses B2
2. C2 displays Pass
3. C4 displays Fail
4. $E$1 stays $E$1 in the filled formulas

**Correct:** 2, 3, 4

**Answer Explanation:**
The correct options are 2, 3, and 4. B2 is relative, so the fill writes B3 in C3 and B4 in C4. 72 is greater than or equal to 40, so C2 displays Pass. 38 is not, so C4 displays Fail. $E$1 is absolute, so every filled formula still reads E1.

**Why other options are wrong:**
- Option 1: C4 does not keep B2. B2 has no dollar signs, so it shifts to B4 when the formula reaches row 4.

## Q9 (MSQ, Hard)

B6 contains =SUM(B2:B6). Which statements are true?

|  | B |
| --- | --- |
| 2 | 72 |
| 3 | 0 |
| 4 | 48 |
| 5 |  |
| 6 | =SUM(B2:B6) |

**Options:**
1. =AVERAGE(B2:B4) returns 40
2. =MIN(B2:B4) returns 0
3. =MAX(B2:B5) returns 0
4. The formula in B6 is a circular reference

**Correct:** 1, 2, 4

**Answer Explanation:**
The correct options are 1, 2, and 4. AVERAGE includes a typed 0. (72 + 0 + 48) / 3 = 40. MIN returns the smallest number, which is 0. The formula in B6 adds B2:B6, and B6 is the formula cell itself, so the formula depends on itself. That is a circular reference.

**Why other options are wrong:**
- Option 3: MAX ignores the blank in B5. The numbers are 72, 0, and 48, so MAX returns 72, not 0. A blank is not treated as the maximum.

## Q10 (MSQ, Hard)

E1 holds 0.10. C2 contains =B2*(1+$E$1), and the formula is filled down through C4. A2:A4 holds the words Pen, File, and Stapler. Which statements are true?

|  | A | B | E |
| --- | --- | --- | --- |
| 1 | Item | Amount | 0.10 |
| 2 | Pen | 20 |  |
| 3 | File | 80 |  |
| 4 | Stapler | 150 |  |

**Options:**
1. A cell whose first character is a space, then =SUM(B2:B4), returns 250
2. C2 displays 22
3. =COUNT(A2:A4) returns 0
4. The filled formula in C4 uses B4 and still uses $E$1

**Correct:** 2, 3, 4

**Answer Explanation:**
The correct options are 2, 3, and 4. 20 × (1 + 0.10) = 22, so C2 displays 22. B2 is relative, so C4 uses B4. $E$1 is absolute, so it does not become E4. COUNT counts numbers, and Pen, File, and Stapler are text, so =COUNT(A2:A4) returns 0.

**Why other options are wrong:**
- Option 1: A space before = means the first character is a space, so Excel stores text and does not calculate. The cell does not return 250. The sum 20 + 80 + 150 = 250 only when the formula actually starts with =.
