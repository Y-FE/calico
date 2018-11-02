import { VNodeDirective, VNode } from "../../node_modules/vue";
export default {
    bind() {},
    inserted(el: HTMLElement, binding: VNodeDirective, vnode: VNode) {
        let focusable = binding.value;
        if (focusable) {
            el.focus();
        } else {
            el.blur();
        }
    },
    update() { },
    componentUpdated() { },
    unbind() {

    }
}