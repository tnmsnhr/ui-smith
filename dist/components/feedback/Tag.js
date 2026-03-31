import React from 'react';
import { View, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Tag = ({ label }) => {
    const { core, semantic } = useTheme();
    const container = {
        borderRadius: core.radii.pill,
        paddingHorizontal: core.spacing.sm,
        paddingVertical: core.spacing.xs / 2,
        backgroundColor: semantic['background.subtle'],
        alignSelf: 'flex-start'
    };
    const text = {
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.xs,
        color: semantic['text.secondary']
    };
    return (React.createElement(View, { style: container },
        React.createElement(RNText, { style: text }, label)));
};
//# sourceMappingURL=Tag.js.map