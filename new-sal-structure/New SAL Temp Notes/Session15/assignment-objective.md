# Assignment Objective

## Q1 (MCQ, Easy)

`exam_marks` has these 8 rows.

| student_name | subject | marks |
|--------------|---------|-------|
| Anita Shah | Maths | 92 |
| Rahul Iyer | Maths | 92 |
| Meera Nair | Maths | 85 |
| Kabir Khan | Maths | 78 |
| Kabir Khan | Science | 95 |
| Anita Shah | Science | 88 |
| Meera Nair | Science | 88 |
| Rahul Iyer | Science | 70 |

How many rows does this query return?

```sql
SELECT
    student_name,
    subject,
    marks,
    ROW_NUMBER() OVER (PARTITION BY subject ORDER BY marks DESC) AS row_num
FROM exam_marks;
```

**Options:**
1. 2, because there are two subjects
2. 8
3. 4, because there are four students
4. 1, because a rank is one summary value

**Correct:** 2

**Answer Explanation:**
`PARTITION BY` restarts the numbering inside each subject. It does not collapse rows. Eight source rows stay eight output rows, each with a `row_num`.

**Why other options are wrong:**
- Option 1: Two rows would be a `GROUP BY subject` summary. This query does not group.
- Option 3: Four students each have two subject rows, so the result height is 8, not 4.
- Option 4: The window writes a number on every detail row. It does not return one summary row.

## Q2 (MCQ, Easy)

Use these 8 rows. There is no `PARTITION BY`. `student_name ASC` breaks ties.

| student_name | subject | marks |
|--------------|---------|-------|
| Anita Shah | Maths | 92 |
| Rahul Iyer | Maths | 92 |
| Meera Nair | Maths | 85 |
| Kabir Khan | Maths | 78 |
| Kabir Khan | Science | 95 |
| Anita Shah | Science | 88 |
| Meera Nair | Science | 88 |
| Rahul Iyer | Science | 70 |

Who receives `row_num` 1?

```sql
SELECT
    student_name,
    subject,
    marks,
    ROW_NUMBER() OVER (
        ORDER BY marks DESC, student_name ASC
    ) AS row_num
FROM exam_marks;
```

**Options:**
1. Anita Shah in Maths
2. Rahul Iyer in Maths
3. Anita Shah in Science
4. Kabir Khan in Science

**Correct:** 4

**Answer Explanation:**
One window covers all 8 rows. Descending marks start at 95, which is Kabir Khan in Science. That row is `row_num` 1. The two 92s come next, Anita then Rahul.

**Why other options are wrong:**
- Option 1: Anita's 92 is second, after 95.
- Option 2: Rahul's 92 is third, after Kabir's 95 and Anita's 92.
- Option 3: Anita's Science mark is 88, which is after both 92s.

## Q3 (MCQ, Easy)

Maths rows, with `student_name ASC` inside the window: Anita Shah 92, Rahul Iyer 92, Meera Nair 85, Kabir Khan 78.

Who receives `row_num` 1 in Maths?

```sql
SELECT
    student_name,
    ROW_NUMBER() OVER (
        PARTITION BY subject
        ORDER BY marks DESC, student_name ASC
    ) AS row_num
FROM exam_marks;
```

**Options:**
1. Anita Shah
2. Rahul Iyer
3. Meera Nair
4. Kabir Khan

**Correct:** 1

**Answer Explanation:**
`PARTITION BY subject` restarts at 1 for Maths. Marks descending puts both 92s first. `student_name ASC` puts Anita before Rahul, so Anita is 1 and Rahul is 2.

**Why other options are wrong:**
- Option 2: Rahul is also on 92, but A comes before R, so he is 2.
- Option 3: 85 is third in this window order.
- Option 4: 78 is fourth in Maths. Kabir's 95 is in Science, which is a different partition.

## Q4 (MCQ, Easy)

Maths marks in window order `marks DESC` only: 92, 92, 85, 78. Equal marks are peers. Names are not inside `OVER`.

What is Meera Nair's `RANK` on Maths 85?

```sql
SELECT
    student_name,
    marks,
    RANK() OVER (
        PARTITION BY subject
        ORDER BY marks DESC
    ) AS rank_with_gap
FROM exam_marks;
```

**Options:**
1. 2
2. 4
3. 3
4. 1

**Correct:** 3

**Answer Explanation:**
The two 92s share rank 1. The next rank skips. Meera has two rows strictly ahead, so her `RANK` is 3.

**Why other options are wrong:**
- Option 1: 2 would be the dense rank, or the rank if the second 92 had consumed a unique place. `RANK` skips after the tie.
- Option 2: 4 is Kabir's rank on 78, because three rows are strictly ahead of him.
- Option 4: Rank 1 belongs to the two 92s.

## Q5 (MCQ, Moderate)

Same Maths order, `marks DESC` only: 92, 92, 85, 78.

What is `DENSE_RANK` for Meera Nair on 85?

```sql
SELECT
    DENSE_RANK() OVER (
        PARTITION BY subject
        ORDER BY marks DESC
    ) AS dense_rank
FROM exam_marks;
```

**Options:**
1. 3
2. 2
3. 4
4. 1

**Correct:** 2

**Answer Explanation:**
The two 92s share dense rank 1. `DENSE_RANK` does not skip, so the next distinct mark, 85, is dense rank 2.

**Why other options are wrong:**
- Option 1: 3 is the `RANK` of 85, which skips a place after the two-way tie.
- Option 3: 4 is not used for 85 by either function in this window.
- Option 4: Dense rank 1 is the shared place of the two 92s.

## Q6 (MCQ, Moderate)

Science marks in window order `marks DESC` only: 95, 88, 88, 70. Kabir has 95. Anita and Meera have 88. Rahul has 70.

What are Rahul Iyer's `RANK` and `DENSE_RANK` in Science?

```sql
SELECT
    RANK() OVER (PARTITION BY subject ORDER BY marks DESC) AS rank_with_gap,
    DENSE_RANK() OVER (PARTITION BY subject ORDER BY marks DESC) AS dense_rank
FROM exam_marks;
```

**Options:**
1. `RANK` 3 and `DENSE_RANK` 3
2. `RANK` 4 and `DENSE_RANK` 4
3. `RANK` 2 and `DENSE_RANK` 3
4. `RANK` 4 and `DENSE_RANK` 3

**Correct:** 4

**Answer Explanation:**
95 is rank 1 and dense rank 1. The two 88s share rank 2 and dense rank 2. Three Science rows are strictly ahead of 70, so `RANK` is 4. Distinct ranks ahead are 1 and 2, so `DENSE_RANK` is 3.

**Why other options are wrong:**
- Option 1: Rank 3 is skipped because two students share rank 2. Dense rank 3 is only half of the pair.
- Option 2: Dense rank does not skip, so 70 is 3, not 4.
- Option 3: Rank 2 belongs to the two 88s, not to 70.

## Q7 (MSQ, Moderate)

Maths window is `PARTITION BY subject ORDER BY marks DESC` only. Marks: Anita 92, Rahul 92, Meera 85, Kabir 78.

Which statements are true?

**Options:**
1. Both 92s have `RANK` 1.
2. Both 92s have `DENSE_RANK` 1.
3. Both 92s have the same `ROW_NUMBER`.
4. Kabir on 78 has `RANK` 4 and `DENSE_RANK` 3.

**Correct:** 1, 2, 4

**Answer Explanation:**
Equal marks are peers when the window sorts by marks only. `RANK` and `DENSE_RANK` both give the 92s a 1. Meera is rank 3 and dense rank 2. Kabir has three rows ahead, so rank 4, and two distinct ranks ahead, so dense rank 3.

**Why other options are wrong:**
- Option 3: `ROW_NUMBER` is unique. The two 92s get 1 and 2 in an unspecified direction unless a tie-break is inside `OVER`.

## Q8 (MSQ, Moderate)

Inside each subject the window is `ORDER BY marks DESC, student_name ASC`. Maths names in that order are Anita Shah 92, Rahul Iyer 92, Meera Nair 85, Kabir Khan 78. Science names are Kabir Khan 95, Anita Shah 88, Meera Nair 88, Rahul Iyer 70.

Which statements are true?

**Options:**
1. Anita's Maths row is 1 for `ROW_NUMBER`, `RANK`, and `DENSE_RANK`.
2. Rahul's Maths row is 2 for `ROW_NUMBER`, `RANK`, and `DENSE_RANK`.
3. The two Maths 92s still share `RANK` 1.
4. In Science, all three functions write 1, 2, 3, 4 for Kabir, Anita, Meera, Rahul.

**Correct:** 1, 2, 4

**Answer Explanation:**
The name is inside `OVER`, so Anita and Rahul are not peers. All three functions then agree on 1, 2, 3, 4 in Maths. The same strict order in Science is Kabir, Anita, Meera, Rahul.

**Why other options are wrong:**
- Option 3: A tie exists only when every window `ORDER BY` column is equal. The names differ, so rank 1 is Anita alone and rank 2 is Rahul.

## Q9 (MSQ, Hard)

One partition has marks 10, 10, 10, 7, ordered by `marks DESC` only.

```sql
SELECT
    ROW_NUMBER() OVER (ORDER BY marks DESC) AS row_num,
    RANK() OVER (ORDER BY marks DESC) AS rank_with_gap,
    DENSE_RANK() OVER (ORDER BY marks DESC) AS dense_rank
FROM toy_marks;
```

Which statements about the row with marks 7 are true?

**Options:**
1. `RANK` is 4.
2. `DENSE_RANK` is 2.
3. `ROW_NUMBER` is 4.
4. `RANK` is 2.

**Correct:** 1, 2, 3

**Answer Explanation:**
Three 10s share rank 1, so the next `RANK` skips to 4. `DENSE_RANK` does not skip, so the 7 is 2. `ROW_NUMBER` still writes 1, 2, 3, 4, and the last row is 4.

**Why other options are wrong:**
- Option 4: Rank 2 is skipped. Three peers occupy rank 1, so the next rank is 4.

## Q10 (MSQ, Hard)

`exam_marks` has 8 rows and 2 subjects. `RANK() OVER ()` has no `ORDER BY`, so every row is a peer.

Which statements are true?

**Options:**
1. A final `ORDER BY` changes the printed sequence and does not assign the rank.
2. `RANK() OVER ()` gives every row rank 1.
3. `GROUP BY subject` on `exam_marks` returns 8 rows.
4. `ROW_NUMBER` never repeats inside a partition, even when marks are equal.

**Correct:** 1, 2, 4

**Answer Explanation:**
The window `ORDER BY` assigns the rank. The final `ORDER BY` only sorts the printout. With no window order, every row is a peer, so `RANK` is 1 on each row. `ROW_NUMBER` still gives each row in a partition a different integer.

**Why other options are wrong:**
- Option 3: `GROUP BY subject` collapses the 8 detail rows into 2 summary rows. A window does not do that.
