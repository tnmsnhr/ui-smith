import React from 'react';
import { View, Text as RNText, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface TooltipProps {
  visible: boolean;
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ visible, text }) => {
  const { core, semantic } = useTheme();

  if (!visible) return null;

  const container: ViewStyle = {
    position: 'absolute',
    paddingHorizontal: core.spacing.sm,
    paddingVertical: core.spacing.xs,
    borderRadius: core.radii.sm,
    backgroundColor: semantic['background.surface'],
    borderWidth: 1,
    borderColor: semantic['border.muted']
  };

  const label: TextStyle = {
    color: semantic['text.primary'],
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.xs
  };

  return (
    <View style={container}>
      <RNText style={label}>{text}</RNText>
    </View>
  );
};

