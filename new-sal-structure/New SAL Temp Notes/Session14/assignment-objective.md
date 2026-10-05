# Assignment Objective

## Q1 (MCQ, Easy)

`students` and `scores` contain these rows.

| student_id | student_name | city |
|------------|--------------|------|
| 1 | Anita Shah | Pune |
| 2 | Rahul Iyer | Delhi |
| 3 | Meera Nair | Chennai |

| score_id | student_id | subject | score |
|----------|------------|---------|-------|
| 1 | 1 | Maths | 88 |
| 2 | 2 | Maths | 72 |
| 3 | 3 | Maths | 65 |
| 4 | 1 | Science | 91 |
| 5 | 2 | Science | 70 |

Which names does this query return?

```sql
SELECT student_name
FROM students
WHERE student_id IN (
    SELECT student_id
    FROM scores
    WHERE subject = 'Maths' AND score > 70
);
```

**Options:**
1. Anita Shah only
2. Anita Shah and Rahul Iyer
3. Rahul Iyer and Meera Nair
4. Anita Shah, Rahul Iyer, and Meera Nair

**Correct:** 2

**Answer Explanation:**
The inner query returns Maths ids with score greater than 70: 1 (88) and 2 (72). Meera's 65 is not in the list. `IN` prints each matching student once: Anita Shah and Rahul Iyer.

**Why other options are wrong:**
- Option 1: Rahul's Maths score is 72, which is greater than 70.
- Option 3: Meera's Maths score is 65, so id 3 is not in the inner list.
- Option 4: Meera fails `score > 70`.

## Q2 (MCQ, Easy)

Maths scores are 88, 72, and 65. Their average is (88 + 72 + 65) / 3 = 75.

Which row does this query return?

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

**Options:**
1. student_id 1 with 88, and student_id 2 with 72
2. student_id 2 with 72
3. student_id 3 with 65
4. student_id 1 with 88

**Correct:** 4

**Answer Explanation:**
The inner query returns one number, 75. The outer query keeps Maths rows strictly above 75. Only 88 passes. 72 and 65 do not.

**Why other options are wrong:**
- Option 1: 72 is not greater than 75.
- Option 2: 72 fails the comparison.
- Option 3: 65 fails the comparison.

## Q3 (MCQ, Easy)

Students are Anita Shah, Rahul Iyer, and Meera Nair. Maths scores are 88, 72, and 65.

What does this query return?

```sql
SELECT
    student_name,
    (
        SELECT MAX(score)
        FROM scores
        WHERE subject = 'Maths'
    ) AS highest_maths
FROM students;
```

**Options:**
1. 3 rows, and `highest_maths` is 88 on every row
2. 1 row, because `MAX` collapses the students
3. 3 rows, and `highest_maths` is each student's own Maths score
4. 2 rows, because Meera is below the maximum

**Correct:** 1

**Answer Explanation:**
The scalar subquery returns one value, 88. It does not filter the outer query. `FROM students` still returns 3 rows, and each row shows 88 in `highest_maths`.

**Why other options are wrong:**
- Option 2: `MAX` is inside the subquery. It does not collapse `students`.
- Option 3: The inner query does not mention the outer student, so it is not each person's own score.
- Option 4: A subquery in the select list does not drop rows. Filtering would be a `WHERE` test.

## Q4 (MCQ, Easy)

| student_id | student_name | city |
|------------|--------------|------|
| 1 | Anita Shah | Pune |
| 2 | Rahul Iyer | Delhi |
| 3 | Meera Nair | Chennai |

Which rows does this query return?

```sql
SELECT city_list.city, city_list.student_name
FROM (
    SELECT city, student_name
    FROM students
    WHERE city <> 'Delhi'
) AS city_list;
```

**Options:**
1. Anita Shah only
2. Rahul Iyer and Meera Nair
3. Anita Shah and Meera Nair
4. Anita Shah, Rahul Iyer, and Meera Nair

**Correct:** 3

**Answer Explanation:**
The inner query drops Delhi, so Rahul is excluded. The derived table has Anita Shah / Pune and Meera Nair / Chennai. The outer query reads those two columns.

**Why other options are wrong:**
- Option 1: Meera's city is Chennai, which is not Delhi, so she stays.
- Option 2: Rahul is the Delhi row, so the inner `WHERE` removes him.
- Option 4: Rahul does not pass `city <> 'Delhi'`.

## Q5 (MCQ, Moderate)

Scores of at least 90: Anita has Science 91. Rahul's scores are 72 and 70. Meera's only score is 65.

Which name does this query return?

```sql
SELECT student_name
FROM students
WHERE EXISTS (
    SELECT 1
    FROM scores
    WHERE scores.student_id = students.student_id
      AND scores.score >= 90
);
```

**Options:**
1. Rahul Iyer
2. Anita Shah
3. Meera Nair
4. Anita Shah and Meera Nair

**Correct:** 2

**Answer Explanation:**
`EXISTS` is true when the inner query returns at least one row for that student. Anita has Science 91, so her name stays. Rahul and Meera have no score of 90 or more, so they drop. `SELECT 1` is only a placeholder.

**Why other options are wrong:**
- Option 1: Rahul's highest score is 72, so the inner query returns no row for him.
- Option 3: Meera's only score is 65.
- Option 4: Meera does not have a score of at least 90.

## Q6 (MCQ, Moderate)

Maths scores are 88, 72, and 65. The inner query below does not mention the outer row.

What does this query return, and can the inner query run by itself?

```sql
SELECT student_id, score
FROM scores
WHERE subject = 'Maths'
  AND score = (
      SELECT MAX(score)
      FROM scores
      WHERE subject = 'Maths'
  );
```

**Options:**
1. student_id 1 and student_id 2, because both have a Maths row
2. No rows, because `MAX` returns more than one value
3. student_id 1 with 88, and the inner query cannot run alone
4. student_id 1 with 88, and the inner query can run alone and returns 88

**Correct:** 4

**Answer Explanation:**
`MAX` of Maths is the single value 88. The inner query never uses the outer row, so it is non-correlated and can run alone. The outer query keeps the Maths row equal to 88, which is student_id 1.

**Why other options are wrong:**
- Option 1: `=` compares with the maximum, not with "has a Maths row". 72 is not 88.
- Option 2: `MAX` returns one number. A list of ids would be the failure case, and this query does not select those ids.
- Option 3: Nothing in the inner `WHERE` comes from the outer query, so it can run alone.

## Q7 (MSQ, Moderate)

Maths scores are 88, 72, and 65. An empty inner average would make the comparison `score > NULL`.

```sql
SELECT student_id
FROM scores
WHERE subject = 'Maths'
  AND score > (
      SELECT AVG(score) FROM scores WHERE subject = 'Maths'
  );
```

Which statements are true?

**Options:**
1. `IN` is the right test when the inner query can return many ids.
2. A comparison such as `>` needs one value, not a list.
3. If the inner average query returned no row, `score >` that result would keep every Maths row.
4. A repeated id inside an `IN` list still counts as one membership.

**Correct:** 1, 2, 4

**Answer Explanation:**
`IN` accepts many values. `>` accepts one scalar value. If the same id appears twice in the list, the outer name is still printed once.

**Why other options are wrong:**
- Option 3: A missing inner row makes the comparison unknown. `score > NULL` is not true, so the outer query keeps nobody.

## Q8 (MSQ, Moderate)

Students are Anita Shah (Pune), Rahul Iyer (Delhi), and Meera Nair (Chennai). MySQL and PostgreSQL both require a name for a subquery in `FROM`.

```sql
SELECT city_list.student_name, city_list.city
FROM (
    SELECT student_name, city
    FROM students
    WHERE city <> 'Delhi'
) AS city_list
WHERE city_list.city = 'Pune';
```

Which statements are true?

**Options:**
1. The `FROM` subquery needs the alias `city_list`.
2. The outer query can filter `city_list.student_id` even though the inner select list has no `student_id`.
3. The query returns one row: Anita Shah, Pune.
4. `EXISTS` prints the column list written inside it.

**Correct:** 1, 3

**Answer Explanation:**
The alias names the derived table. The inner query returns Anita (Pune) and Meera (Chennai). The outer `WHERE` keeps Pune only, so the result is Anita Shah, Pune.

**Why other options are wrong:**
- Option 2: The outer query can see only columns the inner query returned. `student_id` was not passed outward.
- Option 4: `EXISTS` ignores the inner column list. It only cares whether a row came back.

## Q9 (MSQ, Hard)

Students: Anita id 1, Rahul id 2, Meera id 3. Scores: Maths 88, 72, 65 and Science 91, 70. The average of Maths does not mention the outer student. This `EXISTS` test does:

```sql
WHERE scores.student_id = students.student_id
  AND scores.score >= 90
```

Which statements are true?

**Options:**
1. That `EXISTS` test is correlated because it uses `students.student_id` from the outer query.
2. `SELECT AVG(score) FROM scores WHERE subject = 'Maths'` is non-correlated.
3. Rahul passes `EXISTS` for `score >= 90` because 72 is his highest score.
4. If two students both had Maths 88, `score = (SELECT MAX(score) ...)` would keep both Maths rows.

**Correct:** 1, 2, 4

**Answer Explanation:**
The `EXISTS` inner query points at the current outer student, so it is correlated. The average query can run alone and returns 75, so it is non-correlated. `=` keeps every outer row that holds the single maximum. Two rows with 88 would both remain.

**Why other options are wrong:**
- Option 3: 72 is not `>= 90`. The inner query returns no row for Rahul, so `EXISTS` is false.

## Q10 (MSQ, Hard)

Maths has three rows, with `student_id` values 1, 2, and 3. Students are Anita, Rahul, and Meera. A scalar subquery in the select list that returns no row leaves NULL in that extra column.

Which statements are true?

**Options:**
1. `score > (SELECT student_id FROM scores WHERE subject = 'Maths')` fails because three rows come back.
2. An `EXISTS` test with no link to the outer student becomes true for every student as soon as one qualifying score exists anywhere in `scores`.
3. If a scalar subquery in the select list returns no row, student names still appear and the extra column is NULL.
4. `IN` prints Meera twice when she has two Maths rows in the inner list.

**Correct:** 1, 2, 3

**Answer Explanation:**
`>` cannot take a list of three ids. Without `scores.student_id = students.student_id`, one qualifying row makes `EXISTS` true for every outer row. A select-list subquery that returns nothing does not remove the outer rows.

**Why other options are wrong:**
- Option 4: `IN` tests membership. The outer name is printed once even if the inner list repeats that id.
