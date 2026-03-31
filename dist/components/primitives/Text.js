import React from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Text = ({ variant = 'body', style, color, children, ...rest }) => {
    var _a, _b;
    const { core, semantic } = useTheme();
    const base = {
        fontFamily: core.typography.fontFamily.body,
        fontSize: core.typography.fontSize.md,
        lineHeight: core.typography.lineHeight.md,
        fontWeight: core.typography.fontWeight.regular,
        color: semantic['text.primary']
    };
    if (variant === 'caption') {
        base.fontSize = core.typography.fontSize.xs;
        base.lineHeight = core.typography.lineHeight.xs;
        base.color = semantic['text.secondary'];
    }
    else if (variant === 'label') {
        base.fontSize = core.typography.fontSize.sm;
        base.lineHeight = core.typography.lineHeight.sm;
        base.fontWeight = core.typography.fontWeight.medium;
    }
    else if (variant === 'heading') {
        base.fontFamily = core.typography.fontFamily.heading;
        base.fontSize = core.typography.fontSize.xl;
        base.lineHeight = core.typography.lineHeight.xl;
        base.fontWeight = core.typography.fontWeight.semiBold;
    }
    if (color) {
        base.color = (_b = (_a = semantic[color]) !== null && _a !== void 0 ? _a : core.colors[color]) !== null && _b !== void 0 ? _b : color;
    }
    const combinedStyle = Array.isArray(style)
        ? [base, ...style]
        : [base, style].filter(Boolean);
    return (React.createElement(RNText, { ...rest, style: combinedStyle }, children));
};
//# sourceMappingURL=Text.js.map