<template>
    <cc-row 
        @mouseover.native="mouseChange(true)"
        @mouseleave.native="mouseChange(false)"
        justify="center" 
        align="center"  
        direction="column" 
        class="cat-popover-body" >
        <div style="cursor: pointer; width: 100%" ref="catPopoverP">
            <slot name="reference"></slot>
        </div>
        <div class="cat-popover--box" 
            :style="{position: direction === 'bottom' ? 'relative' : 'absolute'}">
            <transition name="drop-down">
                <cc-row 
                    v-show="showState"
                    justify="center" 
                    align="center" 
                    class="cat-popover--box-main"
                    :style="style">
                    <div class="cat-popover--tool" :style="{'min-width': `${width}px`}">
                        <slot>calico威武</slot>
                    </div>
                </cc-row>
            </transition>
        </div>
    </cc-row>
</template>
<style lang="scss">
    .cat-popover-body {
        width: fit-content;
        position: relative;
    }
    .cat-popover--box {
        position: relative;
    }
    .cat-popover--box-main {
        z-index: $--popover-z-index;
        position: absolute;
        // width: 100%;
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
            //'bottom','top','left', 'right' 不支持动态
            //bottomStart bottomEnd
            //topStart topEnd
            //leftStart leftEnd
            //rightStart rigthEnd
            direction: {
                type: String,
                default: 'bottom'
            }, 
            // 对top、bottom  右正，左负
            // 对left、right 下正，上负
            offset: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                visible: false,
                sizeP: {
                    width: '',
                    height: '',
                },
                style: {},
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
            showState() {
                this.getSize();
                this.caclStyle();
            }
        },
        methods: {
            mouseChange(val) {
                if (typeof(this.show) !== 'string') {
                    return;
                }
                this.visible = val;
            },
            getSize() {
                this.sizeP.width = this.$refs.catPopoverP.offsetWidth;
                this.sizeP.height = this.$refs.catPopoverP.offsetHeight;
            },
            caclStyle() {
                // bottom
                if (this.direction === 'bottom') {
                    this.style = {
                        top: '10px',
                        transform: 'translateX(-50%)',
                        left: `${this.offset}px`,
                    };
                }
                if (this.direction === 'bottomStart') {
                    this.style = {
                        top: `${(this.sizeP.height / 2 + 10)}px`,
                        left: `${-(this.sizeP.width / 2) + this.offset}px`
                    };
                }
                if (this.direction === 'bottomEnd') {
                    this.style = {
                        top: `${(this.sizeP.height / 2 + 10)}px`,
                        right: `${-(this.sizeP.width / 2 + this.offset)}px`
                    };
                }
                //top
                if (this.direction === 'top') {
                    this.style = {
                        top: `${-(this.sizeP.height / 2) - 10}px`,
                        transform: 'translate(-50%, -100%)',
                        left: `${this.offset}px`
                    };
                }
                if (this.direction === 'topStart') {
                    this.style = {
                        top: `${-(this.sizeP.height / 2) - 10}px`,
                        transform: 'translateY(-100%)',
                        left:  `${-(this.sizeP.width / 2) + this.offset}px`
                    };
                }
                if (this.direction === 'topEnd') {
                    this.style = {
                        top: `${-(this.sizeP.height / 2) - 10}px`,
                        transform: 'translateY(-100%)',
                        right:  `${-(this.sizeP.width / 2 + this.offset)}px`
                    };
                }
                // left
                if (this.direction === 'left') {
                    this.style = {
                        transform: 'translate(-100%, -50%)',
                        left: `${-(this.sizeP.width / 2 + 10)}px`,
                        top: `${this.offset}px`,
                    };
                }
                if (this.direction === 'leftStart') {
                    this.style = {
                        transform: 'translateX(-100%)',
                        left: `${-(this.sizeP.width / 2 + 10)}px`,
                        top: `${(-this.sizeP.height / 2) + this.offset}px`
                    };
                }
                if (this.direction === 'leftEnd') {
                    this.style = {
                        transform: 'translate(-100%, -100%)',
                        left: `${-(this.sizeP.width / 2 + 10)}px`,
                        top: `${(this.sizeP.height / 2) + this.offset}px`
                    };
                }
                //right
                if (this.direction === 'right') {
                    this.style = {
                        transform: 'translateY(-50%)',
                        left: `${(this.sizeP.width / 2 + 10)}px`,
                        top: `${this.offset}px`,
                    };
                }
                if (this.direction === 'rightStart') {
                    this.style = {
                        left: `${(this.sizeP.width / 2 + 10)}px`,
                        top: `${(-this.sizeP.height / 2) + this.offset}px`
                    };
                }
                if (this.direction === 'rightEnd') {
                    this.style = {
                        transform: 'translateY(-100%)',
                        left: `${(this.sizeP.width / 2 + 10)}px`,
                        top: `${(this.sizeP.height / 2) + this.offset}px`
                    };
                }
            },
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.getSize();
            this.caclStyle();
        }
    }
</script>