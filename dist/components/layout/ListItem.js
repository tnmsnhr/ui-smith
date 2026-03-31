import React from 'react';
import { View, Text as RNText, Pressable } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const ListItem = ({ title, subtitle, left, right, onPress }) => {
    const { core, semantic } = useTheme();
    const container = {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: core.spacing.sm,
        paddingHorizontal: core.spacing.md
    };
    const titleStyle = {
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.md,
        color: semantic['text.primary']
    };
    const subtitleStyle = {
        marginTop: 2,
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.sm,
        color: semantic['text.secondary']
    };
    const Content = (React.createElement(View, { style: container },
        left ? React.createElement(View, { style: { marginRight: core.spacing.md } }, left) : null,
        React.createElement(View, { style: { flex: 1 } },
            React.createElement(RNText, { style: titleStyle }, title),
            subtitle ? React.createElement(RNText, { style: subtitleStyle }, subtitle) : null),
        right ? React.createElement(View, { style: { marginLeft: core.spacing.md } }, right) : null));
    if (onPress) {
        return React.createElement(Pressable, { onPress: onPress }, Content);
    }
    return Content;
};
//# sourceMappingURL=ListItem.js.map