import { deepMerge } from '../utils/deepMerge';
import { defaultConfig } from './defaultConfig';
/**
 * Main extension point for consumers.
 * Accepts a deep-partial config and returns a fully-resolved config
 * with UISmith defaults filled in.
 */
export const createDesignSystemConfig = (overrides) => {
    if (!overrides) {
        return defaultConfig;
    }
    // Intentionally create a fresh object so consumers can't accidentally
    // mutate the shared defaultConfig.
    const base = deepMerge(defaultConfig, overrides);
    return base;
};
//# sourceMappingURL=createDesignSystemConfig.js.map