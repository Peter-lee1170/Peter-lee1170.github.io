# Peter Lee — Engineering Portfolio

Live website: https://peter-lee1170.github.io/
Repository: https://github.com/Peter-lee1170/Peter-lee1170.github.io

## Edit projects
Open dist/projects.js. Each project has a title, category, description, optional result, roles list, methods, optional note, and images list. Each image has src, alt, and caption fields. Add photos to dist/assets/projects/ and reference them using assets/projects/filename.jpg. Duplicate or remove a project object to change the number of projects.

The five current projects and eight images were imported from Peter_Lee_Portfolio_3B.pdf. Images display without cropping; click an image to open the full-size version. My role & technical details expands the contribution list and tools. Keep unfinished-work and confidentiality notes accurate.

Main page and experience: dist/index.html. Styling: dist/styles.css. Resume: dist/assets/Peter_Lee_Resume.pdf.

Ask Codex to publish after editing; local changes do not automatically update the hosted site.

## Background artwork
The user uses assets/nano-graphene-wafer.png, generated with the built-in image tool as decorative scientific concept artwork, not experimental imagery. Prompt: A translucent single-layer hexagonal graphene sheet gently rippling over semiconductor wafer die patterns and lithographic traces, dark graphite, silver lattice, subtle copper and muted violet thin-film reflections, details at right/lower edges and dark negative space for text, no labels or neon effects.
The iOS-inspired interface uses opaque rounded surfaces, system typography, and responsive section navigation. The original project images are unchanged.

## GitHub Pages hosting
The workflow in .github/workflows/pages.yml publishes only dist/ after a push to main or master. No npm installation, build system, paid host, or API key is required.

GitHub Pages is configured with GitHub Actions. The local main branch tracks origin/main. Run the Deploy portfolio to GitHub Pages workflow manually from the Actions tab if you need to republish without changing files.

For future updates, edit dist/projects.js or other files inside dist/, commit, and push. GitHub Actions publishes the changes automatically. Check the Actions tab for deployment progress and the Pages settings for the final URL.

The .openai folder belongs to the previous Sites host and is not included in the GitHub Pages website.
