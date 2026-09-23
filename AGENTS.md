# Portfolio

Next.js 15 / React 19 / TypeScript App Router portfolio. Source in `app/`; styles use CSS/SCSS modules. Follow current code and package scripts rather than legacy Gatsby references in README.

- Pages/layout: `app/page.tsx`, `app/layout.tsx`, `app/work/[slug]/`, `app/blog/`, `app/contact/`.
- Home sections: `app/ui/home/`; portfolio copy: `app/utils/constants/{experience,case-studies,capabilities,site}.ts`.
- Contentful: `app/utils/api.ts`; contact actions/mail: `app/utils/actions.ts`, `app/utils/lib/mail.ts`. Keep Contentful/Gmail credentials server-side and out of logs/commits; `.env.local` setup is in README.
- Preserve factual ownership and evidence in experience/case-study copy. Do not invent metrics or disclose confidential employer/client details.
- Scripts: `dev`, `lint`, `build`, `start` in `package.json`. Both pnpm/npm lockfiles exist; preserve them and avoid switching package managers or regenerating locks for unrelated edits.
- For UI changes check relevant responsive views when practical; for build-sensitive changes run lint/build. Distinguish code failures from external Contentful/network failures and report missing browser verification.
