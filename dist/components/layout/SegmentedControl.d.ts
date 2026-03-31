import React from 'react';
export interface SegmentItem {
    key: string;
    label: string;
}
export interface SegmentedControlProps {
    segments: SegmentItem[];
    value: string;
    onChange: (key: string) => void;
}
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
//# sourceMappingURL=SegmentedControl.d.ts.map