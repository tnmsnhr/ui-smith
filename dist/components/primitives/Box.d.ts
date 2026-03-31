import React from 'react';
import type { ViewProps, ViewStyle } from 'react-native';
import type { CoreTokens } from '../../tokens/coreTokens';
type SpacingKey = keyof CoreTokens['spacing'];
type RadiusKey = keyof CoreTokens['radii'];
export interface BoxProps extends ViewProps {
    padding?: SpacingKey;
    paddingHorizontal?: SpacingKey;
    paddingVertical?: SpacingKey;
    margin?: SpacingKey;
    marginHorizontal?: SpacingKey;
    marginVertical?: SpacingKey;
    bg?: keyof CoreTokens['colors'] | string;
    radius?: RadiusKey;
    style?: ViewStyle | ViewStyle[];
}
export declare const Box: React.FC<BoxProps>;
export {};
//# sourceMappingURL=Box.d.ts.map