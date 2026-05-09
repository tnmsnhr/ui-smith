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

Documentation lives in **`docs/`** next to **`package.json`** (this package root).

### Option A: Package root = GitHub repo root (recommended)

If this **`react-native-uismith`** folder **is** the repository root:

1. Push to GitHub.
2. **Settings → Pages**
3. **Source**: Deploy from a branch  
   **Branch**: `main` (or default)  
   **Folder**: **`/docs`**
4. Save.

Site URL:

`https://<owner>.github.io/<repo>/`

Jekyll uses **`docs/_config.yml`** (theme **`jekyll-theme-cayman`**).

### Option B: Monorepo (library in a subfolder)

GitHub’s **“folder `/docs`”** setting points at the **repository** root **`docs/`**, not **`ui-smith/docs/`**. If your repo layout is:

```text
repo/
  ui-smith/
    docs/          ← site sources live here
    package.json
```

choose one:

- **Separate repo** for the npm package (clone **`ui-smith`** alone), **or**
- **GitHub Action** that copies **`ui-smith/docs`** → **`docs`** at repo root, **or**
- **Workflow** deploying **`ui-smith/docs`** to **`gh-pages`** / Cloudflare Pages.

### Option C: CI deployment

Add a workflow later to publish **`docs/`** on every push to `main`.

---

### Preview locally (optional)

```bash
cd docs
bundle exec jekyll serve
```

Requires Ruby + Bundler + `gem install github-pages` (or use GitHub’s built-in build after push).
