# Study / Practice Exam Simulator

A framework-free static web application for study courses and practice exams. The generic engine is separate from course packs, so the same site can host certification, technology, accounting, or other question banks.

## Features

- Course selection with `?course=<course-id>`
- Practice tests, retakes, best/latest scoring, bookmarks, mistake review, and timed exams
- Stable-ID answer randomization and rich per-option feedback
- Course-specific domains, score threshold, practice group size, and reference labels
- Dark/light theme and course-isolated browser persistence
- Optional offline HTML/CSS educational visuals
- No framework, package manager, build process, backend, database, or API required

## Screenshot

_Add a screenshot here before publishing, for example `docs/screenshot.png`._

## Project structure

```text
index.html
css/style.css
js/app.js          generic simulator engine
js/storage.js      course-namespaced browser storage
js/visuals.js      reusable visual renderer
js/loader.js       static course loader and registry
courses/az900/     audited Microsoft Azure Fundamentals course pack
courses/example/   three-question authoring template
courses/matematicas-9-mep/  Spanish ninth-year mathematics (60 questions)
docs/              schema and course-authoring guides
```

## Local use

Open `index.html` in a modern browser. The root page is a course selector; choose one of the public courses to begin. The template course remains available for development with `index.html?course=example`.

The Costa Rica mathematics course has six mixed practice tests of ten questions and a full 60-question, 180-minute examination. Its Spanish feedback teaches the solution steps, and its diagrams work offline in both themes.

No installation is required. Course scripts load with relative classic script URLs, so the application normally also works from `file://`.

## GitHub Pages

Commit the repository and configure GitHub Pages to deploy from the repository root. The app uses relative paths such as `./js/loader.js` and `./courses/az900/config.js`; it does not assume a domain-root deployment. This supports project URLs such as `https://username.github.io/repository-name/`. Course changes retain that clean root URL.

Cloudflare Pages, Netlify, Vercel static deployment, and other ordinary static hosts work the same way.

## Adding a course

Copy `courses/example/`, edit its configuration and questions, register the folder ID in `js/loader.js`, then open `?course=your-course-id`. See [creating a course](docs/creating-a-course.md) and the [question schema](docs/question-schema.md).

## LocalStorage behavior

Progress uses a course namespace, for example `study_az900_question_history` or `study_example_question_history`. Courses therefore do not mix bookmarks, statistics, exams, settings, or themes.

On first AZ-900 load, existing legacy keys such as `az900_question_history` and `az900_settings` are copied to their new `study_az900_...` equivalents when no new key exists. Legacy records are left intact as a safety fallback.

## Disclaimer

The AZ-900 questions are original study questions and are **not** real Microsoft certification exam questions. This project is independent and is not affiliated with, endorsed by, or provided by Microsoft.

The mathematics course is an independent study aid using original exercises based on the stated ninth-year topics. It is not an official MEP examination, does not contain leaked questions, and does not predict the questions that will appear in an examination.
