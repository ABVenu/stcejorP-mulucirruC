# Assignment Question QC Report

## Question-Level QC

| Question Number | Type | Remarks |
|---|---|---|
| Q1 | MCQ, Easy | Correct option: 2. Relevance: Yes. Tests that a window keeps every row. |
| Q2 | MCQ, Easy | Correct option: 4. Relevance: Yes. Tests `ROW_NUMBER` with `ORDER BY` inside `OVER`. |
| Q3 | MCQ, Easy | Correct option: 1. Relevance: Yes. Tests `PARTITION BY` with a name tie-break. |
| Q4 | MCQ, Easy | Correct option: 3. Relevance: Yes. Tests `RANK` after a tie. |
| Q5 | MCQ, Moderate | Correct option: 2. Relevance: Yes. Tests `DENSE_RANK` after a tie. |
| Q6 | MCQ, Moderate | Correct option: 4. Relevance: Yes. Tests Science `RANK` and `DENSE_RANK`. |
| Q7 | MSQ, Moderate | Correct options: 1, 2, 4. Relevance: Yes. Tests shared ranks versus unique `ROW_NUMBER`. |
| Q8 | MSQ, Moderate | Correct options: 1, 2, 4. Relevance: Yes. Tests a tie-break inside `OVER`. |
| Q9 | MSQ, Hard | Correct options: 1, 2, 3. Relevance: Yes. Tests a three-way tie. |
| Q10 | MSQ, Hard | Correct options: 1, 2, 4. Relevance: Yes. Tests final `ORDER BY`, empty `OVER`, and `GROUP BY` contrast. |
| Subjective Task | Practical, Medium | Medium difficulty: Yes. Clear submission instructions: Yes (single .sql file, run, then LMS answer box). Dataset needed: Yes, and the `CREATE`/`INSERT` is in the task. Relevance: Yes. |

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
