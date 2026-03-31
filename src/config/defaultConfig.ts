import type { CoreTokens } from '../tokens/coreTokens';
import { defaultCoreTokens } from '../tokens/coreTokens';
import type { SemanticTokens } from '../tokens/semanticTokens';
import { createDefaultSemanticTokens } from '../tokens/semanticTokens';
import type { ComponentsTheme } from '../types/theme';

export interface DesignSystemConfig {
  tokens: {
    core: CoreTokens;
    semantic: SemanticTokens;
  };
  components: ComponentsTheme;
}

// Default component token stubs; will be expanded as we add components.
const defaultComponents: ComponentsTheme = {
  Box: {
    baseStyle: {}
  },
  Text: {
    baseStyle: {}
  },
  Button: {
    baseStyle: {},
    variants: {
      solid: {},
      outline: {},
      ghost: {}
    },
    sizes: {
      sm: {},
      md: {},
      lg: {}
    },
    defaultProps: {
      variant: 'solid',
      size: 'md'
    }
  }
};

const semanticTokens = createDefaultSemanticTokens(defaultCoreTokens);

export const defaultConfig: DesignSystemConfig = {
  tokens: {
    core: defaultCoreTokens,
    semantic: semanticTokens
  },
  components: defaultComponents
};

export type { ComponentsTheme, CoreTokens, SemanticTokens } from '../types/theme';
export type { DesignSystemConfig as UISmithDesignSystemConfig } from './defaultConfig';

