export const modelProp = 'ccValue';
export const modelEvent = 'ccInput';
export const model = 'ccModel';
export const parent = '_parent';

export function ccModel(Type) {
    return {
        model: {
            prop: modelProp,
            event: modelEvent
        },
        props: {
            [modelProp]: {
                type: Type
            }
        },
        computed: {
            [model]: {
                get() {
                    return this[modelProp];
                },
                set(value) {
                    this.$emit(modelEvent, value);
                }
            }
        }
    };
}

export function ccParent(componentName) {
    return {
        computed: {
            [parent]() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== componentName) {
                        parent = parent.$parent;
                    } else {
                        return parent;
                    }
                }
                return false;
            }
        }
    };
}
