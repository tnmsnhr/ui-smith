import React from 'react';
import { View, Text as RNText, Pressable } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Stepper = ({ value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY, step = 1, onChange }) => {
    const { core, semantic } = useTheme();
    const container = {
        flexDirection: 'row',
        alignItems: 'center'
    };
    const buttonStyle = {
        width: 28,
        height: 28,
        borderRadius: core.radii.sm,
        borderWidth: 1,
        borderColor: semantic['border.muted'],
        alignItems: 'center',
        justifyContent: 'center'
    };
    const textStyle = {
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.md,
        color: semantic['text.primary'],
        marginHorizontal: core.spacing.sm
    };
    const change = (delta) => {
        const next = Math.min(max, Math.max(min, value + delta * step));
        onChange === null || onChange === void 0 ? void 0 : onChange(next);
    };
    return (React.createElement(View, { style: container },
        React.createElement(Pressable, { style: buttonStyle, onPress: () => change(-1) },
            React.createElement(RNText, null, "-")),
        React.createElement(RNText, { style: textStyle }, value),
        React.createElement(Pressable, { style: buttonStyle, onPress: () => change(1) },
            React.createElement(RNText, null, "+"))));
};
//# sourceMappingURL=Stepper.js.map