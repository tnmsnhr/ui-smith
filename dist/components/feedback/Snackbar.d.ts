import React from 'react';
export interface SnackbarProps {
    visible: boolean;
    message: string;
    actionLabel?: string;
    onActionPress?: () => void;
}
export declare const Snackbar: React.FC<SnackbarProps>;
//# sourceMappingURL=Snackbar.d.ts.map