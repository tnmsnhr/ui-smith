import type { ComponentsThemeConfig } from "./componentTheme";
import type { CoreTokens } from "../tokens/coreTokens";
import type { SemanticTokens } from "../tokens/semanticTokens";

export interface DesignSystemConfig {
  tokens: {
    core: CoreTokens;
    semantic: SemanticTokens;
  };
  components: ComponentsThemeConfig;
}
