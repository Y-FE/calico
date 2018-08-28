<template>
    <cc-row 
        @mouseover.native="mouseChange(true)"
        @mouseleave.native="mouseChange(false)"
        justify="center" 
        align="center"  
        direction="column" 
        class="cat-popover-body" >
        <div style="cursor: pointer;" >
            <slot name="reference"></slot>
        </div>
        <div class="cat-popover--box">
            <transition name="fade-in">
                <cc-row 
                    v-show="showState"
                    justify="center" 
                    align="center" 
                    class="cat-popover--box-main">
                    <div class="cat-popover--tool" :style="{'min-width': `${width}px`}">
                        <slot>caclo威武</slot>
                    </div>
                </cc-row>
            </transition>
        </div>
    </cc-row>
</template>
<style lang="scss">
    .cat-popover-body {
        position: relative;
        width: fit-content;
    }
    .cat-popover--box {
        margin-top: 5px;
    }
    .cat-popover--box-main {
        z-index: $--popover-z-index;
        position: absolute;
        transform: translateX(-50%);
        width: 100%;
        .cat-popover--tool {
            background-color: $--popover-fill;
            box-shadow: $--popover-box-shadow;
            padding: $--popover-padding;
            color: $--popover-color;
            font-size: $--popover-font-size;
            border-radius: $--popover-radius;
        }
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcPopover',
        components: {
            ccRow,
        },
        props: {
            //Boolean: 手动控制组件的消失和出现
            show: {
                type: String | Boolean,
                default: 'hover'
            },
            width: {
                type: String | Number,
                default: 182
            },
        },
        data() {
            return {
                visible: false,
            }
        },
        computed: {
            showState() {
                if (typeof(this.show) !== 'string') {
                    this.visible = this.show;
                }
                return this.visible;
            },
        },
        watch: {
        },
        methods: {
            mouseChange(val) {
                if (typeof(this.show) !== 'string') {
                    return;
                }
                this.visible = val;
            },
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>