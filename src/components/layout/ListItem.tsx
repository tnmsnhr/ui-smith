import React from 'react';
import { View, Text as RNText, Pressable, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface ListItemProps {
  title: string;
  subtitle?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onPress?: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  left,
  right,
  onPress
}) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: core.spacing.sm,
    paddingHorizontal: core.spacing.md
  };

  const titleStyle: TextStyle = {
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.md,
    color: semantic['text.primary']
  };

  const subtitleStyle: TextStyle = {
    marginTop: 2,
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.sm,
    color: semantic['text.secondary']
  };

  const Content = (
    <View style={container}>
      {left ? <View style={{ marginRight: core.spacing.md }}>{left}</View> : null}
      <View style={{ flex: 1 }}>
        <RNText style={titleStyle}>{title}</RNText>
        {subtitle ? <RNText style={subtitleStyle}>{subtitle}</RNText> : null}
      </View>
      {right ? <View style={{ marginLeft: core.spacing.md }}>{right}</View> : null}
    </View>
  );

  if (onPress) {
    return <Pressable onPress={onPress}>{Content}</Pressable>;
  }

  return Content;
};

