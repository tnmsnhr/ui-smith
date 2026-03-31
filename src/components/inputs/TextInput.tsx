import React, { useMemo } from 'react';
import {
  TextInput as RNTextInput,
  View,
  type TextInputProps as RNTextInputProps,
  type ViewStyle,
  type TextStyle
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export type TextInputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps extends RNTextInputProps {
  size?: TextInputSize;
  error?: boolean;
  disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  size = 'md',
  error,
  disabled,
  style,
  ...rest
}) => {
  const { core, semantic } = useTheme();

  const [containerStyle, inputStyle]: [ViewStyle, TextStyle] = useMemo(() => {
    const heightBySize: Record<TextInputSize, number> = {
      sm: 36,
      md: 44,
      lg: 52
    };

    const container: ViewStyle = {
      height: heightBySize[size],
      borderRadius: core.radii.md,
      borderWidth: 1,
      borderColor: error ? semantic['intent.danger'] : semantic['border.default'],
      backgroundColor: semantic['background.surface'],
      paddingHorizontal: core.spacing.sm,
      justifyContent: 'center',
      opacity: disabled ? core.opacity.disabled : 1
    };

    const input: TextStyle = {
      fontFamily: core.typography.fontFamily.body,
      fontSize: core.typography.fontSize.md,
      color: semantic['text.primary']
    };

    return [container, input];
  }, [core, semantic, size, error, disabled]);

  const mergedInputStyle = Array.isArray(style)
    ? [inputStyle, ...style]
    : [inputStyle, style].filter(Boolean);

  return (
    <View style={containerStyle}>
      <RNTextInput
        {...rest}
        editable={!disabled}
        placeholderTextColor={semantic['text.muted']}
        style={mergedInputStyle as TextStyle[]}
      />
    </View>
  );
};

