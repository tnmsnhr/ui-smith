import React from 'react';
import type { ViewProps, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import type { CoreTokens } from '../../tokens/coreTokens';

type SpacingKey = keyof CoreTokens['spacing'];
type RadiusKey = keyof CoreTokens['radii'];

export interface BoxProps extends ViewProps {
  padding?: SpacingKey;
  paddingHorizontal?: SpacingKey;
  paddingVertical?: SpacingKey;
  margin?: SpacingKey;
  marginHorizontal?: SpacingKey;
  marginVertical?: SpacingKey;
  bg?: keyof CoreTokens['colors'] | string;
  radius?: RadiusKey;
  style?: ViewStyle | ViewStyle[];
}

export const Box: React.FC<BoxProps> = ({ style, children, ...rest }) => {
  const { core, semantic } = useTheme();
  const spacing = core.spacing;
  const radii = core.radii;

  const {
    padding,
    paddingHorizontal,
    paddingVertical,
    margin,
    marginHorizontal,
    marginVertical,
    bg,
    radius,
    ...viewProps
  } = rest;

  const resolvedStyle: ViewStyle = {
    padding: padding != null ? spacing[padding] : undefined,
    paddingHorizontal:
      paddingHorizontal != null ? spacing[paddingHorizontal] : undefined,
    paddingVertical: paddingVertical != null ? spacing[paddingVertical] : undefined,
    margin: margin != null ? spacing[margin] : undefined,
    marginHorizontal: marginHorizontal != null ? spacing[marginHorizontal] : undefined,
    marginVertical: marginVertical != null ? spacing[marginVertical] : undefined,
    borderRadius: radius != null ? radii[radius] : undefined,
    backgroundColor:
      bg && bg in core.colors
        ? (core.colors as any)[bg]
        : bg && bg in semantic
        ? (semantic as any)[bg]
        : (bg as string | undefined)
  };

  const combinedStyle = Array.isArray(style)
    ? [resolvedStyle, ...style]
    : [resolvedStyle, style].filter(Boolean);

  return (
    <View {...viewProps} style={combinedStyle as ViewStyle[]}>
      {children}
    </View>
  );
};

