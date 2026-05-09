import {
  createDesignSystemConfig,
  motionPresets,
  semanticStaticDark,
  semanticStaticLight,
} from "../src/index";

describe("codegen output", () => {
  it("matches merged semantic maps from createDesignSystemConfig()", () => {
    const cfg = createDesignSystemConfig();
    expect({ ...semanticStaticLight }).toEqual({ ...cfg.tokens.semantic.light });
    expect({ ...semanticStaticDark }).toEqual({ ...cfg.tokens.semantic.dark });
  });

  it("motion presets match components theme motion blocks", () => {
    const cfg = createDesignSystemConfig();
    expect(motionPresets.Button).toEqual(cfg.components.Button.motion);
    expect(motionPresets.TextInput).toEqual(cfg.components.TextInput.motion);
  });
});
