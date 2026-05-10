import React, { forwardRef } from "react";
import { Text } from "react-native";
import { useTheme } from "../../theme/DesignSystemProvider";
export const Typography = forwardRef(function Typography({ variant, color, style, ...rest }, ref) {
    var _a, _b;
    const theme = useTheme();
    const resolvedVariant = (_b = variant !== null && variant !== void 0 ? variant : (_a = theme.components.Typography.defaultProps) === null || _a === void 0 ? void 0 : _a.variant) !== null && _b !== void 0 ? _b : "body";
    const preset = theme.core.typography.presets[resolvedVariant];
    const semanticColor = color ? theme.semantic[color] : theme.semantic["text.primary"];
    const resolvedStyle = {
        ...preset,
        ...(semanticColor ? { color: semanticColor } : {}),
    };
    return React.createElement(Text, { ref: ref, ...rest, style: [resolvedStyle, style] });
});
//# sourceMappingURL=Typography.js.map