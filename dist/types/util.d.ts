/** Plain object bag used by deepMerge */
export type Dict = Record<string, unknown>;
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
//# sourceMappingURL=util.d.ts.map