# Awesome Login

An open-source animated login page template built with React, TypeScript, Vite, GSAP, and Bun.

It ships with a dark monochrome shell, colorful animated characters, lightweight native form controls, and a structure that is easy to customize for portfolios, product demos, or internal-tool entry points.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLaughingZhu%2Fawesome-login&project-name=awesome-login&repository-name=awesome-login)

## Features

- Animated left-side character scene powered by GSAP
- Responsive two-column layout with a compact mobile presentation
- Lightweight native form UI with no Ant Design dependency
- English copy and open-source friendly project structure
- Bun-based local workflow and Vercel-ready static deployment

## Live Demo

- Production: not configured yet

## Preview Assets

If you plan to publish the repository broadly, add a screenshot or short GIF to the repo and reference it here. Visual previews make template repositories much easier to evaluate on GitHub.

## Quick Start

```bash
bun install
bun dev
```

Open `http://localhost:5173` after the dev server starts.

## Available Scripts

```bash
bun dev
bun run build
bun run lint
bun run preview
```

## Project Structure

```text
src/
  components/
    AnimatedCharacters/   # Character scene markup + animation logic
    BrandMark.tsx         # Compact brand mark used in the mobile layout
    FeishuIcon.tsx        # Local SVG icon used for the social sign-in button
  hooks/
    useMediaQuery.ts      # Responsive rendering helper
  pages/
    Login/
      components/
        BrandPanel.tsx    # Left visual panel
        LoginForm.tsx     # Native login form UI + demo validation
        SocialLogin.tsx   # Social sign-in CTA area
      index.tsx           # Page composition entry
      index.module.css    # Shared theme and layout styles
```

## Customization Guide

### Change copy

Edit the visible text in:

- `src/pages/Login/index.tsx`
- `src/pages/Login/components/LoginForm.tsx`
- `src/pages/Login/components/SocialLogin.tsx`

### Change theme

Edit the layout shell, form card, and typography colors in:

- `src/pages/Login/index.module.css`
- `src/index.css`

### Change character colors or proportions

Edit the scene geometry and palette in:

- `src/components/AnimatedCharacters/scene.tsx`

### Change animation behavior

Edit the GSAP timing and motion logic in:

- `src/components/AnimatedCharacters/index.tsx`

## Deployment

This project is designed to deploy cleanly to Vercel as a static Vite application.

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLaughingZhu%2Fawesome-login&project-name=awesome-login&repository-name=awesome-login)

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Vite settings.
4. Deploy.

For open-source users, the button above opens Vercel's official clone-and-deploy flow so they can copy the repository into their own Git provider account and deploy it in one step.

If a live deployment URL is available, add it to:

- `package.json` `homepage`
- this README `Live Demo` section

## Demo Limitations

- The login form is intentionally local-only and does not call a backend.
- The social sign-in button is presentation-only.
- This repository is a UI/template project, not a production authentication starter.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## Security

Please review [SECURITY.md](./SECURITY.md) for guidance on reporting vulnerabilities.

## License

Released under the [MIT License](./LICENSE).
