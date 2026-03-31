import React from 'react';
export type BadgeVariant = 'subtle' | 'solid' | 'outline';
export type BadgeIntent = 'primary' | 'success' | 'danger' | 'warning' | 'neutral';
export interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    intent?: BadgeIntent;
}
export declare const Badge: React.FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map