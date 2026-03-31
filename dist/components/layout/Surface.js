import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Surface = ({ level = 0, style, children, ...rest }) => {
    const { core, semantic } = useTheme();
    const elevationMap = {
        0: core.shadows.level0.elevation,
        1: core.shadows.level1.elevation,
        2: core.shadows.level2.elevation,
        3: core.shadows.level3.elevation
    };
    const base = {
        backgroundColor: semantic['background.surface'],
        borderRadius: core.radii.md,
        elevation: elevationMap[level]
    };
    const merged = Array.isArray(style) ? [base, ...style] : [base, style].filter(Boolean);
    return (React.createElement(View, { ...rest, style: merged }, children));
};
//# sourceMappingURL=Surface.js.map