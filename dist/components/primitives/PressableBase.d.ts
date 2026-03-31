import React from 'react';
import { type PressableProps, type ViewStyle } from 'react-native';
export interface PressableBaseProps extends PressableProps {
    style?: ViewStyle | ViewStyle[];
}
/**
 * Internal primitive for pressable surfaces.
 * Central place to add common behavior (e.g. hit slop, ripple, etc.) later.
 */
export declare const PressableBase: React.FC<PressableBaseProps>;
//# sourceMappingURL=PressableBase.d.ts.map