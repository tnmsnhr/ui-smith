import React from 'react';
import { View, Pressable, Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface MenuItem {
  key: string;
  label: string;
}

export interface MenuProps {
  visible: boolean;
  items: MenuItem[];
  onSelect: (key: string) => void;
  onDismiss: () => void;
}

export const Menu: React.FC<MenuProps> = ({ visible, items, onSelect, onDismiss }) => {
  const { core, semantic } = useTheme();
  if (!visible) return null;

  return (
    <Pressable
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: `rgba(0,0,0,${core.opacity.backdrop})`,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={onDismiss}
    >
      <View
        style={{
          minWidth: 200,
          backgroundColor: semantic['background.surface'],
          borderRadius: core.radii.md,
          paddingVertical: core.spacing.xs
        }}
        onStartShouldSetResponder={() => true}
      >
        {items.map((item) => (
          <Pressable
            key={item.key}
            onPress={() => {
              onSelect(item.key);
              onDismiss();
            }}
            style={{
              paddingHorizontal: core.spacing.md,
              paddingVertical: core.spacing.sm
            }}
          >
            <RNText
              style={{
                color: semantic['text.primary'],
                fontFamily: core.typography.fontFamily.body
              }}
            >
              {item.label}
            </RNText>
          </Pressable>
        ))}
      </View>
    </Pressable>
  );
};

