import React from 'react';
import type { DesignSystemTheme, ThemeBundle, ColorMode } from '../types/theme';

export interface DesignSystemContextValue {
  theme: DesignSystemTheme;
  bundle: ThemeBundle;
}

export const DesignSystemContext = React.createContext<DesignSystemContextValue | undefined>(
  undefined
);

export interface ColorModeContextValue {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<ColorModeContextValue | undefined>(
  undefined
);

