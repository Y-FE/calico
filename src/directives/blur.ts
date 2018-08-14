import { VNodeDirective, VNode } from "../../node_modules/vue"; 
let handler: (e: MouseEvent) => void;
export default {
    bind(el: HTMLElement, binding: VNodeDirective, vnode: VNode) {
        handler = e => {
            if (el.contains(<Node>e.target)) {
                return;
            }
            if (binding.expression) {
                binding.value();
            }
        }
        document.addEventListener('click', handler);
    },
    inserted(el: HTMLElement) {},
    update() { },
    componentUpdated() { },
    unbind() {
        document.removeEventListener('click', handler);
    }
}