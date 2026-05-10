import type { ComponentsThemeConfig } from "../config/componentTheme";
import type { CoreTokens } from "../tokens/coreTokens";
import type { SemanticColors } from "../tokens/semanticTokens";

export type ColorMode = "light" | "dark";

export interface DesignSystemTheme {
  /** Stable id for cache keys/debug; changes when mode/config changes. */
  id: string;
  colorMode: ColorMode;
  core: CoreTokens;
  semantic: SemanticColors;
  components: ComponentsThemeConfig;
}

export interface ThemeBundle {
  light: DesignSystemTheme;
  dark: DesignSystemTheme;
}
