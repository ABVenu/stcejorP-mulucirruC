# Assignment Subjective

## Task

Use MySQL-style SQL for `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`. Write `FULL OUTER JOIN` in standard SQL. MySQL may reject that one statement; it is still the required answer for that point.

Create these tables and insert these rows once.

```sql
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    item_name VARCHAR(50) NOT NULL,
    amount INTEGER NOT NULL
);

INSERT INTO customers (customer_id, customer_name, city)
VALUES
    (1, 'Anita Shah', 'Pune'),
    (2, 'Rahul Iyer', 'Delhi'),
    (3, 'Meera Nair', 'Chennai'),
    (4, 'Kabir Khan', 'Jaipur');

INSERT INTO orders (order_id, customer_id, item_name, amount)
VALUES
    (501, 1, 'Notebook', 120),
    (502, 1, 'Pen set', 80),
    (503, 2, 'Water bottle', 350),
    (504, 9, 'Lamp', 500);
```

Write one query for each point. Pair rows with `ON customers.customer_id = orders.customer_id` unless a point says otherwise.

Question 1. Use `INNER JOIN`. Return `customer_name`, `city`, `order_id`, `item_name`, and `amount`. Sort by `customer_name`, then `order_id`.

Question 2. Use `LEFT JOIN` from `customers`. Return the same five columns. Sort by `customer_name`, then `order_id`.

Question 3. Use `RIGHT JOIN` so every order remains. Return the same five columns. Sort by `order_id`.

Question 4. Rewrite Question 3 as a `LEFT JOIN` that starts from `orders`.

Question 5. Use `FULL OUTER JOIN`. Return the same five columns.

Question 6. Use `LEFT JOIN` from `customers`, then keep only customers whose `order_id` is NULL. Return `customer_name` and `city`.

Question 7. Use `LEFT JOIN` from `orders`, then keep only the order whose `customer_name` is NULL. Return `order_id`, `item_name`, and `amount`.

Question 8. Use `INNER JOIN`. Return `customers.customer_id`, `customer_name`, `orders.customer_id`, and `order_id`.

### Submission Instruction

- Code all the points in VS Code in a single .sql file
- Run the code and verify it works
- Submit the code in the code editor / answer box in the LMS

## Answer Explanation

Question 1 returns 3 rows: Anita 501 Notebook 120, Anita 502 Pen set 80, Rahul 503 Water bottle 350.

```sql
SELECT
    customers.customer_name,
    customers.city,
    orders.order_id,
    orders.item_name,
    orders.amount
FROM customers
INNER JOIN orders
ON customers.customer_id = orders.customer_id
ORDER BY customers.customer_name, orders.order_id;
```

Question 2 adds Meera and Kabir with NULL order columns. Order 504 is absent. The result has 5 rows.

```sql
SELECT
    customers.customer_name,
    customers.city,
    orders.order_id,
    orders.item_name,
    orders.amount
FROM customers
LEFT JOIN orders
ON customers.customer_id = orders.customer_id
ORDER BY customers.customer_name, orders.order_id;
```

Question 3 returns 4 rows. Order 504 has NULL `customer_name` and NULL `city`.

```sql
SELECT
    customers.customer_name,
    customers.city,
    orders.order_id,
    orders.item_name,
    orders.amount
FROM customers
RIGHT JOIN orders
ON customers.customer_id = orders.customer_id
ORDER BY orders.order_id;
```

Question 4 protects `orders` by putting that table first.

```sql
SELECT
    customers.customer_name,
    customers.city,
    orders.order_id,
    orders.item_name,
    orders.amount
FROM orders
LEFT JOIN customers
ON orders.customer_id = customers.customer_id
ORDER BY orders.order_id;
```

Question 5 returns 6 rows: the 3 matches, Meera, Kabir, and order 504.

```sql
SELECT
    customers.customer_name,
    customers.city,
    orders.order_id,
    orders.item_name,
    orders.amount
FROM customers
FULL OUTER JOIN orders
ON customers.customer_id = orders.customer_id;
```

Question 6 returns Meera Nair / Chennai and Kabir Khan / Jaipur.

```sql
SELECT customers.customer_name, customers.city
FROM customers
LEFT JOIN orders
ON customers.customer_id = orders.customer_id
WHERE orders.order_id IS NULL;
```

Question 7 returns order 504, Lamp, 500.

```sql
SELECT orders.order_id, orders.item_name, orders.amount
FROM orders
LEFT JOIN customers
ON orders.customer_id = customers.customer_id
WHERE customers.customer_name IS NULL;
```

Question 8 returns the matching id pairs: (1, Anita Shah, 1, 501), (1, Anita Shah, 1, 502), and (2, Rahul Iyer, 2, 503).

```sql
SELECT
    customers.customer_id,
    customers.customer_name,
    orders.customer_id,
    orders.order_id
FROM customers
INNER JOIN orders
ON customers.customer_id = orders.customer_id;
```

An alternative for Question 3 is the Question 4 form: start from `orders` and use `LEFT JOIN`. Both keep the same four bills, including the lamp with NULL customer columns.
