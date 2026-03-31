import type { CoreTokens } from '../tokens/coreTokens';
import type { SemanticTokens, SemanticColors } from '../tokens/semanticTokens';

export type ColorMode = 'light' | 'dark';

export interface ComponentStateTokens<Style = any> {
  disabled?: Style;
  loading?: Style;
  pressed?: Style;
  focused?: Style;
  error?: Style;
  success?: Style;
}

export interface VariantTokens<Style = any> {
  [variant: string]: Style & {
    _states?: ComponentStateTokens<Style>;
  };
}

export interface SizeTokens<Style = any> {
  [size: string]: Style;
}

export interface ComponentTokens<Style = any, Props = any> {
  baseStyle?: Style;
  variants?: VariantTokens<Style>;
  sizes?: SizeTokens<Style>;
  defaultProps?: Partial<Props>;
}

export interface ComponentsTheme {
  Button: ComponentTokens;
  Text: ComponentTokens;
  Box: ComponentTokens;
  // Additional components can be added here
}

export interface DesignSystemTheme {
  colorMode: ColorMode;
  core: CoreTokens;
  semantic: SemanticColors;
  components: ComponentsTheme;
}

export interface ThemeBundle {
  light: DesignSystemTheme;
  dark: DesignSystemTheme;
}

export type { CoreTokens, SemanticTokens };

