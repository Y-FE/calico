export default component => {
    component.props.title = {
        type: String,
        default: ''
    };
    return {
        ...component,
        render(h) {
            return h('div', [
                h('p', { class: { 'cat-select-title': true } }, this.title),
                component.render.call(this, h)
            ]);
        }
    };
};
