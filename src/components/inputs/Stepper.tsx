import React from 'react';
import { View, Text as RNText, Pressable, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface StepperProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  value,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  onChange
}) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center'
  };

  const buttonStyle: ViewStyle = {
    width: 28,
    height: 28,
    borderRadius: core.radii.sm,
    borderWidth: 1,
    borderColor: semantic['border.muted'],
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textStyle: TextStyle = {
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.md,
    color: semantic['text.primary'],
    marginHorizontal: core.spacing.sm
  };

  const change = (delta: number) => {
    const next = Math.min(max, Math.max(min, value + delta * step));
    onChange?.(next);
  };

  return (
    <View style={container}>
      <Pressable style={buttonStyle} onPress={() => change(-1)}>
        <RNText>-</RNText>
      </Pressable>
      <RNText style={textStyle}>{value}</RNText>
      <Pressable style={buttonStyle} onPress={() => change(1)}>
        <RNText>+</RNText>
      </Pressable>
    </View>
  );
};

