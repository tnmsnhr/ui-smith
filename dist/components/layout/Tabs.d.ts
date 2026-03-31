import React from 'react';
export interface TabItem {
    key: string;
    label: string;
}
export interface TabsProps {
    tabs: TabItem[];
    activeKey: string;
    onChange: (key: string) => void;
}
export declare const Tabs: React.FC<TabsProps>;
//# sourceMappingURL=Tabs.d.ts.map