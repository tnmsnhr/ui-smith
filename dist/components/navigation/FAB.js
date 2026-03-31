import React from 'react';
import { Pressable, View, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const FAB = ({ icon, label, onPress }) => {
    const { core, semantic } = useTheme();
    const container = {
        position: 'absolute',
        right: core.spacing.lg,
        bottom: core.spacing.lg,
        backgroundColor: semantic['intent.primary'],
        borderRadius: core.radii.full,
        paddingHorizontal: label ? core.spacing.md : core.spacing.sm,
        paddingVertical: core.spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: core.shadows.level3.elevation
    };
    const labelStyle = {
        marginLeft: icon ? core.spacing.xs : 0,
        color: semantic['background.body'],
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.sm,
        fontWeight: core.typography.fontWeight.medium
    };
    return (React.createElement(Pressable, { onPress: onPress },
        React.createElement(View, { style: container },
            icon,
            label ? React.createElement(RNText, { style: labelStyle }, label) : null)));
};
//# sourceMappingURL=FAB.js.map