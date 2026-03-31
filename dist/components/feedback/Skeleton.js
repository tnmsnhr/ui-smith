import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Skeleton = ({ width = '100%', height = 16, radius }) => {
    const { core, semantic } = useTheme();
    const style = {
        width: width,
        height,
        borderRadius: radius !== null && radius !== void 0 ? radius : core.radii.sm,
        backgroundColor: semantic['background.subtle'],
    };
    // Static skeleton (no animated shimmer) to avoid runtime issues
    return React.createElement(View, { style: style });
};
//# sourceMappingURL=Skeleton.js.map