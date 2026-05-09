import type { Dict } from "../types/util";

function isPlainObject(value: unknown): value is Dict {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Deep-merge plain objects. Non-object values from `source` replace `target`.
 * Arrays are treated as values (replaced), not merged by index.
 */
export function deepMerge<T extends Dict, U extends Dict>(target: T, source: U): T & U {
  const out = { ...target } as T & U;
  for (const key of Object.keys(source) as (keyof U & string)[]) {
    const sv = source[key as keyof U];
    const tv = (out as Dict)[key];
    if (isPlainObject(sv) && isPlainObject(tv)) {
      (out as Dict)[key] = deepMerge(tv, sv as Dict);
    } else {
      (out as Dict)[key] = sv as unknown;
    }
  }
  return out;
}
