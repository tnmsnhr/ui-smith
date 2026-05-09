# Getting Started

## Installation

```bash
npm install react-native-uismith
```

Peer dependencies expected in your app:

- `react`
- `react-native`

## Basic Usage

```tsx
import React from "react";
import { View } from "react-native";
import {
  DesignSystemProvider,
  Text,
  Button,
  useColorMode,
} from "react-native-uismith";

function Screen() {
  const { isDark, toggleColorMode } = useColorMode();

  return (
    <View style={{ gap: 12 }}>
      <Text variant="heading">UISmith</Text>
      <Button intent="primary">Primary action</Button>
      <Button variant="outline" onPress={toggleColorMode}>
        Theme: {isDark ? "Dark" : "Light"}
      </Button>
    </View>
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

## Local Monorepo Development

When developing the package and an app in the same repo, alias `react-native-uismith` to source:

```js
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
const uiSmithSrcPath = path.resolve(__dirname, "../ui-smith/src");

config.watchFolders = [...(config.watchFolders || []), uiSmithSrcPath];
config.resolver = {
  ...(config.resolver || {}),
  extraNodeModules: {
    ...(config.resolver?.extraNodeModules || {}),
    "react-native-uismith": uiSmithSrcPath,
  },
};

module.exports = config;
```

Then restart Metro:

```bash
npx expo start -c
```
