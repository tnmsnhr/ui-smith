import type { DesignSystemConfig } from "./designSystemConfig";
import type { ButtonSizeMetrics } from "./componentTheme";
import type { ButtonSize } from "../types/literals";
import { defaultCoreTokens } from "../tokens/coreTokens";
import { defaultSemanticTokens } from "../tokens/semanticTokens";

/** Default px ladder: minHeight — fontSize — iconSize */
export const defaultButtonSizeMetrics: Record<ButtonSize, ButtonSizeMetrics> = {
  xs: { minHeight: 32, fontSize: 12, iconSize: 14 },
  s: { minHeight: 36, fontSize: 14, iconSize: 16 },
  md: { minHeight: 40, fontSize: 14, iconSize: 16 },
  lg: { minHeight: 48, fontSize: 16, iconSize: 16 },
  xl: { minHeight: 52, fontSize: 16, iconSize: 20 },
};

export const defaultDesignSystemConfig: DesignSystemConfig = {
  tokens: {
    core: defaultCoreTokens,
    semantic: defaultSemanticTokens,
  },
  components: {
    Button: {
      defaultProps: {
        variant: "solid",
        size: "md",
        intent: "primary",
        pressEffect: "ripple",
      },
      labelPreset: "button",
      labelPresetBySize: {
        xs: "buttonSmall",
        s: "button",
        md: "button",
        lg: "buttonLarge",
        xl: "buttonLarge",
      },
      sizeMetrics: defaultButtonSizeMetrics,
      iconLabelGap: "xs",
      motion: {
        ripple: {
          iosFallbackToOpacity: 0.92,
          iosFallbackDurationMs: 90,
          iosReleaseDurationMs: 160,
        },
        fade: {
          toOpacity: 0.72,
          durationMs: 140,
          releaseDurationMs: 180,
        },
        press: {
          toOpacity: 0.88,
          translateY: 1,
          durationMs: 100,
          releaseDurationMs: 160,
        },
        bounce: {
          pressedScale: 0.94,
          pressFriction: 6,
          pressTension: 280,
          releaseFriction: 5,
          releaseTension: 200,
        },
      },
    },
    TextInput: {
      defaultProps: {
        size: "md",
      },
      motion: {
        focus: { borderWidth: 2, durationMs: 180 },
        blur: { borderWidth: 1, durationMs: 150 },
      },
    },
    Typography: {
      defaultProps: {
        variant: "body",
      },
    },
  },
};
