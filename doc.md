# UISmith handbook

Consumer reference for **typography**, **design tokens**, **theme config**, and **component APIs**.  
For **architecture, codegen, roadmap, and naming conventions** (package name, hooks, token keys), see the [token-first DS plan](../.cursor/plans/token-first_ds_button_input_00a3a003.plan.md).

**Source of truth:** shipped **TypeScript types** and **CHANGELOG**. If this file disagrees, trust the installed package version and fix the docs or types in the same release.

---

## Contents


| Section                                                 | What you’ll find                                                      |
| ------------------------------------------------------- | --------------------------------------------------------------------- |
| [TypeScript and your IDE](#typescript-and-your-ide)     | Autocomplete, unions, JSDoc — use the editor first.                   |
| [Design tokens](#design-tokens)                         | Spacing ladder + semantic color roles (examples).                     |
| [Theme config](#theme-config)                           | `tokens.*` / `components.*` overview (appearance only).               |
| [Typography](#typography)                               | **Default type scale (px)**, recommended presets, customization, props. |
| [Button](#button)                                       | Variants, sizes, intent, props, **light / dark**.                     |
| [TextInput](#textinput)                                 | Sizes, props.                                                         |
| [Accessibility](#accessibility)                         | Forwarded props, refs (`focus` / `blur`).                             |
| [Maintaining this handbook](#maintaining-this-handbook) | When to update this file (same PR as API changes).                    |


---

## TypeScript and your IDE

The package is typed so you get **autocomplete** (Ctrl+Space / IntelliSense), **parameter hints**, and **literal unions** for props such as `variant`, `size`, and `intent` without opening this doc every time. Hover a prop for **JSDoc** where we ship it.

If hints are missing: confirm your project resolves the package `**types`** entry and use a TypeScript-aware editor.

---

## Design tokens

Values below are **example defaults** — override in your theme config.

### Spacing

Semantic names on a **4px grid**:


| Token  | Example px | Typical use       |
| ------ | ---------- | ----------------- |
| `none` | 0          | Flush             |
| `xs`   | 4          | Hairline gap      |
| `sm`   | 8          | Tight             |
| `md`   | 16         | Default inner gap |
| `lg`   | 24         | Group / stack     |
| `xl`   | 32         | Section padding   |
| `2xl`  | 48         | Large block gap   |
| `3xl`  | 64         | Hero inset        |
| `4xl`  | 80         | Page section      |
| `5xl`  | 96         | Marketing spacing |
| `6xl`  | 120        | Max layout rhythm |


### Semantic colors (examples)

Used by components and optional text `color` props. Exact keys live in `tokens.semantic.light` / `dark`.


| Role                  | Typical use                                        |
| --------------------- | -------------------------------------------------- |
| `text.primary`        | Main text                                          |
| `intent.primary`      | Primary actions (hue stable; value shifts by mode) |
| `border.default`      | Default borders                                    |
| `background.body`     | Screen background                                  |
| `text.disabled`       | Disabled control labels / icons                    |
| `background.disabled` | Disabled solid fills                               |


**Light vs dark:** each role has **two** values — `tokens.semantic.light[role]` and `tokens.semantic.dark[role]`. At runtime the app picks one map from the active appearance (`light` / `dark`). Override either map in `**createDesignSystemConfig`** to change how a Button looks in that mode without touching component code.

---

## Theme config

Appearance only — not codegen workflow (see plan). Names match the shipped `DesignSystemConfig` type.


| Section                  | What it controls                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `tokens.core.spacing`    | Spacing ladder (`xs` … `6xl`).                                                                                            |
| `tokens.core.radii`      | Corner radii keys used by components.                                                                                     |
| `tokens.core.typography` | `fontFamily` slots + named **text presets** (same keys as `Typography` variants).                                         |
| `tokens.semantic`        | `light` / `dark` color roles (`text.*`, `intent.*`, `border.*`, …).                                                       |
| `components.Button`      | Defaults, **variants**, **sizes**, **`sizeMetrics`**, **intent**, **`button*`** label presets, **icon–label gap**, press motion. |
| `components.TextInput`   | **Sizes**, borders, label typography, focus/error, motion.                                                                |
| `components.Typography`  | Default **`variant`** fallback (**`body`**).                                                                              |


---

## Typography

### Fonts

The library does **not** ship font files. Load fonts in the app (Expo `expo-font` / `useFonts`, or bare RN linking), then put **registered** `fontFamily` strings into theme config.

### Presets and variants

| Concept    | Rule                                                                 |
| ---------- | -------------------------------------------------------------------- |
| **Preset** | Named style object under `tokens.core.typography.presets`.           |
| **`Typography`** | **`variant="<presetKey>"`** — key must exist in that map (see **`TYPOGRAPHY_PRESET_KEYS`** in types). |

### Font family slots

Shipped slots: **`body`**, **`headline`**, **`mono`** (`tokens.core.typography.fontFamily`). Presets usually set **`fontFamily`** to **`System`**, **`Courier`**, or these slot names after fonts load.

### Default type scale (sizes we document)

These **`fontSize`** / **`lineHeight`** pairs are the **defaults** in `tokens.core.typography.presets`. Override via **`createDesignSystemConfig`** — this table is the handbook **reference scale** (not an exhaustive design critique of every duplicate px).


| `variant`     | fontSize | lineHeight | Weight | Role |
| ------------- | -------: | ---------: | ------ | ---- |
| `display`     | 34 | 40 | 700 | Hero / splash |
| `headline`    | 28 | 36 | 700 | Primary screen or section title |
| `title`       | 22 | 28 | 600 | Cards, dialogs, list headers |
| `subtitle`    | 18 | 24 | 500 | Line under headline / title |
| `bodyLarge`   | 18 | 26 | 400 | Lead / intro |
| `body`        | 16 | 24 | 400 | Default paragraph |
| `callout`     | 16 | 22 | 400 | Short emphasized blurbs |
| `buttonLarge` | 16 | 22 | 500 | Controls — matches Button **`lg`** / **`xl`** labels |
| `bodySmall`   | 14 | 20 | 400 | Dense secondary body |
| `label`       | 14 | 20 | 500 | Form labels, chips |
| `button`      | 14 | 20 | 500 | Controls — matches Button **`s`** / **`md`** labels |
| `mono`        | 14 | 20 | 400 | Code / IDs |
| `overline`    | 12 | 16 | 600 | Eyebrow (uppercase styling in preset) |
| `labelSmall`  | 12 | 16 | 500 | Compact labels |
| `buttonSmall` | 12 | 16 | 500 | Controls — matches Button **`xs`** labels |
| `caption`     | 12 | 16 | 400 | Meta, hints |
| `footnote`    | 11 | 14 | 400 | Fine print |


**Duplicate pixel sizes are intentional:** same **px** with different **weight** or **role** (e.g. **`caption`** vs **`buttonSmall`** both 12px — meta vs control).

### Recommended presets (day-to-day)

For most apps, standardize on:

- **Titles:** `headline`, `title`, `subtitle`
- **Reading:** `body`, `bodySmall`, `caption`
- **Forms:** `label`, `labelSmall`
- **Controls (aligned with Button):** `buttonSmall`, `button`, `buttonLarge`

Add `display`, `bodyLarge`, `callout`, `overline`, `footnote`, `mono` when you need those patterns.

### Theme config (`components.Typography`)

| Field          | Purpose                                       |
| -------------- | --------------------------------------------- |
| `defaultProps` | Optional default **`variant`** — shipped default **`body`**. |

### Customizing a preset

Each preset is **static RN text styling** — set only what you need:


| Field                | Notes                                                  |
| -------------------- | ------------------------------------------------------ |
| `fontFamily`         | Slot or literal                                        |
| `fontWeight`         | Prefer `"200"`–`"800"` vs `"bold"` when weights matter |
| `fontSize`           |                                                        |
| `lineHeight`         |                                                        |
| `letterSpacing`      | Number in RN units (not CSS `em`)                      |
| `textTransform`      | e.g. uppercase for overlines                           |
| `textAlign`          |                                                        |
| `fontVariant`        |                                                        |
| `includeFontPadding` | Android                                                |


### Typography component props


| Prop       | Description                                   |
| ---------- | --------------------------------------------- |
| `variant`  | **Required.** Preset key from theme.          |
| `children` | Content.                                      |
| `color`    | Optional semantic role (e.g. `text.primary`). |
| `style`    | Escape hatch — prefer presets.                |
| …          | Other `Text` props where supported.           |


Optional thin wrappers (e.g. `<Headline />` → `variant="headline"`) depend on package exports.

---

## Button

### What to use when (common patterns)


| Goal                                                   | Suggested API                                                   | Notes                                                                                                                             |
| ------------------------------------------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Main screen action (one obvious CTA)                   | `variant="solid"` `intent="primary"` `size="md"`, `lg`, or `xl` | Single primary per surface where possible.                                                                                        |
| Alternate / cancel next to primary                     | `variant="outline"` or `ghost` `intent="secondary"`             | Avoid two solid primaries.                                                                                                        |
| Low-emphasis dismiss (“Skip”, “Not now”)               | `variant="ghost"` `intent="secondary"`                          | Often `size="s"`.                                                                                                                |
| Delete / remove / irreversible                         | `intent="danger"` + `variant="solid"` or `outline`              | Destructive = danger intent, not only red styling.                                                                                |
| Confirm success / “Save” positive feedback             | `intent="success"` (often with `solid`)                         | Maps to `intent.success` in theme.                                                                                                |
| Info / learn more / neutral FYI                        | `intent="info"`                                                 | Maps to `intent.info`.                                                                                                            |
| Proceed with caution / reversible risk                 | `intent="warning"`                                              | Maps to `intent.warning`.                                                                                                         |
| Lowest emphasis (toolbar chips, “See all”)             | `intent="muted"` + often `ghost` or `outline`                   | Maps to `intent.muted`.                                                                                                           |
| Async submit (API call)                                | `loading`                                                       | Disables double-tap; show spinner/label from theme.                                                                               |
| Blocked / unavailable                                  | `**disabled` prop** — not an `intent`                           | Use `disabled={true}`; do not add `intent="disabled"`.                                                                            |
| Form submit row / sticky footer                        | `fullWidth` + primary intent                                    | Stretches to container width.                                                                                                     |
| Toolbar / chip-sized control                           | `size="xs"` or `s`                                              | **`xs`** is tightest; prefer **`hitSlop`** if the visual target is below ~44pt.                                                   |
| Icon + label                                           | `leftIcon` / `rightIcon` + `children`                           | Theme `**components.Button.iconLabelGap**` controls gap from spacing tokens.                                                      |
| Icon only (overflow menu, compact toolbar)             | `iconOnly`                                                      | **Square** by default (theme + `size`). `**fullWidth`** makes it span the row (icon centered). `**accessibilityLabel**` required. |
| Icon + label + full width                              | `fullWidth` + `leftIcon` or `rightIcon`                         | Row is start-aligned unless implementation centers (document per product).                                                        |
| Inline text action (“Forgot password?”, “See details”) | `variant="link"` + `intent`                                     | Looks like a hyperlink; still `**Pressable**` + `**onPress**` (see **Link vs navigation** below).                                 |
| Toolbar / chip (no underline)                          | `variant="ghost"`                                               | Use `**link`** when copy should read as a tappable **link**, `**ghost`** for icon-heavy / padded controls.                        |


### Variants (`variant`)


| Variant   | Role                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `solid`   | Filled background — strongest emphasis.                                                      |
| `outline` | Border + transparent fill — secondary emphasis.                                              |
| `ghost`   | Minimal chrome — tertiary / padded inline actions.                                           |
| `link`    | Text + underline (or theme-defined link chrome) — **inline** affordance; no chip background. |


### Link variant vs real navigation


| Situation                                                                                                           | Recommendation                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Opens URL or in-app route **and** should announce as a link to screen readers                                       | Prefer your router’s `**<Link>`** (or `accessibilityRole="link"` where appropriate).                                                                                |
| Runs `**onPress**` (submit fragment, open modal, toggle) but should **look** like “learn more” / “Forgot password?” | `**variant="link"`** on **Button** — keeps `**Pressable`** semantics; default `**accessibilityRole**` is often `**button**` unless you override for the route case. |
| Dense inline next to body copy                                                                                      | `variant="link"` + `size="xs"` or `s`; **`fullWidth`** is rarely needed.                                                                               |


### Sizes (`size`)

Five tiers: **`xs`**, **`s`**, **`md`**, **`lg`**, **`xl`** (button size **`s`** is not spacing **`sm`**).

**`components.Button.sizeMetrics`** (px): min height, label **fontSize**, icon slot — aligned with **`Typography`** presets **`buttonSmall`** / **`button`** / **`buttonLarge`** (12 / 14 / 16).


| Size | Min height | Font (preset) | Icon slot |
| ---- | ---------- | --------------- | --------- |
| `xs` | 32 | 12 → `buttonSmall` | 14 |
| `s`  | 36 | 14 → `button`      | 16 |
| `md` | 40 | 14 → `button`      | 16 |
| `lg` | 48 | 16 → `buttonLarge` | 16 |
| `xl` | 52 | 16 → `buttonLarge` | 20 |


| Size | Role                                                                                 |
| ---- | ------------------------------------------------------------------------------------ |
| `xs` | Dense toolbars, chips, tight rows — often needs **`hitSlop`** if below ~44pt visual. |
| `s`  | Compact dialogs, secondary actions.                                                  |
| `md` | Default for most screens.                                                            |
| `lg` | Primary emphasis on forms and dialogs.                                               |
| `xl` | Hero CTAs, onboarding full-bleed actions.                                            |


### Intents (`intent`)

Each value maps to `**tokens.semantic.[mode].intent.<sameName>**` (e.g. `intent="warning"` → role `**intent.warning**`).


| Intent      | Role                                              |
| ----------- | ------------------------------------------------- |
| `primary`   | Brand / main affirmative action.                  |
| `secondary` | Neutral alternate, cancel-adjacent.               |
| `danger`    | Destructive or irreversible.                      |
| `success`   | Positive confirmation (save, publish).            |
| `info`      | Informational / neutral announcements.            |
| `warning`   | Caution — reversible but needs attention.         |
| `muted`     | Lowest emphasis (helper actions, dense toolbars). |


**Why there is no `disabled` intent:** non-interactive state is the `**disabled`** boolean on `**Pressable**`. Using both an intent and a prop would duplicate semantics and confuse accessibility. Style disabled chrome with semantic `**text.disabled**` and `**background.disabled**` (and borders like `**border.muted**`) — **not** a separate intent color.

### Light and dark mode

Buttons resolve `**SemanticColorRole`** strings against `**tokens.semantic.[light|dark]**` for whatever appearance your **Provider** / `**useColorScheme`** selects.


| Concern                                                            | How it works                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Which map runs**                                                 | Same role keys in `**light`** and `**dark**`; values differ. Implementations use `**semantic = theme.tokens.semantic[colorScheme]**` (or equivalent).                                                                                                 |
| **Brand intents** (`primary`, `success`, `warning`, `info`, …)     | **Same meaning** in both modes; default palettes keep **recognizable hue** while adjusting lightness for contrast on each background. You can still set **different** hex per mode if the brand requires it.                                          |
| **“Default” / neutral** (`secondary`, `muted`, `ghost` / surfaces) | Uses `**intent.secondary`**, `**intent.muted**`, `**background.surface**`, `**border.***` — these often **need** larger shifts between light and dark than primaries. Override those roles in `**tokens.semantic.dark`** / `**light**` independently. |
| **Disabled** (`disabled={true}`)                                   | Uses `**text.disabled`** (label + icons) and `**background.disabled**` (solid disabled fills), **not** `intent.*`. Tune `**light`** vs `**dark**` separately when neutral disabled chrome must diverge more than colored intents.                     |


**Summary:** You ship **two palettes** with the **same role names**. Intents stay semantically stable; **neutral and disabled** roles are where dark-mode tuning usually matters most.

### Theme config (`components.Button`)


| Field               | Purpose                                                                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultProps`      | Default `variant`, `size`, `intent`.                                                                                                                 |
| `sizeMetrics`       | Per **`size`**: **`minHeight`**, **`fontSize`**, **`iconSize`** (px) — pairs with **`buttonSmall`** / **`button`** / **`buttonLarge`** in Typography.   |
| `labelPreset`       | Fallback label preset — default **`button`** (14px).                                                                                                  |
| `labelPresetBySize` | Map **`size` → preset** — defaults use **`buttonSmall`** / **`button`** / **`buttonLarge`**.                                                            |
| `iconLabelGap`      | Spacing token key for horizontal gap between icons and label (`xs` … — from `tokens.core.spacing`).                                                  |
| `motion.press`      | Press animation scale + duration (codegen targets).                                                                                                  |


### Label text size vs button `size`

**Rule:** Button labels use the same **`Typography`** presets as the rest of the app — **`buttonSmall`** (12px), **`button`** (14px), **`buttonLarge`** (16px). Resolve:

**`labelPresetBySize[size] ?? labelPreset`** (then **`Typography variant={thatPreset}`**).

Prefer **`sizeMetrics.fontSize`** together with that preset for pixel-perfect alignment; don’t introduce orphan `fontSize` values that aren’t in **`tokens.core.typography.presets`**.


| Principle                         | Guidance                                                                                                                                                                            |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ramp with control size**        | **`xs` → `buttonSmall`**, **`s`** / **`md` → `button`**, **`lg`** / **`xl` → `buttonLarge`** — matches **`sizeMetrics`**.                                                             |
| **Same text, bigger hit area**    | Same **`button`** preset for **`s`** and **`md`**; height changes come from **`sizeMetrics.minHeight`** and padding.                                                                |
| **Don’t fight the preset ladder** | Tune **`button*`** presets in theme config if you need global changes to 12 / 14 / 16 control type.                                                                                   |
| **`link` variant**                | Often **`button`** or **`buttonSmall`** next to body copy — inline readability.                                                                                                      |


**Defaults in this package:** **`xs` → `buttonSmall`**, **`s`** / **`md` → `button`**, **`lg`** / **`xl` → `buttonLarge`**; **`labelPreset`** fallback **`button`**.

### Icons, full width, and layout scenarios

Props `**leftIcon**`, `**rightIcon**`, `**iconOnly**`, `**fullWidth**`, `**loading**`, and `**children**` cover these layouts:


| Scenario                | Typical props                                | Notes                                                                                                        |
| ----------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Text only               | `children`                                   | Default.                                                                                                     |
| Inline link (body copy) | `variant="link"` + `children`                | Optional small `**rightIcon**` (e.g. external) — keep row height from `**size**`.                            |
| Leading icon            | `leftIcon` + `children`                      | Add, send, download patterns.                                                                                |
| Trailing icon           | `children` + `rightIcon`                     | Next, expand, external link.                                                                                 |
| Both icons              | `leftIcon` + `children` + `rightIcon`        | Rare; watch truncation on narrow screens.                                                                    |
| Icon only (square)      | `iconOnly` + icon + `**accessibilityLabel**` | Default **square** control; use `**fullWidth`** for a full-width icon bar.                                   |
| Full-width CTA          | `fullWidth` + `children`                     | Form actions, bottom sheets.                                                                                 |
| Full-width + icon       | `fullWidth` + `leftIcon` + `children`        | Common for “Continue with …”.                                                                                |
| Loading submit          | `loading`                                    | Should ignore repeat `**onPress**` until settled; optional spinner from theme replaces or sits beside label. |
| Disabled                | `disabled`                                   | Combine with any layout; do not use a separate “disabled intent”.                                            |


**Combination rules (implementation contract):**

- `**loading`:** Prefer hiding duplicate actions — spinner near label or replacing label text; keep `**disabled`** semantics or ignore presses in handler while loading.
- `**iconOnly`:** `**children`** may be omitted if `**accessibilityLabel**` is set; never ship icon-only without a name for assistive tech.
- `**fullWidth`:** Affects only width; vertical stacking of multiple `**fullWidth`** buttons is a **parent** layout concern (gap from spacing tokens).
- `**iconOnly` + `fullWidth`:** Overrides square sizing — **stretch** to parent width (implementation should center the icon).
- **RTL:** Implementations should mirror `**leftIcon`** / `**rightIcon**` to **start** / **end** (or rely on `start`/`end` layout) so chevrons stay on the reading end.
- **Touch target:** Small `**size`** values still need adequate `**minHeight**` / padding from theme; use `**hitSlop**` on `**Pressable**` when the visual is smaller than 44pt.

### Props (`ButtonProps`)


| Prop        | Type                                          | Description                                                                               |
| ----------- | --------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `variant`   | `solid` | `outline` | `ghost` | `link`        | Visual recipe — `**link**` = inline hyperlink styling.                                    |
| `size`      | `xs` | `s` | `md` | `lg` | `xl`              | Tier — use **`sizeMetrics`** + Typography **`button*`** presets.                          |
| `intent`    | See intents table above (`primary` … `muted`) | Resolves to `intent.*` semantic colors.                                                   |
| `disabled`  | `boolean`                                     | Non-interactive + muted.                                                                  |
| `loading`   | `boolean`                                     | Pending action; blocks duplicate submits.                                                 |
| `fullWidth` | `boolean`                                     | Stretch to parent width; with `**iconOnly**`, replaces default square layout.             |
| `leftIcon`  | `ReactNode`                                   | Leading icon (logical start; RTL-aware in implementation).                                |
| `rightIcon` | `ReactNode`                                   | Trailing icon.                                                                            |
| `iconOnly`  | `boolean`                                     | No text label — **square** unless `**fullWidth`**; **must** set `**accessibilityLabel`**. |
| `children`  | `ReactNode`                                   | Label text (optional when icon-only + a11y label).                                        |
| `onPress`   | function                                      | Handler (inherits `Pressable`).                                                           |
| `style`     | `StyleProp<ViewStyle>`                        | Escape hatch.                                                                             |
| …           |                                               | Other `**Pressable**` props (`hitSlop`, `delayPressIn`, `accessibility*`, …).             |


---

## TextInput

### Sizes


| Size | Role        |
| ---- | ----------- |
| `sm` | Compact     |
| `md` | Default     |
| `lg` | Comfortable |


### Props


| Prop           | Type                | Description                   |
| -------------- | ------------------- | ----------------------------- |
| `size`         | union               | Height / horizontal padding.  |
| `label`        | `string` (optional) | Label copy; style from theme. |
| `error`        | `boolean`           | Error styling.                |
| `value`        | `string`            | Controlled value.             |
| `onChangeText` | function            | Change handler.               |
| `placeholder`  | `string`            | Placeholder.                  |
| `style`        | style               | Escape hatch — prefer tokens. |


Native `TextInput` props apply unless the wrapper overrides them.

---

## Accessibility

Components forward React Native `**accessibility***` props (`accessibilityLabel`, `accessibilityRole`, `accessibilityHint`, `accessible`, `accessibilityState`, …) unless documented otherwise. Prefer semantic tokens for colors so contrast stays predictable.

### Ref forwarding

Primitives use `**forwardRef**` so you can attach a ref to the underlying host:


| Component      | Ref target  | Notes                                                                   |
| -------------- | ----------- | ----------------------------------------------------------------------- |
| **Button**     | `Pressable` | Imperative focus behavior follows RN; platform differences apply.       |
| **TextInput**  | `TextInput` | `**focus()`**, `**blur()**`, and other input ref methods work as in RN. |
| **Typography** | `Text`      | Use when focus management or accessibility needs a `Text` ref.          |


Exact ref types match the shipped `forwardRef` / ref typings.

---

## Maintaining this handbook

Treat `**doc.md` as public API documentation.** Update it **in the same PR** as API or type changes.


| Change type   | Examples                                                                     |
| ------------- | ---------------------------------------------------------------------------- |
| Props         | Add/remove/rename on `Typography`, `Button`, `TextInput`, `Provider`, hooks. |
| Naming        | Preset keys, `variant` / `size` / `intent`, semantic roles.                  |
| Usage         | Defaults, controlled patterns, a11y notes.                                   |
| Customization | New config paths under `tokens` / `components`.                              |
| TypeScript    | New unions, `*Props` exports, JSDoc — IDE hints must stay truthful.          |


Keep **architecture and codegen** in the **plan file** only.

When `**doc.md`** and types disagree, fix **types first** if autocomplete would lie, then align this file.