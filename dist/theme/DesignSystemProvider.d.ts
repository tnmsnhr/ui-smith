import React from "react";
import type { DesignSystemConfig } from "../config/designSystemConfig";
import type { DeepPartial } from "../types/util";
import type { ColorMode, DesignSystemTheme, ThemeBundle } from "../types/theme";
export interface DesignSystemProviderProps {
    children: React.ReactNode;
    config?: DeepPartial<DesignSystemConfig>;
    /**
     * Controlled mode. If set, provider does not manage internal color mode state.
     */
    colorMode?: ColorMode;
    /**
     * Initial mode for uncontrolled usage. Defaults to system mode, then light.
     */
    defaultColorMode?: ColorMode;
}
interface ColorModeContextValue {
    colorMode: ColorMode;
    isDark: boolean;
    setColorMode: (mode: ColorMode) => void;
    toggleColorMode: () => void;
}
export declare function DesignSystemProvider({ children, config, colorMode, defaultColorMode, }: DesignSystemProviderProps): React.JSX.Element;
export declare function useTheme(): DesignSystemTheme;
export declare function useThemeBundle(): ThemeBundle;
export declare function useColorMode(): ColorModeContextValue;
export {};
//# sourceMappingURL=DesignSystemProvider.d.ts.map