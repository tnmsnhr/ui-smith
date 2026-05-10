/**
 * @generated — do not edit by hand. Run `npm run codegen`.
 * Source: `createDesignSystemConfig()` merged defaults.
 */
export declare const motionPresets: {
    readonly Button: {
        readonly ripple: {
            readonly iosFallbackToOpacity: 0.92;
            readonly iosFallbackDurationMs: 90;
            readonly iosReleaseDurationMs: 160;
        };
        readonly fade: {
            readonly toOpacity: 0.72;
            readonly durationMs: 140;
            readonly releaseDurationMs: 180;
        };
        readonly press: {
            readonly toOpacity: 0.88;
            readonly translateY: 1;
            readonly durationMs: 100;
            readonly releaseDurationMs: 160;
        };
        readonly bounce: {
            readonly pressedScale: 0.94;
            readonly pressFriction: 6;
            readonly pressTension: 280;
            readonly releaseFriction: 5;
            readonly releaseTension: 200;
        };
    };
    readonly TextInput: {
        readonly focus: {
            readonly borderWidth: 2;
            readonly durationMs: 180;
        };
        readonly blur: {
            readonly borderWidth: 1;
            readonly durationMs: 150;
        };
    };
};
export type MotionPresets = typeof motionPresets;
//# sourceMappingURL=motion.presets.d.ts.map