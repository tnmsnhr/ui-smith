import React, { useMemo } from 'react';
import { ActivityIndicator, Pressable, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Button = ({ variant = 'solid', size = 'md', intent = 'primary', disabled, loading, onPress, leftIcon, rightIcon, children, ...rest }) => {
    const { semantic, core } = useTheme();
    const handlePress = (event) => {
        if (disabled || loading)
            return;
        onPress === null || onPress === void 0 ? void 0 : onPress(event);
    };
    const [containerStyle, textStyle] = useMemo(() => {
        const baseContainer = {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: core.radii.md,
            paddingHorizontal: core.spacing.lg,
            paddingVertical: core.spacing.sm
        };
        const baseText = {
            fontFamily: core.typography.fontFamily.body,
            fontSize: core.typography.fontSize.md,
            fontWeight: core.typography.fontWeight.medium
        };
        if (size === 'sm') {
            baseContainer.paddingHorizontal = core.spacing.md;
            baseContainer.paddingVertical = core.spacing.xs;
            baseText.fontSize = core.typography.fontSize.sm;
        }
        else if (size === 'lg') {
            baseContainer.paddingHorizontal = core.spacing.xl;
            baseContainer.paddingVertical = core.spacing.md;
            baseText.fontSize = core.typography.fontSize.lg;
        }
        const intentColor = intent === 'primary'
            ? semantic['intent.primary']
            : intent === 'success'
                ? semantic['intent.success']
                : intent === 'danger'
                    ? semantic['intent.danger']
                    : intent === 'warning'
                        ? semantic['intent.warning']
                        : semantic['text.primary'];
        if (variant === 'solid') {
            baseContainer.backgroundColor = intentColor;
            baseText.color = semantic['background.body'];
        }
        else if (variant === 'outline') {
            baseContainer.borderWidth = 1;
            baseContainer.borderColor = intentColor;
            baseText.color = intentColor;
            baseContainer.backgroundColor = 'transparent';
        }
        else if (variant === 'ghost') {
            baseContainer.backgroundColor = 'transparent';
            baseText.color = intentColor;
        }
        if (disabled || loading) {
            baseContainer.opacity = core.opacity.disabled;
        }
        return [baseContainer, baseText];
    }, [core, semantic, variant, size, intent, disabled, loading]);
    return (React.createElement(Pressable, { ...rest, onPress: handlePress, disabled: disabled || loading, style: containerStyle },
        loading && (React.createElement(ActivityIndicator, { color: textStyle.color || semantic['background.body'], style: { marginRight: leftIcon || children ? core.spacing.xs : 0 } })),
        !loading && leftIcon ? (React.createElement(RNText, { style: { marginRight: children ? core.spacing.xs : 0 } }, leftIcon)) : null,
        typeof children === 'string' ? (React.createElement(RNText, { style: textStyle }, children)) : (children),
        !loading && rightIcon ? (React.createElement(RNText, { style: { marginLeft: children ? core.spacing.xs : 0 } }, rightIcon)) : null));
};
//# sourceMappingURL=Button.js.map