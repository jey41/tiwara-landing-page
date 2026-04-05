# Update Branding Assets Across Website

## TL;DR
> **Summary**: Replace all current website logo and packaging visuals with the new assets already added in `public/`, and align favicon wiring to the new branding package without expanding into a broader redesign.
> **Deliverables**:
> - Header/logo updated to use the new public logo asset
> - Packaging/product visuals updated to use the new public packaging asset where branding-owned packaging is shown
> - Favicon wiring aligned to the new branding assets
> - Build + browser QA evidence captured for all touched surfaces
> **Effort**: Short
> **Parallel**: YES - 3 waves
> **Critical Path**: Baseline reference audit → logo/packaging/favicon updates → final verification

## Context
### Original Request
User added a new logo file and a new packaging image in `public/` and wants them implemented across the website. The user later confirmed that all current logo and packaging usage should be replaced, and favicon should also be updated.

### Interview Summary
- Scope is a branding asset replacement, not a redesign.
- Replace all current logo usage with the new logo asset from `public/`.
- Replace packaging visuals that are owned by the site branding with the new packaging asset from `public/`.
- Update favicon branding to match the new logo package.
- Do not add new lint/unit/e2e infrastructure.
- Verification uses `npm run build` plus agent-executed browser QA.

### Metis Review (gaps addressed)
- Locked scope to branding asset replacement only; excluded colors, typography, copy, layout redesign, and mascot refresh unless required by dependency.
- Added guardrail for favicon cache validation: verify DOM head wiring and network responses, not only browser-tab appearance.
- Added guardrail to check for stale legacy references that could reintroduce retired branding assets.
- Chose smallest-change implementation path using existing root-relative public asset references.

## Work Objectives
### Core Objective
Implement the newly provided branding assets site-wide by replacing current logo and packaging visuals with `public/` assets and aligning favicon references, while preserving the existing layout and interaction structure.

### Deliverables
- Header branding uses the new logo asset from `public/`.
- Packaging/product-facing branding visuals use the new packaging asset from `public/`.
- Shared layout head points favicon references to the approved branding assets.
- All touched routes build successfully and serve branding assets without 404s.
- Evidence files exist for build output and browser QA.

### Definition of Done (verifiable conditions with commands)
- `npm run build` exits with code `0`.
- On `/`, the header renders the new logo via a root-relative public path.
- On every route that renders the packaging/gallery surface, the packaging visual resolves to the new public asset path.
- The document head exposes the expected favicon link on `/` and one non-home route using the shared layout.
- No failed network requests occur for updated branding assets during browser QA.

### Must Have
- Use root-relative public asset paths (e.g. `"/logo.png"`, `"/packaging.png"`, favicon paths under `/`).
- Keep implementation narrowly scoped to logo, packaging, and favicon branding.
- Preserve existing responsive layout behavior as closely as possible.
- Use browser QA with explicit selectors/assertions and capture evidence under `.sisyphus/evidence/`.

### Must NOT Have (guardrails, AI slop patterns, scope boundaries)
- No redesign of colors, typography, spacing, copy, or navigation structure.
- No mascot asset refresh unless a touched component breaks without a compatibility adjustment.
- No new testing, linting, or CI infrastructure.
- No new asset-loading convention when existing `public/` root-relative paths are sufficient.
- No replacement of unrelated illustrations, remote imagery, or non-brand decorative art unless they are confirmed packaging visuals in scope.

## Verification Strategy
> ZERO HUMAN INTERVENTION - all verification is agent-executed.
- Test decision: tests-after via `npm run build` + Playwright/browser QA; no new framework setup.
- QA policy: Every task includes agent-executed happy-path and edge/failure scenarios.
- Evidence: `.sisyphus/evidence/task-{N}-{slug}.{ext}`

## Execution Strategy
### Parallel Execution Waves
> Target: 5-8 tasks per wave. <3 per wave (except final) = under-splitting.
> Extract shared dependencies as Wave-1 tasks for max parallelism.

Wave 1: T1 baseline audit + selector plan

Wave 2: T2 header logo update, T3 packaging visual replacement, T4 favicon/reference alignment

Wave 3: Final verification wave F1-F4

### Dependency Matrix (full, all tasks)
| Task | Depends On | Blocks |
|---|---|---|
| T1 | none | T2, T3, T4 |
| T2 | T1 | F1-F4 |
| T3 | T1 | F1-F4 |
| T4 | T1 | F1-F4 |
| F1 | T2, T3, T4 | completion |
| F2 | T2, T3, T4 | completion |
| F3 | T2, T3, T4 | completion |
| F4 | T2, T3, T4 | completion |

### Agent Dispatch Summary (wave → task count → categories)
- Wave 1 → 1 task → `deep`
- Wave 2 → 3 tasks → `visual-engineering`, `visual-engineering`, `quick`
- Wave 3 → 4 tasks → `oracle`, `unspecified-high`, `unspecified-high`, `deep`

## TODOs
> Implementation + Test = ONE task. Never separate.
> EVERY task MUST have: Agent Profile + Parallelization + QA Scenarios.

- [ ] 1. Audit current branding references and lock target surfaces

  **What to do**: Search the implementation surface for all current logo, packaging, and favicon references before editing anything. Confirm the exact touched files for this task: `src/components/Navbar.jsx`, `src/components/ProductGallery.jsx`, `src/layouts/Layout.astro`, and any route/component file that directly renders or overrides those surfaces. Record whether any stale retired-brand references exist outside those files and resolve them only if they directly affect the requested logo/packaging/favicon rollout. If a compatibility script such as `revert.js` exists, inspect it and include it in scope only when it can reintroduce old branding references.
  **Must NOT do**: Do not broaden the task into a full visual audit, redesign, copy refresh, color refresh, or mascot refresh.

  **Recommended Agent Profile**:
  - Category: `deep` - Reason: this task sets the exact implementation boundary and prevents scope creep.
  - Skills: `[]` - No special skill required beyond careful repo analysis.
  - Omitted: `['context7-mcp']` - No external library/API documentation is needed for a local asset audit.

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: 2, 3, 4 | Blocked By: none

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `src/components/FloatingMascot.jsx` - Existing example of root-relative `public/` asset usage (`"/..."`) to follow for branding assets.
  - Surface: `src/components/Navbar.jsx` - Current header branding owner; discovered as the main logo touchpoint.
  - Surface: `src/components/ProductGallery.jsx` - Current packaging/product visual owner; primary packaging touchpoint.
  - Surface: `src/layouts/Layout.astro` - Shared layout/head owner; favicon wiring belongs here.
  - Route verification set: `src/pages/index.astro`, `src/pages/products.astro`, `src/pages/traceability.astro`, `src/pages/batch.astro`, `src/pages/daftar-petani.astro` - Verify whether shared branding surfaces appear here.
  - Asset inputs: `public/logo.png`, `public/packaging.png`, `public/favicon.ico`, `public/favicon.svg` - Approved asset sources already present in repo.

  **Acceptance Criteria** (agent-executable only):
  - [ ] A written implementation note or task log exists identifying every file that will be touched for logo, packaging, and favicon updates.
  - [ ] No out-of-scope files are added to the edit set unless they directly preserve requested branding behavior.
  - [ ] If legacy branding references are found outside the primary surfaces, they are explicitly classified as in-scope residuals or out-of-scope leftovers before editing begins.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Baseline branding inventory completed
    Tool: Bash
    Steps: Search repo references for logo/packaging/favicon paths and inspect the known branding surfaces before implementation.
    Expected: Exact touched-file list is produced and limited to branding rollout needs.
    Evidence: .sisyphus/evidence/task-1-branding-audit.txt

  Scenario: Scope-creep prevention check
    Tool: Bash
    Steps: Compare proposed touched files against known branding surfaces and flag any unrelated design/content files.
    Expected: Unrelated files are excluded or explicitly justified as direct branding dependencies.
    Evidence: .sisyphus/evidence/task-1-branding-audit-scope.txt
  ```

  **Commit**: NO | Message: `n/a` | Files: `src/components/Navbar.jsx`, `src/components/ProductGallery.jsx`, `src/layouts/Layout.astro`, optional direct branding dependency files only

- [ ] 2. Replace header branding with the new public logo asset

  **What to do**: Update the header branding in `src/components/Navbar.jsx` so the visible brand treatment uses the new logo from `public/logo.png` via a root-relative path. Preserve the current navbar structure, responsive behavior, and click target semantics. Use accessible alt text that names the brand. If the current text brand must remain for spacing or accessibility, keep it as a secondary companion to the logo only when necessary to avoid layout breakage; otherwise the logo becomes the primary visible brand element.
  **Must NOT do**: Do not redesign the navbar, change navigation items, alter copy, or introduce non-brand styling changes unrelated to fitting the logo.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: this is a UI-sensitive branding swap where layout preservation matters.
  - Skills: `[]` - Existing project patterns are sufficient.
  - Omitted: `['frontend-ui-ux']` - No broad UX redesign is desired; smallest-change execution is preferred.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: F1-F4 | Blocked By: 1

  **References** (executor has NO interview context - be exhaustive):
  - Surface: `src/components/Navbar.jsx` - Primary file to update for header branding.
  - Pattern: `src/components/FloatingMascot.jsx` - Use the same root-relative public asset style.
  - Route: `src/pages/index.astro` - Home route must expose the updated navbar.
  - Route set: `src/pages/products.astro`, `src/pages/traceability.astro`, `src/pages/batch.astro`, `src/pages/daftar-petani.astro` - Check whether navbar/shared layout renders consistently on non-home routes.
  - Asset: `public/logo.png` - Required source of truth for header logo.

  **Acceptance Criteria** (agent-executable only):
  - [ ] On `/`, the header contains a visible brand image whose resolved `src` ends with `/logo.png`.
  - [ ] The logo renders without broken layout at one mobile viewport and one desktop viewport.
  - [ ] The brand element remains keyboard-focusable/clickable if the pre-existing navbar branding was interactive.
  - [ ] No 404 network requests occur for `/logo.png` during home-page load.
  - [ ] `npm run build` exits with code `0` after the header update.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Header logo appears on home page
    Tool: Playwright
    Steps: Open `/`; locate the header brand element; assert an image exists within the brand area; assert its `src` ends with `/logo.png`; capture desktop screenshot.
    Expected: New logo is visible in header and uses the correct public asset path.
    Evidence: .sisyphus/evidence/task-2-header-logo.png

  Scenario: Header logo preserves responsive layout
    Tool: Playwright
    Steps: Open `/` at mobile viewport and desktop viewport; verify the logo remains visible and does not overlap navigation controls.
    Expected: Navbar remains usable at both breakpoints.
    Evidence: .sisyphus/evidence/task-2-header-logo-responsive.png
  ```

  **Commit**: NO | Message: `feat(branding): replace logo and packaging visuals with public assets` | Files: `src/components/Navbar.jsx`

- [ ] 3. Replace in-scope packaging visuals with the new public packaging asset

  **What to do**: Update the product/packaging presentation surface so branding-owned packaging imagery uses `public/packaging.png` via a root-relative path. Start with `src/components/ProductGallery.jsx`, then propagate only to direct consumers or adjacent product-branding surfaces discovered in Task 1. Keep the existing content structure and gallery behavior intact. When the current surface uses remote imagery, replace only the images functioning as branded packaging visuals; do not swap unrelated photography or decorative imagery.
  **Must NOT do**: Do not convert the entire gallery into duplicated packaging images, remove unrelated product content, or change copy/layout beyond what is necessary to display the new packaging asset correctly.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: this is a content-sensitive image replacement across visual product surfaces.
  - Skills: `[]` - No external docs are needed.
  - Omitted: `['frontend-ui-ux']` - Avoid redesigning the gallery experience.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: F1-F4 | Blocked By: 1

  **References** (executor has NO interview context - be exhaustive):
  - Surface: `src/components/ProductGallery.jsx` - Primary packaging image owner.
  - Route: `src/pages/products.astro` - Highest-probability route for packaging/gallery visibility.
  - Route: `src/pages/index.astro` - Check if homepage also surfaces packaging visuals.
  - Route set: `src/pages/traceability.astro`, `src/pages/batch.astro` - Verify whether packaging visuals surface here via shared product components.
  - Asset: `public/packaging.png` - Required source of truth for updated packaging visuals.
  - Pattern: `src/components/FloatingMascot.jsx` - Reuse root-relative `public/` path style.

  **Acceptance Criteria** (agent-executable only):
  - [ ] Every in-scope packaging visual identified in Task 1 resolves to `/packaging.png` or another approved new packaging asset already present in `public/`.
  - [ ] No unrelated non-packaging imagery is changed.
  - [ ] On at least one route rendering the packaging surface, the packaging image is visible and loads without 404.
  - [ ] `npm run build` exits with code `0` after packaging changes.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Packaging visual updated on target route
    Tool: Playwright
    Steps: Open the route identified in Task 1 that renders the packaging/gallery surface (default: `/products` if present); locate the packaging image; assert its `src` ends with `/packaging.png`; capture screenshot of the section.
    Expected: Packaging surface uses the new public asset and remains visible.
    Evidence: .sisyphus/evidence/task-3-packaging-visual.png

  Scenario: Unrelated imagery preserved
    Tool: Playwright
    Steps: Visit the same route and inspect adjacent non-packaging visual cards/images.
    Expected: Only the targeted packaging visual changed; unrelated imagery still renders normally.
    Evidence: .sisyphus/evidence/task-3-packaging-visual-scope.png
  ```

  **Commit**: YES | Message: `feat(branding): replace logo and packaging visuals with public assets` | Files: `src/components/ProductGallery.jsx`, direct packaging-consumer files discovered in Task 1, optionally `src/components/Navbar.jsx` if Commit 1 is created after both visual replacements land

- [ ] 4. Update favicon wiring and align legacy branding references

  **What to do**: Update the shared head ownership in `src/layouts/Layout.astro` so favicon references point to the approved new branding asset(s). Keep compatibility by wiring both `.svg` and `.ico` only if the current head pattern or browser support strategy already expects both; otherwise use the existing head structure and swap to the new approved favicon target. After head wiring is updated, inspect for stale retired-brand references that could reintroduce old logo/packaging/favicon assets, including any compatibility script noted in Task 1, and align them only where they directly affect branding correctness.
  **Must NOT do**: Do not add new meta/OG/social-image work, manifest work, or browser-theme embellishments that were not already present.

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: this is a bounded head/reference alignment task with strict scope limits.
  - Skills: `[]` - Local repo patterns are sufficient.
  - Omitted: `['context7-mcp']` - No external library guidance is required.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: F1-F4 | Blocked By: 1

  **References** (executor has NO interview context - be exhaustive):
  - Surface: `src/layouts/Layout.astro` - Shared head owner; favicon wiring belongs here.
  - Assets: `public/favicon.ico`, `public/favicon.svg` - Approved favicon asset inputs already in repo.
  - Asset: `public/logo.png` - Branding source of truth to stay visually aligned with favicon package.
  - Route set: `src/pages/index.astro`, `src/pages/products.astro`, `src/pages/traceability.astro`, `src/pages/batch.astro`, `src/pages/daftar-petani.astro` - Use one home and one non-home route to verify shared layout propagation.
  - Residual check target: `revert.js` if present - Must not reintroduce stale branding references after rollout.

  **Acceptance Criteria** (agent-executable only):
  - [ ] On `/`, `document.querySelector('link[rel="icon"]')` resolves to the intended favicon path.
  - [ ] The same favicon path is exposed on at least one non-home route using the shared layout.
  - [ ] The requested favicon asset returns HTTP 200 during browser QA.
  - [ ] No stale retired-brand favicon/logo/packaging reference remains in touched files after the alignment pass.
  - [ ] `npm run build` exits with code `0` after favicon/reference alignment.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Favicon wired correctly in shared layout
    Tool: Playwright
    Steps: Open `/`; evaluate `document.querySelector('link[rel="icon"]')?.href`; assert the href ends with the expected favicon asset path; repeat on one non-home route.
    Expected: Shared layout serves the same updated favicon reference across routes.
    Evidence: .sisyphus/evidence/task-4-favicon.txt

  Scenario: No broken branding asset requests
    Tool: Playwright
    Steps: Record network failures while visiting `/` and one packaging route; filter for branding asset names (`logo`, `packaging`, `favicon`).
    Expected: No 404/failed requests for updated branding assets.
    Evidence: .sisyphus/evidence/task-4-favicon-network.txt
  ```

  **Commit**: YES | Message: `fix(branding): update favicon wiring and align branding references` | Files: `src/layouts/Layout.astro`, `revert.js` if present and relevant, directly touched head/reference files only

## Final Verification Wave (MANDATORY — after ALL implementation tasks)
> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.
- [ ] F1. Plan Compliance Audit — oracle
- [ ] F2. Code Quality Review — unspecified-high
- [ ] F3. Real Manual QA — unspecified-high (+ playwright if UI)
- [ ] F4. Scope Fidelity Check — deep

## Commit Strategy
- Commit 1: `feat(branding): replace logo and packaging visuals with public assets`
- Commit 2: `fix(branding): update favicon wiring and align branding references`
- Do not mix unrelated cleanup or style refactors into either commit.

## Success Criteria
- Website branding surfaces use the new public logo and packaging assets consistently.
- Favicon references are updated and verifiably served from the intended asset path.
- Build passes and browser QA shows no broken branding assets or stale head references.
- Scope remains limited to branding asset replacement only.
