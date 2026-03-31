import React from 'react';
import { View, Text as RNText } from 'react-native';
import { TextInput } from './TextInput';
import { useTheme } from '../../hooks/useTheme';
export const SearchInput = (props) => {
    const { core, semantic } = useTheme();
    return (React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
        React.createElement(RNText, { style: {
                marginRight: core.spacing.xs,
                color: semantic['text.muted']
            } }, "\uD83D\uDD0D"),
        React.createElement(View, { style: { flex: 1 } },
            React.createElement(TextInput, { ...props }))));
};
//# sourceMappingURL=SearchInput.js.map