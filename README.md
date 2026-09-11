# Peter Lee — Engineering Portfolio

A one-page static portfolio with no build or installation required.

## Add projects
1. Put project photographs or diagrams in `dist/assets/`.
2. Open `dist/projects.js` and fill in each project's title, description, image path and imageAlt.
3. Optional fields: category, role, methods, result, link, linkLabel. Empty fields remain hidden.
4. Duplicate a project object to add another card, or remove one. Three empty cards are included intentionally.
5. Ask Codex to publish the updates when ready; editing a local file does not update the live website automatically.

Example:
```js
{ title: "Your project title", description: "The problem, what you built, and why it matters.", image: "assets/project-photo.jpg", imageAlt: "Describe what the photograph shows", category: "PROCESS DEVELOPMENT", role: "Your contribution", methods: "Tools and experimental methods", result: "Measured result", link: "", linkLabel: "" }
```

Use real project photographs and diagrams. A 4:3 landscape image works well; leave space around important details because images crop to fit.

## Other updates
- Main copy, links and experience: `dist/index.html`
- Colors, spacing and responsive layout: `dist/styles.css`
- Resume download: replace `dist/assets/Peter_Lee_Resume.pdf`

Run a local static server pointed at `dist` to preview, or open `dist/index.html` directly. The page needs no external fonts or scripts.
