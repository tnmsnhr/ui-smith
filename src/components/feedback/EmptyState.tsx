import React from 'react';
import { View, Text as RNText, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action
}) => {
  const { core, semantic } = useTheme();

  const container: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    padding: core.spacing.lg
  };

  const titleStyle: TextStyle = {
    marginTop: core.spacing.sm,
    fontFamily: core.typography.fontFamily.heading,
    fontSize: core.typography.fontSize.lg,
    color: semantic['text.primary']
  };

  const descStyle: TextStyle = {
    marginTop: core.spacing.xs,
    fontFamily: core.typography.fontFamily.body,
    fontSize: core.typography.fontSize.sm,
    color: semantic['text.secondary'],
    textAlign: 'center'
  };

  return (
    <View style={container}>
      {icon}
      {title ? <RNText style={titleStyle}>{title}</RNText> : null}
      {description ? <RNText style={descStyle}>{description}</RNText> : null}
      {action ? <View style={{ marginTop: core.spacing.md }}>{action}</View> : null}
    </View>
  );
};

