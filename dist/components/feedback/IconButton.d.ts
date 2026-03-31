import React from 'react';
import { type PressableProps } from 'react-native';
export type IconButtonVariant = 'ghost' | 'solid' | 'outline';
export interface IconButtonProps extends Omit<PressableProps, 'style'> {
    variant?: IconButtonVariant;
    size?: 'sm' | 'md' | 'lg';
    intent?: 'primary' | 'neutral' | 'danger';
    icon: React.ReactNode;
}
export declare const IconButton: React.FC<IconButtonProps>;
//# sourceMappingURL=IconButton.d.ts.map