import React from 'react';
import { Pressable } from 'react-native';
/**
 * Internal primitive for pressable surfaces.
 * Central place to add common behavior (e.g. hit slop, ripple, etc.) later.
 */
export const PressableBase = ({ children, ...rest }) => {
    return React.createElement(Pressable, { ...rest }, children);
};
//# sourceMappingURL=PressableBase.js.map