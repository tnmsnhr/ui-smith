import React, { forwardRef } from "react";
import { ActivityIndicator, Pressable, View, } from "react-native";
import { motionPresets } from "../../generated/motion.presets";
import { Typography } from "../typography/Typography";
import { useTheme } from "../../theme/DesignSystemProvider";
const FALLBACK_SIZE_METRICS = {
    xs: { minHeight: 32, fontSize: 12, iconSize: 14 },
    s: { minHeight: 36, fontSize: 14, iconSize: 16 },
    md: { minHeight: 40, fontSize: 14, iconSize: 16 },
    lg: { minHeight: 48, fontSize: 16, iconSize: 16 },
    xl: { minHeight: 52, fontSize: 16, iconSize: 20 },
};
export const Button = forwardRef(function Button({ variant, size, intent, disabled, loading, fullWidth, leftIcon, rightIcon, iconOnly, children, style, accessibilityState, ...rest }, ref) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const theme = useTheme();
    const resolvedVariant = (_b = variant !== null && variant !== void 0 ? variant : (_a = theme.components.Button.defaultProps) === null || _a === void 0 ? void 0 : _a.variant) !== null && _b !== void 0 ? _b : "solid";
    const resolvedSize = (_d = size !== null && size !== void 0 ? size : (_c = theme.components.Button.defaultProps) === null || _c === void 0 ? void 0 : _c.size) !== null && _d !== void 0 ? _d : "md";
    const resolvedIntent = (_f = intent !== null && intent !== void 0 ? intent : (_e = theme.components.Button.defaultProps) === null || _e === void 0 ? void 0 : _e.intent) !== null && _f !== void 0 ? _f : "primary";
    const isDisabled = Boolean(disabled || loading);
    const intentRole = `intent.${resolvedIntent}`;
    const intentColor = theme.semantic[intentRole];
    const disabledTextColor = theme.semantic["text.disabled"];
    const disabledBgColor = theme.semantic["background.disabled"];
    const disabledBorderColor = theme.semantic["border.muted"];
    const bgBody = theme.semantic["background.body"];
    const pressScale = (_h = (_g = motionPresets.Button.press) === null || _g === void 0 ? void 0 : _g.scale) !== null && _h !== void 0 ? _h : 1;
    const sizeMetrics = (_k = (_j = theme.components.Button.sizeMetrics) === null || _j === void 0 ? void 0 : _j[resolvedSize]) !== null && _k !== void 0 ? _k : FALLBACK_SIZE_METRICS[resolvedSize];
    const iconLabelGap = (_m = theme.core.spacing[(_l = theme.components.Button.iconLabelGap) !== null && _l !== void 0 ? _l : "xs"]) !== null && _m !== void 0 ? _m : 4;
    const labelVariant = (_q = (_p = (_o = theme.components.Button.labelPresetBySize) === null || _o === void 0 ? void 0 : _o[resolvedSize]) !== null && _p !== void 0 ? _p : theme.components.Button.labelPreset) !== null && _q !== void 0 ? _q : "button";
    const variantStyles = {
        solid: { backgroundColor: intentColor, borderColor: intentColor, textColor: bgBody },
        outline: { backgroundColor: "transparent", borderColor: intentColor, textColor: intentColor },
        ghost: { backgroundColor: "transparent", borderColor: "transparent", textColor: intentColor },
        link: { backgroundColor: "transparent", borderColor: "transparent", textColor: intentColor },
    };
    const active = (_r = variantStyles[resolvedVariant]) !== null && _r !== void 0 ? _r : variantStyles.solid;
    const textColor = isDisabled ? disabledTextColor : active.textColor;
    const baseStyle = {
        minHeight: sizeMetrics.minHeight,
        borderRadius: theme.core.radii.md,
        borderWidth: resolvedVariant === "outline" ? 1 : 0,
        borderColor: isDisabled ? disabledBorderColor : active.borderColor,
        backgroundColor: isDisabled ? disabledBgColor : active.backgroundColor,
        paddingHorizontal: iconOnly ? 0 : theme.core.spacing.md,
        alignSelf: fullWidth ? "stretch" : undefined,
        width: iconOnly && !fullWidth ? sizeMetrics.minHeight : undefined,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        opacity: isDisabled ? 0.9 : 1,
    };
    const labelTextStyle = resolvedVariant === "link" ? { textDecorationLine: "underline" } : undefined;
    return (React.createElement(Pressable, { ref: ref, ...rest, disabled: isDisabled, accessibilityState: { ...accessibilityState, disabled: isDisabled, busy: Boolean(loading) }, style: ({ pressed }) => [
            baseStyle,
            pressed && !isDisabled ? { transform: [{ scale: pressScale }] } : null,
            style,
        ] }, loading ? (React.createElement(ActivityIndicator, { color: textColor })) : (React.createElement(React.Fragment, null,
        leftIcon ? React.createElement(View, { style: { marginRight: children ? iconLabelGap : 0 } }, leftIcon) : null,
        !iconOnly && children ? (React.createElement(Typography, { variant: labelVariant, style: [{ color: textColor }, labelTextStyle] }, children)) : null,
        rightIcon ? React.createElement(View, { style: { marginLeft: children ? iconLabelGap : 0 } }, rightIcon) : null))));
});
//# sourceMappingURL=Button.js.map