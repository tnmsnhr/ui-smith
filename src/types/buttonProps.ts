import type { ReactNode } from "react";
import type { PressableProps, StyleProp, ViewStyle } from "react-native";

import type { ButtonIntent, ButtonSize, ButtonVariant } from "./literals";

/**
 * Public Button API — semantic variants + common product patterns (icons, loading, full width).
 * Implements thin `Pressable` wrapper in Phase 4; types are stable for consumers now.
 */
export interface ButtonProps extends Omit<PressableProps, "style" | "children"> {
  /**
   * Visual recipe — `link` is underline / text-colored like a hyperlink; use `Pressable` + `onPress`, not `<a>`.
   * For in-app routes, your stack’s link component may be preferable; this variant is for **button** semantics + link chrome.
   */
  variant?: ButtonVariant;
  /** Padding + min-height tier — `xs`, `s`, `md`, `lg`, `xl` (see `BUTTON_SIZES`, `sizeMetrics` in theme). */
  size?: ButtonSize;
  /** Maps to semantic intent colors (`intent.primary`, …) */
  intent?: ButtonIntent;
  /**
   * Non-interactive state — resolve disabled chrome from **`tokens.semantic[mode].text.disabled`** /
   * **`background.disabled`**, not from `intent`.
   */
  disabled?: boolean;
  /** Shows loading affordance and should ignore duplicate presses while pending */
  loading?: boolean;
  /**
   * Stretch to the parent’s width (`alignSelf: 'stretch'` / `width: '100%'` pattern).
   * With **`iconOnly`**, overrides the default **square** hit target so the control spans the row.
   */
  fullWidth?: boolean;
  /** Leading icon — layout order is logical start; flip with RTL at implementation time. */
  leftIcon?: ReactNode;
  /** Trailing icon (chevron, external-link, overflow). */
  rightIcon?: ReactNode;
  /**
   * Icon-only control (no visible `children` text). Default layout: **square** (equal width/height
   * from theme + `size`). If **`fullWidth`** is set, the button stretches **full width** instead (icon
   * usually centered). **`accessibilityLabel`** required for screen readers; **`hitSlop`** allowed.
   */
  iconOnly?: boolean;
  /** Visible label; optional when `iconOnly` if a11y label is set */
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}
