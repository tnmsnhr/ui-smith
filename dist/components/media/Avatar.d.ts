import React from 'react';
import { type ImageProps } from 'react-native';
export interface AvatarProps extends Omit<ImageProps, 'source'> {
    uri?: string;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
}
export declare const Avatar: React.FC<AvatarProps>;
//# sourceMappingURL=Avatar.d.ts.map