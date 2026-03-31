import React from 'react';
import { Pressable, View, Text as RNText, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface RadioProps {
  selected: boolean;
  onChange?: (selected: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({ selected, onChange, label, disabled }) => {
  const { core, semantic } = useTheme();

  const outer: ViewStyle = {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: semantic['border.default'],
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? core.opacity.disabled : 1
  };

  const inner: ViewStyle = {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: semantic['intent.primary']
  };

  const labelStyle: TextStyle = {
    marginLeft: core.spacing.sm,
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.md,
    color: semantic['text.primary']
  };

  const toggle = () => {
    if (disabled) return;
    onChange?.(!selected);
  };

  return (
    <Pressable
      onPress={toggle}
      style={{ flexDirection: 'row', alignItems: 'center' }}
      disabled={disabled}
    >
      <View style={outer}>{selected && <View style={inner} />}</View>
      {label ? <RNText style={labelStyle}>{label}</RNText> : null}
    </Pressable>
  );
};

