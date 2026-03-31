export const createThemeForColorMode = (config, colorMode) => {
    const semantic = colorMode === 'light' ? config.tokens.semantic.light : config.tokens.semantic.dark;
    return {
        colorMode,
        core: config.tokens.core,
        semantic,
        components: config.components
    };
};
export const createThemeBundle = (config) => {
    return {
        light: createThemeForColorMode(config, 'light'),
        dark: createThemeForColorMode(config, 'dark')
    };
};
//# sourceMappingURL=createTheme.js.map