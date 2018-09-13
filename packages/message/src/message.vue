<template>
    <transition name="silde">
        <cc-row 
            justify="space-between"
            align="center"
            class="cat-message-body"
            :class="`cat-message-${type}`"
            v-if="show">
            <p>{{message}}</p>
            <i class="iconfont icon-close" v-if="showClose" @click="close()"></i>
        </cc-row>
    </transition>
</template>
<style lang="scss">
    .cat-message-body {
        color: $--message-color;
        font-size: $--message-font-size;
        border-radius: $--message-radius;
        padding: $--message-padding;
        width: $--message-width;
        position: fixed;
        top: 72px;
        left: calc(50% - 26px);
        z-index: $--message-z-index;
        p {
            width: 200px;
            line-height: $--message-line-height;
        }
        i {
            cursor: pointer;
            font-size: $--message-font-size;
            &:hover {
                filter: $--color-brightness-base;
            }
        }
    }
    .cat-message-info {
        background-color: $--message-fill-info;
    }
    .cat-message-error {
        background-color: $--message-fill-error;
    }
    .cat-message-warning {
        background-color: $--message-fill-warning;
    }
    .cat-message-success {
        background-color: $--message-fill-success;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcMessage',
        components: {
            ccRow,
        },
        props: {
        },
        data() {
            return {
                show: false,
                message: null,
                showClose: false,
                duration: 3000,
                //info error warning success
                type: 'info',
                timeout: null,
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            startTime(){
                this.show = true;
                if(this.duration === 0) {
                    return;
                }
                this.timeout = setTimeout(() => {
                    this.close();
                }, this.duration);
            },
            close() {
                this.timeout && clearTimeout(this.timeout);
                this.show = false;
                setTimeout(() => {
                    this.$destroy(true);
                    if(this.$el && this.$el.parentNode) {
                        this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
                    } else {
                        console.error('message already closed!!');
                    }
                }, 500);
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.startTime();
        }
    }
</script>