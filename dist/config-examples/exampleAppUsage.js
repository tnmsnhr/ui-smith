import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { DesignSystemProvider, Button, Text, TextInput, PasswordInput, SearchInput, Badge, Divider, Card, useColorMode } from 'react-native-uismith';
import { exampleCustomConfig } from './exampleCustomConfig';
const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (React.createElement(Button, { variant: "outline", onPress: toggleColorMode },
        "Toggle mode (",
        colorMode,
        ")"));
};
export const ExampleApp = () => {
    return (React.createElement(DesignSystemProvider, { config: exampleCustomConfig, colorMode: "system" },
        React.createElement(SafeAreaView, { style: { flex: 1 } },
            React.createElement(View, { style: { padding: 16 } },
                React.createElement(ColorModeToggle, null),
                React.createElement(Divider, { style: { marginVertical: 16 } }),
                React.createElement(Card, { elevated: true },
                    React.createElement(Badge, { intent: "primary" }, "UISmith"),
                    React.createElement(Text, { variant: "heading" }, "Welcome"),
                    React.createElement(Text, { style: { marginTop: 8 } }, "This screen uses UISmith tokens, variants, and light/dark themes."),
                    React.createElement(View, { style: { marginTop: 16 } },
                        React.createElement(TextInput, { placeholder: "Email", autoCapitalize: "none" }),
                        React.createElement(View, { style: { height: 12 } }),
                        React.createElement(PasswordInput, { placeholder: "Password" }),
                        React.createElement(View, { style: { height: 12 } }),
                        React.createElement(SearchInput, { placeholder: "Search" })),
                    React.createElement(View, { style: { marginTop: 16, flexDirection: 'row' } },
                        React.createElement(Button, { intent: "primary" }, "Sign in")))))));
};
//# sourceMappingURL=exampleAppUsage.js.map