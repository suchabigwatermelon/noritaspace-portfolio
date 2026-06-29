# NoritaSpace

NoritaSpace is a lightweight, responsive personal portfolio website for presenting work and learning across AI-assisted workflows, education program operations, technology commercialization, data analysis, automation, and personal knowledge building.

This first version is intentionally static: there is no framework, build step, backend, database, or login system.

## File structure

```text
NoritaSpace/
├── index.html   # Page content and semantic structure
├── case-sop.html # First project case note
├── case-questionnaire.html # Second project case note
├── styles.css   # Visual system, layout, and responsive styles
├── script.js    # Mobile navigation and active-section state
├── favicon.svg  # Local SVG favicon placeholder
└── README.md    # Project notes and usage instructions
```

## Local preview

The simplest option is to open `index.html` directly in a browser.

For a local web server, run the following command inside the `NoritaSpace` folder:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

If you use VS Code, the Live Server extension is another convenient option.

## Deployment

This project is a static website and does not require a backend or build step.

### Deployment Options

#### Option 1: GitHub Pages

1. Create a GitHub repository.
2. Push the project files to the repository.
3. Enable GitHub Pages in repository settings.
4. Select the `main` branch and root folder.
5. Visit the generated GitHub Pages URL.

#### Option 2: Vercel

1. Create or log in to a Vercel account.
2. Import the GitHub repository.
3. Use the default static site settings.
4. Deploy the project.
5. Visit the generated Vercel URL.

## Customization

- Update page content in `index.html`.
- Adjust the color palette and shared design values in the `:root` section of `styles.css`.
- Replace the temporary Contact details with a LinkedIn URL and a `mailto:` email link when they are ready.
- Add real project detail pages and connect each project card when case studies are ready.

## Version Log

### v1.0

- Built the first static single-page portfolio site.
- Added hero, about, project areas, selected projects, methods, and contact sections.
- Implemented responsive layout, smooth scrolling, mobile navigation, and card hover effects.

### v1.1

- Refined hero copywriting.
- Added “What I did” descriptions to project cards.
- Added Currently Exploring section.
- Improved Contact section copy.

### v1.2

- Added Output / Outcome descriptions to project cards.
- Added placeholder case note buttons.
- Added Selected Tools section.
- Updated navigation structure.

### v1.3

- Added SEO-friendly head metadata.
- Added Open Graph and Twitter card metadata.
- Added favicon placeholder.
- Improved placeholder link behavior.
- Added deployment instructions for GitHub Pages and Vercel.

### v1.5

- Added the first case note page for the bootcamp on-site execution SOP project.
- Connected the first project card to the new case page.
- Added structured case sections including context, challenge, role, process, output, and demonstrated skills.

### v1.6

- Added an anonymized sample output block to the first case note page.
- Improved the evidence and credibility of the bootcamp SOP case.

### v1.7

- Added the second case note page for the questionnaire feedback analysis project.
- Connected the second project card to the new case page.
- Added structured case sections including context, challenge, role, process, output, sample analysis structure, and demonstrated skills.

### v1.8

- Added the third case note page for the Word agenda automation project.
- Connected the third project card to the new case page.
- Added structured case sections including context, challenge, role, process, output, sample workflow structure, and demonstrated skills.

### Next

- Refine homepage copy based on the three completed case notes.
- Add project screenshots or visual evidence where appropriate.
- Plan bilingual structure for v2.0.
- Create additional case note pages if needed.

## Possible next steps

- Add bilingual Chinese / English content switching.
- Create individual case-study pages for selected projects.
- Add a Notes section for NoritaSpace articles and structured learning records.
- Add project filtering by topic or method.
- Connect a custom domain and deploy through GitHub Pages, Cloudflare Pages, or Netlify.
- Add lightweight analytics and basic SEO metadata.
- Replace contact placeholders with live professional links.
