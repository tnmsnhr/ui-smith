import type { Dict } from "../types/util";
/**
 * Deep-merge plain objects. Non-object values from `source` replace `target`.
 * Arrays are treated as values (replaced), not merged by index.
 */
export declare function deepMerge<T extends Dict, U extends Dict>(target: T, source: U): T & U;
//# sourceMappingURL=deepMerge.d.ts.map