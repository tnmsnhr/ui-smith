import type { CoreTokens } from '../tokens/coreTokens';
import type { SemanticTokens } from '../tokens/semanticTokens';
import type { ComponentsTheme } from '../types/theme';
export interface DesignSystemConfig {
    tokens: {
        core: CoreTokens;
        semantic: SemanticTokens;
    };
    components: ComponentsTheme;
}
export declare const defaultConfig: DesignSystemConfig;
export type { ComponentsTheme, CoreTokens, SemanticTokens } from '../types/theme';
export type { DesignSystemConfig as UISmithDesignSystemConfig } from './defaultConfig';
//# sourceMappingURL=defaultConfig.d.ts.map