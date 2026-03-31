import React from 'react';
import { Pressable, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const IconButton = ({ variant = 'ghost', size = 'md', intent = 'neutral', icon, disabled, ...rest }) => {
    const { core, semantic } = useTheme();
    const dimension = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
    const style = {
        width: dimension,
        height: dimension,
        borderRadius: core.radii.full,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: disabled ? core.opacity.disabled : 1
    };
    const intentColor = intent === 'primary'
        ? semantic['intent.primary']
        : intent === 'danger'
            ? semantic['intent.danger']
            : semantic['text.primary'];
    if (variant === 'solid') {
        style.backgroundColor = intentColor;
    }
    else if (variant === 'outline') {
        style.borderWidth = 1;
        style.borderColor = intentColor;
    }
    else {
        style.backgroundColor = 'transparent';
    }
    return (React.createElement(Pressable, { ...rest, disabled: disabled },
        React.createElement(View, { style: style }, icon)));
};
//# sourceMappingURL=IconButton.js.map