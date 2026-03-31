import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Appearance } from 'react-native';
import { DesignSystemContext, ColorModeContext } from './DesignSystemContext';
import { defaultConfig } from '../config/defaultConfig';
import { createThemeBundle } from '../theme/createTheme';
const mapAppearanceToColorMode = (scheme) => {
    return scheme === 'dark' ? 'dark' : 'light';
};
export const DesignSystemProvider = ({ children, config, colorMode = 'system', initialColorMode, onColorModeChange }) => {
    const normalizedConfig = config !== null && config !== void 0 ? config : defaultConfig;
    const bundle = useMemo(() => createThemeBundle(normalizedConfig), [normalizedConfig]);
    const [resolvedColorMode, setResolvedColorMode] = useState(() => {
        var _a;
        if (colorMode === 'system') {
            const system = (_a = Appearance.getColorScheme()) !== null && _a !== void 0 ? _a : 'light';
            return initialColorMode !== null && initialColorMode !== void 0 ? initialColorMode : mapAppearanceToColorMode(system);
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
        onColorModeChange === null || onColorModeChange === void 0 ? void 0 : onColorModeChange(resolvedColorMode);
    }, [onColorModeChange, resolvedColorMode]);
    const theme = resolvedColorMode === 'light' ? bundle.light : bundle.dark;
    const setColorMode = useCallback((mode) => {
        setResolvedColorMode(mode);
    }, [setResolvedColorMode]);
    const toggleColorMode = useCallback(() => {
        setResolvedColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);
    return (React.createElement(DesignSystemContext.Provider, { value: { theme, bundle } },
        React.createElement(ColorModeContext.Provider, { value: {
                colorMode: resolvedColorMode,
                setColorMode,
                toggleColorMode
            } }, children)));
};
export const ThemeProvider = DesignSystemProvider;
//# sourceMappingURL=DesignSystemProvider.js.map