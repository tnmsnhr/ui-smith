import { defaultCoreTokens } from '../tokens/coreTokens';
import { createDefaultSemanticTokens } from '../tokens/semanticTokens';
// Default component token stubs; will be expanded as we add components.
const defaultComponents = {
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
export const defaultConfig = {
    tokens: {
        core: defaultCoreTokens,
        semantic: semanticTokens
    },
    components: defaultComponents
};
//# sourceMappingURL=defaultConfig.js.map