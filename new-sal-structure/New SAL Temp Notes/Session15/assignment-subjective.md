# Assignment Subjective

## Task

Use MySQL 8-style window syntax. `OVER`, `PARTITION BY`, `ORDER BY` inside `OVER`, `ROW_NUMBER`, `RANK`, and `DENSE_RANK` are supported there.

Create this table and insert these rows once.

```sql
CREATE TABLE exam_marks (
    student_name VARCHAR(50) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    marks INTEGER NOT NULL
);

INSERT INTO exam_marks (student_name, subject, marks)
VALUES
    ('Anita Shah', 'Maths', 92),
    ('Rahul Iyer', 'Maths', 92),
    ('Meera Nair', 'Maths', 85),
    ('Kabir Khan', 'Maths', 78),
    ('Kabir Khan', 'Science', 95),
    ('Anita Shah', 'Science', 88),
    ('Meera Nair', 'Science', 88),
    ('Rahul Iyer', 'Science', 70);
```

Also create this second table for Question 8.

```sql
CREATE TABLE toy_marks (
    marks INTEGER NOT NULL
);

INSERT INTO toy_marks (marks)
VALUES (10), (10), (10), (7);
```

Write one query for each point. Keep every source row in the result.

Question 1. From `exam_marks`, add `ROW_NUMBER` over all rows, ordered by `marks DESC`, then `student_name ASC`. Also sort the printed result the same way. Return `student_name`, `subject`, `marks`, and `row_num`.

Question 2. Add `ROW_NUMBER` partitioned by `subject`, ordered by `marks DESC`, then `student_name ASC`. Sort the printout by `subject`, `marks DESC`, `student_name ASC`.

Question 3. Add `RANK` and `DENSE_RANK`, partitioned by `subject`, ordered by `marks DESC` only. Sort the printout by `subject`, `marks DESC`, `student_name`.

Question 4. Add `ROW_NUMBER`, `RANK`, and `DENSE_RANK` with the same window: `PARTITION BY subject ORDER BY marks DESC, student_name ASC`.

Question 5. Add one overall `RANK` with `ORDER BY marks DESC` and no `PARTITION BY`. Return `student_name`, `subject`, `marks`, and `rank_with_gap`.

Question 6. Add `DENSE_RANK` with that same overall window: `ORDER BY marks DESC` and no partition.

Question 7. Show `subject`, `student_name`, `marks`, and `ROW_NUMBER` with `PARTITION BY subject ORDER BY marks DESC`. Do not put `student_name` inside `OVER`.

Question 8. From `toy_marks`, show `marks`, `ROW_NUMBER`, `RANK`, and `DENSE_RANK`, each with `ORDER BY marks DESC` only.

### Submission Instruction

- Code all the points in VS Code in a single .sql file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

Question 1 numbers all 8 rows: Kabir Science 95 is 1, Anita Maths 92 is 2, Rahul Maths 92 is 3, Anita Science 88 is 4, Meera Science 88 is 5, Meera Maths 85 is 6, Kabir Maths 78 is 7, Rahul Science 70 is 8.

```sql
SELECT
    student_name,
    subject,
    marks,
    ROW_NUMBER() OVER (
        ORDER BY marks DESC, student_name ASC
    ) AS row_num
FROM exam_marks
ORDER BY marks DESC, student_name ASC;
```

Question 2 restarts in each subject. Maths is Anita 1, Rahul 2, Meera 3, Kabir 4. Science is Kabir 1, Anita 2, Meera 3, Rahul 4. The result still has 8 rows.

```sql
SELECT
    student_name,
    subject,
    marks,
    ROW_NUMBER() OVER (
        PARTITION BY subject
        ORDER BY marks DESC, student_name ASC
    ) AS row_num
FROM exam_marks
ORDER BY subject, marks DESC, student_name ASC;
```

Question 3 treats equal marks as ties. Maths `RANK` is 1, 1, 3, 4 and `DENSE_RANK` is 1, 1, 2, 3. Science `RANK` is 1, 2, 2, 4 and `DENSE_RANK` is 1, 2, 2, 3. Which tied name prints first does not change those shared ranks.

```sql
SELECT
    student_name,
    subject,
    marks,
    RANK() OVER (
        PARTITION BY subject
        ORDER BY marks DESC
    ) AS rank_with_gap,
    DENSE_RANK() OVER (
        PARTITION BY subject
        ORDER BY marks DESC
    ) AS dense_rank
FROM exam_marks
ORDER BY subject, marks DESC, student_name;
```

Question 4 puts the name inside `OVER`, so the tie disappears. Inside each subject all three functions write 1, 2, 3, 4 in the order Anita then Rahul for Maths, and Kabir, Anita, Meera, Rahul for Science.

```sql
SELECT
    student_name,
    subject,
    marks,
    ROW_NUMBER() OVER (
        PARTITION BY subject
        ORDER BY marks DESC, student_name ASC
    ) AS row_num,
    RANK() OVER (
        PARTITION BY subject
        ORDER BY marks DESC, student_name ASC
    ) AS rank_with_gap,
    DENSE_RANK() OVER (
        PARTITION BY subject
        ORDER BY marks DESC, student_name ASC
    ) AS dense_rank
FROM exam_marks;
```

Question 5 uses one window for all subjects. Descending marks are 95, 92, 92, 88, 88, 85, 78, 70. `RANK` is 1, 2, 2, 4, 4, 6, 7, 8.

```sql
SELECT
    student_name,
    subject,
    marks,
    RANK() OVER (ORDER BY marks DESC) AS rank_with_gap
FROM exam_marks;
```

Question 6 on that same overall order gives `DENSE_RANK` 1, 2, 2, 3, 3, 4, 5, 6.

```sql
SELECT
    student_name,
    subject,
    marks,
    DENSE_RANK() OVER (ORDER BY marks DESC) AS dense_rank
FROM exam_marks;
```

Question 7 still returns 8 rows. `ROW_NUMBER` inside each tie is not fixed, because the name is not inside `OVER`. The 85 is 3 in Maths, and the 70 is 4 in Science.

```sql
SELECT
    subject,
    student_name,
    marks,
    ROW_NUMBER() OVER (
        PARTITION BY subject
        ORDER BY marks DESC
    ) AS row_num
FROM exam_marks;
```

Question 8: the three 10s get `ROW_NUMBER` 1, 2, and 3 in an unspecified order, `RANK` 1, and `DENSE_RANK` 1. The 7 gets `ROW_NUMBER` 4, `RANK` 4, and `DENSE_RANK` 2.

```sql
SELECT
    marks,
    ROW_NUMBER() OVER (ORDER BY marks DESC) AS row_num,
    RANK() OVER (ORDER BY marks DESC) AS rank_with_gap,
    DENSE_RANK() OVER (ORDER BY marks DESC) AS dense_rank
FROM toy_marks;
```

An alternative for Question 3 is one named window reused by both functions, where the tool allows it: `WINDOW w AS (PARTITION BY subject ORDER BY marks DESC)`, then `RANK() OVER w` and `DENSE_RANK() OVER w`. The ranks stay the same. Writing the `OVER` clause in full, as above, is the form to submit if the tool has no named window.
