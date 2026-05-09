import type { SemanticColorRole } from "../types/literals";
export type SemanticColors = Record<SemanticColorRole, string>;
export interface SemanticTokens {
    light: SemanticColors;
    dark: SemanticColors;
}
/** Default semantic maps — replace roles in config as needed */
export declare const defaultSemanticTokens: SemanticTokens;
//# sourceMappingURL=semanticTokens.d.ts.map