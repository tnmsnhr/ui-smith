import { defaultDesignSystemConfig } from "../config/defaultConfig";
import type { DesignSystemConfig } from "../config/designSystemConfig";
import { semanticStaticDark } from "../generated/styles.static.dark";
import { semanticStaticLight } from "../generated/styles.static.light";
import type { ColorMode, DesignSystemTheme, ThemeBundle } from "../types/theme";

function semanticForMode(config: DesignSystemConfig, colorMode: ColorMode) {
  // Fast path for library defaults: use generated literals directly.
  if (config === defaultDesignSystemConfig) {
    return colorMode === "light" ? semanticStaticLight : semanticStaticDark;
  }
  // Custom configs still resolve from merged semantic maps until consumer codegen lands.
  return colorMode === "light" ? config.tokens.semantic.light : config.tokens.semantic.dark;
}

function themeIdFor(config: DesignSystemConfig, colorMode: ColorMode): string {
  return `${colorMode}:${config === defaultDesignSystemConfig ? "default" : "custom"}`;
}

export const createThemeForColorMode = (
  config: DesignSystemConfig,
  colorMode: ColorMode
): DesignSystemTheme => ({
  id: themeIdFor(config, colorMode),
  colorMode,
  core: config.tokens.core,
  semantic: semanticForMode(config, colorMode),
  components: config.components,
});

export const createThemeBundle = (config: DesignSystemConfig): ThemeBundle => ({
  light: createThemeForColorMode(config, "light"),
  dark: createThemeForColorMode(config, "dark"),
});
