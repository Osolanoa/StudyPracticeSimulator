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

## Mathematics visuals

The reusable renderer also supports `number-line`, `right-triangle`, `general-triangle`, `coordinate-plane`, `angle`, `parabola`, `prism`, `pyramid`, `regular-polygon-apothem`, `frequency-table`, `histogram`, `frequency-polygon`, and `probability-simple`. Existing visual types remain supported.

Set `visual.placement: 'question'` when a learner needs the figure to answer. Without this field, the existing feedback-only behavior is preserved. Figures and captions use the course's labels; plain text is escaped by the renderer. Newlines in explanations render as separate lines, so arithmetic steps need no external math library.

```js
visual: {
  type: 'right-triangle',
  placement: 'question',
  caption: 'Triángulo rectángulo con catetos conocidos.',
  sideLabels: { base: '6 cm', vertical: '8 cm', hypotenuse: 'c' }
}
```

For a histogram, `edges` has one more entry than `frequencies`; intervals must be contiguous and increasing. For a parabola, supply numerical `a`, `b`, `c`, `xRange`, and `yRange`. The mathematics course provides working examples of all thirteen types. Keep diagram data synchronized with the problem and do not label an unknown with its answer before the learner responds.
