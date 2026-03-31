export type ColorScale = {
    [shade: string]: string;
};
export type CoreColors = {
    [name: string]: string | ColorScale;
};
export type TypographyTokens = {
    fontFamily: {
        body: string;
        heading: string;
        mono: string;
    };
    fontSize: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        '2xl': number;
    };
    lineHeight: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        '2xl': number;
    };
    fontWeight: {
        regular: string | number;
        medium: string | number;
        semiBold: string | number;
        bold: string | number;
    };
};
export type SpacingTokens = {
    none: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export type RadiusTokens = {
    none: number;
    sm: number;
    md: number;
    lg: number;
    pill: number;
    full: number;
};
export type ShadowTokens = {
    level0: {
        elevation: number;
    };
    level1: {
        elevation: number;
    };
    level2: {
        elevation: number;
    };
    level3: {
        elevation: number;
    };
};
export type SizeTokens = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export type ZIndexTokens = {
    base: number;
    dropdown: number;
    modal: number;
    toast: number;
};
export type OpacityTokens = {
    disabled: number;
    focusRing: number;
    backdrop: number;
};
export interface CoreTokens {
    colors: CoreColors;
    typography: TypographyTokens;
    spacing: SpacingTokens;
    radii: RadiusTokens;
    shadows: ShadowTokens;
    sizes: SizeTokens;
    zIndices: ZIndexTokens;
    opacity: OpacityTokens;
}
export declare const defaultCoreTokens: CoreTokens;
//# sourceMappingURL=coreTokens.d.ts.map