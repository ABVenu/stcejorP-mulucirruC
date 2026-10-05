# Students 3xWeek 15Week — Full Cell/Column QC

- Plan rows: 45 (expected 45)
- Usable matched: 42
- NA / not available: 3
- VideoParts rows: 301
- ERR: 0
- WARN: 1

## Errors

- none

## Warnings

- [WARN] Excel VLOOKUP and Pivot share identical Video Links set in dump — verify content (already flagged in Match Status ideally)

## Checks performed

1. Session Number sequence `1.1`…`15.3` and Week consistency
2. Required columns non-empty
3. Dump Session ID exists; Title from Dump matches that row
4. Video Links == unique `[:src]` from that row Topics only
5. Numbered format `1. url` / `1. name` line counts == Part Count
6. VideoParts ↔ Plan link/name/ID sync
7. Video Links JSON sync
8. Topics QC PASS for usable rows
9. No JS/web Topics in AIML domains; no Programming Foundation used
10. QC file session coverage

## Dump Data Warning column

Documented in CSV column `Dump Data Warning` for affected sessions (VLOOKUP / Pivot same CDN set).
