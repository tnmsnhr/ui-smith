import React from 'react';
import { View, Pressable } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface ModalProps {
  visible: boolean;
  onRequestClose?: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, onRequestClose, children }) => {
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
        alignItems: 'center',
        padding: core.spacing.lg
      }}
      onPress={onRequestClose}
    >
      <View
        style={{
          width: '100%',
          borderRadius: core.radii.lg,
          backgroundColor: semantic['background.surface'],
          padding: core.spacing.lg
        }}
        onStartShouldSetResponder={() => true}
      >
        {children}
      </View>
    </Pressable>
  );
};

