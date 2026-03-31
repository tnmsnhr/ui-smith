import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const ProgressBar = ({ value }) => {
    const { core, semantic } = useTheme();
    const clamped = Math.max(0, Math.min(1, value));
    const track = {
        height: 4,
        borderRadius: core.radii.full,
        backgroundColor: semantic['background.subtle'],
        overflow: 'hidden'
    };
    const bar = {
        width: `${clamped * 100}%`,
        height: '100%',
        backgroundColor: semantic['intent.primary']
    };
    return (React.createElement(View, { style: track },
        React.createElement(View, { style: bar })));
};
//# sourceMappingURL=ProgressBar.js.map