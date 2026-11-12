# Study Practice Simulator — Cinematic Night (design preview)

**Status:** design implementation ready for visual review in the branch
\`design/cosmic-sun-moon-preview\`. The published \`main\` branch is unchanged.

## Preview

Open in a browser (GitHack static preview of the branch):

https://raw.githack.com/Osolanoa/StudyPracticeSimulator/design/cosmic-sun-moon-preview/index.html

If GitHack is unavailable, check out the branch locally and open \`index.html\`.
No build, backend, npm install or framework migration is required.

## Approved direction, implemented

- **Celestial environment:** large, richly cratered Moon to the upper left, dynamic Sun with active-region photography/plasma/corona to the right, atmospheric nebulas, drifting starfield, occasional meteors and a subtle Earth-horizon glow.
- **Continuous movement:** mathematically evolving animations (no GIF/video playback cycle). Multiple incommensurate periodic effects prevent a scene-wide visible reset. Cursor-responsive depth shifts.
- **Premium controls:** midnight-blue/navy glass top navigation, accessible iconography, softened blue highlights, understated primary/secondary buttons and course-card progress. No bright purple CTA gradients.
- **Real features only:** uses the existing two public courses, **Azure AZ-900** and **Matemáticas 9.º**, and the real locally stored progress. Course launch, dashboard, practice tests, exam setup, mistake review, bookmarks and settings all route into the existing engine. No invented AI tutor or study-plan service.
- **Consistent in-course styling:** side navigation icons, accessible active/focus states, navy question buttons/cards, answer feedback and modal controls.
- **Reduced movement during questions:** Canvas and optional WebGL rendering pause in \`session\` view. Users can also select **High → Reduced → Off** using the floating effect button; the setting is persisted locally and defaults to Reduced if the OS requests reduced motion.
- **Progressive rendering:** CSS/photographic fallback works without GPU/WebGL. A Three.js module adds Moon sphere, animated solar plasma and image-based solar active regions where supported. On narrow or low-memory screens, use the lighter fallback.

## Asset acknowledgements

The static backgrounds use NASA source imagery at runtime:
- Moon: [NASA Scientific Visualization Studio Moon Mosaic](https://svs.gsfc.nasa.gov/5001/) (\`moon_mosaic_print.jpg\`), Ernie Wright and collaborators / NASA SVS.
- 3D Moon: [NASA SVS CGI Moon Kit](https://svs.gsfc.nasa.gov/4720/) (\`lroc_color_2k.jpg\`), Ernie Wright (USRA), Noah Petro (NASA/GSFC).
- Sun: [NASA/GSFC/SDO PIA26681](https://science.nasa.gov/photojournal/image-of-sun-from-nasas-solar-dynamics-observatory/), captured September 10, 2025.
- Three.js JavaScript module is loaded from jsDelivr; no framework conversion.

NASA images may be used for educational pages when credited and without implying NASA endorsement; see [NASA media-use guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/).

## Functional smoke review (2026-11-11)

**Passed by in-chat JavaScript/Dom-stub checks:**
- JavaScript syntax: \`js/loader.js\`, \`js/app.js\`, \`js/cosmic.js\`, \`js/cosmic-landing.js\`, \`js/cosmic-webgl.js\` (module \`import\` excluded for Function-parser check).
- Landing renderer: exactly two real course cards, 5 functional navigation items, 5 quick actions, calculated percentages, no fake courses or AI assistant.
- Each action: Start, Practice, Exam, Mistakes, Bookmarks, Settings, Progress routed to the correct course/view; Home and Courses trigger navigation/scroll.
- Six existing course starting views rendered without errors: Dashboard, Practice Tests, Exam Setup, Mistakes, Bookmarks, Settings.
- CSS file delimiters balanced; every stylesheet/script referenced by \`index.html\` exists in branch.
- Existing course content, questions, grading, localStorage progress, and the live \`main\` branch were not modified.

**Not yet verified:** a full Chromium/WebGL screenshot of the deployed branch, real-world NASA asset CORS/loading on all browsers, mobile layout screenshots, end-to-end quiz completion, and GPU performance benchmarking. This PR intentionally stays **draft** until visual review and those checks are performed. The cosmetic WebGL path has a fallback; do not call it production verified yet.


## Fidelity correction after screenshot comparison — November 11, 2026

The first live preview was visibly different from the approved mock (Moon/Sun disproportionately large, plain raw solar imagery, no cosmic cloud depth, oversized title/cards below fold). This branch now includes a dedicated fidelity pass:

- \`css/cosmic-fidelity.css\` restores the reference spacing, restrained navy CTAs, hero typography, small top nav and compact 2-card course grid plus five quick actions.
- \`assets/cosmic-atmosphere.svg\` is a handcrafted high-resolution scalable galaxy/nebula/cloud and Earth-horizon layer.
- \`assets/cosmic-solar-prominences.svg\` adds bright coronal loops and sparkles around the reduced-scale Sun.
- \`assets/cosmic-card-waves.svg\` gives cards custom luminous technical wireframe art.
- \`js/cosmic.js\` continuously animates celestial parallax, clouds, stars and loops without a video restart.
- \`index.html\` no longer loads the optional Three.js module by default; the stable photographic composition is favored over the earlier inconsistent 3D rendering. The existing WebGL experiment remains in the branch but is inactive.
- The course list, counts and completion values are read from the existing course registry and localStorage; their labels are not copied from the fictional demo courses in the image mock.

A feature-branch-only GitHub Actions workflow, \`.github/workflows/cosmic-visual.yml\`, captures desktop (1792×912) and mobile (390×844) Chromium screenshots, checks page errors, layout metrics and image loading. It does not publish to main.

**Do not consider the design visually verified until the screenshots have been inspected.** External NASA photos are runtime dependencies and may fail over time. A later release should cache or host optimized, properly attributed copies.
