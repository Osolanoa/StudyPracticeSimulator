# Creating a course pack

A course pack is a folder under `courses/`. It supplies subject-specific configuration and questions; the files in `js/` remain generic.

## Create a course

1. Copy `courses/example/` to a new lowercase folder, for example `courses/linux-fundamentals/`.
2. In `config.js`, choose a stable lowercase `id`. It becomes part of the browser-storage namespace, so do not change it after learners start using the course.
3. Set the course name, short name, description, version, practice group size, passing score, reference label, and domains.
4. Replace sample records in `questions.js` with your questions.
5. Add the folder ID to the `registry` array in `js/loader.js`.
6. Open the root page and select the course. The legacy `index.html?course=linux-fundamentals` form remains compatible and cleans itself to the root URL after loading.

Classic relative scripts are used intentionally. This supports static hosts and normally direct `file://` opening without a fetch request.

## Optional course-specific settings

Existing courses keep their defaults when these fields are omitted:

```js
language: 'es',
examQuestionCounts: [60],
defaultExamCount: 60,
examTimeMinutes: 180,
referenceLabel: 'Tema',
disclaimer: 'Independent practice material; not an official examination.',
uiTranslations: { 'Dashboard': 'Inicio', 'Correct': 'Correcta' }
```

`uiTranslations` supplies exact English-to-local-language UI phrases. Translation changes visible text, not control values, option IDs, scoring, or stored records. Use the mathematics configuration as a complete Spanish example. Subject content and diagram labels must also be written in the course language. Exam domain weights, when supplied through `examDomainWeights`, use domain IDs as keys and should add up to 1.

## Complete question example

```js
{
  id: 'LINUX-001',
  domain: 'shell',
  domainName: 'Shell basics',
  topic: 'Working directory',
  difficulty: 'easy',
  type: 'single-choice',
  question: 'Which command prints the current working directory?',
  options: [
    { id: 'A', text: 'pwd' },
    { id: 'B', text: 'cd' },
    { id: 'C', text: 'ls' },
    { id: 'D', text: 'mkdir' }
  ],
  correctAnswers: ['A'],
  explanation: 'pwd means print working directory. It reports the directory in which the shell is currently operating.',
  optionExplanations: {
    A: 'Correct. pwd prints the current directory path.',
    B: 'Incorrect. cd changes the current directory.',
    C: 'Incorrect. ls lists directory contents.',
    D: 'Incorrect. mkdir creates a directory.'
  },
  keyClue: 'prints the current working directory',
  mentalModel: 'pwd = print working directory',
  examTip: 'Use command purpose, not command length, to distinguish shell tools.',
  reference: 'Your course reference',
  tags: ['shell', 'commands']
}
```

## Rules

- Keep question and option IDs unique and stable.
- Use `correctAnswers` with option IDs, never positions. Multiple-choice questions must say how many answers to select and contain exactly that many answer IDs.
- Required engine fields are `id`, `domain`, `type`, `question`, `options`, `correctAnswers`, and `optionExplanations`. The teaching fields shown above are strongly recommended.
- `domainName`, `visual`, `tags`, and subject-specific metadata are optional. The configured domain name takes precedence in the UI.
- A visual is optional. Existing visual types are examples; unsupported types simply do not render.
- Keep content files as classic JavaScript assigning `window.COURSE_QUESTIONS`.
