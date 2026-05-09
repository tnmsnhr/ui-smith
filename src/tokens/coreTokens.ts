import type { TextStyle } from "react-native";

import type { SpacingTokenKey, TypographyPresetKey } from "../types/literals";

/** One typography preset — full TextStyle subset allowed at config time */
export type TypographyPreset = Partial<TextStyle>;

export type TypographyPresets = Record<TypographyPresetKey, TypographyPreset>;

export interface CoreTokens {
  spacing: Record<SpacingTokenKey, number>;
  radii: {
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
  typography: {
    fontFamily: {
      body: string;
      headline: string;
      mono: string;
    };
    presets: TypographyPresets;
  };
}

function preset(p: TypographyPreset): TypographyPreset {
  return p;
}

/** Default spacing ladder — 4px grid through `6xl` */
const spacing: Record<SpacingTokenKey, number> = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 80,
  "5xl": 96,
  "6xl": 120,
};

/** Default typography presets — tune in `createDesignSystemConfig` */
const presets: TypographyPresets = {
  display: preset({
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: "System",
  }),
  headline: preset({
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: "System",
  }),
  title: preset({
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "System",
  }),
  subtitle: preset({
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "System",
  }),
  overline: preset({
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "System",
  }),
  bodyLarge: preset({
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "400",
    fontFamily: "System",
  }),
  body: preset({
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: "System",
  }),
  bodySmall: preset({
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    fontFamily: "System",
  }),
  callout: preset({
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "400",
    fontFamily: "System",
  }),
  label: preset({
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "System",
  }),
  labelSmall: preset({
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "System",
  }),
  buttonSmall: preset({
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "System",
  }),
  button: preset({
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "System",
  }),
  buttonLarge: preset({
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "System",
  }),
  caption: preset({
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    fontFamily: "System",
  }),
  footnote: preset({
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "400",
    fontFamily: "System",
  }),
  mono: preset({
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    fontFamily: "Courier",
  }),
};

export const defaultCoreTokens: CoreTokens = {
  spacing,
  radii: {
    sm: 6,
    md: 10,
    lg: 14,
    full: 9999,
  },
  typography: {
    fontFamily: {
      body: "System",
      headline: "System",
      mono: "Courier",
    },
    presets,
  },
};
