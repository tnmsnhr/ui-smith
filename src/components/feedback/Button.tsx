import React, { useMemo } from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text as RNText,
  type GestureResponderEvent,
  type PressableProps,
  type TextStyle,
  type ViewStyle
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIntent = 'primary' | 'success' | 'danger' | 'warning' | 'neutral';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  intent?: ButtonIntent;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  intent = 'primary',
  disabled,
  loading,
  onPress,
  leftIcon,
  rightIcon,
  children,
  ...rest
}) => {
  const { semantic, core } = useTheme();

  const handlePress = (event: GestureResponderEvent) => {
    if (disabled || loading) return;
    onPress?.(event);
  };

  const [containerStyle, textStyle]: [ViewStyle, TextStyle] = useMemo(() => {
    const baseContainer: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: core.radii.md,
      paddingHorizontal: core.spacing.lg,
      paddingVertical: core.spacing.sm
    };

    const baseText: TextStyle = {
      fontFamily: core.typography.fontFamily.body,
      fontSize: core.typography.fontSize.md,
      fontWeight: core.typography.fontWeight.medium as TextStyle['fontWeight']
    };

    if (size === 'sm') {
      baseContainer.paddingHorizontal = core.spacing.md;
      baseContainer.paddingVertical = core.spacing.xs;
      baseText.fontSize = core.typography.fontSize.sm;
    } else if (size === 'lg') {
      baseContainer.paddingHorizontal = core.spacing.xl;
      baseContainer.paddingVertical = core.spacing.md;
      baseText.fontSize = core.typography.fontSize.lg;
    }

    const intentColor =
      intent === 'primary'
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
    } else if (variant === 'outline') {
      baseContainer.borderWidth = 1;
      baseContainer.borderColor = intentColor;
      baseText.color = intentColor;
      baseContainer.backgroundColor = 'transparent';
    } else if (variant === 'ghost') {
      baseContainer.backgroundColor = 'transparent';
      baseText.color = intentColor;
    }

    if (disabled || loading) {
      baseContainer.opacity = core.opacity.disabled;
    }

    return [baseContainer, baseText];
  }, [core, semantic, variant, size, intent, disabled, loading]);

  return (
    <Pressable
      {...rest}
      onPress={handlePress}
      disabled={disabled || loading}
      style={containerStyle}
    >
      {loading && (
        <ActivityIndicator
          color={textStyle.color || semantic['background.body']}
          style={{ marginRight: leftIcon || children ? core.spacing.xs : 0 }}
        />
      )}
      {!loading && leftIcon ? (
        <RNText style={{ marginRight: children ? core.spacing.xs : 0 }}>{leftIcon}</RNText>
      ) : null}
      {typeof children === 'string' ? (
        <RNText style={textStyle}>{children}</RNText>
      ) : (
        children
      )}
      {!loading && rightIcon ? (
        <RNText style={{ marginLeft: children ? core.spacing.xs : 0 }}>{rightIcon}</RNText>
      ) : null}
    </Pressable>
  );
};

