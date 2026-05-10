import React, { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { createDesignSystemConfig } from "../config/createDesignSystemConfig";
import { createThemeBundle } from "./createTheme";
const ThemeContext = createContext(null);
const ThemeBundleContext = createContext(null);
const ColorModeContext = createContext(null);
export function DesignSystemProvider({ children, config, colorMode, defaultColorMode, }) {
    const systemMode = useColorScheme() === "dark" ? "dark" : "light";
    const [uncontrolledMode, setUncontrolledMode] = useState(defaultColorMode !== null && defaultColorMode !== void 0 ? defaultColorMode : systemMode);
    const mergedConfig = useMemo(() => createDesignSystemConfig(config), [config]);
    const bundle = useMemo(() => createThemeBundle(mergedConfig), [mergedConfig]);
    const activeMode = colorMode !== null && colorMode !== void 0 ? colorMode : uncontrolledMode;
    const setColorMode = (mode) => {
        if (colorMode === undefined) {
            setUncontrolledMode(mode);
        }
    };
    const toggleColorMode = () => setColorMode(activeMode === "dark" ? "light" : "dark");
    const colorModeValue = useMemo(() => ({
        colorMode: activeMode,
        isDark: activeMode === "dark",
        setColorMode,
        toggleColorMode,
    }), [activeMode]);
    const theme = activeMode === "dark" ? bundle.dark : bundle.light;
    return (React.createElement(ThemeBundleContext.Provider, { value: bundle },
        React.createElement(ColorModeContext.Provider, { value: colorModeValue },
            React.createElement(ThemeContext.Provider, { value: theme }, children))));
}
export function useTheme() {
    const value = useContext(ThemeContext);
    if (value === null) {
        throw new Error("useTheme must be used within DesignSystemProvider");
    }
    return value;
}
export function useThemeBundle() {
    const value = useContext(ThemeBundleContext);
    if (value === null) {
        throw new Error("useThemeBundle must be used within DesignSystemProvider");
    }
    return value;
}
export function useColorMode() {
    const value = useContext(ColorModeContext);
    if (value === null) {
        throw new Error("useColorMode must be used within DesignSystemProvider");
    }
    return value;
}
//# sourceMappingURL=DesignSystemProvider.js.map