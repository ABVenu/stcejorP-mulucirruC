# Assignment Subjective

## Task

Use MySQL-style SQL. `WHERE` filters rows before `GROUP BY`. `HAVING` filters groups after the aggregates exist.

Create this table and insert these rows once. `city` for order 8 is NULL.

```sql
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    item_name VARCHAR(50) NOT NULL,
    city VARCHAR(50),
    quantity INTEGER NOT NULL,
    amount DECIMAL(8, 2) NOT NULL,
    order_date DATE NOT NULL
);

INSERT INTO orders (order_id, customer_name, item_name, city, quantity, amount, order_date)
VALUES
    (1, 'Asha Patil', 'Notebook', 'Pune', 2, 120.50, '2024-03-12'),
    (2, 'Ankit Rao', 'Pen Set', 'Pune', 1, 80.00, '2024-06-01'),
    (3, 'Meera Shah', 'Notebook', 'Nashik', 3, 180.00, '2023-11-20'),
    (4, 'Ravi Kumar', 'Folder', 'Jaipur', 1, 45.75, '2024-01-09'),
    (5, 'Asha Patil', 'Marker', 'Jaipur', 4, 200.00, '2025-02-14'),
    (6, 'Neha Iyer', 'Pen Set', 'Nashik', 2, 95.00, '2024-08-30'),
    (7, 'Kabir Sen', 'Notebook', 'Pune', 1, 60.00, '2024-12-05'),
    (8, 'Farah Khan', 'Folder', NULL, 2, 150.25, '2023-07-18');
```

Write one query for each point.

Question 1. From the whole table, return `COUNT(*)`, `SUM(amount)`, `MIN(amount)`, and `MAX(quantity)`.

Question 2. Return `COUNT(*)` and `SUM(amount)` for rows whose `city` is Nashik.

Question 3. Return one row per `item_name` with `COUNT(*)`, `SUM(quantity)`, and `AVG(amount)`.

Question 4. Return `city` and `SUM(amount)` for cities whose total amount is greater than 250.

Question 5. Keep rows with `quantity >= 2`, then return `city` and `SUM(amount)` grouped by `city`.

Question 6. Return `order_id` and `customer_name` for every row, sorted by `customer_name` ascending, then `order_id` ascending.

Question 7. Keep rows with `amount >= 100`, group by `city`, sort by `SUM(amount)` descending, and return only the first city row, with `COUNT(*)` and `SUM(amount)`.

Question 8. Group by `item_name`, keep groups whose `COUNT(*)` equals 1, and sort the result by `item_name` ascending. Show `item_name` and `COUNT(*)`.

### Submission Instruction

- Code all the points in VS Code in a single .sql file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

Question 1 collapses all eight rows. The count is 8, the sum is 931.50, the smallest amount is 45.75, and the largest quantity is 4.

```sql
SELECT
    COUNT(*) AS order_count,
    SUM(amount) AS total_amount,
    MIN(amount) AS smallest_amount,
    MAX(quantity) AS largest_quantity
FROM orders;
```

Question 2 uses `WHERE` before the aggregate. Nashik is 180.00 + 95.00 = 275.00 across 2 rows.

```sql
SELECT COUNT(*) AS order_count, SUM(amount) AS total_amount
FROM orders
WHERE city = 'Nashik';
```

Question 3: Notebook is count 3, quantity 6, average 360.50 / 3. Pen Set is count 2, quantity 3, average 87.50. Folder is count 2, quantity 3, average 98.00. Marker is count 1, quantity 4, average 200.00.

```sql
SELECT
    item_name,
    COUNT(*) AS order_count,
    SUM(quantity) AS pieces_sold,
    AVG(amount) AS average_amount
FROM orders
GROUP BY item_name;
```

Question 4 keeps Nashik 275.00 and Pune 260.50. Jaipur is 245.75 and the missing city is 150.25.

```sql
SELECT city, SUM(amount) AS total_amount
FROM orders
GROUP BY city
HAVING SUM(amount) > 250;
```

Question 5 drops quantity 1 (orders 2, 4, and 7). Remaining sums: Pune 120.50, Nashik 180.00 + 95.00 = 275.00, Jaipur 200.00, missing city 150.25.

```sql
SELECT city, SUM(amount) AS total_amount
FROM orders
WHERE quantity >= 2
GROUP BY city;
```

Question 6 order is Ankit Rao (2), Asha Patil (1), Asha Patil (5), Farah Khan (8), Kabir Sen (7), Meera Shah (3), Neha Iyer (6), Ravi Kumar (4).

```sql
SELECT order_id, customer_name
FROM orders
ORDER BY customer_name ASC, order_id ASC;
```

Question 7 keeps 120.50, 180.00, 200.00, and 150.25, each in its own city. Descending totals put Jaipur 200.00 first. `LIMIT 1` returns that one row, with count 1.

```sql
SELECT city, COUNT(*) AS order_count, SUM(amount) AS total_amount
FROM orders
WHERE amount >= 100
GROUP BY city
ORDER BY SUM(amount) DESC
LIMIT 1;
```

Question 8 keeps only Marker, because Notebook has 3 rows, and Pen Set and Folder have 2 each.

```sql
SELECT item_name, COUNT(*) AS order_count
FROM orders
GROUP BY item_name
HAVING COUNT(*) = 1
ORDER BY item_name ASC;
```

An alternative for Question 4 is to compute the city sums in a first pass on paper, then write `HAVING SUM(amount) >= 260.50` if the cutoff should include Pune's exact total and still exclude Jaipur. The query above uses `> 250`, which already keeps Pune and Nashik only.
