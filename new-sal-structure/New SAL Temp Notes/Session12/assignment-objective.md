# Assignment Objective

## Q1 (MCQ, Easy)

`orders` has 8 rows. Order 8 has `city` NULL. Every `amount` is filled.

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

What does this query return?

```sql
SELECT COUNT(*) AS row_count, COUNT(city) AS cities_filled
FROM orders;
```

**Options:**
1. `row_count` 7 and `cities_filled` 7
2. `row_count` 8 and `cities_filled` 8
3. `row_count` 8 and `cities_filled` 7
4. `row_count` 7 and `cities_filled` 8

**Correct:** 3

**Answer Explanation:**
`COUNT(*)` counts every row, so it is 8. `COUNT(city)` skips NULL, so order 8 is not counted and `cities_filled` is 7.

**Why other options are wrong:**
- Option 1: The missing city does not remove the row. `COUNT(*)` is still 8.
- Option 2: `COUNT(city)` does not count the NULL city.
- Option 4: Both numbers are swapped. The row count is the larger one here.

## Q2 (MCQ, Easy)

The eight `amount` values are 120.50, 80.00, 180.00, 45.75, 200.00, 95.00, 60.00, and 150.25.

What does this query return for `total_amount`, `smallest_amount`, and `largest_amount`?

```sql
SELECT
    SUM(amount) AS total_amount,
    MIN(amount) AS smallest_amount,
    MAX(amount) AS largest_amount
FROM orders;
```

**Options:**
1. 931.50, 45.75, and 200.00
2. 931.50, 60.00, and 200.00
3. 781.25, 45.75, and 200.00
4. 931.50, 45.75, and 180.00

**Correct:** 1

**Answer Explanation:**
120.50 + 80.00 + 180.00 + 45.75 + 200.00 + 95.00 + 60.00 + 150.25 = 931.50. The smallest amount is 45.75. The largest amount is 200.00.

**Why other options are wrong:**
- Option 2: 60.00 is not the smallest. Order 4 is 45.75.
- Option 3: 781.25 drops the missing-city bill of 150.25. `SUM(amount)` still adds that bill because `amount` is not NULL.
- Option 4: 180.00 is not the largest. Order 5 is 200.00.

## Q3 (MCQ, Easy)

Use these amounts: 120.50, 80.00, 180.00, 45.75, 200.00, 95.00, 60.00, 150.25.

`WHERE` drops rows before the aggregate runs. What does this query return?

```sql
SELECT COUNT(*) AS order_count, SUM(amount) AS total_amount
FROM orders
WHERE amount >= 100;
```

**Options:**
1. 8 and 931.50
2. 4 and 650.75
3. 5 and 745.75
4. 3 and 500.50

**Correct:** 2

**Answer Explanation:**
Amounts of at least 100 are 120.50, 180.00, 200.00, and 150.25. That is 4 rows. 120.50 + 180.00 + 200.00 + 150.25 = 650.75.

**Why other options are wrong:**
- Option 1: That is the unfiltered table. `WHERE` removes the four bills under 100.
- Option 3: 95.00 fails `>= 100`, so it is not a fifth row. 650.75 + 95.00 would be 745.75, which is the wrong set.
- Option 4: 500.50 is 120.50 + 180.00 + 200.00 and leaves out 150.25, which does pass.

## Q4 (MCQ, Easy)

City piles from `orders`:

| city | order_ids | amounts |
|------|-----------|---------|
| Pune | 1, 2, 7 | 120.50, 80.00, 60.00 |
| Nashik | 3, 6 | 180.00, 95.00 |
| Jaipur | 4, 5 | 45.75, 200.00 |
| NULL | 8 | 150.25 |

This query returns one row per city. Which values are the Pune row?

```sql
SELECT city, COUNT(*) AS order_count, SUM(amount) AS total_amount
FROM orders
GROUP BY city;
```

**Options:**
1. `order_count` 2 and `total_amount` 275.00
2. `order_count` 4 and `total_amount` 260.50
3. `order_count` 3 and `total_amount` 200.50
4. `order_count` 3 and `total_amount` 260.50

**Correct:** 4

**Answer Explanation:**
Pune has three rows. 120.50 + 80.00 + 60.00 = 260.50. `GROUP BY city` does not drop the 60.00 row.

**Why other options are wrong:**
- Option 1: 2 and 275.00 is Nashik: 180.00 + 95.00.
- Option 2: Pune has three orders, not four.
- Option 3: 200.50 is 120.50 + 80.00 only. It drops the 60.00 Pune row.

## Q5 (MCQ, Moderate)

Start from all eight orders. Amounts under 80 are 45.75 (Jaipur) and 60.00 (Pune). The other bills stay.

Which cities does this query return?

```sql
SELECT city, COUNT(*) AS order_count, SUM(amount) AS total_amount
FROM orders
WHERE amount >= 80
GROUP BY city
HAVING COUNT(*) >= 2;
```

**Options:**
1. Pune and Nashik
2. Pune, Nashik, and Jaipur
3. Nashik only
4. Pune, Nashik, Jaipur, and the missing city

**Correct:** 1

**Answer Explanation:**
`WHERE` removes 45.75 and 60.00 before grouping. Pune still has 120.50 and 80.00, so the count is 2 and the sum is 200.50. Nashik still has 180.00 and 95.00, so the count is 2 and the sum is 275.00. Jaipur has only 200.00 left, and the missing city has only 150.25, so both fail `HAVING COUNT(*) >= 2`.

**Why other options are wrong:**
- Option 2: Jaipur has only one bill left after `WHERE`, so `HAVING` drops that group.
- Option 3: Pune still has two bills, 120.50 and 80.00.
- Option 4: The one-bill groups fail `HAVING`.

## Q6 (MCQ, Moderate)

Amounts in descending order are 200.00, 180.00, 150.25, 120.50, 95.00, 80.00, 60.00, 45.75. Their `order_id` values are 5, 3, 8, 1, 6, 2, 7, 4.

Which `order_id` values does this query return, largest amount first?

```sql
SELECT order_id, amount
FROM orders
ORDER BY amount DESC
LIMIT 3;
```

**Options:**
1. 5, 3, and 1
2. 8, 3, and 5
3. 5, 3, and 8
4. 5, 3, and 6

**Correct:** 3

**Answer Explanation:**
`ORDER BY amount DESC` starts at 200.00 (order 5), then 180.00 (order 3), then 150.25 (order 8). `LIMIT 3` stops there.

**Why other options are wrong:**
- Option 1: Order 1 is 120.50, which is fourth, not third.
- Option 2: Those are the same three ids, but the descending order is 5, then 3, then 8.
- Option 4: Order 6 is 95.00, which is outside the first three.

## Q7 (MSQ, Moderate)

City sums are Pune 260.50 from 3 bills, Nashik 275.00 from 2 bills, Jaipur 245.75 from 2 bills, and the missing city 150.25 from 1 bill. The eight amounts add to 931.50.

```sql
SELECT AVG(amount) FROM orders;

SELECT city, SUM(amount) AS total_amount
FROM orders
GROUP BY city
HAVING SUM(amount) > 260;
```

Which statements are true?

**Options:**
1. `AVG(amount)` on all eight rows is 116.4375.
2. `AVG(amount)` for the Pune group is 260.50 / 3.
3. `HAVING SUM(amount) > 260` keeps only Nashik.
4. `GROUP BY city` sorts the city names from A to Z.

**Correct:** 1, 2, 3

**Answer Explanation:**
931.50 / 8 = 116.4375. Pune's average uses only Pune's three amounts. `SUM > 260` keeps 275.00 and drops 260.50, 245.75, and 150.25.

**Why other options are wrong:**
- Option 4: `GROUP BY` builds the piles. It does not sort them. `ORDER BY` sorts the finished result.

## Q8 (MSQ, Moderate)

City totals are Nashik 275.00, Pune 260.50, Jaipur 245.75, and the missing city 150.25.

Which statements about this query are true?

```sql
SELECT city, SUM(amount) AS total_amount
FROM orders
GROUP BY city
ORDER BY total_amount DESC
LIMIT 2;
```

**Options:**
1. The first result row is Nashik with 275.00.
2. The second result row is Pune with 260.50.
3. Jaipur with 245.75 is included.
4. `LIMIT 2` without `ORDER BY` still promises the two largest totals.

**Correct:** 1, 2

**Answer Explanation:**
Descending totals are Nashik, then Pune, then Jaipur, then the missing city. `LIMIT 2` keeps the first two of that arranged result.

**Why other options are wrong:**
- Option 3: Jaipur is third after `ORDER BY total_amount DESC`, so `LIMIT 2` hides it.
- Option 4: Without `ORDER BY`, `LIMIT` still returns two rows, but it does not promise which two.

## Q9 (MSQ, Hard)

Amounts: Pune 120.50, 80.00, 60.00; Nashik 180.00, 95.00; Jaipur 45.75, 200.00; missing city 150.25.

Which statements about this query are true?

```sql
SELECT city, SUM(amount) AS total_amount
FROM orders
WHERE amount > 50
GROUP BY city
HAVING SUM(amount) >= 200
ORDER BY total_amount DESC;
```

**Options:**
1. `WHERE` removes only the 45.75 row before grouping.
2. Jaipur remains with `total_amount` 200.00.
3. The missing-city group remains.
4. The first row is Nashik with 275.00.

**Correct:** 1, 2, 4

**Answer Explanation:**
`amount > 50` removes only 45.75. Pune remains 120.50 + 80.00 + 60.00 = 260.50. Nashik remains 275.00. Jaipur remains 200.00, which passes `>= 200`. The missing city is 150.25 and fails `HAVING`. Descending order starts at Nashik 275.00.

**Why other options are wrong:**
- Option 3: 150.25 is below 200, so that group is dropped by `HAVING`.

## Q10 (MSQ, Hard)

Item piles:

| item_name | amounts | quantities |
|-----------|---------|------------|
| Notebook | 120.50, 180.00, 60.00 | 2, 3, 1 |
| Pen Set | 80.00, 95.00 | 1, 2 |
| Folder | 45.75, 150.25 | 1, 2 |
| Marker | 200.00 | 4 |

Customer names in A-to-Z order start at Ankit Rao and end at Ravi Kumar.

```sql
SELECT item_name, SUM(amount), SUM(quantity)
FROM orders
GROUP BY item_name;

SELECT MIN(customer_name) FROM orders;
```

Which statements are true?

**Options:**
1. `GROUP BY item_name` gives Notebook `SUM(amount)` 360.50 and `SUM(quantity)` 6.
2. `GROUP BY item_name` gives Pen Set `SUM(amount)` 175.00.
3. `MIN(customer_name)` on all rows is Asha Patil.
4. `GROUP BY item_name` gives Folder `SUM(amount)` 196.00.

**Correct:** 1, 2, 4

**Answer Explanation:**
Notebook is 120.50 + 180.00 + 60.00 = 360.50, and 2 + 3 + 1 = 6. Pen Set is 80.00 + 95.00 = 175.00. Folder is 45.75 + 150.25 = 196.00.

**Why other options are wrong:**
- Option 3: Text order is A-to-Z. Ankit Rao comes before Asha Patil, so `MIN(customer_name)` is Ankit Rao.
