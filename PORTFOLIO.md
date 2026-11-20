# Portfolio website — Engineering the Invisible

A single-page **static portfolio** hosted from this profile repository, kept separate from the special GitHub profile \`README.md\`.

- **English / Vietnamese** switch with a local-only language preference.
- Responsive editorial design with an original systems illustration (HTML/CSS), a short Java-inspired introduction, and a career-growth narrative without invented employment dates.
- Visitor journeys for potential collaborators, engineers, and curious readers.
- Three grounded public project case studies with accurate \`APP / DEMO / VERIFICATION\` distinctions.
- Keyboard-accessible navigation, skip link, reduced-motion support, semantic HTML, canonical / social metadata, custom SVG assets, a custom 404 and sitemap.
- No backend, form submissions, visitor analytics, external JavaScript SDKs, or secrets.

## Live URL

Once GitHub Pages is enabled and the deployment workflow succeeds:

**https://trminhkhoi76-code.github.io/trminhkhoi76-code/**

The folder name is repeated because GitHub Pages treats this as a *project site*, not a \`username.github.io\` repository.

## Deployment

\`docs/\` is the complete static website. \`.github/workflows/portfolio-pages.yml\` validates source and deploys \`docs/\` on pushes to \`main\` (or manual dispatch). Pull requests **validate only** and do not deploy.

### Required one-time GitHub Pages setting

The repository owner must visit **Settings → Pages → Build and deployment → Source → GitHub Actions** and save the configuration before the first deployment. The connected GitHub integration used to author this repository cannot update Pages administration settings. A \`GITHUB_TOKEN\` in GitHub Actions also cannot enable a site by itself with \`actions/configure-pages\`'s \`enablement\` option.

After activating the source, re-run **Portfolio / GitHub Pages** if the initial deployment had already failed, or push a change to \`docs/\` / workflow. If GitHub shows permissions or environment restrictions, inspect the exact workflow run rather than assuming success.

## Local preview & verification

No build tools are needed for the website itself. From the repository root:

\`\`\`bash
node --check docs/app.js
node --check scripts/verify-portfolio.mjs
node scripts/verify-portfolio.mjs
python3 -m http.server 8080 --directory docs
\`\`\`

Then open \`http://localhost:8080/\`.

Local development checks are not browser QA. Before public launch, verify the deployed HTTP response, mobile/desktop layout, language switch, anchors and links, accessibility, reduced motion, and GitHub Actions deployment status.

## Content and privacy

The project descriptions are drawn from repository code and documented limitations. Career development is portrayed as areas of growing engineering responsibility, **not** a fabricated employer timeline. Private employer-specific implementation details and client assets are intentionally excluded.

The source code and content can be updated in \`docs/\` without changing the GitHub profile \`README.md\`. SVG files are self-hosted. Google Fonts may be requested from Google's font servers; the site has system-font fallbacks.

**Canonical:** https://trminhkhoi76-code.github.io/trminhkhoi76-code/
