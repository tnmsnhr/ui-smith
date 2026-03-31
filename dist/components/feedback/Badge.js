import React from 'react';
import { Text as RNText, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Badge = ({ children, variant = 'subtle', intent = 'neutral' }) => {
    const { core, semantic } = useTheme();
    const container = {
        borderRadius: core.radii.pill,
        paddingHorizontal: core.spacing.sm,
        paddingVertical: core.spacing.xs / 2,
        alignSelf: 'flex-start'
    };
    const text = {
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.xs
    };
    const intentColor = intent === 'primary'
        ? semantic['intent.primary']
        : intent === 'success'
            ? semantic['intent.success']
            : intent === 'danger'
                ? semantic['intent.danger']
                : intent === 'warning'
                    ? semantic['intent.warning']
                    : semantic['text.secondary'];
    if (variant === 'solid') {
        container.backgroundColor = intentColor;
        text.color = semantic['background.body'];
    }
    else if (variant === 'outline') {
        container.borderWidth = 1;
        container.borderColor = intentColor;
        text.color = intentColor;
    }
    else {
        container.backgroundColor = semantic['background.subtle'];
        text.color = intentColor;
    }
    return (React.createElement(View, { style: container },
        React.createElement(RNText, { style: text }, children)));
};
//# sourceMappingURL=Badge.js.map