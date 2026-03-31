import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Card = ({ elevated = false, style, children, ...rest }) => {
    const { core, semantic } = useTheme();
    const base = {
        backgroundColor: semantic['background.surface'],
        borderRadius: core.radii.lg,
        padding: core.spacing.lg,
        borderWidth: elevated ? 0 : 1,
        borderColor: semantic['border.default'],
        elevation: elevated ? core.shadows.level2.elevation : core.shadows.level0.elevation
    };
    const merged = Array.isArray(style) ? [base, ...style] : [base, style].filter(Boolean);
    return (React.createElement(View, { ...rest, style: merged }, children));
};
//# sourceMappingURL=Card.js.map