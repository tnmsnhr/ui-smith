import type { ReactNode } from "react";
import type { StyleProp, TextProps, TextStyle } from "react-native";

import type { SemanticColorRole, TypographyPresetKey } from "./literals";

/**
 * Text styled from **`tokens.core.typography.presets`** via **`variant`**.
 * Implementation resolves **`color`** from **`tokens.semantic[appearance][color]`** when set.
 */
export interface TypographyProps extends Omit<TextProps, "style" | "color"> {
  /** Key into **`tokens.core.typography.presets`** — must exist at runtime. */
  variant: TypographyPresetKey;
  /**
   * Semantic color role (not a raw hex — resolves per light/dark).
   * Omit and use **`style`** when you need a one-off literal color.
   */
  color?: SemanticColorRole;
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
}
