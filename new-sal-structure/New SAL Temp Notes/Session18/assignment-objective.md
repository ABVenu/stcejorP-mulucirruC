# Assignment Objective

## Q1 (MCQ, Easy)

What does VLOOKUP do with the table you give it?

**Options:**
1. It searches the top row and returns a cell from a row above the codes
2. It searches every column and returns the first number it finds
3. It searches the leftmost column and returns a cell to the right on that row
4. It searches the rightmost column and returns a cell to the left

**Correct:** 3

**Answer Explanation:**
The correct option is 3. VLOOKUP searches down the leftmost column of its table, then returns a cell from a column to the right on the matching row. The column index starts at 1 for that leftmost column.

**Why other options are wrong:**
- Option 1: Searching a top row is HLOOKUP, and HLOOKUP returns a row below, not a row above.
- Option 2: VLOOKUP does not scan every column for the first number. It searches only the leftmost column of the range.
- Option 4: VLOOKUP cannot return a column to the left of the column it searches. A rightmost-column search is not what it does.

## Q2 (MCQ, Easy)

B2 holds DAT. What does =VLOOKUP(B2,$F$2:$H$4,3,FALSE) return?

|  | F | G | H |
| --- | --- | --- | --- |
| 2 | EXL | Excel Basics | 2500 |
| 3 | DAT | Data Basics | 4000 |
| 4 | PYT | Python Start | 5500 |

**Options:**
1. 4000
2. Data Basics
3. DAT
4. #N/A

**Correct:** 1

**Answer Explanation:**
The correct option is 1. The table $F$2:$H$4 has codes in the first column, course names in the second, and fees in the third. DAT is found in F3. Column index 3 returns 4000. FALSE requires that exact code.

**Why other options are wrong:**
- Option 2: Data Basics is column index 2, the course name. Index 3 is the fee.
- Option 3: DAT is the lookup value, which is column index 1. Index 3 does not return the code itself.
- Option 4: #N/A would mean the exact code was not found. DAT is in the leftmost column, so the lookup succeeds.

## Q3 (MCQ, Easy)

In VLOOKUP, what does FALSE as the fourth argument require?

**Options:**
1. An approximate match
2. A return from a column to the left of the code
3. The message Code not found when the code is missing
4. An exact match

**Correct:** 4

**Answer Explanation:**
The correct option is 4. FALSE means exact match. The lookup value must appear in the leftmost column. If it does not, VLOOKUP shows #N/A.

**Why other options are wrong:**
- Option 1: Approximate match is TRUE. TRUE expects the first column to be sorted in ascending order, and it can return a neighbour.
- Option 2: FALSE does not make VLOOKUP look left. VLOOKUP still returns a column to the right of the leftmost column.
- Option 3: A custom missing-code message is an XLOOKUP if-not-found argument. VLOOKUP with FALSE shows #N/A when the code is missing.

## Q4 (MCQ, Easy)

What does HLOOKUP do?

**Options:**
1. It searches the leftmost column and returns a cell to the right
2. It searches the first row of a table and returns a cell from a row below
3. It names a lookup range and a return range that may sit to the left
4. It searches the bottom row and returns a cell from a row above

**Correct:** 2

**Answer Explanation:**
The correct option is 2. HLOOKUP searches across the first row of its table, then returns a cell from a lower row in the matching column. The row index starts at 1 for that top row.

**Why other options are wrong:**
- Option 1: Searching the leftmost column and returning a cell to the right is VLOOKUP.
- Option 3: Separate lookup and return ranges, including a range to the left, are what XLOOKUP uses.
- Option 4: HLOOKUP does not search the bottom row, and it cannot return a row above its search row.

## Q5 (MCQ, Moderate)

B5 holds SQL. SQL is not in the fee table. What does =VLOOKUP(B5,$F$2:$H$4,3,FALSE) return?

|  | F | G | H |
| --- | --- | --- | --- |
| 2 | EXL | Excel Basics | 2500 |
| 3 | DAT | Data Basics | 4000 |
| 4 | PYT | Python Start | 5500 |

**Options:**
1. 0
2. 2500
3. Code not found
4. #N/A

**Correct:** 4

**Answer Explanation:**
The correct option is 4. FALSE demands an exact match. SQL is not in column F, so VLOOKUP returns #N/A. That result means the code was not found. It does not mean the file is broken.

**Why other options are wrong:**
- Option 1: A missing exact match is not returned as 0. The fee cells are 2500, 4000, and 5500, and none of them is chosen.
- Option 2: 2500 is the fee for EXL. SQL does not match EXL when the fourth argument is FALSE.
- Option 3: Code not found is a message you can supply as the if-not-found argument of XLOOKUP. This formula is VLOOKUP, so the missing code shows as #N/A.

## Q6 (MCQ, Moderate)

Fees sit to the left of the codes. B2 holds DAT.

|  | F | G |
| --- | --- | --- |
| 2 | 2500 | EXL |
| 3 | 4000 | DAT |
| 4 | 5500 | PYT |

What does =XLOOKUP(B2,$G$2:$G$4,$F$2:$F$4,"Code not found") return?

**Options:**
1. 4000
2. #REF!
3. Code not found
4. EXL

**Correct:** 1

**Answer Explanation:**
The correct option is 1. XLOOKUP searches $G$2:$G$4, finds DAT in the second cell, and returns the second cell of $F$2:$F$4, which is 4000. The fee column is to the left of the code column, which XLOOKUP allows.

**Why other options are wrong:**
- Option 2: #REF! is what VLOOKUP or HLOOKUP shows when the column or row index is outside the table. This XLOOKUP names two ranges of three cells each, and DAT is found.
- Option 3: Code not found is used only when the lookup value is missing. DAT is in column G.
- Option 4: EXL is the first code, beside 2500. The lookup value is DAT, so the matching fee is 4000.

## Q7 (MSQ, Moderate)

The fee table below is the range $F$2:$H$4. Which statements are true?

|  | F | G | H |
| --- | --- | --- | --- |
| 2 | EXL | Excel Basics | 2500 |
| 3 | DAT | Data Basics | 4000 |
| 4 | PYT | Python Start | 5500 |

**Options:**
1. The column index starts at 1 for the leftmost column of the table
2. Leaving out the fourth argument makes VLOOKUP use approximate match
3. A negative column index makes VLOOKUP return a column to the left
4. FALSE as the fourth argument asks for an exact match

**Correct:** 1, 2, 4

**Answer Explanation:**
The correct options are 1, 2, and 4. Inside $F$2:$H$4, column F is index 1, G is 2, and H is 3. The index counts columns inside the table, not sheet columns, so the fee is 3 even though H is the eighth column of the sheet. If the fourth argument is omitted, Excel treats it as TRUE, which is approximate match. FALSE requires the code to match exactly.

**Why other options are wrong:**
- Option 3: VLOOKUP does not look left when the index is negative. The index starts at 1 for the column being searched, and the return column must be that column or a column to its right.

## Q8 (MSQ, Moderate)

B4 holds MUM. Which statements are true?

|  | B | C | D | E |
| --- | --- | --- | --- | --- |
| 1 | BLR | DEL | MUM | HYD |
| 2 | Bengaluru | Delhi | Mumbai | Hyderabad |

**Options:**
1. =HLOOKUP(B4,$B$1:$E$2,2,FALSE) returns Mumbai
2. =HLOOKUP(B4,$B$1:$E$2,1,FALSE) returns MUM
3. HLOOKUP can return a row below the first row of its table, not a row above it
4. =HLOOKUP(B4,$B$1:$E$2,3,FALSE) returns Hyderabad

**Correct:** 1, 2, 3

**Answer Explanation:**
The correct options are 1, 2, and 3. Row index 2 returns the city under the exact code, so MUM returns Mumbai. Row index 1 returns the top row of the table, which is the code MUM itself. HLOOKUP looks downward only. The city names would have to be rearranged onto the first row of the range, or you would use XLOOKUP, if the names sat above the codes.

**Why other options are wrong:**
- Option 4: This table has two rows. Row index 3 is outside it, so the formula returns #REF!, not Hyderabad. Hyderabad is the city under HYD, and it is row index 2.

## Q9 (MSQ, Hard)

B2 holds DAT. Which statements are true?

|  | F | G | H |
| --- | --- | --- | --- |
| 2 | EXL | Excel Basics | 2500 |
| 3 | DAT | Data Basics | 4000 |
| 4 | PYT | Python Start | 5500 |

**Options:**
1. =VLOOKUP(B2,$F$2:$H$4,3) uses approximate match because the fourth argument is omitted
2. Approximate match with TRUE expects the first column to be sorted in ascending order
3. In $F$2:$H$4 the fee column index is 8 because H is the eighth column of the sheet
4. A column index of 4 on $F$2:$H$4 returns #REF!

**Correct:** 1, 2, 4

**Answer Explanation:**
The correct options are 1, 2, and 4. Omitting the fourth argument is the same as TRUE. Approximate match expects the leftmost column sorted ascending, and on an unsorted code list it can return another row's fee without showing #N/A. The range has three columns, so index 4 is past the end and returns #REF!.

**Why other options are wrong:**
- Option 3: The column index counts inside the table. F is 1, G is 2, and H is 3. H being the eighth sheet column does not make the fee index 8.

## Q10 (MSQ, Hard)

B2 holds DAT. B5 holds SQL, and SQL is not in the fee table. Which statements are true?

|  | F | G | H |
| --- | --- | --- | --- |
| 2 | EXL | Excel Basics | 2500 |
| 3 | DAT | Data Basics | 4000 |
| 4 | PYT | Python Start | 5500 |

**Options:**
1. =XLOOKUP(B2,$F$2:$F$4,$H$2:$H$4,"Code not found") returns 4000
2. =XLOOKUP(B5,$F$2:$F$4,$H$2:$H$4,"Code not found") returns Code not found
3. XLOOKUP can return a column that sits to the left of the lookup range
4. XLOOKUP needs FALSE as its last argument to force an exact match

**Correct:** 1, 2, 3

**Answer Explanation:**
The correct options are 1, 2, and 3. DAT is the second code in F2:F4, so the second fee in H2:H4 is 4000. SQL is absent, so the if-not-found argument returns the text Code not found instead of #N/A. The return range may sit to the left of the lookup range. That is allowed for XLOOKUP and is not allowed for VLOOKUP.

**Why other options are wrong:**
- Option 4: The default XLOOKUP match is already exact. You do not pass FALSE to get that behaviour. FALSE is the exact-match argument of VLOOKUP and HLOOKUP.
