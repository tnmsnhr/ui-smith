# react-native-uismith

Config-driven React Native design system: **tokens**, **theme config**, **TypeScript APIs**, and **codegen static maps**. Runtime `<Button />`, `<Typography />`, and `<Provider>` are **planned** (see repo `doc.md` / phases in `.cursor/plans/`).

## Documentation

| Audience | Where |
|----------|--------|
| **GitHub Pages** (browse on the web) | Enable Pages → **Source: `/docs`** on your branch. Entry: **[docs/index.md](./docs/index.md)** |
| **Full handbook** (long-form, next to source) | **[doc.md](./doc.md)** |
| **Quick reference** | **[docs/components.md](./docs/components.md)** |

## Install

```bash
npm install react-native-uismith
```

**Peer dependencies:** `react` ≥ 17, `react-native` ≥ 0.71.

## Usage (current exports)

Configuration, defaults, and generated literals — **not** runtime UI components yet:

```ts
import {
  createDesignSystemConfig,
  defaultDesignSystemConfig,
  semanticStaticLight,
  semanticStaticDark,
  motionPresets,
} from "react-native-uismith";

import type { ButtonProps, TypographyProps } from "react-native-uismith";
```

See **[docs/getting-started.md](./docs/getting-started.md)** and **[docs/components.md](./docs/components.md)**.

## Scripts (package development)

```bash
npm run codegen   # regenerate src/generated/*
npm run build     # codegen + tsc
npm test
npm run typecheck
```

## License

MIT
