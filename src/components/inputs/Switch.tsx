import React from 'react';
import { Pressable, View, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface SwitchProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ value, onValueChange, disabled }) => {
  const { core, semantic } = useTheme();

  const track: ViewStyle = {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: value ? semantic['intent.primary'] : semantic['background.subtle'],
    padding: 2,
    opacity: disabled ? core.opacity.disabled : 1
  };

  const thumb: ViewStyle = {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: semantic['background.body'],
    transform: [{ translateX: value ? 20 : 0 }]
  };

  const toggle = () => {
    if (disabled) return;
    onValueChange?.(!value);
  };

  return (
    <Pressable onPress={toggle} disabled={disabled}>
      <View style={track}>
        <View style={thumb} />
      </View>
    </Pressable>
  );
};

