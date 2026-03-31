export const createDefaultSemanticTokens = (core) => {
    const gray = core.colors.gray;
    const primary = core.colors.primary;
    const light = {
        'background.body': core.colors.white,
        'background.surface': gray['50'],
        'background.subtle': gray['100'],
        'border.default': gray['200'],
        'border.muted': gray['100'],
        'text.primary': gray['900'],
        'text.secondary': gray['700'],
        'text.muted': gray['500'],
        'intent.primary': primary['600'],
        'intent.success': core.colors.success,
        'intent.danger': core.colors.danger,
        'intent.warning': core.colors.warning,
        'intent.info': core.colors.info
    };
    const dark = {
        'background.body': gray['900'],
        'background.surface': gray['800'],
        'background.subtle': gray['700'],
        'border.default': gray['700'],
        'border.muted': gray['800'],
        'text.primary': gray['50'],
        'text.secondary': gray['200'],
        'text.muted': gray['400'],
        'intent.primary': primary['400'],
        'intent.success': core.colors.success,
        'intent.danger': core.colors.danger,
        'intent.warning': core.colors.warning,
        'intent.info': core.colors.info
    };
    return { light, dark };
};
//# sourceMappingURL=semanticTokens.js.map