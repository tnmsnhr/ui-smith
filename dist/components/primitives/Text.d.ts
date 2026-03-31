import React from 'react';
import type { TextProps as RNTextProps } from 'react-native';
export type TextVariant = 'body' | 'caption' | 'label' | 'heading';
export interface TextProps extends RNTextProps {
    variant?: TextVariant;
    color?: string;
}
export declare const Text: React.FC<TextProps>;
//# sourceMappingURL=Text.d.ts.map