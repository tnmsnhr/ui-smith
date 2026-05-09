export { createDesignSystemConfig } from "./config/createDesignSystemConfig";
export type { DesignSystemConfig } from "./config/designSystemConfig";
export { defaultDesignSystemConfig } from "./config/defaultConfig";
export type {
  ButtonMotionPress,
  ButtonSizeMetrics,
  ButtonThemeConfig,
  ComponentsThemeConfig,
  TextInputMotionBorder,
  TextInputThemeConfig,
  TypographyThemeConfig,
} from "./config/componentTheme";

export type { TypographyProps } from "./types/typographyProps";

export { defaultButtonSizeMetrics } from "./config/defaultConfig";

export type { ButtonProps } from "./types/buttonProps";

export type {
  ButtonIntent,
  ButtonSize,
  ButtonVariant,
  SemanticColorRole,
  SpacingTokenKey,
  TextInputSize,
  TypographyPresetKey,
} from "./types/literals";

export {
  BUTTON_INTENTS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  SPACING_TOKEN_KEYS,
  TEXT_INPUT_SIZES,
  TYPOGRAPHY_PRESET_KEYS,
} from "./types/literals";

export type { DeepPartial, Dict } from "./types/util";
export { deepMerge } from "./utils/deepMerge";

export type { CoreTokens, TypographyPreset, TypographyPresets } from "./tokens/coreTokens";
export { defaultCoreTokens } from "./tokens/coreTokens";

export type { SemanticColors, SemanticTokens } from "./tokens/semanticTokens";
export { defaultSemanticTokens } from "./tokens/semanticTokens";

/** Phase 2 — build-time literal maps from merged defaults (`npm run codegen`). */
export { semanticStaticLight } from "./generated/styles.static.light";
export { semanticStaticDark } from "./generated/styles.static.dark";
export { motionPresets } from "./generated/motion.presets";

export type { SemanticStaticLight } from "./generated/styles.static.light";
export type { SemanticStaticDark } from "./generated/styles.static.dark";
export type { MotionPresets } from "./generated/motion.presets";
