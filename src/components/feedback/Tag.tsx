import React from 'react';
import { View, Text as RNText, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    borderRadius: core.radii.pill,
    paddingHorizontal: core.spacing.sm,
    paddingVertical: core.spacing.xs / 2,
    backgroundColor: semantic['background.subtle'],
    alignSelf: 'flex-start'
  };

  const text: TextStyle = {
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.xs,
    color: semantic['text.secondary']
  };

  return (
    <View style={container}>
      <RNText style={text}>{label}</RNText>
    </View>
  );
};

