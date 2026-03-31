import type { DeepPartial } from '../types/util';
import { type DesignSystemConfig } from './defaultConfig';
/**
 * Main extension point for consumers.
 * Accepts a deep-partial config and returns a fully-resolved config
 * with UISmith defaults filled in.
 */
export declare const createDesignSystemConfig: (overrides?: DeepPartial<DesignSystemConfig>) => DesignSystemConfig;
export type { DesignSystemConfig } from './defaultConfig';
//# sourceMappingURL=createDesignSystemConfig.d.ts.map