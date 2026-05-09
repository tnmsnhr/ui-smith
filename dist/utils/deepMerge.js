function isPlainObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
/**
 * Deep-merge plain objects. Non-object values from `source` replace `target`.
 * Arrays are treated as values (replaced), not merged by index.
 */
export function deepMerge(target, source) {
    const out = { ...target };
    for (const key of Object.keys(source)) {
        const sv = source[key];
        const tv = out[key];
        if (isPlainObject(sv) && isPlainObject(tv)) {
            out[key] = deepMerge(tv, sv);
        }
        else {
            out[key] = sv;
        }
    }
    return out;
}
//# sourceMappingURL=deepMerge.js.map