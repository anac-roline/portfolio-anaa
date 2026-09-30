# Technical Decisions

- Keep the portfolio as a single-page React/Vite experience; this preserves static Vercel deployment and direct section navigation.
- Structure the page as full-width editorial bands with one shared responsive rail; this mirrors the supplied template without embedding the reference image.
- Render Brazil from accurate state-boundary SVG geometry rather than an approximate CSS polygon; recognizable geography is essential to the footer concept.
