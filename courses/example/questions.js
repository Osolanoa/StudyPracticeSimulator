window.COURSE_QUESTIONS = [
  {
    id: 'EXAMPLE-001',
    domain: 'fundamentals',
    domainName: 'Fundamentals',
    topic: 'Retrieval practice',
    difficulty: 'easy',
    type: 'single-choice',
    question: 'What is the best first step after selecting a new course pack?',
    options: [
      { id: 'A', text: 'Read its configuration and question schema' },
      { id: 'B', text: 'Reuse another course’s local progress' },
      { id: 'C', text: 'Change the generic engine for the subject' },
      { id: 'D', text: 'Remove stable question IDs' }
    ],
    correctAnswers: ['A'],
    explanation: 'A course pack supplies its own configuration and questions. Reading those files first shows the course name, domains, scoring preferences, and required question fields. The engine stays generic, while the course pack supplies the subject-specific material.',
    optionExplanations: {
      A: 'Correct. The configuration and schema are the source of truth for a course pack.',
      B: 'Incorrect. Progress is isolated by course ID so subjects do not mix.',
      C: 'Incorrect. New subjects should be supplied as content packs, not hard-coded into the engine.',
      D: 'Incorrect. Stable IDs preserve bookmarks and question history for that course.'
    },
    keyClue: 'new course pack',
    mentalModel: 'Engine = reusable behavior\nCourse pack = subject content',
    examTip: 'Keep course IDs and question IDs stable after publishing.',
    reference: 'docs/creating-a-course.md',
    tags: ['example', 'course-pack']
  },
  {
    id: 'EXAMPLE-002',
    domain: 'fundamentals',
    domainName: 'Fundamentals',
    topic: 'Storage isolation',
    difficulty: 'easy',
    type: 'yes-no',
    question: 'True or false: progress from two courses with different course IDs is stored separately.',
    options: [{ id: 'A', text: 'Yes' }, { id: 'B', text: 'No' }],
    correctAnswers: ['A'],
    explanation: 'Yes. The storage namespace includes the active course ID. A bookmark or exam from one course cannot appear in another course merely because both use the same simulator.',
    optionExplanations: {
      A: 'Correct. A course ID is part of every storage key.',
      B: 'Incorrect. Different course IDs intentionally use separate keys.'
    },
    keyClue: 'different course IDs',
    mentalModel: 'course ID → separate localStorage namespace',
    examTip: 'Choose a stable, lowercase course ID before users begin studying.',
    tags: ['example', 'storage']
  },
  {
    id: 'EXAMPLE-003',
    domain: 'fundamentals',
    domainName: 'Fundamentals',
    topic: 'Static delivery',
    difficulty: 'easy',
    type: 'single-choice',
    question: 'Which approach keeps this simulator compatible with simple static hosting?',
    options: [
      { id: 'A', text: 'Classic relative script files' },
      { id: 'B', text: 'A required server-side database' },
      { id: 'C', text: 'A package installation step' },
      { id: 'D', text: 'An API call for every question' }
    ],
    correctAnswers: ['A'],
    explanation: 'The simulator loads its selected course through classic JavaScript files using relative paths. That works on ordinary static hosts and can also work when opened directly from a local folder. It does not require a build process or a backend.',
    optionExplanations: {
      A: 'Correct. Relative classic scripts are portable across common static hosts.',
      B: 'Incorrect. Browser localStorage is sufficient for local progress.',
      C: 'Incorrect. The project intentionally has no package manager or build step.',
      D: 'Incorrect. Course packs are local JavaScript files, so an API is unnecessary.'
    },
    keyClue: 'simple static hosting',
    mentalModel: 'Static files + browser storage = deployable without a backend',
    examTip: 'Avoid root-absolute asset paths on project-site hosting.',
    tags: ['example', 'static-hosting']
  }
];
