/**
 * Canonical typography preset keys (`Typography variant=`).
 * Consumers may extend presets in config beyond these keys in a future phase.
 */
export declare const TYPOGRAPHY_PRESET_KEYS: readonly ["display", "headline", "title", "subtitle", "overline", "bodyLarge", "body", "bodySmall", "callout", "label", "labelSmall", "buttonSmall", "button", "buttonLarge", "caption", "footnote", "mono"];
export type TypographyPresetKey = (typeof TYPOGRAPHY_PRESET_KEYS)[number];
export declare const SPACING_TOKEN_KEYS: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
export type SpacingTokenKey = (typeof SPACING_TOKEN_KEYS)[number];
/** Semantic color roles resolved per light/dark */
export type SemanticColorRole = "background.body" | "background.surface" | "background.subtle"
/** Solid fills for disabled controls — tune independently per light/dark (unlike intent hues). */
 | "background.disabled" | "text.primary" | "text.secondary" | "text.muted"
/** Label / icon on disabled `Pressable`s — often differs more between modes than `intent.*`. */
 | "text.disabled" | "border.default" | "border.muted" | "intent.primary" | "intent.secondary" | "intent.danger" | "intent.success" | "intent.warning" | "intent.info" | "intent.muted";
/**
 * Visual chrome: filled, bordered, minimal, or **inline link** (text + underline — still a `Pressable`).
 */
export declare const BUTTON_VARIANTS: readonly ["solid", "outline", "ghost", "link"];
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
/**
 * Touch target + padding tier — five steps from dense (`xs`) to hero (`xl`).
 * **`s`** is the compact step (not `sm`). Smallest sizes may need **`hitSlop`** for ~44pt targets.
 */
export declare const BUTTON_SIZES: readonly ["xs", "s", "md", "lg", "xl"];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
/**
 * Semantic “meaning” for colors — each maps to `intent.<name>` in `tokens.semantic`.
 * Not listed: **disabled** — that is the `disabled` boolean prop + styles, not an intent.
 */
export declare const BUTTON_INTENTS: readonly ["primary", "secondary", "danger", "success", "info", "warning", "muted"];
export type ButtonIntent = (typeof BUTTON_INTENTS)[number];
/** Press feedback for `Button` — default **`ripple`** (Material ripple on Android; subtle opacity on iOS). */
export declare const BUTTON_PRESS_EFFECTS: readonly ["ripple", "fade", "press", "bounce"];
export type ButtonPressEffect = (typeof BUTTON_PRESS_EFFECTS)[number];
export declare const TEXT_INPUT_SIZES: readonly ["sm", "md", "lg"];
export type TextInputSize = (typeof TEXT_INPUT_SIZES)[number];
//# sourceMappingURL=literals.d.ts.map