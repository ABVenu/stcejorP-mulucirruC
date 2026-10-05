# Assignment Subjective

## Task

Use these two grids.

Fee table and class list:

|  | A | B | F | G | H |
| --- | --- | --- | --- | --- | --- |
| 1 | Name | Code | Code | Course | Fee |
| 2 | Asha | DAT | EXL | Excel Basics | 2500 |
| 3 | Imran | WEB | DAT | Data Basics | 4000 |
| 4 | Neha | PYT | PYT | Python Start | 5500 |
| 5 | Ravi | EXL |  |  |  |

City table. B4 holds MUM.

|  | B | C | D | E |
| --- | --- | --- | --- | --- |
| 1 | BLR | DEL | MUM | HYD |
| 2 | Bengaluru | Delhi | Mumbai | Hyderabad |
| 4 | MUM |  |  |  |

Question 1. Write a VLOOKUP for C2 that returns the fee for the code in B2 from $F$2:$H$4. Use an exact match.
Question 2. What does that formula display for Asha?
Question 3. The formula is filled down to C3. What does it display for Imran?
Question 4. Write a VLOOKUP that returns the course name, not the fee, for the code in B2.
Question 5. What does a column index of 4 return on the range $F$2:$H$4?
Question 6. Write an XLOOKUP that returns the fee for the code in B2 from column H and shows Code not found when the code is missing.
Question 7. What does that XLOOKUP display for Imran's code WEB?
Question 8. A second chart stores the fee in F and the code in G: 2500 with EXL, 4000 with DAT, and 5500 with PYT. B2 still holds DAT. Write an XLOOKUP that returns the fee from the left of the code.
Question 9. Write an HLOOKUP that returns the city name for the code in B4 from $B$1:$E$2. Use an exact match.
Question 10. State what VLOOKUP does when the fourth argument is left out on this code table.

### Submission Instruction

- Type the answer in the answer box

## Answer Explanation

### Ideal answers

Question 1. =VLOOKUP(B2,$F$2:$H$4,3,FALSE)
Question 2. 4000
Question 3. #N/A
Question 4. =VLOOKUP(B2,$F$2:$H$4,2,FALSE), which displays Data Basics
Question 5. #REF!
Question 6. =XLOOKUP(B2,$F$2:$F$4,$H$2:$H$4,"Code not found")
Question 7. Code not found
Question 8. =XLOOKUP(B2,$G$2:$G$4,$F$2:$F$4,"Code not found"), which returns 4000
Question 9. =HLOOKUP(B4,$B$1:$E$2,2,FALSE), which returns Mumbai
Question 10. The missing fourth argument is treated as TRUE, so the match is approximate. On this unsorted code table it can return a neighbour's fee instead of #N/A.

### Walkthrough

$F$2:$H$4 starts on the first data row, so the header word Code is not part of the search. Column F is index 1, column G is index 2, and column H is index 3. Asha's code DAT matches F3, and index 3 returns 4000. Index 2 returns Data Basics from the same row.

Imran's code is WEB. It is not in column F. FALSE refuses a neighbour, so C3 shows #N/A.

Index 4 is past the three columns in the table, so Excel shows #REF!.

The XLOOKUP for the fee points at the code column and the fee column separately. WEB has no match, so the fourth argument shows Code not found. Ravi's EXL would return 2500 with either the exact VLOOKUP or this XLOOKUP.

When the fee is in F and the code is in G, VLOOKUP on $F$2:$H$4 would search the fees, not the codes. XLOOKUP can search G and return F, so DAT still brings back 4000.

HLOOKUP searches row 1 of $B$1:$E$2. MUM is in column D. Row index 2 returns Mumbai. Row index 1 would return MUM itself.

Keep the lookup value as a cell reference. A formula that contains the typed word "DAT" would keep looking up DAT on every row.

### Alternative

When the code is already the leftmost column, this XLOOKUP also returns Asha's fee of 4000:

=XLOOKUP(B2,$F$2:$F$4,$H$2:$H$4,"Code not found")

For the city, this XLOOKUP also returns Mumbai:

=XLOOKUP(B4,$B$1:$E$1,$B$2:$E$2,"City not found")
