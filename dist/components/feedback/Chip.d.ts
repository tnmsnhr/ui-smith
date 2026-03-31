import React from 'react';
export interface ChipProps {
    label: string;
    selected?: boolean;
    onPress?: () => void;
    icon?: React.ReactNode;
    removable?: boolean;
    onRemove?: () => void;
}
export declare const Chip: React.FC<ChipProps>;
//# sourceMappingURL=Chip.d.ts.map