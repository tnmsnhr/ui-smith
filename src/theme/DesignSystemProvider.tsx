import React, { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

import { createDesignSystemConfig } from "../config/createDesignSystemConfig";
import type { DesignSystemConfig } from "../config/designSystemConfig";
import type { DeepPartial } from "../types/util";
import type { ColorMode, DesignSystemTheme, ThemeBundle } from "../types/theme";
import { createThemeBundle } from "./createTheme";

export interface DesignSystemProviderProps {
  children: React.ReactNode;
  config?: DeepPartial<DesignSystemConfig>;
  /**
   * Controlled mode. If set, provider does not manage internal color mode state.
   */
  colorMode?: ColorMode;
  /**
   * Initial mode for uncontrolled usage. Defaults to system mode, then light.
   */
  defaultColorMode?: ColorMode;
}

interface ColorModeContextValue {
  colorMode: ColorMode;
  isDark: boolean;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<DesignSystemTheme | null>(null);
const ThemeBundleContext = createContext<ThemeBundle | null>(null);
const ColorModeContext = createContext<ColorModeContextValue | null>(null);

export function DesignSystemProvider({
  children,
  config,
  colorMode,
  defaultColorMode,
}: DesignSystemProviderProps) {
  const systemMode = useColorScheme() === "dark" ? "dark" : "light";
  const [uncontrolledMode, setUncontrolledMode] = useState<ColorMode>(
    defaultColorMode ?? systemMode
  );

  const mergedConfig = useMemo(() => createDesignSystemConfig(config), [config]);
  const bundle = useMemo(() => createThemeBundle(mergedConfig), [mergedConfig]);

  const activeMode = colorMode ?? uncontrolledMode;
  const setColorMode = (mode: ColorMode) => {
    if (colorMode === undefined) {
      setUncontrolledMode(mode);
    }
  };
  const toggleColorMode = () => setColorMode(activeMode === "dark" ? "light" : "dark");

  const colorModeValue = useMemo<ColorModeContextValue>(
    () => ({
      colorMode: activeMode,
      isDark: activeMode === "dark",
      setColorMode,
      toggleColorMode,
    }),
    [activeMode]
  );

  const theme = activeMode === "dark" ? bundle.dark : bundle.light;

  return (
    <ThemeBundleContext.Provider value={bundle}>
      <ColorModeContext.Provider value={colorModeValue}>
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      </ColorModeContext.Provider>
    </ThemeBundleContext.Provider>
  );
}

export function useTheme(): DesignSystemTheme {
  const value = useContext(ThemeContext);
  if (value === null) {
    throw new Error("useTheme must be used within DesignSystemProvider");
  }
  return value;
}

export function useThemeBundle(): ThemeBundle {
  const value = useContext(ThemeBundleContext);
  if (value === null) {
    throw new Error("useThemeBundle must be used within DesignSystemProvider");
  }
  return value;
}

export function useColorMode(): ColorModeContextValue {
  const value = useContext(ColorModeContext);
  if (value === null) {
    throw new Error("useColorMode must be used within DesignSystemProvider");
  }
  return value;
}
