import {
  BUTTON_INTENTS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  createDesignSystemConfig,
  defaultButtonSizeMetrics,
  defaultDesignSystemConfig,
  SPACING_TOKEN_KEYS,
  TYPOGRAPHY_PRESET_KEYS,
} from "../src/index";

describe("createDesignSystemConfig", () => {
  it("returns defaults when called with no args", () => {
    const cfg = createDesignSystemConfig();
    expect(cfg.tokens.core.spacing.md).toBe(16);
    expect(cfg.components.Button.defaultProps?.variant).toBe("solid");
    expect(cfg.components.Typography.defaultProps?.variant).toBe("body");
    expect(cfg.tokens.semantic.light["text.disabled"]).toBeDefined();
    expect(cfg.tokens.semantic.dark["background.disabled"]).toBeDefined();
  });

  it("deep-merges spacing overrides", () => {
    const cfg = createDesignSystemConfig({
      tokens: {
        core: {
          spacing: { md: 20 },
        },
      },
    });
    expect(cfg.tokens.core.spacing.md).toBe(20);
    expect(cfg.tokens.core.spacing.sm).toBe(defaultDesignSystemConfig.tokens.core.spacing.sm);
  });

  it("exports literal arrays for IDE / runtime checks", () => {
    expect(SPACING_TOKEN_KEYS).toContain("6xl");
    expect(TYPOGRAPHY_PRESET_KEYS).toContain("headline");
    expect(BUTTON_INTENTS).toEqual(
      expect.arrayContaining([
        "primary",
        "secondary",
        "danger",
        "success",
        "info",
        "warning",
        "muted",
      ])
    );
    expect(BUTTON_SIZES).toEqual(["xs", "s", "md", "lg", "xl"]);
    expect(BUTTON_VARIANTS).toEqual(
      expect.arrayContaining(["solid", "outline", "ghost", "link"])
    );
  });

  it("defaults Button label typography preset", () => {
    expect(defaultDesignSystemConfig.components.Button.labelPreset).toBe("button");
    expect(defaultDesignSystemConfig.components.Button.iconLabelGap).toBe("xs");
    expect(
      defaultDesignSystemConfig.components.Button.labelPresetBySize
    ).toEqual({
      xs: "buttonSmall",
      s: "button",
      md: "button",
      lg: "buttonLarge",
      xl: "buttonLarge",
    });
    expect(defaultButtonSizeMetrics.md).toEqual({
      minHeight: 40,
      fontSize: 14,
      iconSize: 16,
    });
    expect(defaultDesignSystemConfig.components.Button.sizeMetrics).toEqual(
      defaultButtonSizeMetrics
    );
  });
});
