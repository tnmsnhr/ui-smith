import React from 'react';
import { SafeAreaView, View } from 'react-native';
import {
  DesignSystemProvider,
  Button,
  Text,
  TextInput,
  PasswordInput,
  SearchInput,
  Badge,
  Divider,
  Card,
  useColorMode
} from 'react-native-uismith';
import { exampleCustomConfig } from './exampleCustomConfig';

const ColorModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button variant="outline" onPress={toggleColorMode}>
      Toggle mode ({colorMode})
    </Button>
  );
};

export const ExampleApp: React.FC = () => {
  return (
    <DesignSystemProvider config={exampleCustomConfig} colorMode="system">
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <ColorModeToggle />
          <Divider style={{ marginVertical: 16 }} />
          <Card elevated>
            <Badge intent="primary">UISmith</Badge>
            <Text variant="heading">Welcome</Text>
            <Text style={{ marginTop: 8 }}>
              This screen uses UISmith tokens, variants, and light/dark themes.
            </Text>
            <View style={{ marginTop: 16 }}>
              <TextInput placeholder="Email" autoCapitalize="none" />
              <View style={{ height: 12 }} />
              <PasswordInput placeholder="Password" />
              <View style={{ height: 12 }} />
              <SearchInput placeholder="Search" />
            </View>
            <View style={{ marginTop: 16, flexDirection: 'row' }}>
              <Button intent="primary">Sign in</Button>
            </View>
          </Card>
        </View>
      </SafeAreaView>
    </DesignSystemProvider>
  );
};

