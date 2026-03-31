import React from 'react';
export interface MenuItem {
    key: string;
    label: string;
}
export interface MenuProps {
    visible: boolean;
    items: MenuItem[];
    onSelect: (key: string) => void;
    onDismiss: () => void;
}
export declare const Menu: React.FC<MenuProps>;
//# sourceMappingURL=Menu.d.ts.map