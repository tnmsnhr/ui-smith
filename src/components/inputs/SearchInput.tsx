import React from 'react';
import { View, Text as RNText } from 'react-native';
import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';
import { useTheme } from '../../hooks/useTheme';

export interface SearchInputProps extends TextInputProps {}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { core, semantic } = useTheme();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RNText
        style={{
          marginRight: core.spacing.xs,
          color: semantic['text.muted']
        }}
      >
        🔍
      </RNText>
      <View style={{ flex: 1 }}>
        <TextInput {...props} />
      </View>
    </View>
  );
};

