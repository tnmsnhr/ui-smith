import type { ColorMode } from '../types/theme';
export declare const useColorMode: () => {
    readonly colorMode: ColorMode;
    readonly setColorMode: (mode: ColorMode) => void;
    readonly toggleColorMode: () => void;
    readonly isDark: boolean;
    readonly isLight: boolean;
};
export type UseColorModeReturn = ReturnType<typeof useColorMode>;
//# sourceMappingURL=useColorMode.d.ts.map