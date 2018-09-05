import CcMessage from './src/message';
export default {
    install: Vue => {
        const MessageConstructor = Vue.extend(CcMessage);
        let MessageInstance;
        let init = (message, type) => {
            let objType = !(message instanceof Array) && (message instanceof Object) ? true : false;
            MessageInstance = new MessageConstructor({
                data: {
                    message: objType ? message.message : message,
                    showClose: objType && typeof(message.showClose) === 'boolean' ? message.showClose : false,
                    duration: objType && typeof(message.duration) === 'number' ? message.duration : 3000,
                    type: type
                }
            });
            MessageInstance.$mount();
            MessageInstance.dom = MessageInstance.$el;
            document.body.appendChild(MessageInstance.dom);
            return MessageInstance;
        };
        let Message = (message) => {
            init(message, 'info');
        }
        Message.info = (message) => {
            init(message, 'info');
        };
        Message.error = (message) => {
            init(message, 'error');
        };
        Message.warning = (message) => {
            init(message, 'warning');
        };
        Message.success = (message) => {
            init(message, 'success');
        };
        // Message.sucess = ()
        Vue.prototype.$message = Message;
    }
};
// CcMessage.install = function(Vue) {
//     Vue.component(CcMessage.name, CcMessage);
// };

// export default CcMessage;
