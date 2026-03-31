import React from 'react';
import { View, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const EmptyState = ({ title, description, icon, action }) => {
    const { core, semantic } = useTheme();
    const container = {
        alignItems: 'center',
        justifyContent: 'center',
        padding: core.spacing.lg
    };
    const titleStyle = {
        marginTop: core.spacing.sm,
        fontFamily: core.typography.fontFamily.heading,
        fontSize: core.typography.fontSize.lg,
        color: semantic['text.primary']
    };
    const descStyle = {
        marginTop: core.spacing.xs,
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.sm,
        color: semantic['text.secondary'],
        textAlign: 'center'
    };
    return (React.createElement(View, { style: container },
        icon,
        title ? React.createElement(RNText, { style: titleStyle }, title) : null,
        description ? React.createElement(RNText, { style: descStyle }, description) : null,
        action ? React.createElement(View, { style: { marginTop: core.spacing.md } }, action) : null));
};
//# sourceMappingURL=EmptyState.js.map