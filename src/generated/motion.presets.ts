/**
 * @generated — do not edit by hand. Run `npm run codegen`.
 * Source: `createDesignSystemConfig()` merged defaults.
 */

export const motionPresets = {
  "Button": {
    "press": {
      "scale": 0.98,
      "durationMs": 120
    }
  },
  "TextInput": {
    "focus": {
      "borderWidth": 2,
      "durationMs": 180
    },
    "blur": {
      "borderWidth": 1,
      "durationMs": 150
    }
  }
} as const;

export type MotionPresets = typeof motionPresets;
