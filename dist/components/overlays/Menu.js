import React from 'react';
import { View, Pressable, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Menu = ({ visible, items, onSelect, onDismiss }) => {
    const { core, semantic } = useTheme();
    if (!visible)
        return null;
    return (React.createElement(Pressable, { style: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: `rgba(0,0,0,${core.opacity.backdrop})`,
            justifyContent: 'center',
            alignItems: 'center'
        }, onPress: onDismiss },
        React.createElement(View, { style: {
                minWidth: 200,
                backgroundColor: semantic['background.surface'],
                borderRadius: core.radii.md,
                paddingVertical: core.spacing.xs
            }, onStartShouldSetResponder: () => true }, items.map((item) => (React.createElement(Pressable, { key: item.key, onPress: () => {
                onSelect(item.key);
                onDismiss();
            }, style: {
                paddingHorizontal: core.spacing.md,
                paddingVertical: core.spacing.sm
            } },
            React.createElement(RNText, { style: {
                    color: semantic['text.primary'],
                    fontFamily: core.typography.fontFamily.body
                } }, item.label)))))));
};
//# sourceMappingURL=Menu.js.map