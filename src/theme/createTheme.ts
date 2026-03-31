import type { DesignSystemConfig } from '../config/defaultConfig';
import type { ColorMode, DesignSystemTheme, ThemeBundle } from '../types/theme';

export const createThemeForColorMode = (
  config: DesignSystemConfig,
  colorMode: ColorMode
): DesignSystemTheme => {
  const semantic =
    colorMode === 'light' ? config.tokens.semantic.light : config.tokens.semantic.dark;

  return {
    colorMode,
    core: config.tokens.core,
    semantic,
    components: config.components
  };
};

export const createThemeBundle = (config: DesignSystemConfig): ThemeBundle => {
  return {
    light: createThemeForColorMode(config, 'light'),
    dark: createThemeForColorMode(config, 'dark')
  };
};

