import React, { useState } from 'react';
import { View, Pressable, Text as RNText } from 'react-native';
import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';
import { useTheme } from '../../hooks/useTheme';

export interface PasswordInputProps extends Omit<TextInputProps, 'secureTextEntry'> { }

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const { core, semantic } = useTheme();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1 }}>
        <TextInput {...props} secureTextEntry={!visible} />
      </View>
      <Pressable
        onPress={() => setVisible((v) => !v)}
        style={{ marginLeft: core.spacing.xs, padding: core.spacing.xs }}
      >
        <RNText style={{ color: semantic['text.muted'] }}>
          {visible ? 'Hide' : 'Show'}
        </RNText>
      </Pressable>
    </View>
  );
};

