# Assignment Subjective

## Task

Use MySQL-style SQL. `YEAR` and `CONCAT` follow MySQL: `YEAR` pulls the year from a date, and `CONCAT` returns NULL if any piece is NULL. `ROUND(45.75, 0)` returns 46.

Create this table and insert these rows once. `city` for order 8 is NULL, not an empty string.

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

Write one query for each point. Do not group, sort, or limit the result.

Question 1. Return `order_id` and `amount` where `quantity` is greater than 1.

Question 2. Return `order_id` and `city` where the city is Jaipur or Nashik.

Question 3. Return `order_id` and `item_name` where `item_name` ends with `Set`.

Question 4. Return `order_id` and `amount` where `amount` is from 90 through 160, both ends included.

Question 5. Return `order_id` and `customer_name` where `city` is missing.

Question 6. Return each different `item_name` once.

Question 7. Return `order_id`, the customer name in small letters, and the year of `order_date`, only for rows whose year is 2023.

Question 8. Return `order_id`, `amount` rounded to 0 decimal places, and one text label `customer_name bought item_name`, only for rows whose `amount` is less than 50.

### Submission Instruction

- Code all the points in VS Code in a single .sql file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

Question 1 keeps quantity 2, 3, or 4: orders 1, 3, 5, 6, and 8.

```sql
SELECT order_id, amount
FROM orders
WHERE quantity > 1;
```

Question 2 keeps Jaipur (4, 5) and Nashik (3, 6). Order 8 fails both comparisons.

```sql
SELECT order_id, city
FROM orders
WHERE city = 'Jaipur' OR city = 'Nashik';
```

Question 3 matches `Pen Set` on orders 2 and 6.

```sql
SELECT order_id, item_name
FROM orders
WHERE item_name LIKE '%Set';
```

Question 4 keeps 95.00, 120.50, and 150.25: orders 6, 1, and 8. 80.00 is below 90, and 180.00 is above 160.

```sql
SELECT order_id, amount
FROM orders
WHERE amount BETWEEN 90 AND 160;
```

Question 5 finds only order 8. `city = NULL` would not return that row.

```sql
SELECT order_id, customer_name
FROM orders
WHERE city IS NULL;
```

Question 6 returns Notebook, Pen Set, Folder, and Marker, each once. Display order is not fixed.

```sql
SELECT DISTINCT item_name
FROM orders;
```

Question 7 keeps orders 3 and 8. The names in the result are `meera shah` and `farah khan`, and both years are 2023.

```sql
SELECT
    order_id,
    LOWER(customer_name) AS name_lower,
    YEAR(order_date) AS order_year
FROM orders
WHERE YEAR(order_date) = 2023;
```

Question 8 keeps only order 4. `ROUND(45.75, 0)` is 46. The label is `Ravi Kumar bought Folder`.

```sql
SELECT
    order_id,
    ROUND(amount, 0) AS rupees_nearest,
    CONCAT(customer_name, ' bought ', item_name) AS sale_label
FROM orders
WHERE amount < 50;
```

An alternative for Question 2 is `WHERE city IN ('Jaipur', 'Nashik')`. An alternative for Question 4 is `WHERE amount >= 90 AND amount <= 160`. Both pairs return the same rows on this table.
