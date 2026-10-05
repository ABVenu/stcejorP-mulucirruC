# Assignment Subjective

## Task

Use MySQL-style SQL. A subquery in `FROM` must have an alias. MySQL rejects that subquery when the alias is missing.

Create these tables and insert these rows once.

```sql
CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL
);

CREATE TABLE scores (
    score_id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL,
    subject VARCHAR(50) NOT NULL,
    score INTEGER NOT NULL
);

INSERT INTO students (student_id, student_name, city)
VALUES
    (1, 'Anita Shah', 'Pune'),
    (2, 'Rahul Iyer', 'Delhi'),
    (3, 'Meera Nair', 'Chennai');

INSERT INTO scores (score_id, student_id, subject, score)
VALUES
    (1, 1, 'Maths', 88),
    (2, 2, 'Maths', 72),
    (3, 3, 'Maths', 65),
    (4, 1, 'Science', 91),
    (5, 2, 'Science', 70);
```

Write one query for each point. Use a subquery. Do not replace the subquery with a join.

Question 1. Return `student_name` for students whose id is in the list of Maths rows with `score > 70`.

Question 2. Return `student_id` and `score` for Maths rows whose score is greater than the average Maths score.

Question 3. Return every `student_name` and, in the same row, the highest Science score as `highest_science`.

Question 4. Put students whose city is not Pune in a `FROM` subquery named `city_list`. From that result, return `student_name` and `city`.

Question 5. Return `student_name` for each student who has at least one Science row. Use `EXISTS`.

Question 6. Return `student_id` and `score` for the Maths row whose score equals the lowest Maths score.

Question 7. Return `student_name` for each student who has at least one score strictly below 70. Use `EXISTS`, and link the inner row to the outer student.

Question 8. In a `FROM` subquery named `high_scores`, return `student_id` and `subject` where `score >= 80`. The outer query must select those two columns from `high_scores`.

### Submission Instruction

- Code all the points in VS Code in a single .sql file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

Question 1: Maths scores above 70 are 88 and 72, so the ids are 1 and 2. The names are Anita Shah and Rahul Iyer.

```sql
SELECT student_name
FROM students
WHERE student_id IN (
    SELECT student_id
    FROM scores
    WHERE subject = 'Maths' AND score > 70
);
```

Question 2: The Maths average is (88 + 72 + 65) / 3 = 75. Only student_id 1 with 88 is above 75.

```sql
SELECT student_id, score
FROM scores
WHERE subject = 'Maths'
  AND score > (
      SELECT AVG(score)
      FROM scores
      WHERE subject = 'Maths'
  );
```

Question 3: The highest Science score is 91. All 3 students appear, each with `highest_science` 91. This subquery does not mention the outer row.

```sql
SELECT
    student_name,
    (
        SELECT MAX(score)
        FROM scores
        WHERE subject = 'Science'
    ) AS highest_science
FROM students;
```

Question 4: Not Pune leaves Rahul Iyer / Delhi and Meera Nair / Chennai.

```sql
SELECT city_list.student_name, city_list.city
FROM (
    SELECT student_name, city
    FROM students
    WHERE city <> 'Pune'
) AS city_list;
```

Question 5: Anita has Science 91 and Rahul has Science 70. Meera has no Science row, so she drops.

```sql
SELECT student_name
FROM students
WHERE EXISTS (
    SELECT 1
    FROM scores
    WHERE scores.student_id = students.student_id
      AND scores.subject = 'Science'
);
```

Question 6: The lowest Maths score is 65, on student_id 3.

```sql
SELECT student_id, score
FROM scores
WHERE subject = 'Maths'
  AND score = (
      SELECT MIN(score)
      FROM scores
      WHERE subject = 'Maths'
  );
```

Question 7: Only Meera has a score below 70 (Maths 65). Rahul's 70 is not strictly below 70.

```sql
SELECT student_name
FROM students
WHERE EXISTS (
    SELECT 1
    FROM scores
    WHERE scores.student_id = students.student_id
      AND scores.score < 70
);
```

Question 8: Scores of at least 80 are Maths 88 (student 1) and Science 91 (student 1).

```sql
SELECT high_scores.student_id, high_scores.subject
FROM (
    SELECT student_id, subject
    FROM scores
    WHERE score >= 80
) AS high_scores;
```

An alternative for Question 2 is `score > (SELECT SUM(score) / COUNT(*) FROM scores WHERE subject = 'Maths')`. On these filled Maths rows that quotient is the same 75, so the outer row is still student_id 1 with 88.
