<template>
    <transition name="fade">
        <cc-row 
            class="cat-modal" 
            justify="center" 
            align="center"
            v-if="show">
            <div 
                class="cat-modal--main" 
                :style="{'width': `${width}px`}">
                <cc-row 
                    justify="space-between" 
                    align="center" 
                    class="cat-modal--header-body"
                    :class="line ? 'cat-modal--header-line' : ''">
                    <div>
                        <slot name="title">{{title}}</slot>
                    </div>
                    <slot name="head-right">
                        <i v-if="showClose" 
                            class="iconfont icon_calico-close-window cat-modal--header-icon"
                            @click="close">
                        </i>
                    </slot>
                </cc-row>
                <div class="cat-modal--body">
                    <slot name="body"></slot>
                </div>
                <cc-row 
                    justify="flex-end" 
                    align="center" 
                    class="cat-modal--footer"
                    :class="line ? 'cat-modal--footer-line' : ''">
                    <slot name="footer">
                        <div>
                            <cc-button type="default" @click="cancel">取消</cc-button>
                            <cc-button @click="sure">确定</cc-button>
                        </div>
                    </slot>
                </cc-row>
            </div>
        </cc-row>
    </transition>
</template>
<style lang="scss">
    .cat-modal {
        top: 0;
        left: 0;
        position: fixed;
        z-index: $--modal-z-index;
        height: 100%;
        width: 100%;
        background-color: $--modal-fill;
    }
    .cat-modal--main {
        border-radius: $--modal-main-radius;
        background-color: $--modal-main-fill;
    }
    .cat-modal--header-body {
        min-height: 56px;
        padding: $--modal-header-padding;
        color: $--modal-header-color;
        font-size: $--modal-header-font-size;
        .cat-modal--header-icon {
            font-size: $--modal-header-icon-font-size;
            cursor: pointer;
        }
    }
    .cat-modal--body {
        padding: $--modal-body-padding;
        font-size: $--modal-body-font-size;
        color: $--modal-body-color;
    }
    .cat-modal--footer {
        padding: $--modal-footer-padding;
    }
    .cat-modal--header-line {
        border-bottom: 1px solid $--modal-line;
    }
    .cat-modal--footer-line {
        border-top: 1px solid $--modal-line;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    import ccButton from '@packages/button/src/button.vue';
    export default {
        name: 'CcModal',
        components: {            
            ccRow,
            ccButton
        },
        props: {
            //宽度
            width: {
                type: String | Number,
                default: 580,
            },
            //是否展示
            show: {
                type: Boolean,
                default: false,
            },
            //是否展示x号
            showClose: {
                type: Boolean,
                default: true,
            },
            //title
            title: {
                type: String,
                default: '',
            },
            // 线
            line: {
                type: Boolean,
                default: true,
            }
        },
        data() {
            return {
            }
        },
        computed: {
            // showModal: {
            //     get() {
            //         return this.show;
            //     },
            //     set(val) {
            //         this.$emit('update:show', val);
            //     }
            // },
        },
        watch: {
        },
        methods: {
            cancel() {
                this.$emit('modal-cancel');
            },
            sure() {
                this.$emit('modal-sure');
            },
            close() {
                this.$emit('update:show', false);
                // this.showModal = false;
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            // let body = document.getElementsByName('body')[0];
            // body.style.overflowY = 'hidden';
        }
    }
</script>