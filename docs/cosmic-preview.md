# Cosmic Sun & Moon preview

Experimental design branch for Study Practice Simulator. Not published to GitHub Pages until explicitly merged.

## Design
- Cinematic dark-theme landing with a Moon in the upper-left and a Sun in the lower-right.
- NASA image URLs for realistic celestial textures, with CSS fallback gradients if unavailable.
- Continuously evolving Canvas starfield and orbital particles, and sine-composed positional drift and cursor parallax (no GIF/video or hard-loop reset).
- Glass-style course cards, restrained course/dashboard background, dimmed exam screen.
- Click the floating **Effects** control to cycle **High → Reduced → Off**, saved in localStorage.
- Honors the system reduced-motion preference by default; suspends animation when hidden.
- Existing course pack, scoring and storage code are unchanged aside from one UI-view marker.

## Assets and credits
- Moon: NASA, [full Moon image](https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/06/edu_distance_to_the_moon.png).
- Sun: NASA/GSFC/Solar Dynamics Observatory, [PIA26681](https://science.nasa.gov/photojournal/image-of-sun-from-nasas-solar-dynamics-observatory/).
- This prototype **hotlinks** NASA source images. For a release candidate, download and optimize approved local WebP/AVIF assets, check NASA media-use guidance and verify loading in target browsers.

## Validation and remaining work
- JavaScript syntax checked locally.
- Isolated 1440×900 visual fixture rendered without page errors; two cards and the effect toggle were checked.
- Image hosting was blocked in the local fixture; image display at full resolution still needs verification.
- Full application navigation, responsiveness, exam mode and performance have **not** yet received end-to-end testing.
- The current implementation uses photographic CSS layers and Canvas 2D parallax, **not** a full 3D globe or shader-based solar plasma. A Three.js upgrade can follow after visual acceptance.
