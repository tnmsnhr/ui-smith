import React from 'react';
export type ToastIntent = 'info' | 'success' | 'danger' | 'warning';
export interface ToastProps {
    visible: boolean;
    message: string;
    intent?: ToastIntent;
}
export declare const Toast: React.FC<ToastProps>;
//# sourceMappingURL=Toast.d.ts.map