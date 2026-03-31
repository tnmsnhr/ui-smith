import React from 'react';
import { Animated, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Snackbar = ({ visible, message, actionLabel, onActionPress }) => {
    const { core, semantic } = useTheme();
    const translateY = React.useRef(new Animated.Value(visible ? 0 : 24)).current;
    const opacity = React.useRef(new Animated.Value(visible ? 1 : 0)).current;
    React.useEffect(() => {
        const animation = Animated.parallel([
            Animated.spring(translateY, {
                toValue: visible ? 0 : 24,
                damping: 18,
                stiffness: 190,
                mass: 0.85,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: visible ? 1 : 0,
                duration: visible ? 180 : 120,
                useNativeDriver: true
            })
        ]);
        animation.start();
        return () => animation.stop();
    }, [opacity, translateY, visible]);
    return (React.createElement(Animated.View, { style: [
            {
                position: 'absolute',
                left: core.spacing.lg,
                right: core.spacing.lg,
                bottom: core.spacing.lg,
                backgroundColor: semantic['background.surface'],
                borderRadius: core.radii.md,
                paddingHorizontal: core.spacing.md,
                paddingVertical: core.spacing.sm,
                flexDirection: 'row',
                alignItems: 'center',
                elevation: core.shadows.level2.elevation
            },
            {
                transform: [{ translateY }],
                opacity
            }
        ], pointerEvents: visible ? 'auto' : 'none' },
        React.createElement(RNText, { style: {
                flex: 1,
                color: semantic['text.primary'],
                fontFamily: core.typography.fontFamily.body
            } }, message),
        actionLabel ? (React.createElement(RNText, { onPress: onActionPress, style: {
                marginLeft: core.spacing.sm,
                color: semantic['intent.primary'],
                fontWeight: core.typography.fontWeight.medium
            } }, actionLabel)) : null));
};
//# sourceMappingURL=Snackbar.js.map