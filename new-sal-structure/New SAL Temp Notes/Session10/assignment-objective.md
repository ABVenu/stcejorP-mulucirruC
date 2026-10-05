# Assignment Objective

## Q1 (MCQ, Easy)

`orders` has these stored rows, and `order_id` is the primary key.

| order_id | customer_name | item_name | city | quantity | amount | order_date |
|---|---|---|---|---|---|---|
| 1 | Asha Patil | Notebook | Pune | 2 | 120.50 | 2024-03-12 |
| 2 | Ankit Rao | Pen Set | Pune | 1 | 80.00 | 2024-06-01 |
| 3 | Meera Shah | Notebook | Nashik | 3 | 180.00 | 2023-11-20 |
| 4 | Ravi Kumar | Folder | Jaipur | 1 | 45.75 | 2024-01-09 |

Which statement about `order_id` is correct?

**Options:**
1. `order_id` identifies exactly one row, and a second row cannot reuse the same value.
2. `customer_name` is the primary key because names are stored as text.
3. `item_name` is the primary key because `Notebook` is stored on two rows.
4. The leftmost column is always the primary key, whatever name it has.

**Correct:** 1

**Answer Explanation:**
A primary key identifies exactly one row. Here that column is `order_id`, and the stored values `1`, `2`, `3`, and `4` are all different. The engine rejects a second row that tries to use one of those values again.

**Why other options are wrong:**
- Option 2: Two customers can share a name, and one customer can place another order later. `customer_name` is not the chosen identity.
- Option 3: `Notebook` already appears on two rows. A primary key cannot repeat. That repeated value is why `item_name` is not the primary key.
- Option 4: The primary key is the column chosen as the unique identity. Position alone does not make a column the primary key.

## Q2 (MCQ, Easy)

These rows are stored in `orders`: order 1 Asha Patil, Notebook, Pune, quantity 2, amount 120.50, date 2024-03-12; order 2 Ankit Rao, Pen Set, Pune, quantity 1, amount 80.00, date 2024-06-01; order 3 Meera Shah, Notebook, Nashik, quantity 3, amount 180.00, date 2023-11-20; order 4 Ravi Kumar, Folder, Jaipur, quantity 1, amount 45.75, date 2024-01-09.

What does this query return?

```sql
SELECT *
FROM orders;
```

**Options:**
1. 7 rows, one for each column
2. 1 row, only the first insert
3. 0 rows, because `*` removes the stored orders
4. 4 rows, one for each stored order

**Correct:** 4

**Answer Explanation:**
`SELECT *` asks for every column. `FROM orders` reads the `orders` table. Nothing in the query drops a row, and four rows were stored, so four rows come back. The star does not delete data.

**Why other options are wrong:**
- Option 1: Seven is the number of columns in each row, not the number of rows.
- Option 2: Each insert added one row. The query reads all stored rows, not only order 1.
- Option 3: `SELECT` reads. It does not remove the four stored orders.

## Q3 (MCQ, Easy)

These rows are stored in `orders`: order 1 Asha Patil, Notebook, Pune, quantity 2, amount 120.50, date 2024-03-12; order 2 Ankit Rao, Pen Set, Pune, quantity 1, amount 80.00, date 2024-06-01; order 3 Meera Shah, Notebook, Nashik, quantity 3, amount 180.00, date 2023-11-20; order 4 Ravi Kumar, Folder, Jaipur, quantity 1, amount 45.75, date 2024-01-09.

What does this query return?

```sql
SELECT
    customer_name,
    amount
FROM orders;
```

**Options:**
1. 2 rows and 7 columns
2. 4 rows and 2 columns
3. 2 rows and 2 columns
4. 4 rows and 7 columns

**Correct:** 2

**Answer Explanation:**
The `SELECT` list names two columns, `customer_name` and `amount`, so the result has two columns. All four stored rows are read, because this query does not drop any row. The other columns stay in the table and are simply not shown.

**Why other options are wrong:**
- Option 1: Naming two columns does not reduce the result to two rows, and it does not show all seven columns.
- Option 3: There are two columns, but there are still four stored rows.
- Option 4: Four rows come back, but only the two named columns are shown.

## Q4 (MCQ, Easy)

What does this statement do the first time it runs successfully?

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

**Options:**
1. It inserts Asha, Ankit, Meera, and Ravi immediately.
2. It returns every customer name as a result grid.
3. It builds an empty table with those columns.
4. It removes an existing table named `orders`.

**Correct:** 3

**Answer Explanation:**
`CREATE TABLE orders` builds a new empty table and lists each column with a type. `order_id INT PRIMARY KEY` makes the order number the identity of a row. After this statement, the register exists and still has no rows. Rows appear only when `INSERT` runs.

**Why other options are wrong:**
- Option 1: `CREATE TABLE` does not store the four bills. `INSERT` does that.
- Option 2: This statement changes storage. It is not a `SELECT` that returns customer names.
- Option 4: Creating the table does not delete it. Running `CREATE TABLE` again after `orders` already exists causes an error because the name is taken.

## Q5 (MCQ, Moderate)

These rows are already stored in `orders`, and `order_id` is the primary key: 1 Asha Patil, 2 Ankit Rao, 3 Meera Shah, 4 Ravi Kumar. A further `INSERT` uses `order_id` 1 again. What does the engine do?

**Options:**
1. It rejects the new row because `order_id` is the primary key.
2. It keeps two rows that both have `order_id` 1.
3. It changes the new order number to 5 by itself.
4. It replaces the stored row for Asha Patil and keeps one row with `order_id` 1.

**Correct:** 1

**Answer Explanation:**
`order_id` is declared `INT PRIMARY KEY`. The value `1` is already stored for Asha Patil's order. A second row with that same identity is rejected. The original row stays as it was inserted.

**Why other options are wrong:**
- Option 2: A primary key cannot repeat, so two rows with `order_id` 1 are not stored.
- Option 3: The engine does not invent a new order number. The statement must use a value that is not already stored, such as `5`.
- Option 4: This insert is not an update of Asha's row. The duplicate key is rejected, and her stored row remains.

## Q6 (MCQ, Moderate)

These rows are stored in `orders`: order 1 Notebook in Pune, order 2 Pen Set in Pune, order 3 Notebook in Nashik, order 4 Folder in Jaipur. Which statement about this result is correct?

```sql
SELECT
    item_name,
    city
FROM orders;
```

**Options:**
1. The result has two rows, because the repeated `Notebook` values are collapsed into one row.
2. The result keeps only the rows whose city is Pune.
3. The result has four rows sorted by city name.
4. The result has four rows and two columns. `Notebook` appears on two rows, and `Pune` appears on two rows.

**Correct:** 4

**Answer Explanation:**
The query asks for `item_name` and `city` from every stored row. Four orders were stored, so four rows come back, with those two columns. Asha and Meera both bought a notebook, so `Notebook` appears twice. Asha and Ankit are both stored with city `Pune`, so `Pune` appears twice. The query shows rows. It does not collapse them.

**Why other options are wrong:**
- Option 1: Repeated item names stay on their own rows. Two notebook orders do not become one line.
- Option 2: The query has no condition that keeps Pune and drops Nashik or Jaipur. All four rows are read.
- Option 3: This query does not sort the rows. It only chooses columns.

## Q7 (MSQ, Moderate)

Select every correct statement.

**Options:**
1. `INSERT` adds a row. Text and dates are written in quotes, and numbers are not.
2. `SELECT` reads columns from stored rows. It does not insert a new order.
3. Leaving a column out of the `SELECT` list deletes that column from the table.
4. `FROM orders` names the table to read. `FROM order` does not name this table.

**Correct:** 1, 2, 4

**Answer Explanation:**
An `INSERT` such as order 1 stores `'Asha Patil'`, `'Notebook'`, `'Pune'`, and `'2024-03-12'` in quotes, while `1`, `2`, and `120.50` are written without quotes. `SELECT` plus `FROM` asks for columns and returns rows. It does not add a bill. The table name in this work is `orders`, so `FROM orders` is the clause that names it.

**Why other options are wrong:**
- Option 3: A shorter `SELECT` list only hides columns in that result. The stored table still has those columns.

## Q8 (MSQ, Moderate)

`orders` stores four rows. `Notebook` is the item on order 1 and order 3. Meera Shah's row is order 3. `amount` is `DECIMAL(8, 2)`, and one stored amount is `120.50`. Select every correct statement.

**Options:**
1. A column is one kind of fact, such as `city` or `amount`.
2. A row is one complete order, such as Meera Shah's notebook order.
3. `item_name` can be the primary key here because `Notebook` is stored on two rows.
4. `120.50` must be written in quotes because a money amount is text.

**Correct:** 1, 2

**Answer Explanation:**
Each heading, such as `city` or `amount`, is a column: one kind of fact on every row. Meera Shah's line is one row, one complete order, and her primary key value is `3`. The same column headings apply to all four orders.

**Why other options are wrong:**
- Option 3: `Notebook` is already on two rows. A repeated value cannot be the primary key. `order_id` does not repeat.
- Option 4: `amount` is `DECIMAL(8, 2)`. Money is written as a number, without quotes. Quotes are for text and dates.

## Q9 (MSQ, Hard)

Select every correct statement about the column types used for `orders`.

**Options:**
1. `amount DECIMAL(8, 2)` stores money with two digits after the decimal point, such as `120.50` and `45.75`.
2. `order_date` uses `VARCHAR`, and the quotes around a date are optional.
3. `quantity INT` stores a whole number, such as `2` or `3`.
4. `customer_name VARCHAR(40)` means the name is a whole number with a maximum of 40 digits.

**Correct:** 1, 3

**Answer Explanation:**
`DECIMAL(8, 2)` is the money type used for rupees and paise, so `120.50` and `45.75` keep two digits after the decimal point. `quantity` is `INT`, a whole number. Asha's quantity is `2`, and Meera's quantity is `3`.

**Why other options are wrong:**
- Option 2: `order_date` uses `DATE`, not `VARCHAR`. A date literal is written in quotes, in year-month-day form, such as `'2024-03-12'`.
- Option 4: `VARCHAR(40)` is short text with a maximum length of 40 characters. It is not a whole-number type. `INT` is the whole-number type.

## Q10 (MSQ, Hard)

These rows are stored in `orders`: order 1 Asha Patil, order 2 Ankit Rao, order 3 Meera Shah with date 2023-11-20, order 4 Ravi Kumar. Select every correct statement about this query.

```sql
SELECT
    order_id
FROM orders;
```

**Options:**
1. The result shows one `order_id` from each stored row: `1`, `2`, `3`, and `4`.
2. The result is the single number `4`, because this query counts the rows.
3. Meera Shah's row is included. Her `order_id` is `3`.
4. This query reads stored values. It does not insert a new order, and it does not remove a column from the table.

**Correct:** 1, 3, 4

**Answer Explanation:**
The query asks for the `order_id` column of every stored row. The four stored identities are `1`, `2`, `3`, and `4`. Meera Shah's row is the row with `order_id` 3. Her date, `2023-11-20`, stays stored even though this query does not show it. `SELECT` only reads. The table still has all seven columns after the query runs.

**Why other options are wrong:**
- Option 2: The query shows the order numbers. It does not collapse them into one count of `4`.
