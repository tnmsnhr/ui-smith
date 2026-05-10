export { createDesignSystemConfig } from "./config/createDesignSystemConfig";
export { defaultDesignSystemConfig } from "./config/defaultConfig";
export { Typography } from "./components/typography/Typography";
export { defaultButtonSizeMetrics } from "./config/defaultConfig";
export { Button } from "./components/feedback/Button";
export { BUTTON_INTENTS, BUTTON_SIZES, BUTTON_VARIANTS, SPACING_TOKEN_KEYS, TEXT_INPUT_SIZES, TYPOGRAPHY_PRESET_KEYS, } from "./types/literals";
export { deepMerge } from "./utils/deepMerge";
export { defaultCoreTokens } from "./tokens/coreTokens";
export { defaultSemanticTokens } from "./tokens/semanticTokens";
/** Phase 2 — build-time literal maps from merged defaults (`npm run codegen`). */
export { semanticStaticLight } from "./generated/styles.static.light";
export { semanticStaticDark } from "./generated/styles.static.dark";
export { motionPresets } from "./generated/motion.presets";
export { createThemeBundle, createThemeForColorMode } from "./theme/createTheme";
export { DesignSystemProvider, useColorMode, useTheme, useThemeBundle, } from "./theme/DesignSystemProvider";
//# sourceMappingURL=index.js.map