import React from 'react';
import { type TextInputProps as RNTextInputProps } from 'react-native';
export type TextInputSize = 'sm' | 'md' | 'lg';
export interface TextInputProps extends RNTextInputProps {
    size?: TextInputSize;
    error?: boolean;
    disabled?: boolean;
}
export declare const TextInput: React.FC<TextInputProps>;
//# sourceMappingURL=TextInput.d.ts.map