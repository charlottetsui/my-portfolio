# my-portfolio

Charlotte Tsui's portfolio, built with Next.js App Router, React, TypeScript,
Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm ci
npm run dev
```

## Project structure

```text
src/
  app/                         Next.js routes and global configuration
    fonts.ts                   Shared font configuration
    globals.css                Global styles and Tailwind theme
    layout.tsx                 Document structure and shared site shell
    page.tsx                   Homepage route
    work/<project>/page.tsx     Individual case-study routes
  components/
    layout/                    SiteHeader, SiteFooter, and SiteShell
    motion/                    Shared PageTransition animation
  features/
    home/
      HomePage.tsx             Homepage composition
      components/              Introduction section
    work/
      content/works.ts          Homepage project listings and Work type
      components/              Cards, grid, case-study wrapper, and banner
      case-studies/            Named components containing each case study
public/images/                 Existing images, GIFs, and resume PDF
```

## Where to make changes

- **Homepage introduction:** `src/features/home/components/Introduction.tsx`.
- **Selected works and their order:** `src/features/work/content/works.ts`.
- **Project narratives:** `src/features/work/case-studies/`.
- **Project card presentation:** `src/features/work/components/WorkCard.tsx`.
- **Case-study framing and banners:** `CaseStudy.tsx` and `CaseStudyBanner.tsx`
  in `src/features/work/components/`.
- **Navigation and contact links:** `src/components/layout/SiteHeader.tsx` and
  `SiteFooter.tsx`.
- **Shared spacing, mount behavior, and route transitions:**
  `src/components/layout/SiteShell.tsx`.
- **Fade animation:** `src/components/motion/PageTransition.tsx`.

Route files compose feature components. Case studies keep their individual
content and layouts in readable TSX rather than a generic content schema.
Shared components preserve the existing markup and styling. Asset filenames
and public URLs remain unchanged. ByteNotes remains a placeholder route, and
its homepage listing remains commented out.

## Validation and production

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The build uses Turbopack. `npm start` serves the production Next.js build.
Hosting and automatic deployment are not configured in this repository.

## Password protection

The whole portfolio, including project pages, images, optimized image URLs,
and the resume, requires a password. Image optimization is disabled so protected
images are requested directly with the browser’s session cookie. Successful sign-in lasts 24 hours; the
password is requested again on the next page request after expiry. Sessions use HMAC signatures and are
verified by middleware and again in the server layout. Protected responses are
private and not cached.

Local credentials live in the ignored `.env.local` file. The password itself
is not stored there: `SITE_PASSWORD_HASH` is its lowercase SHA-256 hex digest,
and `SITE_SESSION_SECRET` is a random 64-character hex signing secret. Set
both environment variables in the hosting provider before deploying. Missing
configuration fails closed with HTTP 503. Rotating either value invalidates
existing sessions. Serve the deployed site over HTTPS for Secure cookies.

Run `node scripts/test-site-auth.mjs` for session and redirect unit checks.
Run the HTTP integration checks against a running server with
`PORTFOLIO_TEST_URL` and `PORTFOLIO_TEST_PASSWORD` set:

```bash
node scripts/check-password-protection.mjs
```

Keep the password and session secret out of commits and client-side variables.
