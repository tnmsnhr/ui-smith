import type { CoreTokens } from './coreTokens';
export type SemanticColorRole = 'background.body' | 'background.surface' | 'background.subtle' | 'border.default' | 'border.muted' | 'text.primary' | 'text.secondary' | 'text.muted' | 'intent.primary' | 'intent.success' | 'intent.danger' | 'intent.warning' | 'intent.info';
export type SemanticColors = Record<SemanticColorRole, string>;
export interface SemanticTokens {
    light: SemanticColors;
    dark: SemanticColors;
}
export declare const createDefaultSemanticTokens: (core: CoreTokens) => SemanticTokens;
//# sourceMappingURL=semanticTokens.d.ts.map