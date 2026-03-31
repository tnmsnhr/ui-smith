import React from 'react';
import type { ReactNode } from 'react';
import type { DesignSystemConfig } from '../config/defaultConfig';
import type { ColorMode } from '../types/theme';
export interface DesignSystemProviderProps {
    children: ReactNode;
    config?: DesignSystemConfig;
    /**
     * Desired color mode behavior.
     * - 'system' (default): follow OS appearance.
     * - 'light' | 'dark': force mode.
     */
    colorMode?: ColorMode | 'system';
    /**
     * Optional initial color mode when colorMode === 'system'.
     */
    initialColorMode?: ColorMode;
    onColorModeChange?: (mode: ColorMode) => void;
}
export declare const DesignSystemProvider: React.FC<DesignSystemProviderProps>;
export declare const ThemeProvider: React.FC<DesignSystemProviderProps>;
//# sourceMappingURL=DesignSystemProvider.d.ts.map