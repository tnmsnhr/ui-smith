/**
 * Canonical typography preset keys (`Typography variant=`).
 * Consumers may extend presets in config beyond these keys in a future phase.
 */
export const TYPOGRAPHY_PRESET_KEYS = [
  "display",
  "headline",
  "title",
  "subtitle",
  "overline",
  "bodyLarge",
  "body",
  "bodySmall",
  "callout",
  "label",
  "labelSmall",
  /** Button labels — align with `components.Button.sizeMetrics` font sizes (12 / 14 / 16 px). */
  "buttonSmall",
  "button",
  "buttonLarge",
  "caption",
  "footnote",
  "mono",
] as const;

export type TypographyPresetKey = (typeof TYPOGRAPHY_PRESET_KEYS)[number];

export const SPACING_TOKEN_KEYS = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
] as const;

export type SpacingTokenKey = (typeof SPACING_TOKEN_KEYS)[number];

/** Semantic color roles resolved per light/dark */
export type SemanticColorRole =
  | "background.body"
  | "background.surface"
  | "background.subtle"
  /** Solid fills for disabled controls — tune independently per light/dark (unlike intent hues). */
  | "background.disabled"
  | "text.primary"
  | "text.secondary"
  | "text.muted"
  /** Label / icon on disabled `Pressable`s — often differs more between modes than `intent.*`. */
  | "text.disabled"
  | "border.default"
  | "border.muted"
  | "intent.primary"
  | "intent.secondary"
  | "intent.danger"
  | "intent.success"
  | "intent.warning"
  | "intent.info"
  | "intent.muted";

/**
 * Visual chrome: filled, bordered, minimal, or **inline link** (text + underline — still a `Pressable`).
 */
export const BUTTON_VARIANTS = ["solid", "outline", "ghost", "link"] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

/**
 * Touch target + padding tier — five steps from dense (`xs`) to hero (`xl`).
 * **`s`** is the compact step (not `sm`). Smallest sizes may need **`hitSlop`** for ~44pt targets.
 */
export const BUTTON_SIZES = ["xs", "s", "md", "lg", "xl"] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];

/**
 * Semantic “meaning” for colors — each maps to `intent.<name>` in `tokens.semantic`.
 * Not listed: **disabled** — that is the `disabled` boolean prop + styles, not an intent.
 */
export const BUTTON_INTENTS = [
  "primary",
  "secondary",
  "danger",
  "success",
  "info",
  "warning",
  "muted",
] as const;
export type ButtonIntent = (typeof BUTTON_INTENTS)[number];

export const TEXT_INPUT_SIZES = ["sm", "md", "lg"] as const;
export type TextInputSize = (typeof TEXT_INPUT_SIZES)[number];
