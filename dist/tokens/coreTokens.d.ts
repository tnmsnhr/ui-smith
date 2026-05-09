import type { TextStyle } from "react-native";
import type { SpacingTokenKey, TypographyPresetKey } from "../types/literals";
/** One typography preset — full TextStyle subset allowed at config time */
export type TypographyPreset = Partial<TextStyle>;
export type TypographyPresets = Record<TypographyPresetKey, TypographyPreset>;
export interface CoreTokens {
    spacing: Record<SpacingTokenKey, number>;
    radii: {
        sm: number;
        md: number;
        lg: number;
        full: number;
    };
    typography: {
        fontFamily: {
            body: string;
            headline: string;
            mono: string;
        };
        presets: TypographyPresets;
    };
}
export declare const defaultCoreTokens: CoreTokens;
//# sourceMappingURL=coreTokens.d.ts.map