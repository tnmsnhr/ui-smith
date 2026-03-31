import React from 'react';
import { View, Text as RNText, Pressable, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface SegmentItem {
  key: string;
  label: string;
}

export interface SegmentedControlProps {
  segments: SegmentItem[];
  value: string;
  onChange: (key: string) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  segments,
  value,
  onChange
}) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    flexDirection: 'row',
    borderRadius: core.radii.pill,
    borderWidth: 1,
    borderColor: semantic['border.muted'],
    overflow: 'hidden'
  };

  return (
    <View style={container}>
      {segments.map((segment) => {
        const active = segment.key === value;
        const itemStyle: ViewStyle = {
          flex: 1,
          paddingVertical: core.spacing.xs,
          alignItems: 'center',
          backgroundColor: active ? semantic['background.surface'] : 'transparent'
        };
        const textStyle: TextStyle = {
          fontFamily: core.typography.fontFamily.body,
          fontSize: core.typography.fontSize.sm,
          color: active ? semantic['intent.primary'] : semantic['text.secondary']
        };
        return (
          <Pressable key={segment.key} onPress={() => onChange(segment.key)} style={itemStyle}>
            <RNText style={textStyle}>{segment.label}</RNText>
          </Pressable>
        );
      })}
    </View>
  );
};

