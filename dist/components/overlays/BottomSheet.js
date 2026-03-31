import React from 'react';
import { Animated, PanResponder, Pressable, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const BottomSheet = ({ visible, onDismiss, children, snapHeight = 0.5 }) => {
    const { core, semantic } = useTheme();
    const translateY = React.useRef(new Animated.Value(visible ? 0 : 600)).current;
    const opacity = React.useRef(new Animated.Value(visible ? 1 : 0)).current;
    React.useEffect(() => {
        const animation = Animated.parallel([
            Animated.spring(translateY, {
                toValue: visible ? 0 : 600,
                damping: 20,
                stiffness: 190,
                mass: 0.9,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: visible ? 1 : 0,
                duration: 160,
                useNativeDriver: true
            })
        ]);
        animation.start();
        return () => animation.stop();
    }, [opacity, translateY, visible]);
    const panResponder = React.useRef(PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture) => gesture.dy > 5,
        onPanResponderMove: (_, gesture) => {
            if (gesture.dy > 0) {
                translateY.setValue(gesture.dy);
            }
        },
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dy > 80 || gesture.vy > 1.1) {
                onDismiss();
                return;
            }
            Animated.spring(translateY, {
                toValue: 0,
                damping: 22,
                stiffness: 220,
                mass: 0.8,
                useNativeDriver: true
            }).start();
        }
    })).current;
    if (!visible)
        return null;
    return (React.createElement(View, { style: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        } },
        React.createElement(Animated.View, { pointerEvents: "none", style: [
                {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: `rgba(0,0,0,${core.opacity.backdrop})`
                },
                { opacity }
            ] }),
        React.createElement(View, { style: { flex: 1, justifyContent: 'flex-end' } },
            React.createElement(Pressable, { style: { flex: 1 }, onPress: onDismiss }),
            React.createElement(Animated.View, { ...panResponder.panHandlers, style: [
                    {
                        maxHeight: `${snapHeight * 100}%`,
                        backgroundColor: semantic['background.surface'],
                        borderTopLeftRadius: core.radii.lg,
                        borderTopRightRadius: core.radii.lg,
                        padding: core.spacing.lg
                    },
                    { transform: [{ translateY }] }
                ] }, children))));
};
//# sourceMappingURL=BottomSheet.js.map