import React from 'react';
import { View, Text as RNText, Pressable, ScrollView } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Select = ({ value, onChange, options, placeholder }) => {
    var _a;
    const { core, semantic } = useTheme();
    const [open, setOpen] = React.useState(false);
    const selectedLabel = (_a = options.find((o) => o.value === value)) === null || _a === void 0 ? void 0 : _a.label;
    return (React.createElement(React.Fragment, null,
        React.createElement(Pressable, { onPress: () => setOpen(true), style: {
                height: 44,
                borderRadius: core.radii.md,
                borderWidth: 1,
                borderColor: semantic['border.default'],
                backgroundColor: semantic['background.surface'],
                paddingHorizontal: core.spacing.sm,
                justifyContent: 'center'
            } },
            React.createElement(RNText, { style: {
                    fontFamily: core.typography.fontFamily.body,
                    fontSize: core.typography.fontSize.md,
                    color: selectedLabel ? semantic['text.primary'] : semantic['text.muted']
                } }, selectedLabel || placeholder || 'Select')),
        open ? (React.createElement(Pressable, { style: {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: `rgba(0,0,0,${core.opacity.backdrop})`,
                justifyContent: 'center',
                alignItems: 'center',
                padding: core.spacing.lg
            }, onPress: () => setOpen(false) },
            React.createElement(View, { style: {
                    width: '100%',
                    maxHeight: '60%',
                    backgroundColor: semantic['background.surface'],
                    borderRadius: core.radii.lg
                }, onStartShouldSetResponder: () => true },
                React.createElement(ScrollView, null, options.map((option) => (React.createElement(Pressable, { key: option.value, onPress: () => {
                        onChange === null || onChange === void 0 ? void 0 : onChange(option.value);
                        setOpen(false);
                    }, style: {
                        paddingHorizontal: core.spacing.md,
                        paddingVertical: core.spacing.sm
                    } },
                    React.createElement(RNText, { style: {
                            fontFamily: core.typography.fontFamily.body,
                            fontSize: core.typography.fontSize.md,
                            color: semantic['text.primary']
                        } }, option.label)))))))) : null));
};
//# sourceMappingURL=Select.js.map