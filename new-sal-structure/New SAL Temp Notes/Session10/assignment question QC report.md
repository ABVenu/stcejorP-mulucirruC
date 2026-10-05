# Assignment Question QC Report

## Question-Level QC

| Question Number | Type | Remarks |
|---|---|---|
| Q1 | MCQ, Easy | Correct option: 1. Relevance: Yes. `order_id` is the unique identity and cannot repeat. |
| Q2 | MCQ, Easy | Correct option: 4. Relevance: Yes. `SELECT *` returns the four stored rows. |
| Q3 | MCQ, Easy | Correct option: 2. Relevance: Yes. Two named columns still return four rows. |
| Q4 | MCQ, Easy | Correct option: 3. Relevance: Yes. `CREATE TABLE` builds an empty table. |
| Q5 | MCQ, Moderate | Correct option: 1. Relevance: Yes. A repeated `order_id` of 1 is rejected. |
| Q6 | MCQ, Moderate | Correct option: 4. Relevance: Yes. Four rows, two columns, with `Notebook` and `Pune` each on two rows. |
| Q7 | MSQ, Moderate | Correct options: 1, 2, 4. Relevance: Yes. `INSERT` quoting, `SELECT` reads, and `FROM orders`. |
| Q8 | MSQ, Moderate | Correct options: 1, 2. Relevance: Yes. A column is one fact and a row is one order. |
| Q9 | MSQ, Hard | Correct options: 1, 3. Relevance: Yes. `DECIMAL(8, 2)` for money and `INT` for quantity. |
| Q10 | MSQ, Hard | Correct options: 1, 3, 4. Relevance: Yes. `SELECT order_id` shows 1, 2, 3, and 4, including Meera's 3, and only reads. |
| Subjective | Practical, Medium | Medium difficulty: Yes. Questions 1–8 give the `CREATE` and `INSERT` statements and ask direct follow-up queries. Clear submission instructions: Yes. Single `.sql` file, run it, submit the SQL in the LMS answer box. Dataset needed: Yes, and it is included in the question. Relevance: Yes. |

## Assignment-Level QC

| Criteria | Objective Assignment | Subjective Assignment |
|---|---:|---:|
| Content Coverage | 5 | 5 |
| Creativity | 5 | 5 |
| Structural Adherence | 5 | 5 |
| No Logical Mistakes | True | True |
| No Presentation Mistakes | True | True |

## Final QC Status

Expected QC result achieved.
