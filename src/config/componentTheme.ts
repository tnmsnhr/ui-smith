import type {
  ButtonIntent,
  ButtonSize,
  ButtonVariant,
  SpacingTokenKey,
  TextInputSize,
  TypographyPresetKey,
} from "../types/literals";

export interface ButtonMotionPress {
  scale?: number;
  durationMs?: number;
}

/** Pixel metrics for a button size — implement **Button** using these for height, label `fontSize`, and icon slot. */
export interface ButtonSizeMetrics {
  /** Minimum row height (px). */
  minHeight: number;
  /** Label `fontSize` (px). */
  fontSize: number;
  /** Icon width/height slot (px). */
  iconSize: number;
}

export interface ButtonThemeConfig {
  defaultProps?: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    intent?: ButtonIntent;
  };
  /**
   * Default label preset when **`labelPresetBySize`** has no entry for the active **`size`**.
   * Resolution: `labelPresetBySize[size] ?? labelPreset` (implementation).
   */
  labelPreset?: TypographyPresetKey;
  /**
   * Maps each **`size`** to a typography preset (`Typography variant=`).
   * Lets padding/touch target scale **and** type ramp together; omit keys to fall back to **`labelPreset`**.
   */
  labelPresetBySize?: Partial<Record<ButtonSize, TypographyPresetKey>>;
  /**
   * Horizontal gap between `leftIcon` / `rightIcon` and the label row.
   * Resolved from `tokens.core.spacing[iconLabelGap]` at runtime in the Button implementation.
   */
  iconLabelGap?: SpacingTokenKey;
  /**
   * Row height, label font size, and icon slot per **`size`** (px).
   * Implementations should prefer **`fontSize`** / **`iconSize`** / **`minHeight`** here over inferring only from typography presets.
   */
  sizeMetrics?: Partial<Record<ButtonSize, ButtonSizeMetrics>>;
  motion?: {
    press?: ButtonMotionPress;
  };
}

export interface TextInputMotionBorder {
  borderWidth?: number;
  durationMs?: number;
}

export interface TextInputThemeConfig {
  defaultProps?: {
    size?: TextInputSize;
  };
  motion?: {
    focus?: TextInputMotionBorder;
    blur?: TextInputMotionBorder;
  };
}

export interface TypographyThemeConfig {
  /** Used when **`Typography`** omits **`variant`** (uncommon — prefer explicit variant at call sites). */
  defaultProps?: {
    variant?: TypographyPresetKey;
  };
}

export interface ComponentsThemeConfig {
  Button: ButtonThemeConfig;
  TextInput: TextInputThemeConfig;
  Typography: TypographyThemeConfig;
}
