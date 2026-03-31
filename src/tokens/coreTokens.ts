export type ColorScale = {
  [shade: string]: string;
};

export type CoreColors = {
  [name: string]: string | ColorScale;
};

export type TypographyTokens = {
  fontFamily: {
    body: string;
    heading: string;
    mono: string;
  };
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
  };
  fontWeight: {
    regular: string | number;
    medium: string | number;
    semiBold: string | number;
    bold: string | number;
  };
};

export type SpacingTokens = {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type RadiusTokens = {
  none: number;
  sm: number;
  md: number;
  lg: number;
  pill: number;
  full: number;
};

export type ShadowTokens = {
  level0: {
    elevation: number;
  };
  level1: {
    elevation: number;
  };
  level2: {
    elevation: number;
  };
  level3: {
    elevation: number;
  };
};

export type SizeTokens = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type ZIndexTokens = {
  base: number;
  dropdown: number;
  modal: number;
  toast: number;
};

export type OpacityTokens = {
  disabled: number;
  focusRing: number;
  backdrop: number;
};

export interface CoreTokens {
  colors: CoreColors;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  radii: RadiusTokens;
  shadows: ShadowTokens;
  sizes: SizeTokens;
  zIndices: ZIndexTokens;
  opacity: OpacityTokens;
}

export const defaultCoreTokens: CoreTokens = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      '50': '#F9FAFB',
      '100': '#F3F4F6',
      '200': '#E5E7EB',
      '300': '#D1D5DB',
      '400': '#9CA3AF',
      '500': '#6B7280',
      '600': '#4B5563',
      '700': '#374151',
      '800': '#1F2933',
      '900': '#111827'
    },
    primary: {
      '50': '#EEF2FF',
      '100': '#E0E7FF',
      '200': '#C7D2FE',
      '300': '#A5B4FC',
      '400': '#818CF8',
      '500': '#6366F1',
      '600': '#4F46E5',
      '700': '#4338CA',
      '800': '#3730A3',
      '900': '#312E81'
    },
    success: '#16A34A',
    danger: '#DC2626',
    warning: '#F59E0B',
    info: '#0284C7'
  },
  typography: {
    fontFamily: {
      body: 'System',
      heading: 'System',
      mono: 'System'
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24
    },
    lineHeight: {
      xs: 16,
      sm: 18,
      md: 20,
      lg: 22,
      xl: 24,
      '2xl': 28
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700'
    }
  },
  spacing: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24
  },
  radii: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    pill: 999,
    full: 9999
  },
  shadows: {
    level0: {
      elevation: 0
    },
    level1: {
      elevation: 1
    },
    level2: {
      elevation: 3
    },
    level3: {
      elevation: 6
    }
  },
  sizes: {
    xs: 16,
    sm: 24,
    md: 32,
    lg: 40,
    xl: 48
  },
  zIndices: {
    base: 0,
    dropdown: 1000,
    modal: 2000,
    toast: 3000
  },
  opacity: {
    disabled: 0.4,
    focusRing: 0.8,
    backdrop: 0.5
  }
};
