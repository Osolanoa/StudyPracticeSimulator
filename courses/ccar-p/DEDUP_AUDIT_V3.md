# CCAR-P question deduplication — 2026-11-24

## Scope
The original bank adapted 163 questions from 33 user-supplied Examice PDFs. After comparing normalized question wording and reviewing the related answer choices, 37 overlapping entries were removed: **31 identical question texts and 6 near-equivalent scenarios**. This leaves **126 unique study items** (source IDs are intentionally nonconsecutive).

This is **content deduplication, not an independent certification of third-party answer keys**. Except for choosing the cleaner full version of an overlapping question, retained questions, answer choices, correct-answer IDs, explanations and sources were not rewritten.

## Decisions

| Overlapping source IDs | Retained ID | Removed ID | Basis |
| --- | --- | --- | --- |
| CCARP-004 / CCARP-151 | CCARP-004 | CCARP-151 | Exact same question text |
| CCARP-007 / CCARP-140 | CCARP-007 | CCARP-140 | Exact same question text |
| CCARP-009 / CCARP-130 | CCARP-130 | CCARP-009 | Same scenario / closely matching question; Later copy removes PDF header contamination and has clearer distractors |
| CCARP-011 / CCARP-137 | CCARP-011 | CCARP-137 | Exact same question text |
| CCARP-014 / CCARP-134 | CCARP-134 | CCARP-014 | Same scenario / closely matching question; Later copy removes an embedded PDF page header |
| CCARP-016 / CCARP-131 | CCARP-016 | CCARP-131 | Exact same question text |
| CCARP-021 / CCARP-146 | CCARP-021 | CCARP-146 | Exact same question text |
| CCARP-022 / CCARP-159 | CCARP-022 | CCARP-159 | Exact same question text |
| CCARP-023 / CCARP-129 | CCARP-023 | CCARP-129 | Exact same question text |
| CCARP-027 / CCARP-147 | CCARP-027 | CCARP-147 | Exact same question text |
| CCARP-030 / CCARP-138 | CCARP-138 | CCARP-030 | Same scenario / closely matching question; Later copy offers the same risk-stratified sampling task with cleaner wording |
| CCARP-035 / CCARP-143 | CCARP-035 | CCARP-143 | Exact same question text |
| CCARP-036 / CCARP-155 | CCARP-036 | CCARP-155 | Exact same question text |
| CCARP-039 / CCARP-126 | CCARP-039 | CCARP-126 | Exact same question text |
| CCARP-041 / CCARP-145 | CCARP-041 | CCARP-145 | Exact same question text |
| CCARP-044 / CCARP-156 | CCARP-044 | CCARP-156 | Exact same question text |
| CCARP-051 / CCARP-136 | CCARP-051 | CCARP-136 | Exact same question text |
| CCARP-052 / CCARP-153 | CCARP-052 | CCARP-153 | Same scenario / closely matching question; Keep Q52's risk-sensitive delegation principle; Q153 changes suggested answer framing |
| CCARP-053 / CCARP-148 | CCARP-053 | CCARP-148 | Exact same question text |
| CCARP-055 / CCARP-144 | CCARP-144 | CCARP-055 | Same scenario / closely matching question; Later copy removes an embedded PDF page header |
| CCARP-056 / CCARP-161 | CCARP-056 | CCARP-161 | Exact same question text |
| CCARP-057 / CCARP-157 | CCARP-057 | CCARP-157 | Exact same question text |
| CCARP-059 / CCARP-158 | CCARP-158 | CCARP-059 | Same scenario / closely matching question; Later copy removes an embedded PDF page header |
| CCARP-060 / CCARP-135 | CCARP-135 | CCARP-060 | Exact same question text; Later copy avoids text contamination in answer options |
| CCARP-062 / CCARP-127 | CCARP-062 | CCARP-127 | Exact same question text |
| CCARP-075 / CCARP-154 | CCARP-075 | CCARP-154 | Exact same question text |
| CCARP-081 / CCARP-152 | CCARP-081 | CCARP-152 | Exact same question text |
| CCARP-083 / CCARP-160 | CCARP-083 | CCARP-160 | Exact same question text |
| CCARP-085 / CCARP-128 | CCARP-085 | CCARP-128 | Exact same question text |
| CCARP-090 / CCARP-162 | CCARP-090 | CCARP-162 | Exact same question text |
| CCARP-092 / CCARP-133 | CCARP-092 | CCARP-133 | Exact same question text |
| CCARP-095 / CCARP-132 | CCARP-095 | CCARP-132 | Exact same question text |
| CCARP-111 / CCARP-141 | CCARP-111 | CCARP-141 | Exact same question text |
| CCARP-119 / CCARP-150 | CCARP-119 | CCARP-150 | Exact same question text |
| CCARP-121 / CCARP-142 | CCARP-121 | CCARP-142 | Exact same question text |
| CCARP-123 / CCARP-163 | CCARP-123 | CCARP-163 | Exact same question text |
| CCARP-124 / CCARP-149 | CCARP-124 | CCARP-149 | Exact same question text |

## Delivery / user history
- The 126 IDs are rebalanced into a stable mixed permutation: 12 practice groups of 10 questions plus a final group of 6. Each full group covers at least six domains and uses distinct original PDF pages.
- New group score records use `study_ccar-p_practice_tests_v3`. The original v1/v2 practice results remain in their existing local storage keys; **do not reuse them for new group membership**.
- Per-question attempt history is retained. If a removed duplicate was previously attempted but the canonical ID was not, the old statistics are copied onto the retained ID without deleting the original entry.
- Bookmarks referring to removed IDs are remapped to the retained corresponding question.
- No other course is deduplicated. The original downloadable PDFs and their source wording are not altered.

## Source cautions
The CCAR-P key suggestions originate from the third-party PDFs, not official Anthropic answers. In particular Q52 vs Q153 have overlapping premises but differ in suggested answer framing. We retain Q52's risk-based delegation wording rather than Q153's more absolute human-review instruction; this is a choice between duplicates, not an authoritative regrading of the source.
