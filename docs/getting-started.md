---
title: Getting started
---

# Getting started

## Install

```bash
npm install react-native-uismith
```

### Peer dependencies

- `react` >= 17  
- `react-native` >= 0.71  

## What you can import today

The package exports configuration, tokens, generated static maps, runtime theme hooks, and now **`Button`** + **`Typography`** components.

```ts
import {
  createDesignSystemConfig,
  defaultDesignSystemConfig,
  DesignSystemProvider,
  Button,
  Typography,
  useColorMode,
  useTheme,
  defaultCoreTokens,
  defaultSemanticTokens,
  semanticStaticLight,
  semanticStaticDark,
  motionPresets,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_INTENTS,
  TYPOGRAPHY_PRESET_KEYS,
  SPACING_TOKEN_KEYS,
} from "react-native-uismith";
```

### Customize theme config

```ts
import { createDesignSystemConfig } from "react-native-uismith";

export const theme = createDesignSystemConfig({
  tokens: {
    core: {
      spacing: { md: 20 },
    },
    semantic: {
      light: {
        "intent.primary": "#1d4ed8",
      },
    },
  },
});
```

Merged config deep-merges onto **`defaultDesignSystemConfig`**.

### Use codegen outputs (O(1) lookups)

After **`npm run build`** (or **`npm run codegen`** in the package repo), maps mirror merged defaults:

```ts
import {
  semanticStaticLight,
  semanticStaticDark,
  motionPresets,
} from "react-native-uismith";

const hex = semanticStaticLight["text.primary"];
const press = motionPresets.Button.press;
```

Pick **`semanticStaticLight`** vs **`semanticStaticDark`** from your app’s color scheme / appearance.

### Runtime provider and hooks (Phase 3)

```tsx
import React from "react";
import { Text } from "react-native";
import {
  DesignSystemProvider,
  useColorMode,
  useTheme,
} from "react-native-uismith";

function Screen() {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Text
      onPress={toggleColorMode}
      style={{ color: theme.semantic["text.primary"] }}
    >
      Mode: {colorMode}
    </Text>
  );
}

export default function App() {
  return (
    <DesignSystemProvider>
      <Screen />
    </DesignSystemProvider>
  );
}
```

### Use runtime components

```tsx
import React from "react";
import { DesignSystemProvider, Button, Typography } from "react-native-uismith";

export default function App() {
  return (
    <DesignSystemProvider>
      <Typography variant="headline" color="text.primary">
        UISmith
      </Typography>
      <Button intent="primary">Continue</Button>
    </DesignSystemProvider>
  );
}
```

### Component prop contracts

Use the public prop types for wrappers/composition:

```ts
import type { ButtonProps, TypographyProps } from "react-native-uismith";
```

See **[Package reference](./components.md)** for full prop tables.

## Local development (monorepo)

Point Metro at the package source while iterating:

```js
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
const pkgSrc = path.resolve(__dirname, "../ui-smith/src");

config.watchFolders = [...(config.watchFolders || []), pkgSrc];
config.resolver = {
  ...(config.resolver || {}),
  extraNodeModules: {
    ...(config.resolver?.extraNodeModules || {}),
    "react-native-uismith": pkgSrc,
  },
};

module.exports = config;
```

Restart Metro with cache clear: `npx expo start -c`.
