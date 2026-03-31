import React from 'react';
import { Pressable, View, Text as RNText, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface FABProps {
  icon?: React.ReactNode;
  label?: string;
  onPress?: () => void;
}

export const FAB: React.FC<FABProps> = ({ icon, label, onPress }) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    position: 'absolute',
    right: core.spacing.lg,
    bottom: core.spacing.lg,
    backgroundColor: semantic['intent.primary'],
    borderRadius: core.radii.full,
    paddingHorizontal: label ? core.spacing.md : core.spacing.sm,
    paddingVertical: core.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: core.shadows.level3.elevation
  };

  const labelStyle: TextStyle = {
    marginLeft: icon ? core.spacing.xs : 0,
    color: semantic['background.body'],
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.sm,
    fontWeight: core.typography.fontWeight.medium as any
  };

  return (
    <Pressable onPress={onPress}>
      <View style={container}>
        {icon}
        {label ? <RNText style={labelStyle}>{label}</RNText> : null}
      </View>
    </Pressable>
  );
};

