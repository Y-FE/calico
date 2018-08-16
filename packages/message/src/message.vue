<template>
    <transition name="silde">
        <cc-row 
            justify="space-between"
            align="center"
            class="cat-message-body"
            v-if="show">
            <p>{{message}}</p>
            <i class="iconfont icon-close" @click="close()"></i>
        </cc-row>
    </transition>
</template>
<style lang="scss">
    .cat-message-body {
        color: $--message-color;
        font-size: $--message-font-size;
        background-color: $--message-fill;
        border-radius: $--message-radius;
        padding: $--message-padding;
        width: $--message-width;
        position: fixed;
        top: 72px;
        left: calc(50% - 26px);
        z-index: 100;
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
 
    
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcMessage',
        components: {
            ccRow,
        },
        props: {},
        data() {
            return {
                show: false,
                message: null,
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            startTime(){
                this.show = true;
                // setTimeout(() => {
                //     this.close();
                // }, 3000);
            },
            close() {
                this.show = false;
                setTimeout(() => {
                    this.$destroy(true);
                    this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
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