import React from 'react';
import { View, Text as RNText, Pressable, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface AppBarProps {
  title?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({
  title,
  leftAction,
  rightAction,
  onLeftPress,
  onRightPress
}) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    height: 56,
    paddingHorizontal: core.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: semantic['background.surface'],
    borderBottomWidth: 1,
    borderBottomColor: semantic['border.muted']
  };

  const titleStyle: TextStyle = {
    fontFamily: core.typography.fontFamily.heading,
    fontSize: core.typography.fontSize.lg,
    color: semantic['text.primary']
  };

  return (
    <View style={container}>
      <Pressable onPress={onLeftPress} style={{ paddingRight: core.spacing.sm }}>
        {leftAction}
      </Pressable>
      <RNText style={titleStyle} numberOfLines={1}>
        {title}
      </RNText>
      <Pressable onPress={onRightPress} style={{ paddingLeft: core.spacing.sm }}>
        {rightAction}
      </Pressable>
    </View>
  );
};

