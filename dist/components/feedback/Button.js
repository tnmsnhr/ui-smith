import React, { cloneElement, forwardRef, isValidElement, useEffect, } from "react";
import { ActivityIndicator, Platform, Pressable, Text, View, } from "react-native";
import Animated, { cancelAnimation, Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming, } from "react-native-reanimated";
import { Typography } from "../typography/Typography";
import { defaultButtonSizeMetrics } from "../../config/defaultConfig";
import { useTheme } from "../../theme/DesignSystemProvider";
/** Merge button foreground color into Text-based icons (Typography still defaults to `text.primary`). */
function withButtonIconColor(icon, textColor) {
    if (!isValidElement(icon))
        return icon;
    const Component = icon.type;
    if (Component !== Typography && Component !== Text)
        return icon;
    const typed = icon;
    const props = typed.props;
    const style = [props.style, { color: textColor }];
    return cloneElement(typed, { style });
}
export const Button = forwardRef(function Button({ variant, size, intent, pressEffect: pressEffectProp, disabled, loading, fullWidth, leftIcon, rightIcon, iconOnly, children, style, accessibilityState, onPressIn, onPressOut, ...rest }, ref) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    const theme = useTheme();
    const resolvedVariant = (_b = variant !== null && variant !== void 0 ? variant : (_a = theme.components.Button.defaultProps) === null || _a === void 0 ? void 0 : _a.variant) !== null && _b !== void 0 ? _b : "solid";
    const resolvedSize = (_d = size !== null && size !== void 0 ? size : (_c = theme.components.Button.defaultProps) === null || _c === void 0 ? void 0 : _c.size) !== null && _d !== void 0 ? _d : "md";
    const resolvedIntent = (_f = intent !== null && intent !== void 0 ? intent : (_e = theme.components.Button.defaultProps) === null || _e === void 0 ? void 0 : _e.intent) !== null && _f !== void 0 ? _f : "primary";
    const pressEffect = (_h = pressEffectProp !== null && pressEffectProp !== void 0 ? pressEffectProp : (_g = theme.components.Button.defaultProps) === null || _g === void 0 ? void 0 : _g.pressEffect) !== null && _h !== void 0 ? _h : "ripple";
    const motion = (_j = theme.components.Button.motion) !== null && _j !== void 0 ? _j : {};
    const rippleCfg = (_k = motion.ripple) !== null && _k !== void 0 ? _k : {};
    const fadeCfg = (_l = motion.fade) !== null && _l !== void 0 ? _l : {};
    const pressCfg = (_m = motion.press) !== null && _m !== void 0 ? _m : {};
    const bounceCfg = (_o = motion.bounce) !== null && _o !== void 0 ? _o : {};
    const isDisabled = Boolean(disabled || loading);
    const intentRole = `intent.${resolvedIntent}`;
    const intentColor = theme.semantic[intentRole];
    const disabledTextColor = theme.semantic["text.disabled"];
    const disabledBgColor = theme.semantic["background.disabled"];
    const disabledBorderColor = theme.semantic["border.muted"];
    const bgBody = theme.semantic["background.body"];
    const opacity = useSharedValue(1);
    const scale = useSharedValue(1);
    const translateY = useSharedValue(0);
    useEffect(() => {
        if (isDisabled) {
            cancelAnimation(opacity);
            cancelAnimation(scale);
            cancelAnimation(translateY);
            opacity.value = 1;
            scale.value = 1;
            translateY.value = 0;
        }
    }, [isDisabled, opacity, scale, translateY]);
    const easingOutQuad = Easing.out(Easing.quad);
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }, { scale: scale.value }],
    }));
    const rnSpringFromTheme = (tension, friction) => ({
        stiffness: tension,
        damping: friction * 3.5,
        mass: 1,
    });
    const sizeMetrics = (_q = (_p = theme.components.Button.sizeMetrics) === null || _p === void 0 ? void 0 : _p[resolvedSize]) !== null && _q !== void 0 ? _q : defaultButtonSizeMetrics[resolvedSize];
    const iconLabelGap = (_s = theme.core.spacing[(_r = theme.components.Button.iconLabelGap) !== null && _r !== void 0 ? _r : "xs"]) !== null && _s !== void 0 ? _s : 4;
    const labelVariant = (_v = (_u = (_t = theme.components.Button.labelPresetBySize) === null || _t === void 0 ? void 0 : _t[resolvedSize]) !== null && _u !== void 0 ? _u : theme.components.Button.labelPreset) !== null && _v !== void 0 ? _v : "button";
    const variantStyles = {
        solid: {
            backgroundColor: intentColor,
            borderColor: intentColor,
            textColor: bgBody,
        },
        outline: {
            backgroundColor: "transparent",
            borderColor: intentColor,
            textColor: intentColor,
        },
        ghost: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            textColor: intentColor,
        },
        link: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            textColor: intentColor,
        },
    };
    const active = (_w = variantStyles[resolvedVariant]) !== null && _w !== void 0 ? _w : variantStyles.solid;
    const textColor = isDisabled ? disabledTextColor : active.textColor;
    const borderRadius = theme.core.radii.md;
    const baseStyle = {
        minHeight: sizeMetrics.minHeight,
        borderRadius,
        borderWidth: resolvedVariant === "outline" ? 1 : 0,
        borderColor: isDisabled ? disabledBorderColor : active.borderColor,
        backgroundColor: isDisabled ? disabledBgColor : active.backgroundColor,
        paddingHorizontal: iconOnly ? 0 : theme.core.spacing.md,
        alignSelf: fullWidth ? "stretch" : "flex-start",
        width: iconOnly && !fullWidth ? sizeMetrics.minHeight : undefined,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    };
    const labelTextStyle = resolvedVariant === "link"
        ? { textDecorationLine: "underline" }
        : undefined;
    const androidRippleColor = (_x = rippleCfg.androidRippleColor) !== null && _x !== void 0 ? _x : (resolvedVariant === "solid"
        ? "rgba(255,255,255,0.35)"
        : "rgba(0,0,0,0.12)");
    const androidRipple = pressEffect === "ripple" && Platform.OS === "android"
        ? { color: androidRippleColor, borderless: false }
        : null;
    const runPressIn = () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (isDisabled)
            return;
        switch (pressEffect) {
            case "ripple":
                if (Platform.OS !== "android") {
                    opacity.value = withTiming((_a = rippleCfg.iosFallbackToOpacity) !== null && _a !== void 0 ? _a : 0.92, {
                        duration: (_b = rippleCfg.iosFallbackDurationMs) !== null && _b !== void 0 ? _b : 90,
                        easing: easingOutQuad,
                    });
                }
                break;
            case "fade":
                opacity.value = withTiming((_c = fadeCfg.toOpacity) !== null && _c !== void 0 ? _c : 0.72, {
                    duration: (_d = fadeCfg.durationMs) !== null && _d !== void 0 ? _d : 140,
                    easing: easingOutQuad,
                });
                break;
            case "press": {
                const d = (_e = pressCfg.durationMs) !== null && _e !== void 0 ? _e : 100;
                opacity.value = withTiming((_f = pressCfg.toOpacity) !== null && _f !== void 0 ? _f : 0.88, {
                    duration: d,
                    easing: easingOutQuad,
                });
                translateY.value = withTiming((_g = pressCfg.translateY) !== null && _g !== void 0 ? _g : 1, {
                    duration: d,
                    easing: easingOutQuad,
                });
                break;
            }
            case "bounce":
                scale.value = withSpring((_h = bounceCfg.pressedScale) !== null && _h !== void 0 ? _h : 0.94, rnSpringFromTheme((_j = bounceCfg.pressTension) !== null && _j !== void 0 ? _j : 280, (_k = bounceCfg.pressFriction) !== null && _k !== void 0 ? _k : 6));
                break;
        }
    };
    const runPressOut = () => {
        var _a, _b, _c, _d, _e;
        if (isDisabled)
            return;
        switch (pressEffect) {
            case "ripple":
                if (Platform.OS !== "android") {
                    opacity.value = withTiming(1, {
                        duration: (_a = rippleCfg.iosReleaseDurationMs) !== null && _a !== void 0 ? _a : 160,
                        easing: easingOutQuad,
                    });
                }
                break;
            case "fade":
                opacity.value = withTiming(1, {
                    duration: (_b = fadeCfg.releaseDurationMs) !== null && _b !== void 0 ? _b : 180,
                    easing: easingOutQuad,
                });
                break;
            case "press": {
                const d = (_c = pressCfg.releaseDurationMs) !== null && _c !== void 0 ? _c : 160;
                opacity.value = withTiming(1, {
                    duration: d,
                    easing: easingOutQuad,
                });
                translateY.value = withTiming(0, {
                    duration: d,
                    easing: easingOutQuad,
                });
                break;
            }
            case "bounce":
                scale.value = withSpring(1, rnSpringFromTheme((_d = bounceCfg.releaseTension) !== null && _d !== void 0 ? _d : 200, (_e = bounceCfg.releaseFriction) !== null && _e !== void 0 ? _e : 5));
                break;
        }
    };
    const pressableChrome = {
        alignSelf: fullWidth ? "stretch" : "flex-start",
        overflow: "hidden",
        borderRadius,
        opacity: isDisabled ? 0.9 : 1,
    };
    const content = loading ? (React.createElement(ActivityIndicator, { color: textColor })) : (React.createElement(React.Fragment, null,
        leftIcon ? (React.createElement(View, { style: { marginRight: children ? iconLabelGap : 0 } }, withButtonIconColor(leftIcon, textColor))) : null,
        !iconOnly && children ? (React.createElement(Typography, { variant: labelVariant, style: [{ color: textColor }, labelTextStyle] }, children)) : null,
        rightIcon ? (React.createElement(View, { style: { marginLeft: children ? iconLabelGap : 0 } }, withButtonIconColor(rightIcon, textColor))) : null));
    return (React.createElement(Pressable, { ref: ref, ...rest, disabled: isDisabled, android_ripple: androidRipple, accessibilityState: {
            ...accessibilityState,
            disabled: isDisabled,
            busy: Boolean(loading),
        }, onPressIn: (e) => {
            runPressIn();
            onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(e);
        }, onPressOut: (e) => {
            runPressOut();
            onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(e);
        }, style: [pressableChrome, style] },
        React.createElement(Animated.View, { style: [baseStyle, animatedStyle] }, content)));
});
//# sourceMappingURL=Button.js.map