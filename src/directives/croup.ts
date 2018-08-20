import { VNodeDirective, VNode } from "../../node_modules/vue";

const groups = new Map();

function selected(e: MouseEvent): boolean {
    return false;
}
let itemValue: {
    fun?: Function,
    value?: any
};
// v-croup.origin:key
export default {
    bind(el: HTMLElement, binding: VNodeDirective, vnode: VNode) {
        //有同一个key的就是一家人
        let key = binding.arg;
        //绑定{fun(), value}
        let value = binding.value;
        // 放置区
        let isOrigin = binding.modifiers.origin;
        // 拖拽条目
        let isItem = binding.modifiers.item;
        //拖拽条目
        if (isItem) {
            let itemgroup = groups.get(key);
            if (itemgroup) {
                itemgroup.push(value);
            } else {
                groups.set(key, [value]);
            }
            el.addEventListener('dragstart', e => {
                itemValue = value;
            });
        } else {
            // 拖动放置到可释放目标时[放置区方法]
            el.addEventListener('drop', e => {
                e.preventDefault();
                // console.log(itemValue);
                let itemgroup = groups.get(key);
                if (!itemgroup) {
                    // value.fun(false);
                    return;
                }
                let ifGroup = itemgroup.some((i: Object) => i === itemValue);
                if (!ifGroup) {
                    return;
                    // value.fun(false);
                }
                //执行拖拽条目方法
                if (itemValue.fun) {
                    itemValue.fun(itemValue.value, value.value);
                }
                // 执行放置区方法
                if (value.fun) {
                    value.fun(itemValue.value, value.value);
                }
                itemValue = {};
            });
            // 拖动到可释放目标区域时触发[放置区方法]
            el.addEventListener('dragover', e => {
                e.preventDefault();
                // el.style.borderLeft = '1px solid red';
                // el.style.borderRight = '1px solid red';
            });
            // el.addEventListener('dragleave', e => {
            //     e.preventDefault();
            //     el.style.borderLeft = '';
            //     el.style.borderRight = '';
            // });
            // el.addEventListener('dragend', e => {
            //     console.log('eee');
            //     e.preventDefault();
            //     el.style.borderLeft = '';
            //     el.style.borderRight = '';
            // });
        }
    },
    inserted() {},
    update() {},
    componentUpdated() {},
    unbind() {}
}