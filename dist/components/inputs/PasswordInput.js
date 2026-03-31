import React, { useState } from 'react';
import { View, Pressable, Text as RNText } from 'react-native';
import { TextInput } from './TextInput';
import { useTheme } from '../../hooks/useTheme';
export const PasswordInput = (props) => {
    const [visible, setVisible] = useState(false);
    const { core, semantic } = useTheme();
    return (React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
        React.createElement(View, { style: { flex: 1 } },
            React.createElement(TextInput, { ...props, secureTextEntry: !visible })),
        React.createElement(Pressable, { onPress: () => setVisible((v) => !v), style: { marginLeft: core.spacing.xs, padding: core.spacing.xs } },
            React.createElement(RNText, { style: { color: semantic['text.muted'] } }, visible ? 'Hide' : 'Show'))));
};
//# sourceMappingURL=PasswordInput.js.map