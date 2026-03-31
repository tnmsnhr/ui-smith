import React from 'react';
import { Pressable, Text as RNText, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Chip = ({ label, selected, onPress, icon, removable, onRemove }) => {
    const { core, semantic } = useTheme();
    const container = {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: core.radii.pill,
        paddingHorizontal: core.spacing.sm,
        paddingVertical: core.spacing.xs / 2,
        backgroundColor: selected ? semantic['background.subtle'] : 'transparent',
        borderWidth: 1,
        borderColor: selected ? semantic['intent.primary'] : semantic['border.muted']
    };
    const text = {
        color: semantic['text.primary'],
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.sm
    };
    const content = (React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
        icon ? React.createElement(View, { style: { marginRight: core.spacing.xs } }, icon) : null,
        React.createElement(RNText, { style: text }, label),
        removable ? (React.createElement(Pressable, { onPress: onRemove, style: { marginLeft: core.spacing.xs } },
            React.createElement(RNText, { style: { color: semantic['text.muted'] } }, "\u2715"))) : null));
    if (!onPress) {
        return React.createElement(View, { style: container }, content);
    }
    return (React.createElement(Pressable, { onPress: onPress, style: container }, content));
};
//# sourceMappingURL=Chip.js.map