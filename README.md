# Apple Vision Pro–Style Website

## Project overview

A high-fidelity, interactive single-page website inspired by the Apple Vision Pro marketing site. Built with React (Vite), GSAP for motion, and `react-responsive` for device-aware logic. The project demonstrates modern frontend engineering practices: responsive behaviour centralized in hooks, production-ready animations with GSAP ScrollTrigger, and a proper asset pipeline for reliable builds and deployments.

This README focuses on running the project locally, building for production, deployment guidance, asset management, performance tips, and common troubleshooting steps.

## Tech stack

* React (Vite)
* GSAP (with ScrollTrigger)
* `react-responsive` (useMediaQuery)
* CSS: Tailwind CSS (optional) / plain CSS modules
* Hosting targets: Vercel, Netlify, or static S3 + CloudFront

## Quick links

* **Live demo**: (add your live URL here)
* **Design reference**: JS Mastery / Adrian Hajdin project

## Getting started (development)


**Key rule:** Put assets that are `import`ed by components into `src/assets`. Reserve `public/` for files that must remain at a fixed path or are referenced directly by external systems.

---

## Asset management (why it matters)

* **Why `src/assets`?**

  * When you `import` an image/video/object from `src/assets`, the bundler includes it in the module graph. Vite (and other bundlers) will fingerprint (hash) file names and produce optimized output. This avoids cache issues and broken links in production.

* **When to use `public/`:**

  * Favicons, `robots.txt`, `manifest.json`.
  * Files that must be referenced by a fixed absolute URL (for example, meta tags where the URL is required before JS runs).

* **Common pitfall:** copying all media to `public/` and importing them in components. This breaks hashing and may cause assets to not load or not be optimized during deployment. If you need to reference a public file by path (no import), use `/filename.ext` and keep it small.

---

## Responsiveness & device logic

* Use `react-responsive` / `useMediaQuery` to centralize device checks. Avoid adding manual `resize` listeners across components.

* Example pattern (in words): create a small custom hook that returns boolean flags (`isMobile`, `isTablet`, `isDesktop`) and consume those flags throughout components. Keep animation-enabling logic guarded behind these flags so you don’t run heavy GSAP timelines on low-power devices.

---

## GSAP & animation guidelines

* Keep timeline setup and teardown predictable.

  * Initialize timelines only when the DOM nodes exist and when the device supports the effect.
  * Always kill timelines and ScrollTrigger instances on component unmount to prevent memory leaks.

* Prefer readable timelines with named targets rather than complex per-frame mutation.

* Example best practices (summary):

  * Guard heavy animations with device checks (e.g. `if (!isTablet) { ... }`).
  * Use `ScrollTrigger`'s `pin`, `scrub`, and `start/end` to craft natural scroll-driven experiences.
  * Test performance on real devices.


## Build & production optimizations

* Ensure `NODE_ENV=production` for the build step.
* Tree-shake unused code; keep third-party libs minimal.
* Enable compression on the server (gzip or brotli) for `dist/` assets.
* Use a CDN (or Vercel/Netlify) to serve static assets with long cache headers and hashed filenames.
* Generate source maps only if you need them; consider uploading them to Sentry if you use it.

## Deployment (recommended targets)

### Vercel

* Connect the repo to Vercel, set the build command to `npm run build` and output directory to `dist` (Vite default). Vercel handles edge caching and TTL automatically.

### Netlify

* Build command: `npm run build`
* Publish directory: `dist`

### Static hosting (S3 + CloudFront)

* Upload `dist/` to S3 and serve via CloudFront. Configure cache invalidation to handle new deploys.


## Troubleshooting

**Assets not showing after deploy**

* Confirm images/videos are inside `src/assets` and imported in components.
* If using `public/`, verify the path is referenced correctly (leading slash) and the file is present in the deployed root.
* Check console/network tab for 404s and correct the import/path.

**Animations not triggering**

* Verify `ScrollTrigger` is registered with GSAP.
* Ensure timelines are created only after the elements exist in DOM (use `useEffect` with correct dependencies).
* Confirm device guards aren’t accidentally preventing setup.

**Build warnings**

* Don’t ignore Vite or bundler warnings. They usually indicate misconfiguration (e.g., large assets, missing imports, or unresolved paths).

## What to add next (roadmap suggestions)

* Lazy-load offscreen images and videos (IntersectionObserver) to improve initial load.
* Implement a low-quality image placeholder (LQIP) or blur-up effect for hero media.
* Add analytics & error tracking (e.g., Sentry, PostHog).
* Add A/B experiments for motion intensity to measure performance impact.

## Credits

* Project concept: JS Mastery / Adrian Hajdin
* Motion / animation inspiration: GSAP docs and community examples
