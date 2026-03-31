import React from 'react';
import { View, Text as RNText, Pressable, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface TabItem {
  key: string;
  label: string;
}

export interface TabsProps {
  tabs: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeKey, onChange }) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: semantic['border.muted']
  };

  return (
    <View style={container}>
      {tabs.map((tab) => {
        const active = tab.key === activeKey;
        const textStyle: TextStyle = {
          paddingVertical: core.spacing.sm,
          paddingHorizontal: core.spacing.md,
          fontFamily: core.typography.fontFamily.body,
          fontSize: core.typography.fontSize.md,
          color: active ? semantic['intent.primary'] : semantic['text.secondary'],
          borderBottomWidth: active ? 2 : 0,
          borderBottomColor: active ? semantic['intent.primary'] : 'transparent'
        };
        return (
          <Pressable key={tab.key} onPress={() => onChange(tab.key)}>
            <RNText style={textStyle}>{tab.label}</RNText>
          </Pressable>
        );
      })}
    </View>
  );
};

