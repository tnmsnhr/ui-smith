/**
 * @generated — do not edit by hand. Run `npm run codegen`.
 * Source: `createDesignSystemConfig()` merged defaults.
 */
export const motionPresets = {
    "Button": {
        "ripple": {
            "iosFallbackToOpacity": 0.92,
            "iosFallbackDurationMs": 90,
            "iosReleaseDurationMs": 160
        },
        "fade": {
            "toOpacity": 0.72,
            "durationMs": 140,
            "releaseDurationMs": 180
        },
        "press": {
            "toOpacity": 0.88,
            "translateY": 1,
            "durationMs": 100,
            "releaseDurationMs": 160
        },
        "bounce": {
            "pressedScale": 0.94,
            "pressFriction": 6,
            "pressTension": 280,
            "releaseFriction": 5,
            "releaseTension": 200
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
};
//# sourceMappingURL=motion.presets.js.map