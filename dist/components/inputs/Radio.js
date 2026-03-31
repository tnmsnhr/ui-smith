import React from 'react';
import { Pressable, View, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Radio = ({ selected, onChange, label, disabled }) => {
    const { core, semantic } = useTheme();
    const outer = {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: semantic['border.default'],
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? core.opacity.disabled : 1
    };
    const inner = {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: semantic['intent.primary']
    };
    const labelStyle = {
        marginLeft: core.spacing.sm,
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.md,
        color: semantic['text.primary']
    };
    const toggle = () => {
        if (disabled)
            return;
        onChange === null || onChange === void 0 ? void 0 : onChange(!selected);
    };
    return (React.createElement(Pressable, { onPress: toggle, style: { flexDirection: 'row', alignItems: 'center' }, disabled: disabled },
        React.createElement(View, { style: outer }, selected && React.createElement(View, { style: inner })),
        label ? React.createElement(RNText, { style: labelStyle }, label) : null));
};
//# sourceMappingURL=Radio.js.map