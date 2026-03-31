import React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export const ActivityIndicator = (props) => {
    const { semantic } = useTheme();
    return React.createElement(RNActivityIndicator, { color: semantic['intent.primary'], ...props });
};
//# sourceMappingURL=ActivityIndicator.js.map