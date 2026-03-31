import React from 'react';
import { Pressable, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Switch = ({ value, onValueChange, disabled }) => {
    const { core, semantic } = useTheme();
    const track = {
        width: 44,
        height: 24,
        borderRadius: 12,
        backgroundColor: value ? semantic['intent.primary'] : semantic['background.subtle'],
        padding: 2,
        opacity: disabled ? core.opacity.disabled : 1
    };
    const thumb = {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: semantic['background.body'],
        transform: [{ translateX: value ? 20 : 0 }]
    };
    const toggle = () => {
        if (disabled)
            return;
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(!value);
    };
    return (React.createElement(Pressable, { onPress: toggle, disabled: disabled },
        React.createElement(View, { style: track },
            React.createElement(View, { style: thumb }))));
};
//# sourceMappingURL=Switch.js.map