import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import type { ReactNode } from 'react';
import { DesignSystemContext, ColorModeContext } from './DesignSystemContext';
import type { DesignSystemConfig } from '../config/defaultConfig';
import { defaultConfig } from '../config/defaultConfig';
import type { ColorMode } from '../types/theme';
import { createThemeBundle } from '../theme/createTheme';

export interface DesignSystemProviderProps {
  children: ReactNode;
  config?: DesignSystemConfig;
  /**
   * Desired color mode behavior.
   * - 'system' (default): follow OS appearance.
   * - 'light' | 'dark': force mode.
   */
  colorMode?: ColorMode | 'system';
  /**
   * Optional initial color mode when colorMode === 'system'.
   */
  initialColorMode?: ColorMode;
  onColorModeChange?: (mode: ColorMode) => void;
}

const mapAppearanceToColorMode = (scheme: ColorSchemeName | null): ColorMode => {
  return scheme === 'dark' ? 'dark' : 'light';
};

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({
  children,
  config,
  colorMode = 'system',
  initialColorMode,
  onColorModeChange
}) => {
  const normalizedConfig = config ?? defaultConfig;

  const bundle = useMemo(() => createThemeBundle(normalizedConfig), [normalizedConfig]);

  const [resolvedColorMode, setResolvedColorMode] = useState<ColorMode>(() => {
    if (colorMode === 'system') {
      const system = Appearance.getColorScheme() ?? 'light';
      return initialColorMode ?? mapAppearanceToColorMode(system);
    }
    return colorMode;
  });

  useEffect(() => {
    if (colorMode !== 'system') {
      setResolvedColorMode(colorMode);
      return;
    }

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setResolvedColorMode(mapAppearanceToColorMode(colorScheme));
    });

    return () => {
      subscription.remove();
    };
  }, [colorMode]);

  useEffect(() => {
    onColorModeChange?.(resolvedColorMode);
  }, [onColorModeChange, resolvedColorMode]);

  const theme = resolvedColorMode === 'light' ? bundle.light : bundle.dark;

  const setColorMode = useCallback(
    (mode: ColorMode) => {
      setResolvedColorMode(mode);
    },
    [setResolvedColorMode]
  );

  const toggleColorMode = useCallback(() => {
    setResolvedColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <DesignSystemContext.Provider value={{ theme, bundle }}>
      <ColorModeContext.Provider
        value={{
          colorMode: resolvedColorMode,
          setColorMode,
          toggleColorMode
        }}
      >
        {children}
      </ColorModeContext.Provider>
    </DesignSystemContext.Provider>
  );
};

export const ThemeProvider = DesignSystemProvider;

