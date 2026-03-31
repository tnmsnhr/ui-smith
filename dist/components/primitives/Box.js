import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const Box = ({ style, children, ...rest }) => {
    const { core, semantic } = useTheme();
    const spacing = core.spacing;
    const radii = core.radii;
    const { padding, paddingHorizontal, paddingVertical, margin, marginHorizontal, marginVertical, bg, radius, ...viewProps } = rest;
    const resolvedStyle = {
        padding: padding != null ? spacing[padding] : undefined,
        paddingHorizontal: paddingHorizontal != null ? spacing[paddingHorizontal] : undefined,
        paddingVertical: paddingVertical != null ? spacing[paddingVertical] : undefined,
        margin: margin != null ? spacing[margin] : undefined,
        marginHorizontal: marginHorizontal != null ? spacing[marginHorizontal] : undefined,
        marginVertical: marginVertical != null ? spacing[marginVertical] : undefined,
        borderRadius: radius != null ? radii[radius] : undefined,
        backgroundColor: bg && bg in core.colors
            ? core.colors[bg]
            : bg && bg in semantic
                ? semantic[bg]
                : bg
    };
    const combinedStyle = Array.isArray(style)
        ? [resolvedStyle, ...style]
        : [resolvedStyle, style].filter(Boolean);
    return (React.createElement(View, { ...viewProps, style: combinedStyle }, children));
};
//# sourceMappingURL=Box.js.map