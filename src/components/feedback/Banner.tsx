import React from 'react';
import { View, Text as RNText, Pressable, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export type BannerIntent = 'info' | 'success' | 'danger' | 'warning';

export interface BannerProps {
  title?: string;
  message: string;
  intent?: BannerIntent;
  actionLabel?: string;
  onActionPress?: () => void;
  onClose?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  message,
  intent = 'info',
  actionLabel,
  onActionPress,
  onClose
}) => {
  const { core, semantic } = useTheme();

  const bg =
    intent === 'success'
      ? semantic['intent.success']
      : intent === 'danger'
      ? semantic['intent.danger']
      : intent === 'warning'
      ? semantic['intent.warning']
      : semantic['intent.info'];

  const container: ViewStyle = {
    padding: core.spacing.md,
    borderRadius: core.radii.md,
    backgroundColor: bg,
    flexDirection: 'row',
    alignItems: 'center'
  };

  const textStyle: TextStyle = {
    color: semantic['background.body'],
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.sm
  };

  return (
    <View style={container}>
      <View style={{ flex: 1 }}>
        {title ? (
          <RNText
            style={[
              textStyle,
              {
                fontWeight: core.typography.fontWeight.semiBold as any,
                marginBottom: 2
              }
            ]}
          >
            {title}
          </RNText>
        ) : null}
        <RNText style={textStyle}>{message}</RNText>
      </View>
      {actionLabel ? (
        <Pressable onPress={onActionPress} style={{ marginLeft: core.spacing.sm }}>
          <RNText
            style={[
              textStyle,
              {
                fontWeight: core.typography.fontWeight.medium as any,
                textDecorationLine: 'underline'
              }
            ]}
          >
            {actionLabel}
          </RNText>
        </Pressable>
      ) : null}
      {onClose ? (
        <Pressable onPress={onClose} style={{ marginLeft: core.spacing.sm }}>
          <RNText style={textStyle}>✕</RNText>
        </Pressable>
      ) : null}
    </View>
  );
};

