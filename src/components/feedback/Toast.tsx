import React from 'react';
import { Animated, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export type ToastIntent = 'info' | 'success' | 'danger' | 'warning';

export interface ToastProps {
  visible: boolean;
  message: string;
  intent?: ToastIntent;
}

// Minimal animated toast; full queueing system would live in userland or a higher-level API.
export const Toast: React.FC<ToastProps> = ({ visible, message, intent = 'info' }) => {
  const { core, semantic } = useTheme();
  const translateY = React.useRef(new Animated.Value(visible ? 0 : 24)).current;
  const opacity = React.useRef(new Animated.Value(visible ? 1 : 0)).current;

  React.useEffect(() => {
    const animation = Animated.parallel([
      Animated.timing(translateY, {
        toValue: visible ? 0 : 24,
        duration: 220,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: visible ? 1 : 0,
        duration: visible ? 180 : 140,
        useNativeDriver: true
      })
    ]);
    animation.start();
    return () => animation.stop();
  }, [visible, opacity, translateY]);

  const bg =
    intent === 'success'
      ? semantic['intent.success']
      : intent === 'danger'
      ? semantic['intent.danger']
      : intent === 'warning'
      ? semantic['intent.warning']
      : semantic['intent.info'];

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          bottom: core.spacing.xl,
          left: core.spacing.lg,
          right: core.spacing.lg,
          backgroundColor: bg,
          padding: core.spacing.md,
          borderRadius: core.radii.md
        },
        {
          opacity,
          transform: [{ translateY }]
        }
      ]}
      pointerEvents={visible ? 'auto' : 'none'}
    >
      <RNText
        style={{
          color: semantic['background.body'],
          fontFamily: core.typography.fontFamily.body
        }}
      >
        {message}
      </RNText>
    </Animated.View>
  );
};

