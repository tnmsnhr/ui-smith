# Components API

This reference covers component props currently exported by `react-native-uismith`.

## Primitives

### `Box`

`BoxProps extends ViewProps`

- `padding`, `paddingHorizontal`, `paddingVertical`: spacing token key
- `margin`, `marginHorizontal`, `marginVertical`: spacing token key
- `bg`: token color key or string
- `radius`: radius token key
- `style`: `ViewStyle | ViewStyle[]`

### `Text`

`TextProps extends RNTextProps`

- `variant`: `"body" | "caption" | "label" | "heading"`
- `color`: string

### `PressableBase`

`PressableBaseProps extends PressableProps`

---

## Inputs

### `TextInput`

`TextInputProps extends RNTextInputProps`

- `size`: `"sm" | "md" | "lg"`
- `error`: boolean
- `disabled`: boolean

### `PasswordInput`

`PasswordInputProps extends Omit<TextInputProps, "secureTextEntry">`

### `SearchInput`

`SearchInputProps extends TextInputProps`

### `Checkbox`

- `checked`: boolean
- `onChange`: `(checked: boolean) => void`
- `label`: string
- `disabled`: boolean

### `Radio`

- `selected`: boolean
- `onChange`: `(selected: boolean) => void`
- `label`: string
- `disabled`: boolean

### `Switch`

- `value`: boolean
- `onValueChange`: `(value: boolean) => void`
- `disabled`: boolean

### `Select`

- `value`: string
- `onChange`: `(value: string) => void`
- `options`: `{ value: string; label: string }[]`
- `placeholder`: string

### `Stepper`

- `value`: number
- `min`: number
- `max`: number
- `step`: number
- `onChange`: `(value: number) => void`

---

## Feedback

### `Button`

- `variant`: `"solid" | "outline" | "ghost"`
- `size`: `"sm" | "md" | "lg"`
- `intent`: `"primary" | "success" | "danger" | "warning" | "neutral"`
- `loading`: boolean
- `leftIcon`: `ReactNode`
- `rightIcon`: `ReactNode`
- `children`: `ReactNode`
- plus `PressableProps` (except `style`)

### `IconButton`

- `variant`: `"ghost" | "solid" | "outline"`
- `size`: `"sm" | "md" | "lg"`
- `intent`: `"primary" | "neutral" | "danger"`
- `icon`: `ReactNode` (required)
- plus `PressableProps` (except `style`)

### `Badge`

- `variant`: `"subtle" | "solid" | "outline"`
- `intent`: `"primary" | "success" | "danger" | "warning" | "neutral"`
- `children`: `ReactNode`

### `Chip`

- `label`: string
- `selected`: boolean
- `onPress`: `() => void`
- `icon`: `ReactNode`
- `removable`: boolean
- `onRemove`: `() => void`

### `Toast`

- `visible`: boolean
- `message`: string
- `intent`: `"info" | "success" | "danger" | "warning"`

### `Snackbar`

- `visible`: boolean
- `message`: string
- `actionLabel`: string
- `onActionPress`: `() => void`

### `ProgressBar`

- `value`: number

### `ActivityIndicator`

Accepts React Native `ActivityIndicatorProps`.

### `Skeleton`

- `width`: `number | string`
- `height`: number
- `radius`: number

### `Banner`

- `title`: string
- `message`: string
- `intent`: `"info" | "success" | "danger" | "warning"`
- `actionLabel`: string
- `onActionPress`: `() => void`
- `onClose`: `() => void`

### `EmptyState`

- `title`: string
- `description`: string
- `icon`: `ReactNode`
- `action`: `ReactNode`

### `Tag`

- `label`: string

### `Tooltip`

- `content`: `ReactNode`
- `children`: `ReactNode`

---

## Layout

### `Divider`

`DividerProps extends ViewProps`

- `vertical`: boolean

### `Card`

`CardProps extends ViewProps`

- `elevated`: boolean

### `ListItem`

- `title`: string
- `subtitle`: string
- `left`: `ReactNode`
- `right`: `ReactNode`
- `onPress`: `() => void`

### `Tabs`

- `tabs`: `{ key: string; label: string }[]`
- `activeKey`: string
- `onChange`: `(key: string) => void`

### `Surface`

`SurfaceProps extends ViewProps`

- `level`: `0 | 1 | 2 | 3`

### `SegmentedControl`

- `segments`: `{ key: string; label: string }[]`
- `value`: string
- `onChange`: `(key: string) => void`

---

## Overlays

### `Modal`

- `visible`: boolean
- `onRequestClose`: `() => void`
- `children`: `ReactNode`

### `BottomSheet`

- `visible`: boolean
- `onDismiss`: `() => void`
- `children`: `ReactNode`
- `snapHeight`: number (fraction of screen height)

### `Menu`

- `visible`: boolean
- `items`: `{ key: string; label: string }[]`
- `onSelect`: `(key: string) => void`
- `onDismiss`: `() => void`

---

## Navigation & Media

### `AppBar`

- `title`: string
- `leftAction`: `ReactNode`
- `rightAction`: `ReactNode`
- `onLeftPress`: `() => void`
- `onRightPress`: `() => void`

### `FAB`

- `icon`: `ReactNode`
- `label`: string
- `onPress`: `() => void`

### `Avatar`

`AvatarProps extends Omit<ImageProps, "source">`

- `uri`: string
- `label`: string
- `size`: `"sm" | "md" | "lg"`
