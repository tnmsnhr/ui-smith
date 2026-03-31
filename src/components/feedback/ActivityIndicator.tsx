import React from 'react';
import { ActivityIndicator as RNActivityIndicator, type ActivityIndicatorProps } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = (props) => {
  const { semantic } = useTheme();
  return <RNActivityIndicator color={semantic['intent.primary']} {...props} />;
};

