import React from 'react';
import type { DesignSystemTheme, ThemeBundle, ColorMode } from '../types/theme';
export interface DesignSystemContextValue {
    theme: DesignSystemTheme;
    bundle: ThemeBundle;
}
export declare const DesignSystemContext: React.Context<DesignSystemContextValue | undefined>;
export interface ColorModeContextValue {
    colorMode: ColorMode;
    setColorMode: (mode: ColorMode) => void;
    toggleColorMode: () => void;
}
export declare const ColorModeContext: React.Context<ColorModeContextValue | undefined>;
//# sourceMappingURL=DesignSystemContext.d.ts.map