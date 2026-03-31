import { useContext } from 'react';
import { DesignSystemContext } from '../provider/DesignSystemContext';
export const useTheme = () => {
    const ctx = useContext(DesignSystemContext);
    if (!ctx) {
        throw new Error('useTheme must be used within a DesignSystemProvider');
    }
    return ctx.theme;
};
//# sourceMappingURL=useTheme.js.map