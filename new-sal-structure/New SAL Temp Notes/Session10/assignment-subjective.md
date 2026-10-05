# Assignment Subjective

## Task

Write one SQL file that completes Question 1 through Question 8. Use MySQL-style SQL. Put a `--` comment above each `SELECT`.

The `CREATE TABLE` and `INSERT` statements below are the whole setup. Copy them unchanged, then write the follow-up queries under them.

Question 1. Include this `CREATE TABLE` statement.

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(40),
    item_name VARCHAR(40),
    city VARCHAR(30),
    quantity INT,
    amount DECIMAL(8, 2),
    order_date DATE
);
```

Question 2. Include these four `INSERT` statements.

```sql
INSERT INTO orders (
    order_id, customer_name, item_name, city, quantity, amount, order_date
) VALUES (
    1, 'Asha Patil', 'Notebook', 'Pune', 2, 120.50, '2024-03-12'
);

INSERT INTO orders (
    order_id, customer_name, item_name, city, quantity, amount, order_date
) VALUES (
    2, 'Ankit Rao', 'Pen Set', 'Pune', 1, 80.00, '2024-06-01'
);

INSERT INTO orders (
    order_id, customer_name, item_name, city, quantity, amount, order_date
) VALUES (
    3, 'Meera Shah', 'Notebook', 'Nashik', 3, 180.00, '2023-11-20'
);

INSERT INTO orders (
    order_id, customer_name, item_name, city, quantity, amount, order_date
) VALUES (
    4, 'Ravi Kumar', 'Folder', 'Jaipur', 1, 45.75, '2024-01-09'
);
```

Question 3. Write a query that shows `order_id`, `customer_name`, `item_name`, `city`, `quantity`, `amount`, and `order_date` for every stored order. Name the columns. Do not use `*` for this question.

Question 4. Write a query that shows `customer_name` and `amount` for every stored order.

Question 5. Write a query that shows `city` and `quantity` for every stored order.

Question 6. Write a query that shows `item_name` and `city` for every stored order.

Question 7. Write a query that shows `order_id` for every stored order.

Question 8. Write a query that uses `SELECT *` to show every column of every stored order.

### Sample Output

Question 3 and Question 8 each return 4 rows and 7 columns:

| order_id | customer_name | item_name | city | quantity | amount | order_date |
|---|---|---|---|---|---|---|
| 1 | Asha Patil | Notebook | Pune | 2 | 120.50 | 2024-03-12 |
| 2 | Ankit Rao | Pen Set | Pune | 1 | 80.00 | 2024-06-01 |
| 3 | Meera Shah | Notebook | Nashik | 3 | 180.00 | 2023-11-20 |
| 4 | Ravi Kumar | Folder | Jaipur | 1 | 45.75 | 2024-01-09 |

Question 4 returns 4 rows and 2 columns:

| customer_name | amount |
|---|---|
| Asha Patil | 120.50 |
| Ankit Rao | 80.00 |
| Meera Shah | 180.00 |
| Ravi Kumar | 45.75 |

Question 5 returns 4 rows and 2 columns:

| city | quantity |
|---|---|
| Pune | 2 |
| Pune | 1 |
| Nashik | 3 |
| Jaipur | 1 |

Question 6 returns 4 rows and 2 columns:

| item_name | city |
|---|---|
| Notebook | Pune |
| Pen Set | Pune |
| Notebook | Nashik |
| Folder | Jaipur |

Question 7 returns 4 rows and 1 column: `1`, `2`, `3`, and `4`.

### Constraints

- Use one `.sql` file.
- Run Question 1 once. Running `CREATE TABLE orders` again on an existing table causes an error.
- Do not use `WHERE`, `GROUP BY`, `JOIN`, `ORDER BY`, `LIMIT`, or functions.
- Do not collapse the two `Notebook` rows into one row.
- Do not quote numeric amounts. Do quote text and dates.
- Show every stored row in each query. Choosing fewer columns does not delete the hidden columns.

### Submission Instruction

- Code all the points mentioned in VS Code in a single `.sql` file.
- Run the code and verify it is working.
- Then submit the SQL in the code editor/answer box in the LMS.

## Answer Explanation

Question 1 builds an empty `orders` table. `order_id` is an `INT` primary key. Names and city are `VARCHAR`. `quantity` is `INT`. `amount` is `DECIMAL(8, 2)`. `order_date` is `DATE`.

Question 2 adds one row per statement. After all four inserts, the table holds Asha, Ankit, Meera, and Ravi. A repeated `order_id` of `1` would be rejected.

Question 3 names all seven columns, so the result shows every stored fact for four rows.

Question 4 keeps `customer_name` and `amount` only. All four customers still appear.

Question 5 keeps `city` and `quantity`. Pune appears twice because two stored rows have that city.

Question 6 keeps `item_name` and `city`. Notebook appears twice because two stored rows sold a notebook.

Question 7 shows the four primary key values and does not count them into one number.

Question 8 uses `*` as another way to ask for every current column. The four rows match Question 3.

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(40),
    item_name VARCHAR(40),
    city VARCHAR(30),
    quantity INT,
    amount DECIMAL(8, 2),
    order_date DATE
);

INSERT INTO orders (
    order_id, customer_name, item_name, city, quantity, amount, order_date
) VALUES (
    1, 'Asha Patil', 'Notebook', 'Pune', 2, 120.50, '2024-03-12'
);

INSERT INTO orders (
    order_id, customer_name, item_name, city, quantity, amount, order_date
) VALUES (
    2, 'Ankit Rao', 'Pen Set', 'Pune', 1, 80.00, '2024-06-01'
);

INSERT INTO orders (
    order_id, customer_name, item_name, city, quantity, amount, order_date
) VALUES (
    3, 'Meera Shah', 'Notebook', 'Nashik', 3, 180.00, '2023-11-20'
);

INSERT INTO orders (
    order_id, customer_name, item_name, city, quantity, amount, order_date
) VALUES (
    4, 'Ravi Kumar', 'Folder', 'Jaipur', 1, 45.75, '2024-01-09'
);

-- Show every named column of every stored order
SELECT
    order_id,
    customer_name,
    item_name,
    city,
    quantity,
    amount,
    order_date
FROM orders;

-- Show the customer and the amount for every stored order
SELECT
    customer_name,
    amount
FROM orders;

-- Show the city and the quantity for every stored order
SELECT
    city,
    quantity
FROM orders;

-- Show the item and the city for every stored order
SELECT
    item_name,
    city
FROM orders;

-- Show the order number of every stored order
SELECT
    order_id
FROM orders;

-- Show every column with the star
SELECT *
FROM orders;
```

One alternative for Question 3 is `SELECT * FROM orders`, which also returns every current column. The required file still names the seven columns in Question 3, and Question 8 is the separate star query.
