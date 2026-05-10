import {
  createDesignSystemConfig,
  createThemeBundle,
  createThemeForColorMode,
  semanticStaticDark,
  semanticStaticLight,
} from "../src/index";

describe("phase 3 runtime theme selection", () => {
  it("uses generated semantic maps for default config", () => {
    const cfg = createDesignSystemConfig();
    expect(createThemeForColorMode(cfg, "light").semantic).toBe(semanticStaticLight);
    expect(createThemeForColorMode(cfg, "dark").semantic).toBe(semanticStaticDark);
  });

  it("uses merged custom semantic maps when config overrides provided", () => {
    const cfg = createDesignSystemConfig({
      tokens: {
        semantic: {
          dark: {
            "intent.primary": "#123456",
          },
        },
      },
    });
    expect(createThemeForColorMode(cfg, "dark").semantic["intent.primary"]).toBe("#123456");
  });

  it("creates light and dark bundle slices", () => {
    const cfg = createDesignSystemConfig();
    const bundle = createThemeBundle(cfg);
    expect(bundle.light.colorMode).toBe("light");
    expect(bundle.dark.colorMode).toBe("dark");
  });
});
