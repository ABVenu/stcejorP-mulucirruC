# V1 — Full Data QC Report (all columns & content)

Plans scanned: **7**
Total ERR: **0** · Total WARN: **5**

## Summary

| Plan | Rows | Usable | NA | Parts | ERR | WARN | Domains |
|------|-----:|-------:|---:|------:|----:|-----:|---------|
| Students-2xWeek-12Week | 24 | 24 | 0 | 175 | 0 | 1 | Python:8, SQL:6, Excel:4, Maths:2, Analytics:2, ML:2 |
| Students-2xWeek-15Week | 30 | 30 | 0 | 215 | 0 | 1 | Python:8, SQL:6, Excel:4, Maths:2, Analytics:4, ML:6 |
| Students-2xWeek-4Week | 8 | 8 | 0 | 54 | 0 | 0 | Python:6, SQL:2 |
| Students-2xWeek-8Week | 16 | 16 | 0 | 117 | 0 | 1 | Python:6, SQL:5, Maths:1, Excel:4 |
| Students-Baseline-3xWeek | 45 | 42 | 3 | 301 | 0 | 1 | Python:15, SQL:6, Excel:4, Analytics:7, Maths:7, ML:6 |
| Students-PSE-2xWeek | 30 | 30 | 0 | 209 | 0 | 1 | Python:13, Maths:1, SQL:8, Excel:8 |
| Students-PSE-3xWeek | 45 | 45 | 0 | 324 | 0 | 0 | Python:14, Maths:3, Excel:12, SQL:16 |

## Errors

- none

## Warnings

- [WARN] [Students-2xWeek-12Week] VLOOKUP/Pivot share CDN — documented in Dump Data Warning (OK)
- [WARN] [Students-2xWeek-15Week] VLOOKUP/Pivot share CDN — documented in Dump Data Warning (OK)
- [WARN] [Students-2xWeek-8Week] VLOOKUP/Pivot share CDN — documented in Dump Data Warning (OK)
- [WARN] [Students-Baseline-3xWeek] VLOOKUP/Pivot share CDN — documented in Dump Data Warning (OK)
- [WARN] [Students-PSE-2xWeek] VLOOKUP/Pivot share CDN — documented in Dump Data Warning (OK)

## Checks performed
1. Required columns present on Plan + VideoParts
2. Session Number sequence & Week consistency
3. Dump Session ID exists; Title from Dump matches dump row
4. Video Links == unique Topics `[:src]` (order-preserving)
5. Numbered `1. url` / `1. name` format; counts == Part Count
6. Video Links JSON sync
7. Plan ↔ VideoParts sync (link, name, ID, week)
8. No JS / Programming Foundation in AIML slots
9. Milestone pedagogy (4w mix, 8w maths, maths before ML on 12/15)
10. Dump Data Warning when VLOOKUP/Pivot share CDN set