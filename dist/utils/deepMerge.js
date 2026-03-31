const isObject = (value) => {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
};
export function deepMerge(target, source) {
    const result = { ...target };
    Object.keys(source).forEach((key) => {
        const srcVal = source[key];
        const tgtVal = target[key];
        if (isObject(tgtVal) && isObject(srcVal)) {
            result[key] = deepMerge(tgtVal, srcVal);
        }
        else {
            result[key] = srcVal;
        }
    });
    return result;
}
//# sourceMappingURL=deepMerge.js.map