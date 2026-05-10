---
title: UISmith
---

# UISmith

**react-native-uismith** — a config-driven React Native design system. This site lists **what ships today** and how to use it.

| Page | Description |
|------|-------------|
| [Getting started](./getting-started.md) | Install, peer dependencies, imports, examples |
| [Package reference](./components.md) | Tokens, config, TypeScript APIs, codegen — **authoritative list** |
| [Publishing](./publishing.md) | npm publish + GitHub Pages from `/docs` |

## Current release (library surface)

| Capability | Shipped? |
|------------|----------|
| **Spacing / radii / typography presets** (`tokens.core`) | Yes |
| **Semantic colors** — light + dark maps (`tokens.semantic`) | Yes |
| **`createDesignSystemConfig`**, **`defaultDesignSystemConfig`**, **`deepMerge`** | Yes |
| **Literal unions** — `BUTTON_SIZES`, `BUTTON_VARIANTS`, `TYPOGRAPHY_PRESET_KEYS`, … | Yes |
| **`ButtonProps`**, **`TypographyProps`** (types for upcoming components) | Yes |
| **Codegen maps** — `semanticStaticLight`, `semanticStaticDark`, `motionPresets` | Yes |
| **Runtime theme layer** — `DesignSystemProvider`, `useTheme`, `useColorMode`, `useThemeBundle` | Yes |
| **Runtime UI** — `<Button />`, `<Typography />`, `<TextInput />` | **Not yet** (planned next phases) |

Use these docs + IDE autocomplete for APIs. **Visual previews** of components belong in your app or Storybook — GitHub Pages here is Markdown-only.

### Extended handbook

Long-form notes (full typography scale, Button intent matrix, accessibility) live in **`doc.md`** at the **repository root** (next to `package.json`). Open that file on GitHub when browsing the repo.
