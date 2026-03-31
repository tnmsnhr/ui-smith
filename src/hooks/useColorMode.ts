import { useContext } from 'react';
import { ColorModeContext } from '../provider/DesignSystemContext';
import type { ColorMode } from '../types/theme';

export const useColorMode = () => {
  const ctx = useContext(ColorModeContext);
  if (!ctx) {
    throw new Error('useColorMode must be used within a DesignSystemProvider');
  }

  const { colorMode, setColorMode, toggleColorMode } = ctx;

  return {
    colorMode,
    setColorMode,
    toggleColorMode,
    isDark: colorMode === 'dark',
    isLight: colorMode === 'light'
  } as const;
};

export type UseColorModeReturn = ReturnType<typeof useColorMode>;

