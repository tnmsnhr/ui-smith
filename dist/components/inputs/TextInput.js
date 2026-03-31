import React, { useMemo } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const TextInput = ({ size = 'md', error, disabled, style, ...rest }) => {
    const { core, semantic } = useTheme();
    const [containerStyle, inputStyle] = useMemo(() => {
        const heightBySize = {
            sm: 36,
            md: 44,
            lg: 52
        };
        const container = {
            height: heightBySize[size],
            borderRadius: core.radii.md,
            borderWidth: 1,
            borderColor: error ? semantic['intent.danger'] : semantic['border.default'],
            backgroundColor: semantic['background.surface'],
            paddingHorizontal: core.spacing.sm,
            justifyContent: 'center',
            opacity: disabled ? core.opacity.disabled : 1
        };
        const input = {
            fontFamily: core.typography.fontFamily.body,
            fontSize: core.typography.fontSize.md,
            color: semantic['text.primary']
        };
        return [container, input];
    }, [core, semantic, size, error, disabled]);
    const mergedInputStyle = Array.isArray(style)
        ? [inputStyle, ...style]
        : [inputStyle, style].filter(Boolean);
    return (React.createElement(View, { style: containerStyle },
        React.createElement(RNTextInput, { ...rest, editable: !disabled, placeholderTextColor: semantic['text.muted'], style: mergedInputStyle })));
};
//# sourceMappingURL=TextInput.js.map