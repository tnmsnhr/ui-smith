import React, { forwardRef } from "react";
import { Text, type TextStyle } from "react-native";

import { useTheme } from "../../theme/DesignSystemProvider";
import type { TypographyProps } from "../../types/typographyProps";

export const Typography = forwardRef<React.ElementRef<typeof Text>, TypographyProps>(
  function Typography(
  { variant, color, style, ...rest },
  ref
) {
  const theme = useTheme();
  const resolvedVariant = variant ?? theme.components.Typography.defaultProps?.variant ?? "body";
  const preset = theme.core.typography.presets[resolvedVariant];
  const semanticColor = color ? theme.semantic[color] : undefined;

  const resolvedStyle: TextStyle = {
    ...(preset as TextStyle),
    ...(semanticColor ? { color: semanticColor } : {}),
  };

    return <Text ref={ref} {...rest} style={[resolvedStyle, style]} />;
  }
);
