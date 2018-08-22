export default component => {
    component.props.title = {
        type: String,
        default: ''
    };
    return {
        ...component,
        render(h) {
            let children = [component.render.call(this, h)];
            if (this.title) {
                children.unshift(
                    h('p', { class: { 'cat-select-title': true } }, this.title)
                );
            }
            return h('div', children);
        }
    };
};
