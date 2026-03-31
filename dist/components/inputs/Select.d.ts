import React from 'react';
export interface SelectOption {
    value: string;
    label: string;
}
export interface SelectProps {
    value?: string;
    onChange?: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
}
export declare const Select: React.FC<SelectProps>;
//# sourceMappingURL=Select.d.ts.map