import React from 'react';
import { View, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Tooltip = ({ visible, text }) => {
    const { core, semantic } = useTheme();
    if (!visible)
        return null;
    const container = {
        position: 'absolute',
        paddingHorizontal: core.spacing.sm,
        paddingVertical: core.spacing.xs,
        borderRadius: core.radii.sm,
        backgroundColor: semantic['background.surface'],
        borderWidth: 1,
        borderColor: semantic['border.muted']
    };
    const label = {
        color: semantic['text.primary'],
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.xs
    };
    return (React.createElement(View, { style: container },
        React.createElement(RNText, { style: label }, text)));
};
//# sourceMappingURL=Tooltip.js.map