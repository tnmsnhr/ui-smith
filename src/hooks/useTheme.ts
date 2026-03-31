import { useContext } from 'react';
import { DesignSystemContext } from '../provider/DesignSystemContext';
import type { DesignSystemTheme } from '../types/theme';

export const useTheme = (): DesignSystemTheme => {
  const ctx = useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a DesignSystemProvider');
  }
  return ctx.theme;
};

