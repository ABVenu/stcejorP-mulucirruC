# Content-fit QC changes (Topics / Video Part Names)

Matching now checks **Title + Topics part names**, not title alone.

## Rejected / replaced examples

| Old dump title | Why rejected | Replacement |
|---------------|--------------|-------------|
| `FTSDM00S1_2512_Coding_S01: Programming Foundation` | Topics start with **Introduction to Javascript & Data Types** | `FDN_Tech_1: Python Basics and Problem Discussions` (programming + Python) as Week 1 Session 1 |
| `FSDU02-MU01_S02: Key-Value Data Structures` | Full-stack track, not Python Topics | `PTBAM01S2_2505_S02: Application of class objects and constructos` (OOP) |
| `FTSDM00S1_2512_PS_S01: Problem Solving: ...` | Full-stack PS track | Removed; Python IDE / Regex / Modularization used instead |

## Rule
- If Topics/part names show JS/HTML/CSS/React → **do not use** for AIML plan
- Prefer FDN_Tech / PTBAM / PTDSM / PDSU / CC_BLOCK analytics titles with Python signals in Topics

## Summary
- Sessions with usable videos: **42/45**
- Sessions NA/rejected: **3/45**
- Video part rows: **301**
- Topics URL QC FAIL: **0**