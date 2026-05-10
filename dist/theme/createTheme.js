import { defaultDesignSystemConfig } from "../config/defaultConfig";
import { semanticStaticDark } from "../generated/styles.static.dark";
import { semanticStaticLight } from "../generated/styles.static.light";
function semanticForMode(config, colorMode) {
    // Fast path for library defaults: use generated literals directly.
    if (config === defaultDesignSystemConfig) {
        return colorMode === "light" ? semanticStaticLight : semanticStaticDark;
    }
    // Custom configs still resolve from merged semantic maps until consumer codegen lands.
    return colorMode === "light" ? config.tokens.semantic.light : config.tokens.semantic.dark;
}
function themeIdFor(config, colorMode) {
    return `${colorMode}:${config === defaultDesignSystemConfig ? "default" : "custom"}`;
}
export const createThemeForColorMode = (config, colorMode) => ({
    id: themeIdFor(config, colorMode),
    colorMode,
    core: config.tokens.core,
    semantic: semanticForMode(config, colorMode),
    components: config.components,
});
export const createThemeBundle = (config) => ({
    light: createThemeForColorMode(config, "light"),
    dark: createThemeForColorMode(config, "dark"),
});
//# sourceMappingURL=createTheme.js.map