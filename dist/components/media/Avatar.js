import React from 'react';
import { Image, View, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Avatar = ({ uri, label, size = 'md', style, ...rest }) => {
    var _a;
    const { core, semantic } = useTheme();
    const dimension = size === 'sm' ? 32 : size === 'lg' ? 56 : 40;
    const container = {
        width: dimension,
        height: dimension,
        borderRadius: dimension / 2,
        backgroundColor: semantic['background.subtle'],
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    };
    const initials = (_a = label === null || label === void 0 ? void 0 : label.split(' ').map((part) => part[0]).join('').toUpperCase()) !== null && _a !== void 0 ? _a : '';
    const textStyle = {
        color: semantic['text.primary'],
        fontFamily: core.typography.fontFamily.heading,
        fontSize: core.typography.fontSize.md
    };
    if (uri) {
        return (React.createElement(Image, { ...rest, style: [container, style], source: { uri }, accessibilityLabel: label }));
    }
    return (React.createElement(View, { style: [container, style] },
        React.createElement(RNText, { style: textStyle }, initials)));
};
//# sourceMappingURL=Avatar.js.map