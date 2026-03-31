import React from 'react';
import { Pressable, type PressableProps, type ViewStyle } from 'react-native';

export interface PressableBaseProps extends PressableProps {
  style?: ViewStyle | ViewStyle[];
}

/**
 * Internal primitive for pressable surfaces.
 * Central place to add common behavior (e.g. hit slop, ripple, etc.) later.
 */
export const PressableBase: React.FC<PressableBaseProps> = ({ children, ...rest }) => {
  return <Pressable {...rest}>{children}</Pressable>;
};

