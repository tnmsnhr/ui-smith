import React from 'react';
import { View, Text as RNText, Pressable } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const SegmentedControl = ({ segments, value, onChange }) => {
    const { core, semantic } = useTheme();
    const container = {
        flexDirection: 'row',
        borderRadius: core.radii.pill,
        borderWidth: 1,
        borderColor: semantic['border.muted'],
        overflow: 'hidden'
    };
    return (React.createElement(View, { style: container }, segments.map((segment) => {
        const active = segment.key === value;
        const itemStyle = {
            flex: 1,
            paddingVertical: core.spacing.xs,
            alignItems: 'center',
            backgroundColor: active ? semantic['background.surface'] : 'transparent'
        };
        const textStyle = {
            fontFamily: core.typography.fontFamily.body,
            fontSize: core.typography.fontSize.sm,
            color: active ? semantic['intent.primary'] : semantic['text.secondary']
        };
        return (React.createElement(Pressable, { key: segment.key, onPress: () => onChange(segment.key), style: itemStyle },
            React.createElement(RNText, { style: textStyle }, segment.label)));
    })));
};
//# sourceMappingURL=SegmentedControl.js.map