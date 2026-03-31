import React from 'react';
import { View, type ViewProps } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface SurfaceProps extends ViewProps {
  level?: 0 | 1 | 2 | 3;
}

export const Surface: React.FC<SurfaceProps> = ({ level = 0, style, children, ...rest }) => {
  const { core, semantic } = useTheme();

  const elevationMap = {
    0: core.shadows.level0.elevation,
    1: core.shadows.level1.elevation,
    2: core.shadows.level2.elevation,
    3: core.shadows.level3.elevation
  } as const;

  const base = {
    backgroundColor: semantic['background.surface'],
    borderRadius: core.radii.md,
    elevation: elevationMap[level]
  };

  const merged = Array.isArray(style) ? [base, ...style] : [base, style].filter(Boolean);

  return (
    <View {...rest} style={merged}>
      {children}
    </View>
  );
};

