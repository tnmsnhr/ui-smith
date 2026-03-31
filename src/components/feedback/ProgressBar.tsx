import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface ProgressBarProps {
  value: number; // 0 - 1
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const { core, semantic } = useTheme();

  const clamped = Math.max(0, Math.min(1, value));

  const track: ViewStyle = {
    height: 4,
    borderRadius: core.radii.full,
    backgroundColor: semantic['background.subtle'],
    overflow: 'hidden'
  };

  const bar: ViewStyle = {
    width: `${clamped * 100}%`,
    height: '100%',
    backgroundColor: semantic['intent.primary']
  };

  return (
    <View style={track}>
      <View style={bar} />
    </View>
  );
};

