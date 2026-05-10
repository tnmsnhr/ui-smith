import React, { forwardRef } from "react";
import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  type TextStyle,
  View,
  type ViewStyle,
} from "react-native";

import { motionPresets } from "../../generated/motion.presets";
import { Typography } from "../typography/Typography";
import type { ButtonProps } from "../../types/buttonProps";
import type { ButtonSize } from "../../types/literals";
import { useTheme } from "../../theme/DesignSystemProvider";

const FALLBACK_SIZE_METRICS: Record<ButtonSize, { minHeight: number; fontSize: number; iconSize: number }> = {
  xs: { minHeight: 32, fontSize: 12, iconSize: 14 },
  s: { minHeight: 36, fontSize: 14, iconSize: 16 },
  md: { minHeight: 40, fontSize: 14, iconSize: 16 },
  lg: { minHeight: 48, fontSize: 16, iconSize: 16 },
  xl: { minHeight: 52, fontSize: 16, iconSize: 20 },
};

export const Button = forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(function Button(
  {
    variant,
    size,
    intent,
    disabled,
    loading,
    fullWidth,
    leftIcon,
    rightIcon,
    iconOnly,
    children,
    style,
    accessibilityState,
    ...rest
  },
  ref
) {
  const theme = useTheme();
  const resolvedVariant = variant ?? theme.components.Button.defaultProps?.variant ?? "solid";
  const resolvedSize = size ?? theme.components.Button.defaultProps?.size ?? "md";
  const resolvedIntent = intent ?? theme.components.Button.defaultProps?.intent ?? "primary";
  const isDisabled = Boolean(disabled || loading);
  const intentRole = `intent.${resolvedIntent}` as const;
  const intentColor = theme.semantic[intentRole];
  const disabledTextColor = theme.semantic["text.disabled"];
  const disabledBgColor = theme.semantic["background.disabled"];
  const disabledBorderColor = theme.semantic["border.muted"];
  const bgBody = theme.semantic["background.body"];
  const pressScale = motionPresets.Button.press?.scale ?? 1;

  const sizeMetrics =
    theme.components.Button.sizeMetrics?.[resolvedSize] ?? FALLBACK_SIZE_METRICS[resolvedSize];
  const iconLabelGap = theme.core.spacing[theme.components.Button.iconLabelGap ?? "xs"] ?? 4;
  const labelVariant =
    theme.components.Button.labelPresetBySize?.[resolvedSize] ??
    theme.components.Button.labelPreset ??
    "button";

  const variantStyles: Record<string, { backgroundColor: string; borderColor: string; textColor: string }> = {
    solid: { backgroundColor: intentColor, borderColor: intentColor, textColor: bgBody },
    outline: { backgroundColor: "transparent", borderColor: intentColor, textColor: intentColor },
    ghost: { backgroundColor: "transparent", borderColor: "transparent", textColor: intentColor },
    link: { backgroundColor: "transparent", borderColor: "transparent", textColor: intentColor },
  };

  const active = variantStyles[resolvedVariant] ?? variantStyles.solid;
  const textColor = isDisabled ? disabledTextColor : active.textColor;

  const baseStyle: ViewStyle = {
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

  const labelTextStyle: TextStyle | undefined =
    resolvedVariant === "link" ? { textDecorationLine: "underline" } : undefined;

  return (
    <Pressable
      ref={ref}
      {...(rest as PressableProps)}
      disabled={isDisabled}
      accessibilityState={{ ...accessibilityState, disabled: isDisabled, busy: Boolean(loading) }}
      style={({ pressed }) => [
        baseStyle,
        pressed && !isDisabled ? ({ transform: [{ scale: pressScale }] } as ViewStyle) : null,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <>
          {leftIcon ? <View style={{ marginRight: children ? iconLabelGap : 0 }}>{leftIcon}</View> : null}
          {!iconOnly && children ? (
            <Typography variant={labelVariant} style={[{ color: textColor }, labelTextStyle]}>
              {children}
            </Typography>
          ) : null}
          {rightIcon ? <View style={{ marginLeft: children ? iconLabelGap : 0 }}>{rightIcon}</View> : null}
        </>
      )}
    </Pressable>
  );
});
