import type { DesignSystemConfig } from "./designSystemConfig";
import { defaultDesignSystemConfig } from "./defaultConfig";
import type { Dict } from "../types/util";
import type { DeepPartial } from "../types/util";
import { deepMerge } from "../utils/deepMerge";

/**
 * Merge partial overrides onto library defaults. Immutably returns a full config.
 */
export function createDesignSystemConfig(
  partial?: DeepPartial<DesignSystemConfig>
): DesignSystemConfig {
  if (partial === undefined) {
    return defaultDesignSystemConfig;
  }
  return deepMerge(
    defaultDesignSystemConfig as unknown as Dict,
    partial as unknown as Dict
  ) as unknown as DesignSystemConfig;
}
