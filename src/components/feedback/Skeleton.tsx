import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface SkeletonProps {
  width?: number | string;
  height?: number;
  radius?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = 16, radius }) => {
  const { core, semantic } = useTheme();

  const style: ViewStyle = {
    width: width as any,
    height,
    borderRadius: radius ?? core.radii.sm,
    backgroundColor: semantic['background.subtle'],
  };

  // Static skeleton (no animated shimmer) to avoid runtime issues
  return <View style={style} />;
};

