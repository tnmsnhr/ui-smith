import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Divider = ({ vertical = false, style, ...rest }) => {
    const { semantic } = useTheme();
    const baseStyle = vertical
        ? { width: 1, alignSelf: 'stretch', backgroundColor: semantic['border.muted'] }
        : { height: 1, width: '100%', backgroundColor: semantic['border.muted'] };
    const merged = Array.isArray(style)
        ? [baseStyle, ...style]
        : [baseStyle, style].filter(Boolean);
    return React.createElement(View, { ...rest, style: merged });
};
//# sourceMappingURL=Divider.js.map