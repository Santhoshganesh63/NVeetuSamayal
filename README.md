# N Veetu Samayal – Diwali Website

React + Vite website configured for GitHub Pages deployment.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository (for example, `nveetu-samayal-diwali-react`).
2. Push the contents of this project to the repository's `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Open the **Actions** tab and wait for **Deploy React site to GitHub Pages** to finish successfully.
6. Your site URL will appear under **Settings → Pages** and in the deployment workflow.

The workflow builds the app and deploys the `dist` folder automatically on every push to `main` or `master`.
