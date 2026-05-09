import { defaultCoreTokens } from "../tokens/coreTokens";
import { defaultSemanticTokens } from "../tokens/semanticTokens";
/** Default px ladder: minHeight — fontSize — iconSize */
export const defaultButtonSizeMetrics = {
    xs: { minHeight: 32, fontSize: 12, iconSize: 14 },
    s: { minHeight: 36, fontSize: 14, iconSize: 16 },
    md: { minHeight: 40, fontSize: 14, iconSize: 16 },
    lg: { minHeight: 48, fontSize: 16, iconSize: 16 },
    xl: { minHeight: 52, fontSize: 16, iconSize: 20 },
};
export const defaultDesignSystemConfig = {
    tokens: {
        core: defaultCoreTokens,
        semantic: defaultSemanticTokens,
    },
    components: {
        Button: {
            defaultProps: {
                variant: "solid",
                size: "md",
                intent: "primary",
            },
            labelPreset: "button",
            labelPresetBySize: {
                xs: "buttonSmall",
                s: "button",
                md: "button",
                lg: "buttonLarge",
                xl: "buttonLarge",
            },
            sizeMetrics: defaultButtonSizeMetrics,
            iconLabelGap: "xs",
            motion: {
                press: { scale: 0.98, durationMs: 120 },
            },
        },
        TextInput: {
            defaultProps: {
                size: "md",
            },
            motion: {
                focus: { borderWidth: 2, durationMs: 180 },
                blur: { borderWidth: 1, durationMs: 150 },
            },
        },
        Typography: {
            defaultProps: {
                variant: "body",
            },
        },
    },
};
//# sourceMappingURL=defaultConfig.js.map