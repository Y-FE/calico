const modelProp = 'ccValue';
const modelEvent = 'ccInput';
const model = 'ccModel';
const parent = '_parent';

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

export function setParentModel(value) {
    this[parent][model] = value;
}

export function getModel() {
    return this[modelProp];
}

export function getParentModel() {
    return this[parent][model];
}


