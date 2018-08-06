import { VNodeDirective, VNode } from "../../node_modules/vue";

const groups = new Map();

function selected(e: MouseEvent): boolean {
    return false;
}

// v-croup.origin:key
export default {
    bind(el: HTMLElement, binding: VNodeDirective, vnode: VNode) {

        let key = binding.arg;
        let isOrigin = binding.modifiers.origin;

        let func = binding.value;

        el.addEventListener('drop', e => {
            e.preventDefault();
            let item = e.dataTransfer.getData('item');
            func(item);
        });

        el.addEventListener('dragover', e => {
            e.preventDefault();
        });
    },
    inserted() {},
    update() {},
    componentUpdated() {},
    unbind() {}
}