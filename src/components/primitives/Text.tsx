import React from 'react';
import type { TextProps as RNTextProps, TextStyle } from 'react-native';
import { Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export type TextVariant = 'body' | 'caption' | 'label' | 'heading';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string; // token key or raw color
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  style,
  color,
  children,
  ...rest
}) => {
  const { core, semantic } = useTheme();

  const base: TextStyle = {
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.md,
    lineHeight: core.typography.lineHeight.md,
    fontWeight: core.typography.fontWeight.regular as TextStyle['fontWeight'],
    color: semantic['text.primary']
  };

  if (variant === 'caption') {
    base.fontSize = core.typography.fontSize.xs;
    base.lineHeight = core.typography.lineHeight.xs;
    base.color = semantic['text.secondary'];
  } else if (variant === 'label') {
    base.fontSize = core.typography.fontSize.sm;
    base.lineHeight = core.typography.lineHeight.sm;
    base.fontWeight = core.typography.fontWeight.medium as TextStyle['fontWeight'];
  } else if (variant === 'heading') {
    base.fontFamily = core.typography.fontFamily.heading;
    base.fontSize = core.typography.fontSize.xl;
    base.lineHeight = core.typography.lineHeight.xl;
    base.fontWeight = core.typography.fontWeight.semiBold as TextStyle['fontWeight'];
  }

  if (color) {
    base.color = (semantic as any)[color] ?? (core.colors as any)[color] ?? color;
  }

  const combinedStyle = Array.isArray(style)
    ? [base, ...style]
    : [base, style].filter(Boolean);

  return (
    <RNText {...rest} style={combinedStyle as TextStyle[]}>
      {children}
    </RNText>
  );
};

