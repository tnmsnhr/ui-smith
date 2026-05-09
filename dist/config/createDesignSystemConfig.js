import { defaultDesignSystemConfig } from "./defaultConfig";
import { deepMerge } from "../utils/deepMerge";
/**
 * Merge partial overrides onto library defaults. Immutably returns a full config.
 */
export function createDesignSystemConfig(partial) {
    if (partial === undefined) {
        return defaultDesignSystemConfig;
    }
    return deepMerge(defaultDesignSystemConfig, partial);
}
//# sourceMappingURL=createDesignSystemConfig.js.map