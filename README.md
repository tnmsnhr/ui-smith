# react-native-uismith

Config-driven React Native design system: **tokens**, **theme config**, **TypeScript APIs**, **codegen static maps**, and a minimal runtime **theme provider/hooks**. Runtime UI primitives (`<Button />`, `<Typography />`, `<TextInput />`) are planned in later phases.

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

Configuration, defaults, generated literals, and runtime theme hooks:

```ts
import {
  createDesignSystemConfig,
  defaultDesignSystemConfig,
  DesignSystemProvider,
  useColorMode,
  useTheme,
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
