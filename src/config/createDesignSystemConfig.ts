import type { DeepPartial } from '../types/util';
import { deepMerge } from '../utils/deepMerge';
import { defaultConfig, type DesignSystemConfig } from './defaultConfig';

/**
 * Main extension point for consumers.
 * Accepts a deep-partial config and returns a fully-resolved config
 * with UISmith defaults filled in.
 */
export const createDesignSystemConfig = (
  overrides?: DeepPartial<DesignSystemConfig>
): DesignSystemConfig => {
  if (!overrides) {
    return defaultConfig;
  }

  // Intentionally create a fresh object so consumers can't accidentally
  // mutate the shared defaultConfig.
  const base = deepMerge(defaultConfig as any, overrides as any) as DesignSystemConfig;
  return base;
};
export type { DesignSystemConfig } from './defaultConfig';

