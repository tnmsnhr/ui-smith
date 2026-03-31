import { createDesignSystemConfig } from '../config/createDesignSystemConfig';
export const exampleCustomConfig = createDesignSystemConfig({
    tokens: {
        core: {
            typography: {
                fontFamily: {
                    body: 'Inter',
                    heading: 'Inter',
                    mono: 'JetBrainsMono'
                }
            },
            colors: {
                primary: {
                    '50': '#E5F0FF',
                    '100': '#CCE0FF',
                    '200': '#99C2FF',
                    '300': '#66A3FF',
                    '400': '#3385FF',
                    '500': '#0066FF',
                    '600': '#0052CC',
                    '700': '#003D99',
                    '800': '#002966',
                    '900': '#001433'
                }
            }
        }
    },
    components: {
        Button: {
            defaultProps: {
                size: 'lg',
                variant: 'solid'
            }
        }
    }
});
//# sourceMappingURL=exampleCustomConfig.js.map