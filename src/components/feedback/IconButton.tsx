import React from 'react';
import { Pressable, View, type PressableProps, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export type IconButtonVariant = 'ghost' | 'solid' | 'outline';

export interface IconButtonProps extends Omit<PressableProps, 'style'> {
  variant?: IconButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  intent?: 'primary' | 'neutral' | 'danger';
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'ghost',
  size = 'md',
  intent = 'neutral',
  icon,
  disabled,
  ...rest
}) => {
  const { core, semantic } = useTheme();

  const dimension = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;

  const style: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: core.radii.full,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: disabled ? core.opacity.disabled : 1
  };

  const intentColor =
    intent === 'primary'
      ? semantic['intent.primary']
      : intent === 'danger'
      ? semantic['intent.danger']
      : semantic['text.primary'];

  if (variant === 'solid') {
    style.backgroundColor = intentColor;
  } else if (variant === 'outline') {
    style.borderWidth = 1;
    style.borderColor = intentColor;
  } else {
    style.backgroundColor = 'transparent';
  }

  return (
    <Pressable {...rest} disabled={disabled}>
      <View style={style}>{icon}</View>
    </Pressable>
  );
};

