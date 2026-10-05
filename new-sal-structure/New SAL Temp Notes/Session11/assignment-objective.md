# Assignment Objective

## Q1 (MCQ, Easy)

`orders` has these rows. `city` for order 8 is NULL.

| order_id | customer_name | item_name | city | quantity | amount | order_date |
|----------|---------------|-----------|------|----------|--------|------------|
| 1 | Asha Patil | Notebook | Pune | 2 | 120.50 | 2024-03-12 |
| 2 | Ankit Rao | Pen Set | Pune | 1 | 80.00 | 2024-06-01 |
| 3 | Meera Shah | Notebook | Nashik | 3 | 180.00 | 2023-11-20 |
| 4 | Ravi Kumar | Folder | Jaipur | 1 | 45.75 | 2024-01-09 |
| 5 | Asha Patil | Marker | Jaipur | 4 | 200.00 | 2025-02-14 |
| 6 | Neha Iyer | Pen Set | Nashik | 2 | 95.00 | 2024-08-30 |
| 7 | Kabir Sen | Notebook | Pune | 1 | 60.00 | 2024-12-05 |
| 8 | Farah Khan | Folder | NULL | 2 | 150.25 | 2023-07-18 |

Which `order_id` values does this query return?

```sql
SELECT order_id
FROM orders
WHERE amount > 100;
```

**Options:**
1. 1, 3, 5, and 6
2. 1, 3, 5, and 8
3. 1, 5, and 8
4. 3, 5, 6, and 8

**Correct:** 2

**Answer Explanation:**
`>` keeps a row only when `amount` is strictly above 100. Order 1 is 120.50, order 3 is 180.00, order 5 is 200.00, and order 8 is 150.25. Those four pass. Order 6 is 95.00, so it fails.

**Why other options are wrong:**
- Option 1: Order 6 is 95.00, which is not greater than 100, and order 8 is missing even though 150.25 passes.
- Option 3: Order 3 is 180.00, so it must be included.
- Option 4: Order 6 fails the test, and order 1 is 120.50, so it must be included.

## Q2 (MCQ, Easy)

Use the same `orders` rows as below. `city` for order 8 is NULL.

| order_id | customer_name | item_name | city | quantity | amount | order_date |
|----------|---------------|-----------|------|----------|--------|------------|
| 1 | Asha Patil | Notebook | Pune | 2 | 120.50 | 2024-03-12 |
| 2 | Ankit Rao | Pen Set | Pune | 1 | 80.00 | 2024-06-01 |
| 3 | Meera Shah | Notebook | Nashik | 3 | 180.00 | 2023-11-20 |
| 4 | Ravi Kumar | Folder | Jaipur | 1 | 45.75 | 2024-01-09 |
| 5 | Asha Patil | Marker | Jaipur | 4 | 200.00 | 2025-02-14 |
| 6 | Neha Iyer | Pen Set | Nashik | 2 | 95.00 | 2024-08-30 |
| 7 | Kabir Sen | Notebook | Pune | 1 | 60.00 | 2024-12-05 |
| 8 | Farah Khan | Folder | NULL | 2 | 150.25 | 2023-07-18 |

Which `order_id` values does this query return?

```sql
SELECT order_id
FROM orders
WHERE city = 'Pune' AND amount >= 80;
```

**Options:**
1. 1, 2, and 7
2. 1 only
3. 2 and 7
4. 1 and 2

**Correct:** 4

**Answer Explanation:**
Pune rows are 1, 2, and 7. `AND` also requires `amount >= 80`. Order 1 is 120.50 and order 2 is 80.00, so both pass. Order 7 is 60.00, so it fails. The result is 1 and 2.

**Why other options are wrong:**
- Option 1: Order 7 is Pune, but 60.00 fails `amount >= 80`.
- Option 2: Order 2 is exactly 80.00, and `>=` includes that end.
- Option 3: Order 7 fails the amount test, and order 1 passes both tests.

## Q3 (MCQ, Easy)

Use these `orders` rows. `LIKE` treats capital and small letters as the same match. `%` means any characters.

| order_id | item_name |
|----------|-----------|
| 1 | Notebook |
| 2 | Pen Set |
| 3 | Notebook |
| 4 | Folder |
| 5 | Marker |
| 6 | Pen Set |
| 7 | Notebook |
| 8 | Folder |

Which `order_id` values does this query return?

```sql
SELECT order_id
FROM orders
WHERE item_name LIKE 'N%';
```

**Options:**
1. 1, 3, and 7
2. 1, 2, and 6
3. 2 and 6
4. 1, 3, 5, and 7

**Correct:** 1

**Answer Explanation:**
`'N%'` means the text starts with N. `Notebook` starts with N, so orders 1, 3, and 7 pass. `Pen Set`, `Folder`, and `Marker` do not.

**Why other options are wrong:**
- Option 2: `Pen Set` does not start with N. That pattern would be `'%Set'` or `'P%'`.
- Option 3: Those are the `Pen Set` rows, which fail `'N%'`.
- Option 4: Order 5 is `Marker`, which does not start with N.

## Q4 (MCQ, Easy)

Use these `orders` rows. Order 8 has `city` NULL.

| order_id | city | amount |
|----------|------|--------|
| 1 | Pune | 120.50 |
| 2 | Pune | 80.00 |
| 3 | Nashik | 180.00 |
| 4 | Jaipur | 45.75 |
| 5 | Jaipur | 200.00 |
| 6 | Nashik | 95.00 |
| 7 | Pune | 60.00 |
| 8 | NULL | 150.25 |

Which `order_id` values does this query return?

```sql
SELECT order_id
FROM orders
WHERE NOT (city = 'Pune');
```

**Options:**
1. 3, 4, 5, 6, and 8
2. 1, 2, and 7
3. 3, 4, 5, and 6
4. 4, 5, and 8

**Correct:** 3

**Answer Explanation:**
`NOT (city = 'Pune')` keeps rows where the comparison is false. Orders 3, 4, 5, and 6 have a city that is not Pune. Orders 1, 2, and 7 are Pune, so they drop. Order 8 makes `city = 'Pune'` unknown, and `NOT` of unknown is not true, so order 8 drops.

**Why other options are wrong:**
- Option 1: Order 8 is not returned. A missing city does not make `NOT (city = 'Pune')` true.
- Option 2: Those are the Pune rows, which `NOT` removes.
- Option 4: Orders 3 and 6 are Nashik, so they stay, and order 8 does not stay.

## Q5 (MCQ, Moderate)

Use these `orders` rows. Order 8 has `city` NULL.

| order_id | city | amount |
|----------|------|--------|
| 1 | Pune | 120.50 |
| 2 | Pune | 80.00 |
| 3 | Nashik | 180.00 |
| 4 | Jaipur | 45.75 |
| 5 | Jaipur | 200.00 |
| 6 | Nashik | 95.00 |
| 7 | Pune | 60.00 |
| 8 | NULL | 150.25 |

Which `order_id` values does this query return?

```sql
SELECT order_id
FROM orders
WHERE (city = 'Pune' OR city = 'Nashik') AND amount >= 100;
```

**Options:**
1. 1, 2, 3, and 7
2. 1 and 3
3. 1, 3, and 6
4. 3 only

**Correct:** 2

**Answer Explanation:**
The parentheses first keep Pune or Nashik: orders 1, 2, 3, 6, and 7. `amount >= 100` then keeps order 1 (120.50) and order 3 (180.00). Order 2 is 80.00, order 6 is 95.00, and order 7 is 60.00.

**Why other options are wrong:**
- Option 1: That list is what you get if `AND` binds only to Nashik and every Pune row slips through. The parentheses block that reading.
- Option 3: Order 6 is Nashik, but 95.00 fails `amount >= 100`.
- Option 4: Order 1 is Pune and 120.50, so it also passes.

## Q6 (MCQ, Moderate)

Use this row from `orders`.

| order_id | customer_name | item_name |
|----------|---------------|-----------|
| 6 | Neha Iyer | Pen Set |

What is the single result row of this query? `LENGTH` counts every character, including the space.

```sql
SELECT
    UPPER(item_name) AS item_caps,
    LENGTH(customer_name) AS name_length
FROM orders
WHERE order_id = 6;
```

**Options:**
1. `item_caps` is `pen set` and `name_length` is 9
2. `item_caps` is `PEN SET` and `name_length` is 8
3. `item_caps` is `Pen Set` and `name_length` is 9
4. `item_caps` is `PEN SET` and `name_length` is 9

**Correct:** 4

**Answer Explanation:**
`UPPER('Pen Set')` is `PEN SET`. `Neha Iyer` is N, e, h, a, space, I, y, e, r, which is 9 characters. The result cell is `PEN SET` and 9.

**Why other options are wrong:**
- Option 1: `pen set` is the `LOWER` result, not `UPPER`.
- Option 2: The length is 9, not 8. The space is counted.
- Option 3: `UPPER` changes the letters. The stored text is unchanged, but the result cell is capitals.

## Q7 (MSQ, Moderate)

`orders` has these rows. Order 8 has `city` NULL. `LIKE` treats capitals and small letters as the same match. `DISTINCT` does not sort.

| order_id | customer_name | item_name | city | quantity | amount | order_date |
|----------|---------------|-----------|------|----------|--------|------------|
| 1 | Asha Patil | Notebook | Pune | 2 | 120.50 | 2024-03-12 |
| 2 | Ankit Rao | Pen Set | Pune | 1 | 80.00 | 2024-06-01 |
| 3 | Meera Shah | Notebook | Nashik | 3 | 180.00 | 2023-11-20 |
| 4 | Ravi Kumar | Folder | Jaipur | 1 | 45.75 | 2024-01-09 |
| 5 | Asha Patil | Marker | Jaipur | 4 | 200.00 | 2025-02-14 |
| 6 | Neha Iyer | Pen Set | Nashik | 2 | 95.00 | 2024-08-30 |
| 7 | Kabir Sen | Notebook | Pune | 1 | 60.00 | 2024-12-05 |
| 8 | Farah Khan | Folder | NULL | 2 | 150.25 | 2023-07-18 |

Which statements are true?

**Options:**
1. `SELECT DISTINCT city FROM orders` returns four city values: Pune, Nashik, Jaipur, and NULL.
2. `WHERE city IN ('Pune', 'Jaipur')` returns order_ids 1, 2, 4, 5, and 7.
3. `WHERE city = NULL` returns order_id 8.
4. `WHERE item_name LIKE '%book'` returns order_ids 1, 3, and 7.

**Correct:** 1, 2, 4

**Answer Explanation:**
`DISTINCT city` collapses repeated Pune into one value and still keeps the missing city, so there are four values. `IN ('Pune', 'Jaipur')` matches orders 1, 2, 7, 4, and 5, and it does not match Nashik or NULL. `Notebook` ends with `book`, so `'%book'` matches orders 1, 3, and 7.

**Why other options are wrong:**
- Option 3: `city = NULL` is unknown, not true. The missing city is found with `city IS NULL`, which returns order 8.

## Q8 (MSQ, Moderate)

Use these rows. In MySQL-style `ROUND`, halfway values such as 45.75 round away from zero to 46. `CONCAT` returns NULL if any piece is NULL.

| order_id | customer_name | item_name | city | amount |
|----------|---------------|-----------|------|--------|
| 1 | Asha Patil | Notebook | Pune | 120.50 |
| 4 | Ravi Kumar | Folder | Jaipur | 45.75 |
| 8 | Farah Khan | Folder | NULL | 150.25 |

Which statements are true?

**Options:**
1. `ROUND(45.75, 0)` returns 46.
2. `ROUND(150.25, 0)` returns 151.
3. `CONCAT(city, '-', item_name)` for order 8 returns NULL.
4. `LOWER(customer_name)` for order 1 returns `ASHA PATIL`.

**Correct:** 1, 3

**Answer Explanation:**
`ROUND(45.75, 0)` is 46. Order 8 has a NULL city, so MySQL `CONCAT` of that city with any other piece is NULL. The stored amount 45.75 is not changed.

**Why other options are wrong:**
- Option 2: 150.25 is below halfway to 151, so `ROUND(150.25, 0)` returns 150.
- Option 4: `LOWER` returns `asha patil`. `ASHA PATIL` is the `UPPER` result.

## Q9 (MSQ, Hard)

Use these `orders` rows. `BETWEEN` includes both ends. `YEAR` reads the year from the date.

| order_id | city | quantity | amount | order_date |
|----------|------|----------|--------|------------|
| 1 | Pune | 2 | 120.50 | 2024-03-12 |
| 2 | Pune | 1 | 80.00 | 2024-06-01 |
| 3 | Nashik | 3 | 180.00 | 2023-11-20 |
| 4 | Jaipur | 1 | 45.75 | 2024-01-09 |
| 5 | Jaipur | 4 | 200.00 | 2025-02-14 |
| 6 | Nashik | 2 | 95.00 | 2024-08-30 |
| 7 | Pune | 1 | 60.00 | 2024-12-05 |
| 8 | NULL | 2 | 150.25 | 2023-07-18 |

Which statements are true?

**Options:**
1. `WHERE amount BETWEEN 150 AND 200` returns order_ids 3, 5, and 8.
2. `WHERE quantity = 1` returns order_ids 2, 4, and 7.
3. `WHERE city = 'Jaipur' AND amount > 100` returns order_ids 4 and 5.
4. `WHERE YEAR(order_date) = 2023` returns order_ids 3 and 8.

**Correct:** 1, 2, 4

**Answer Explanation:**
150.25, 180.00, and 200.00 are inside the closed range 150 through 200, so orders 8, 3, and 5 pass. Quantity 1 is stored on orders 2, 4, and 7. The year 2023 is stored on orders 3 and 8.

**Why other options are wrong:**
- Option 3: Order 4 is Jaipur, but 45.75 is not greater than 100. Only order 5 passes both tests.

## Q10 (MSQ, Hard)

Use these `orders` rows. `AND` binds more tightly than `OR`. `_` in `LIKE` means exactly one character. `LENGTH` counts the space.

| order_id | customer_name | item_name | city | amount |
|----------|---------------|-----------|------|--------|
| 1 | Asha Patil | Notebook | Pune | 120.50 |
| 2 | Ankit Rao | Pen Set | Pune | 80.00 |
| 3 | Meera Shah | Notebook | Nashik | 180.00 |
| 4 | Ravi Kumar | Folder | Jaipur | 45.75 |
| 5 | Asha Patil | Marker | Jaipur | 200.00 |
| 6 | Neha Iyer | Pen Set | Nashik | 95.00 |
| 7 | Kabir Sen | Notebook | Pune | 60.00 |
| 8 | Farah Khan | Folder | NULL | 150.25 |

Which statements are true?

**Options:**
1. `WHERE city = 'Pune' OR city = 'Nashik' AND amount >= 100` returns order_ids 1, 2, 3, and 7.
2. `WHERE item_name LIKE '_older'` returns order_ids 4 and 8.
3. `WHERE city NOT IN ('Pune', 'Jaipur')` returns order_ids 3, 6, and 8.
4. `LENGTH('Asha Patil')` is 10, and `UPPER('Pen Set')` is `PEN SET`.

**Correct:** 1, 2, 4

**Answer Explanation:**
Without parentheses, `AND` applies only to the Nashik test, so every Pune row stays (1, 2, 7) and Nashik keeps only order 3 (180.00). Order 6 is 95.00 and drops. `Folder` is one character plus `older`, so `'_older'` matches orders 4 and 8. `Asha Patil` is 4 + 1 + 5 = 10 characters, and `UPPER('Pen Set')` is `PEN SET`.

**Why other options are wrong:**
- Option 3: Nashik orders 3 and 6 pass `NOT IN ('Pune', 'Jaipur')`. Order 8 does not, because a NULL city makes the membership test unknown.
