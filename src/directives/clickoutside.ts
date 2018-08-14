import { VNodeDirective, VNode } from "../../node_modules/vue";

export default {
    bind(el: HTMLElement, binding: VNodeDirective, vnode: VNode) {
        function documentHandler (e) {
          if (el.contains(e.target)) {
            return false
          }
          if (binding.expression) {
            binding.value(e)
          }
        }
        console.log(el);
        el.__vueClickOutSide__ = documentHandler
        document.addEventListener('click', documentHandler)
    },
    inserted (el:HTMLElement) {
        console.log(el)
    },
    update() {},
    componentUpdated() {},
    unbind(el: HTMLElement, binding: VNodeDirective) {
        document.removeEventListener('click', el.__vueClickOutSide__)
        delete el.__vueClickOutSide__
    }
}