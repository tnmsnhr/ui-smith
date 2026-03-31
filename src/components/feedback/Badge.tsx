import React from 'react';
import { Text as RNText, View, type TextStyle, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export type BadgeVariant = 'subtle' | 'solid' | 'outline';
export type BadgeIntent = 'primary' | 'success' | 'danger' | 'warning' | 'neutral';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  intent?: BadgeIntent;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  intent = 'neutral'
}) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    borderRadius: core.radii.pill,
    paddingHorizontal: core.spacing.sm,
    paddingVertical: core.spacing.xs / 2,
    alignSelf: 'flex-start'
  };

  const text: TextStyle = {
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.xs
  };

  const intentColor =
    intent === 'primary'
      ? semantic['intent.primary']
      : intent === 'success'
      ? semantic['intent.success']
      : intent === 'danger'
      ? semantic['intent.danger']
      : intent === 'warning'
      ? semantic['intent.warning']
      : semantic['text.secondary'];

  if (variant === 'solid') {
    container.backgroundColor = intentColor;
    text.color = semantic['background.body'];
  } else if (variant === 'outline') {
    container.borderWidth = 1;
    container.borderColor = intentColor;
    text.color = intentColor;
  } else {
    container.backgroundColor = semantic['background.subtle'];
    text.color = intentColor;
  }

  return (
    <View style={container}>
      <RNText style={text}>{children}</RNText>
    </View>
  );
};

