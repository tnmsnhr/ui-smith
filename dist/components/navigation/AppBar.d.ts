import React from 'react';
export interface AppBarProps {
    title?: string;
    leftAction?: React.ReactNode;
    rightAction?: React.ReactNode;
    onLeftPress?: () => void;
    onRightPress?: () => void;
}
export declare const AppBar: React.FC<AppBarProps>;
//# sourceMappingURL=AppBar.d.ts.map