import React from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface DividerProps extends ViewProps {
  vertical?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ vertical = false, style, ...rest }) => {
  const { semantic } = useTheme();

  const baseStyle: ViewStyle = vertical
    ? { width: 1, alignSelf: 'stretch', backgroundColor: semantic['border.muted'] }
    : { height: 1, width: '100%', backgroundColor: semantic['border.muted'] };

  const merged: ViewStyle[] = Array.isArray(style)
    ? [baseStyle, ...(style as ViewStyle[])]
    : [baseStyle, style as ViewStyle].filter(Boolean) as ViewStyle[];

  return <View {...rest} style={merged} />;
};

