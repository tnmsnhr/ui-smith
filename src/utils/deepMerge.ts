import { Dict } from '../types/util';

const isObject = (value: unknown): value is Dict => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export function deepMerge<T extends Dict, U extends Dict>(target: T, source: U): T & U {
  const result: Dict = { ...target };

  Object.keys(source).forEach((key) => {
    const srcVal = (source as Dict)[key];
    const tgtVal = (target as Dict)[key];

    if (isObject(tgtVal) && isObject(srcVal)) {
      (result as Dict)[key] = deepMerge(tgtVal, srcVal);
    } else {
      (result as Dict)[key] = srcVal;
    }
  });

  return result as T & U;
}

