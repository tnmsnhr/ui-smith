import React from 'react';
export type BannerIntent = 'info' | 'success' | 'danger' | 'warning';
export interface BannerProps {
    title?: string;
    message: string;
    intent?: BannerIntent;
    actionLabel?: string;
    onActionPress?: () => void;
    onClose?: () => void;
}
export declare const Banner: React.FC<BannerProps>;
//# sourceMappingURL=Banner.d.ts.map