import React from 'react';
import { Pressable, Text as RNText, ViewStyle, TextStyle, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected,
  onPress,
  icon,
  removable,
  onRemove
}) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: core.radii.pill,
    paddingHorizontal: core.spacing.sm,
    paddingVertical: core.spacing.xs / 2,
    backgroundColor: selected ? semantic['background.subtle'] : 'transparent',
    borderWidth: 1,
    borderColor: selected ? semantic['intent.primary'] : semantic['border.muted']
  };

  const text: TextStyle = {
    color: semantic['text.primary'],
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.sm
  };

  const content = (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {icon ? <View style={{ marginRight: core.spacing.xs }}>{icon}</View> : null}
      <RNText style={text}>{label}</RNText>
      {removable ? (
        <Pressable onPress={onRemove} style={{ marginLeft: core.spacing.xs }}>
          <RNText style={{ color: semantic['text.muted'] }}>✕</RNText>
        </Pressable>
      ) : null}
    </View>
  );

  if (!onPress) {
    return <View style={container}>{content}</View>;
  }

  return (
    <Pressable onPress={onPress} style={container}>
      {content}
    </Pressable>
  );
};

