# Assignment Objective

## Q1 (MCQ, Easy)

`customers` and `orders` contain these rows.

| customer_id | customer_name | city |
|-------------|---------------|------|
| 1 | Anita Shah | Pune |
| 2 | Rahul Iyer | Delhi |
| 3 | Meera Nair | Chennai |
| 4 | Kabir Khan | Jaipur |

| order_id | customer_id | item_name | amount |
|----------|-------------|-----------|--------|
| 501 | 1 | Notebook | 120 |
| 502 | 1 | Pen set | 80 |
| 503 | 2 | Water bottle | 350 |
| 504 | 9 | Lamp | 500 |

Which `order_id` values does this query return?

```sql
SELECT orders.order_id
FROM customers
INNER JOIN orders
ON customers.customer_id = orders.customer_id;
```

**Options:**
1. 501, 502, 503, and 504
2. 501 and 502
3. 501, 502, and 503
4. 503 and 504

**Correct:** 3

**Answer Explanation:**
`INNER JOIN` keeps a row only when `customer_id` matches. 501 and 502 match Anita. 503 matches Rahul. 504 points at customer 9, who is not in `customers`, so it drops. Meera and Kabir have no order, so they add no rows.

**Why other options are wrong:**
- Option 1: Order 504 has no matching customer, so an inner join drops it.
- Option 2: Order 503 matches Rahul, so it stays.
- Option 4: Orders 501 and 502 match Anita, and order 504 does not match anyone.

## Q2 (MCQ, Easy)

`customers` has Anita Shah (1, Pune), Rahul Iyer (2, Delhi), Meera Nair (3, Chennai), and Kabir Khan (4, Jaipur). `orders` has 501 for customer 1, 502 for customer 1, 503 for customer 2, and 504 for customer 9.

How many result rows does this query return?

```sql
SELECT customers.customer_name, orders.order_id
FROM customers
LEFT JOIN orders
ON customers.customer_id = orders.customer_id;
```

**Options:**
1. 3
2. 4
3. 6
4. 5

**Correct:** 4

**Answer Explanation:**
A left join keeps every customer. Anita appears twice (501 and 502), Rahul once (503), and Meera and Kabir once each with NULL order columns. That is 5 rows. Order 504 is not kept, because this join protects `customers`.

**Why other options are wrong:**
- Option 1: 3 is the inner-join count. The left join also keeps Meera and Kabir.
- Option 2: 4 would be one row per customer, but Anita's two orders make two rows.
- Option 3: 6 is the full outer count, which also keeps order 504.

## Q3 (MCQ, Easy)

`customers` ids are 1 Anita Shah, 2 Rahul Iyer, 3 Meera Nair, and 4 Kabir Khan. Order 504 stores `customer_id` 9, item Lamp, amount 500.

What is `customer_name` on the result row for order 504?

```sql
SELECT customers.customer_name, orders.order_id, orders.item_name
FROM customers
RIGHT JOIN orders
ON customers.customer_id = orders.customer_id
WHERE orders.order_id = 504;
```

**Options:**
1. NULL
2. Kabir Khan
3. Anita Shah
4. An empty string

**Correct:** 1

**Answer Explanation:**
`RIGHT JOIN` keeps every order. Order 504 stays, and `customer_name` is NULL because no customer row has id 9. NULL means no match. It is not a name and it is not zero.

**Why other options are wrong:**
- Option 2: Kabir is customer 4. Order 504 stores customer_id 9.
- Option 3: Anita is customer 1. Her orders are 501 and 502.
- Option 4: The missing side is NULL, not `''`.

## Q4 (MCQ, Easy)

```sql
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name TEXT NOT NULL
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    item_name TEXT NOT NULL
);
```

`customers.customer_id` is unique. `orders.customer_id` stores 1 twice, once for each of Anita's orders, and it also stores 9.

Which statement is correct?

**Options:**
1. `order_id` is the primary key of `customers`.
2. `orders.customer_id` holds a `customers.customer_id` value, so it is the foreign key.
3. Two rows in `customers` may share the same primary key, as long as the name column is different.
4. A foreign key must be unique inside `orders`.

**Correct:** 2

**Answer Explanation:**
The primary key of `customers` is `customer_id`. `orders.customer_id` stores that id, which is the foreign-key idea. Anita's id 1 appears on two orders, so the foreign key is allowed to repeat.

**Why other options are wrong:**
- Option 1: `order_id` identifies a row in `orders`, not a row in `customers`.
- Option 3: A primary key identifies one row. Two customer rows cannot share it.
- Option 4: Customer 1 appears on orders 501 and 502. The foreign key is not required to be unique.

## Q5 (MCQ, Moderate)

`customers` has ids 1 Anita, 2 Rahul, 3 Meera, and 4 Kabir. `orders` has 501 and 502 for customer 1, 503 for customer 2, and 504 for customer 9. The left join first keeps Meera and Kabir with NULL order columns.

How many rows does this query return?

```sql
SELECT customers.customer_name, orders.order_id
FROM customers
LEFT JOIN orders
ON customers.customer_id = orders.customer_id
WHERE orders.order_id IS NOT NULL;
```

**Options:**
1. 5, because a left join keeps every customer, including people with no bill
2. 6, because unmatched rows on both sides stay
3. 4, because every order stays
4. 3, because the `WHERE` test removes NULL order ids

**Correct:** 4

**Answer Explanation:**
The join builds 5 rows, including Meera and Kabir with NULL `order_id`. `WHERE orders.order_id IS NOT NULL` then drops those two rows. The printed result is 501, 502, and 503 only.

**Why other options are wrong:**
- Option 1: That is the left join before `WHERE`. The extra test removes the NULL bill numbers.
- Option 2: This query is not a full outer join, and `WHERE` also drops NULL order ids.
- Option 3: Order 504 is not in a left join that starts from `customers`.

## Q6 (MCQ, Moderate)

Matched pairs are Anita twice and Rahul once. Meera and Kabir have no order. Order 504 has no customer.

How many rows does this query return, and who is present?

```sql
SELECT customers.customer_name, orders.order_id
FROM customers
FULL OUTER JOIN orders
ON customers.customer_id = orders.customer_id;
```

**Options:**
1. 5 rows, and order 504 is missing
2. 4 rows, and Meera and Kabir are missing from the result
3. 6 rows, and Meera, Kabir, and order 504 all appear
4. 3 rows, and only matching pairs appear

**Correct:** 3

**Answer Explanation:**
A full outer join keeps the 3 matches, plus Meera, plus Kabir, plus order 504. That is 6 rows. Missing partner columns are NULL.

**Why other options are wrong:**
- Option 1: 5 rows is the left join from `customers`, which drops order 504.
- Option 2: 4 rows is the right join to `orders`, which drops Meera and Kabir.
- Option 4: 3 rows is the inner join, which drops every unmatched side.

## Q7 (MSQ, Moderate)

Customers: 1 Anita Shah, 2 Rahul Iyer, 3 Meera Nair, 4 Kabir Khan. Orders: 501 customer 1 Notebook 120, 502 customer 1 Pen set 80, 503 customer 2 Water bottle 350, 504 customer 9 Lamp 500.

```sql
SELECT customers.customer_name, orders.order_id, orders.amount
FROM customers
INNER JOIN orders
ON customers.customer_id = orders.customer_id;
```

Which statements are true?

**Options:**
1. Anita Shah appears on two result rows.
2. Meera Nair appears.
3. Rahul Iyer appears once, with amount 350.
4. The lamp order is absent.

**Correct:** 1, 3, 4

**Answer Explanation:**
Anita matches two orders, so her name repeats once per order. Rahul matches order 503 only. Meera has no order, and customer 9 is not in `customers`, so both are absent from an inner join.

**Why other options are wrong:**
- Option 2: Meera is a real customer, but an inner join drops her because no order has `customer_id` 3.

## Q8 (MSQ, Moderate)

`customers` has 4 rows. `orders` has 4 rows. No city text equals an item name. `NULL = NULL` is not a successful match.

```sql
SELECT customers.customer_name, orders.item_name
FROM customers
INNER JOIN orders
ON customers.city = orders.item_name;
```

Which statements are true?

**Options:**
1. `INNER JOIN` with `ON customers.city = orders.item_name` returns zero rows on this data.
2. `INNER JOIN` with `ON 1 = 1` returns 16 rows.
3. A NULL key matches another NULL key.
4. `customers.customer_id` is required in the select list when both tables have a column named `customer_id` and you want that id.

**Correct:** 1, 2, 4

**Answer Explanation:**
City compared with item name matches nothing here, so the inner join is empty. `ON 1 = 1` is always true, so 4 customers × 4 orders = 16 rows. Both tables have `customer_id`, so the table name is required to avoid an ambiguous column.

**Why other options are wrong:**
- Option 3: In SQL, `NULL = NULL` is not true, so blank keys do not pair.

## Q9 (MSQ, Hard)

Customers are 1 Anita, 2 Rahul, 3 Meera, and 4 Kabir. Orders are 501 and 502 for customer 1, 503 for customer 2, and 504 for customer 9. Left means the table after `FROM`. Right means the table after the join keyword.

```sql
SELECT customers.customer_name, orders.order_id, orders.amount
FROM customers
LEFT JOIN orders
ON customers.customer_id = orders.customer_id;
```

Which statements are true?

**Options:**
1. `RIGHT JOIN` from `customers` to `orders` keeps all 4 orders.
2. `LEFT JOIN` from `orders` to `customers` also keeps all 4 orders, with NULL customer columns on order 504.
3. `LEFT JOIN` from `customers` to `orders` shows Meera with `order_id` NULL.
4. On that same left join, Kabir's `amount` is 0.

**Correct:** 1, 2, 3

**Answer Explanation:**
A right join protects `orders`, so 501, 502, 503, and 504 all stay. Starting from `orders` and using a left join protects the same side. A left join from `customers` keeps Meera and fills the order columns with NULL.

**Why other options are wrong:**
- Option 4: Kabir has no order. The amount cell is NULL, not 0.

## Q10 (MSQ, Hard)

Inner matches: 3 rows. Customers without orders: Meera and Kabir. Orders without a customer: 504. Anita's `customer_id` is stored on two order rows.

```sql
SELECT customers.customer_name, orders.order_id
FROM customers
FULL OUTER JOIN orders
ON customers.customer_id = orders.customer_id;
```

Which statements are true?

**Options:**
1. `FULL OUTER JOIN` has 6 rows: 3 matches, 2 customers without orders, and 1 order without a customer.
2. `customer_id` 1 appearing on two order rows is valid, because a foreign key may repeat.
3. MySQL often rejects `FULL OUTER JOIN`. The meaning is still "keep unmatched rows from both sides".
4. A repeated Anita name in an inner join means one order was copied by mistake.

**Correct:** 1, 2, 3

**Answer Explanation:**
3 + 2 + 1 = 6 rows for the full outer join. The foreign key points at customer 1 twice because there are two bills. Some tools, including common MySQL versions, do not accept `FULL OUTER JOIN`, but the result definition does not change.

**Why other options are wrong:**
- Option 4: Anita appears twice because orders 501 and 502 are two matches, not one bill copied twice.
