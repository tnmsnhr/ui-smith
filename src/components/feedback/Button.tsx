import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  type ReactElement,
  type ReactNode,
} from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  type PressableProps,
  Text,
  type StyleProp,
  type TextStyle,
  View,
  type ViewStyle,
} from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Typography } from "../typography/Typography";
import type { ButtonProps } from "../../types/buttonProps";
import type { ButtonPressEffect, ButtonSize } from "../../types/literals";
import { defaultButtonSizeMetrics } from "../../config/defaultConfig";
import { useTheme } from "../../theme/DesignSystemProvider";

/** Merge button foreground color into Text-based icons (Typography still defaults to `text.primary`). */
function withButtonIconColor(icon: ReactNode, textColor: string): ReactNode {
  if (!isValidElement(icon)) return icon;
  const Component = icon.type;
  if (Component !== Typography && Component !== Text) return icon;
  const typed = icon as ReactElement<{ style?: StyleProp<TextStyle> }>;
  const props = typed.props;
  const style: StyleProp<TextStyle> = [props.style, { color: textColor }];
  return cloneElement(typed, { style });
}

export const Button = forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(function Button(
  {
    variant,
    size,
    intent,
    pressEffect: pressEffectProp,
    disabled,
    loading,
    fullWidth,
    leftIcon,
    rightIcon,
    iconOnly,
    children,
    style,
    accessibilityState,
    onPressIn,
    onPressOut,
    ...rest
  },
  ref,
) {
  const theme = useTheme();
  const resolvedVariant =
    variant ?? theme.components.Button.defaultProps?.variant ?? "solid";
  const resolvedSize =
    size ?? theme.components.Button.defaultProps?.size ?? "md";
  const resolvedIntent =
    intent ?? theme.components.Button.defaultProps?.intent ?? "primary";
  const pressEffect: ButtonPressEffect =
    pressEffectProp ??
    theme.components.Button.defaultProps?.pressEffect ??
    "ripple";
  const motion = theme.components.Button.motion ?? {};
  const rippleCfg = motion.ripple ?? {};
  const fadeCfg = motion.fade ?? {};
  const pressCfg = motion.press ?? {};
  const bounceCfg = motion.bounce ?? {};

  const isDisabled = Boolean(disabled || loading);
  const intentRole = `intent.${resolvedIntent}` as const;
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

  const rnSpringFromTheme = (tension: number, friction: number) => ({
    stiffness: tension,
    damping: friction * 3.5,
    mass: 1,
  });

  const sizeMetrics =
    theme.components.Button.sizeMetrics?.[resolvedSize] ??
    defaultButtonSizeMetrics[resolvedSize];
  const iconLabelGap =
    theme.core.spacing[theme.components.Button.iconLabelGap ?? "xs"] ?? 4;
  const labelVariant =
    theme.components.Button.labelPresetBySize?.[resolvedSize] ??
    theme.components.Button.labelPreset ??
    "button";

  const variantStyles: Record<
    string,
    { backgroundColor: string; borderColor: string; textColor: string }
  > = {
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

  const active = variantStyles[resolvedVariant] ?? variantStyles.solid;
  const textColor = isDisabled ? disabledTextColor : active.textColor;

  const borderRadius = theme.core.radii.md;

  const baseStyle: ViewStyle = {
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

  const labelTextStyle: TextStyle | undefined =
    resolvedVariant === "link"
      ? { textDecorationLine: "underline" }
      : undefined;

  const androidRippleColor =
    rippleCfg.androidRippleColor ??
    (resolvedVariant === "solid"
      ? "rgba(255,255,255,0.35)"
      : "rgba(0,0,0,0.12)");

  const androidRipple =
    pressEffect === "ripple" && Platform.OS === "android"
      ? { color: androidRippleColor, borderless: false }
      : null;

  const runPressIn = () => {
    if (isDisabled) return;
    switch (pressEffect) {
      case "ripple":
        if (Platform.OS !== "android") {
          opacity.value = withTiming(rippleCfg.iosFallbackToOpacity ?? 0.92, {
            duration: rippleCfg.iosFallbackDurationMs ?? 90,
            easing: easingOutQuad,
          });
        }
        break;
      case "fade":
        opacity.value = withTiming(fadeCfg.toOpacity ?? 0.72, {
          duration: fadeCfg.durationMs ?? 140,
          easing: easingOutQuad,
        });
        break;
      case "press": {
        const d = pressCfg.durationMs ?? 100;
        opacity.value = withTiming(pressCfg.toOpacity ?? 0.88, {
          duration: d,
          easing: easingOutQuad,
        });
        translateY.value = withTiming(pressCfg.translateY ?? 1, {
          duration: d,
          easing: easingOutQuad,
        });
        break;
      }
      case "bounce":
        scale.value = withSpring(
          bounceCfg.pressedScale ?? 0.94,
          rnSpringFromTheme(
            bounceCfg.pressTension ?? 280,
            bounceCfg.pressFriction ?? 6,
          ),
        );
        break;
    }
  };

  const runPressOut = () => {
    if (isDisabled) return;
    switch (pressEffect) {
      case "ripple":
        if (Platform.OS !== "android") {
          opacity.value = withTiming(1, {
            duration: rippleCfg.iosReleaseDurationMs ?? 160,
            easing: easingOutQuad,
          });
        }
        break;
      case "fade":
        opacity.value = withTiming(1, {
          duration: fadeCfg.releaseDurationMs ?? 180,
          easing: easingOutQuad,
        });
        break;
      case "press": {
        const d = pressCfg.releaseDurationMs ?? 160;
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
        scale.value = withSpring(
          1,
          rnSpringFromTheme(
            bounceCfg.releaseTension ?? 200,
            bounceCfg.releaseFriction ?? 5,
          ),
        );
        break;
    }
  };

  const pressableChrome: ViewStyle = {
    alignSelf: fullWidth ? "stretch" : "flex-start",
    overflow: "hidden",
    borderRadius,
    opacity: isDisabled ? 0.9 : 1,
  };

  const content = loading ? (
    <ActivityIndicator color={textColor} />
  ) : (
    <>
      {leftIcon ? (
        <View style={{ marginRight: children ? iconLabelGap : 0 }}>
          {withButtonIconColor(leftIcon, textColor)}
        </View>
      ) : null}
      {!iconOnly && children ? (
        <Typography
          variant={labelVariant}
          style={[{ color: textColor }, labelTextStyle]}
        >
          {children}
        </Typography>
      ) : null}
      {rightIcon ? (
        <View style={{ marginLeft: children ? iconLabelGap : 0 }}>
          {withButtonIconColor(rightIcon, textColor)}
        </View>
      ) : null}
    </>
  );

  return (
    <Pressable
      ref={ref}
      {...(rest as PressableProps)}
      disabled={isDisabled}
      android_ripple={androidRipple}
      accessibilityState={{
        ...accessibilityState,
        disabled: isDisabled,
        busy: Boolean(loading),
      }}
      onPressIn={(e) => {
        runPressIn();
        onPressIn?.(e);
      }}
      onPressOut={(e) => {
        runPressOut();
        onPressOut?.(e);
      }}
      style={[pressableChrome, style]}
    >
      <Animated.View style={[baseStyle, animatedStyle]}>
        {content}
      </Animated.View>
    </Pressable>
  );
});
