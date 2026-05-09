# Publishing

This page is for maintainers.

## Publish Package to npm

### 1) Authenticate

```bash
npm login
```

### 2) Bump version

```bash
npm version patch
```

Use `minor` / `major` as needed.

### 3) Build and validate

```bash
npm run build
npm run typecheck
npm test
npm pack --dry-run
```

### 4) Publish

```bash
npm publish
```

If scoped and first publish is public:

```bash
npm publish --access public
```

---

## Publish Docs on GitHub Pages

### Option A: Simple branch deployment (recommended)

1. Push this repo to GitHub.
2. Open **Settings -> Pages**.
3. Set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or default)
   - **Folder**: `/docs`
4. Save.

Site URL:

`https://<your-username>.github.io/<repo-name>/`

### Option B: CI deployment

If you want, add a GitHub Actions workflow later for docs build/deploy automation.
