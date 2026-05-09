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
| [Typography](#typography)                               | Presets, `variant` catalog, customization fields, `Typography` props. |
| [Button](#button)                                       | Variants, sizes, intent, props.                                       |
| [TextInput](#textinput)                                 | Sizes, props.                                                         |
| [Accessibility](#accessibility)                         | Forwarded props, refs (`focus` / `blur`).                             |
| [Maintaining this handbook](#maintaining-this-handbook) | When to update this file (same PR as API changes).                    |

---

## TypeScript and your IDE

The package is typed so you get **autocomplete** (Ctrl+Space / IntelliSense), **parameter hints**, and **literal unions** for props such as `variant`, `size`, and `intent` without opening this doc every time. Hover a prop for **JSDoc** where we ship it.

If hints are missing: confirm your project resolves the package **`types`** entry and use a TypeScript-aware editor.

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

| Role              | Typical use       |
| ----------------- | ----------------- |
| `text.primary`    | Main text         |
| `intent.primary`  | Primary actions   |
| `border.default`  | Default borders   |
| `background.body` | Screen background |

---

## Theme config

Appearance only — not codegen workflow (see plan). Names match the shipped `DesignSystemConfig` type.

| Section                  | What it controls                                                                  |
| ------------------------ | --------------------------------------------------------------------------------- |
| `tokens.core.spacing`    | Spacing ladder (`xs` … `6xl`).                                                    |
| `tokens.core.radii`      | Corner radii keys used by components.                                             |
| `tokens.core.typography` | `fontFamily` slots + named **text presets** (same keys as `Typography` variants). |
| `tokens.semantic`        | `light` / `dark` color roles (`text.*`, `intent.*`, `border.*`, …).               |
| `components.Button`      | Defaults, **variants**, **sizes**, **intent**, label typography, press motion.    |
| `components.TextInput`   | **Sizes**, borders, label typography, focus/error, motion.                        |

---

## Typography

### Fonts

The library does **not** ship font files. Load fonts in the app (Expo `expo-font` / `useFonts`, or bare RN linking), then put **registered** `fontFamily` strings into theme config.

### Presets and variants

| Concept          | Rule                                                          |
| ---------------- | ------------------------------------------------------------- |
| **Preset**       | Named text style in theme (e.g. `headline`, `body`).          |
| **`Typography`** | **`variant="<presetKey>"`** — must match a configured preset. |

### Font family slots

`tokens.core.typography.fontFamily` can define **slots** (`brand`, `mono`, …) whose values are post-load names RN expects.

Presets reference a **slot** or a **literal** `fontFamily`. Separate files per weight → point each preset at the matching face.

### Preset keys (Typography variants)

Use the subset you need. Common catalog:

| `variant`    | Role                              |
| ------------ | --------------------------------- |
| `display`    | Hero / splash                     |
| `headline`   | Primary screen or section title   |
| `title`      | Cards, dialogs, list headers      |
| `subtitle`   | Line under headline/title         |
| `overline`   | Eyebrow / category above headline |
| `bodyLarge`  | Lead / intro                      |
| `body`       | Default body                      |
| `bodySmall`  | Dense UI / secondary body         |
| `callout`    | Short emphasized blurbs           |
| `label`      | Form labels, chips                |
| `labelSmall` | Compact labels                    |
| `caption`    | Meta, hints                       |
| `footnote`   | Disclaimers                       |
| `mono`       | Code / IDs                        |

Optional keys (`displayLarge`, …): define in config, then `variant="<thatKey>"`.

**Starter set:** `headline`, `title`, `body`, `bodySmall`, `label`, `caption`.

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

### Variants

Exact union from your config — typical:

| Variant   | Role     |
| --------- | -------- |
| `solid`   | Filled   |
| `outline` | Bordered |
| `ghost`   | Minimal  |

### Sizes

| Size | Role      |
| ---- | --------- |
| `sm` | Compact   |
| `md` | Default   |
| `lg` | Prominent |

### Intent

| Intent      | Role           |
| ----------- | -------------- |
| `primary`   | Primary action |
| `secondary` | Secondary      |
| `danger`    | Destructive    |

### Props

| Prop       | Type                   | Description                                          |
| ---------- | ---------------------- | ---------------------------------------------------- |
| `variant`  | union                  | Visual style.                                        |
| `size`     | union                  | Padding / touch target.                              |
| `intent`   | union                  | Semantic color mapping.                              |
| `disabled` | `boolean`              | Disabled state.                                      |
| `loading`  | `boolean`              | Loading UI / interaction.                            |
| `children` | `ReactNode`            | Label; typography may come from `components.Button`. |
| `onPress`  | function               | Handler.                                             |
| `style`    | `StyleProp<ViewStyle>` | Layout override.                                     |

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

Components forward React Native **`accessibility*`** props (`accessibilityLabel`, `accessibilityRole`, `accessibilityHint`, `accessible`, `accessibilityState`, …) unless documented otherwise. Prefer semantic tokens for colors so contrast stays predictable.

### Ref forwarding

Primitives use **`forwardRef`** so you can attach a ref to the underlying host:

| Component      | Ref target    | Notes |
| -------------- | ------------- | ----- |
| **Button**     | `Pressable`   | Imperative focus behavior follows RN; platform differences apply. |
| **TextInput**  | `TextInput`   | **`focus()`**, **`blur()`**, and other input ref methods work as in RN. |
| **Typography** | `Text`        | Use when focus management or accessibility needs a `Text` ref. |

Exact ref types match the shipped `forwardRef` / ref typings.

---

## Maintaining this handbook

Treat **`doc.md` as public API documentation.** Update it **in the same PR** as API or type changes.

| Change type   | Examples                                                                     |
| ------------- | ---------------------------------------------------------------------------- |
| Props         | Add/remove/rename on `Typography`, `Button`, `TextInput`, `Provider`, hooks. |
| Naming        | Preset keys, `variant` / `size` / `intent`, semantic roles.                  |
| Usage         | Defaults, controlled patterns, a11y notes.                                   |
| Customization | New config paths under `tokens` / `components`.                              |
| TypeScript    | New unions, `*Props` exports, JSDoc — IDE hints must stay truthful.          |

Keep **architecture and codegen** in the **plan file** only.

When **`doc.md`** and types disagree, fix **types first** if autocomplete would lie, then align this file.
