import type { CoreTokens } from './coreTokens';

export type SemanticColorRole =
  | 'background.body'
  | 'background.surface'
  | 'background.subtle'
  | 'border.default'
  | 'border.muted'
  | 'text.primary'
  | 'text.secondary'
  | 'text.muted'
  | 'intent.primary'
  | 'intent.success'
  | 'intent.danger'
  | 'intent.warning'
  | 'intent.info';

export type SemanticColors = Record<SemanticColorRole, string>;

export interface SemanticTokens {
  light: SemanticColors;
  dark: SemanticColors;
}

export const createDefaultSemanticTokens = (core: CoreTokens): SemanticTokens => {
  const gray = core.colors.gray as Record<string, string>;
  const primary = core.colors.primary as Record<string, string>;

  const light: SemanticColors = {
    'background.body': core.colors.white as string,
    'background.surface': gray['50'],
    'background.subtle': gray['100'],
    'border.default': gray['200'],
    'border.muted': gray['100'],
    'text.primary': gray['900'],
    'text.secondary': gray['700'],
    'text.muted': gray['500'],
    'intent.primary': primary['600'],
    'intent.success': core.colors.success as string,
    'intent.danger': core.colors.danger as string,
    'intent.warning': core.colors.warning as string,
    'intent.info': core.colors.info as string
  };

  const dark: SemanticColors = {
    'background.body': gray['900'],
    'background.surface': gray['800'],
    'background.subtle': gray['700'],
    'border.default': gray['700'],
    'border.muted': gray['800'],
    'text.primary': gray['50'],
    'text.secondary': gray['200'],
    'text.muted': gray['400'],
    'intent.primary': primary['400'],
    'intent.success': core.colors.success as string,
    'intent.danger': core.colors.danger as string,
    'intent.warning': core.colors.warning as string,
    'intent.info': core.colors.info as string
  };

  return { light, dark };
};

