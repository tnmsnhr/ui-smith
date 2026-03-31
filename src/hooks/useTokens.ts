import { useTheme } from './useTheme';

export const useTokens = () => {
  const theme = useTheme();
  return theme.core;
};

