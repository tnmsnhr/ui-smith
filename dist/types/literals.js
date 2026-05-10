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
];
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
];
/**
 * Visual chrome: filled, bordered, minimal, or **inline link** (text + underline — still a `Pressable`).
 */
export const BUTTON_VARIANTS = ["solid", "outline", "ghost", "link"];
/**
 * Touch target + padding tier — five steps from dense (`xs`) to hero (`xl`).
 * **`s`** is the compact step (not `sm`). Smallest sizes may need **`hitSlop`** for ~44pt targets.
 */
export const BUTTON_SIZES = ["xs", "s", "md", "lg", "xl"];
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
];
/** Press feedback for `Button` — default **`ripple`** (Material ripple on Android; subtle opacity on iOS). */
export const BUTTON_PRESS_EFFECTS = ["ripple", "fade", "press", "bounce"];
export const TEXT_INPUT_SIZES = ["sm", "md", "lg"];
//# sourceMappingURL=literals.js.map