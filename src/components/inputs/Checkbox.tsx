import React from 'react';
import { Pressable, View, Text as RNText, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, disabled }) => {
  const { core, semantic } = useTheme();

  const boxStyle: ViewStyle = {
    width: 20,
    height: 20,
    borderRadius: core.radii.sm,
    borderWidth: 1,
    borderColor: semantic['border.default'],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: checked ? semantic['intent.primary'] : semantic['background.body'],
    opacity: disabled ? core.opacity.disabled : 1
  };

  const labelStyle: TextStyle = {
    marginLeft: core.spacing.sm,
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.md,
    color: semantic['text.primary']
  };

  const markStyle: ViewStyle = {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: semantic['background.body']
  };

  const toggle = () => {
    if (disabled) return;
    onChange?.(!checked);
  };

  return (
    <Pressable
      onPress={toggle}
      style={{ flexDirection: 'row', alignItems: 'center' }}
      disabled={disabled}
    >
      <View style={boxStyle}>{checked && <View style={markStyle} />}</View>
      {label ? <RNText style={labelStyle}>{label}</RNText> : null}
    </Pressable>
  );
};

