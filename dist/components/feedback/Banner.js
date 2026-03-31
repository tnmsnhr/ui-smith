import React from 'react';
import { View, Text as RNText, Pressable } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Banner = ({ title, message, intent = 'info', actionLabel, onActionPress, onClose }) => {
    const { core, semantic } = useTheme();
    const bg = intent === 'success'
        ? semantic['intent.success']
        : intent === 'danger'
            ? semantic['intent.danger']
            : intent === 'warning'
                ? semantic['intent.warning']
                : semantic['intent.info'];
    const container = {
        padding: core.spacing.md,
        borderRadius: core.radii.md,
        backgroundColor: bg,
        flexDirection: 'row',
        alignItems: 'center'
    };
    const textStyle = {
        color: semantic['background.body'],
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.sm
    };
    return (React.createElement(View, { style: container },
        React.createElement(View, { style: { flex: 1 } },
            title ? (React.createElement(RNText, { style: [
                    textStyle,
                    {
                        fontWeight: core.typography.fontWeight.semiBold,
                        marginBottom: 2
                    }
                ] }, title)) : null,
            React.createElement(RNText, { style: textStyle }, message)),
        actionLabel ? (React.createElement(Pressable, { onPress: onActionPress, style: { marginLeft: core.spacing.sm } },
            React.createElement(RNText, { style: [
                    textStyle,
                    {
                        fontWeight: core.typography.fontWeight.medium,
                        textDecorationLine: 'underline'
                    }
                ] }, actionLabel))) : null,
        onClose ? (React.createElement(Pressable, { onPress: onClose, style: { marginLeft: core.spacing.sm } },
            React.createElement(RNText, { style: textStyle }, "\u2715"))) : null));
};
//# sourceMappingURL=Banner.js.map