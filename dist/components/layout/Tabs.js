import React from 'react';
import { View, Text as RNText, Pressable } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Tabs = ({ tabs, activeKey, onChange }) => {
    const { core, semantic } = useTheme();
    const container = {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: semantic['border.muted']
    };
    return (React.createElement(View, { style: container }, tabs.map((tab) => {
        const active = tab.key === activeKey;
        const textStyle = {
            paddingVertical: core.spacing.sm,
            paddingHorizontal: core.spacing.md,
            fontFamily: core.typography.fontFamily.body,
            fontSize: core.typography.fontSize.md,
            color: active ? semantic['intent.primary'] : semantic['text.secondary'],
            borderBottomWidth: active ? 2 : 0,
            borderBottomColor: active ? semantic['intent.primary'] : 'transparent'
        };
        return (React.createElement(Pressable, { key: tab.key, onPress: () => onChange(tab.key) },
            React.createElement(RNText, { style: textStyle }, tab.label)));
    })));
};
//# sourceMappingURL=Tabs.js.map