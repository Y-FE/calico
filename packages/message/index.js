import CcMessage from './src/message';

export default {
    install: Vue => {
        const MessageConstructor = Vue.extend(CcMessage);
        let MessageInstance;
        let Message = content => {
            MessageInstance = new MessageConstructor({
                data: {
                    message: content
                }
            });
            MessageInstance.$mount();
            MessageInstance.dom = MessageInstance.$el;
            document.body.appendChild(MessageInstance.dom);
            return MessageInstance;
        };
        Vue.prototype.$message = Message;
    }
};
// CcMessage.install = function(Vue) {
//     Vue.component(CcMessage.name, CcMessage);
// };

// export default CcMessage;
