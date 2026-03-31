import React from 'react';
import { Pressable, View, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Checkbox = ({ checked, onChange, label, disabled }) => {
    const { core, semantic } = useTheme();
    const boxStyle = {
        width: 20,
        height: 20,
        borderRadius: core.radii.sm,
        borderWidth: 1,
        borderColor: semantic['border.default'],
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: checked ? semantic['intent.primary'] : semantic['background.body'],
        opacity: disabled ? core.opacity.disabled : 1
    };
    const labelStyle = {
        marginLeft: core.spacing.sm,
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.md,
        color: semantic['text.primary']
    };
    const markStyle = {
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: semantic['background.body']
    };
    const toggle = () => {
        if (disabled)
            return;
        onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    };
    return (React.createElement(Pressable, { onPress: toggle, style: { flexDirection: 'row', alignItems: 'center' }, disabled: disabled },
        React.createElement(View, { style: boxStyle }, checked && React.createElement(View, { style: markStyle })),
        label ? React.createElement(RNText, { style: labelStyle }, label) : null));
};
//# sourceMappingURL=Checkbox.js.map