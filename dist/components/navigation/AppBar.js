import React from 'react';
import { View, Text as RNText, Pressable } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const AppBar = ({ title, leftAction, rightAction, onLeftPress, onRightPress }) => {
    const { core, semantic } = useTheme();
    const container = {
        height: 56,
        paddingHorizontal: core.spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: semantic['background.surface'],
        borderBottomWidth: 1,
        borderBottomColor: semantic['border.muted']
    };
    const titleStyle = {
        fontFamily: core.typography.fontFamily.heading,
        fontSize: core.typography.fontSize.lg,
        color: semantic['text.primary']
    };
    return (React.createElement(View, { style: container },
        React.createElement(Pressable, { onPress: onLeftPress, style: { paddingRight: core.spacing.sm } }, leftAction),
        React.createElement(RNText, { style: titleStyle, numberOfLines: 1 }, title),
        React.createElement(Pressable, { onPress: onRightPress, style: { paddingLeft: core.spacing.sm } }, rightAction)));
};
//# sourceMappingURL=AppBar.js.map