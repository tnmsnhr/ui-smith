import React from 'react';
import { Image, View, Text as RNText, type ImageProps, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface AvatarProps extends Omit<ImageProps, 'source'> {
  uri?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({ uri, label, size = 'md', style, ...rest }) => {
  const { core, semantic } = useTheme();

  const dimension = size === 'sm' ? 32 : size === 'lg' ? 56 : 40;

  const container: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension / 2,
    backgroundColor: semantic['background.subtle'],
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const initials =
    label
      ?.split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase() ?? '';

  const textStyle: TextStyle = {
    color: semantic['text.primary'],
    fontFamily: core.typography.fontFamily.heading,
    fontSize: core.typography.fontSize.md
  };

  if (uri) {
    return (
      <Image
        {...rest}
        style={[container, style] as any}
        source={{ uri }}
        accessibilityLabel={label}
      />
    );
  }

  return (
    <View style={[container, style]}>
      <RNText style={textStyle}>{initials}</RNText>
    </View>
  );
};

