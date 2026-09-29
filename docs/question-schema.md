# Generic question schema

Each course question is a JavaScript object in that course pack’s `questions.js`.

## Core fields

| Field | Purpose |
|---|---|
| `id` | Stable unique string. |
| `domain` | Domain ID listed in course configuration. |
| `domainName` | Optional display fallback; course configuration controls the displayed name. |
| `topic` | Topic shown in review screens. |
| `difficulty` | Usually `easy`, `medium`, or `hard`. |
| `type` | `single-choice`, `multiple-choice`, or `yes-no`. |
| `question` | Learner-facing stem. |
| `options` | Array of `{ id, text }` objects. |
| `correctAnswers` | Array of stable option IDs. |
| `explanation` | Main teaching explanation. |
| `optionExplanations` | Object keyed by option ID. |
| `keyClue`, `mentalModel`, `examTip` | Learning aids. |
| `reference` | Optional generic reference. Legacy `learnReference` is supported. |
| `visual` | Optional visual metadata. |
| `tags` | Optional topic tags. |

The engine uses option IDs for randomization, scoring, and feedback. Never use array index as an answer key.
