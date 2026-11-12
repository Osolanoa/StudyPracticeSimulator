# Cinematic Sun & Moon — preview build

A dedicated visual branch for the Study Practice Simulator. **Main remains unchanged.** Preview in a browser via:
https://raw.githack.com/Osolanoa/StudyPracticeSimulator/design/cosmic-sun-moon-preview/index.html

## Implemented
- Cinematic dark-mode landing, responsive course cards and real per-course progress from the existing localStorage practice records.
- NASA full-disk Moon mosaic and NASA SDO Sun photograph, softened with atmospheric glow and vignettes (CSS fallback).
- Optional 3D: Three.js textured Moon sphere with directional lighting; procedural GLSL Sun material and glowing corona. The 3D layer is activated only once a lunar texture loads. NASA 2K globe is preferred; an alternative Three.js Moon map is used if needed.
- Independent continuous Canvas starfield, particles, nebula diffusion, orbital strokes, and cursor-responsive parallax. No MP4, GIF or visibly restarting timeline.
- High / Reduced / Off visual controls, persisted in localStorage. Reduced-motion prefers the lower-motion setting automatically.
- The exam session background is substantially dimmed so questions remain easy to read.
- The course-specific question engine and data remain unchanged.

## Sources and acknowledgements
- Moon full-disc photographic mosaic: NASA SVS, https://science.nasa.gov/resource/moon-mosaic/
- Moon 2K globe texture: NASA SVS CGI Moon Kit, https://svs.gsfc.nasa.gov/4720/
- Sun full-disc SDO image: NASA/GSFC/SDO, https://science.nasa.gov/photojournal/image-of-sun-from-nasas-solar-dynamics-observatory/
- Fallback Three.js texture: three.js examples from mrdoob/three.js.

## Verification and limitations
- All classic JavaScript files and the optional module were syntax checked.
- Landing renderer was exercised in a DOM stub: two interactive course cards generated, progress section present, no NaN values; all 0% values represent fresh localStorage, not fictitious student data.
- A full browser GPU/rendering and cross-browser E2E check has not been completed in this environment. Third-party hosting of photos/Three.js and client support for WebGL are variable.
- Published GitHub Pages remains on main until approved to merge.
