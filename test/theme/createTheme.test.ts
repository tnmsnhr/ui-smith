import { defaultConfig } from '../../src/config/defaultConfig';
import { createThemeBundle } from '../../src/theme/createTheme';

describe('createThemeBundle', () => {
  it('creates light and dark themes with semantic colors', () => {
    const bundle = createThemeBundle(defaultConfig);

    expect(bundle.light.colorMode).toBe('light');
    expect(bundle.dark.colorMode).toBe('dark');

    expect(bundle.light.semantic['background.body']).not.toBeUndefined();
    expect(bundle.dark.semantic['background.body']).not.toBeUndefined();
  });
});

