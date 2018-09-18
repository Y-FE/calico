<template>
    <cc-row justify="center" align="center"  direction="column" class="cat-tooltip-body" 
        @mouseover.native="mouseChange(true)"
        @mouseleave.native="mouseChange(false)">
        <div style="cursor: pointer;" ref="catTooltipP">
            <slot></slot>
        </div>
        <div class="cat-tooltip--box" 
            :style="{position: direction === 'bottom' ? 'relative' : 'absolute'}">
            <transition name="fade-in">
                <cc-row justify="center" align="center" 
                    class="cat-tooltip--box-main" 
                    :style="style"
                    v-show="showState">
                    <div class="cat-tooltip--arrow"
                        :class="`cat-tooltip--arrow-${theme}`"
                        :style="styleArrow">
                    </div>
                    <cc-row 
                        justify="center" 
                        align="center" 
                        :class="`cat-tooltip--${theme}`"
                        class="cat-tooltip--tool">
                        {{content}}
                    </cc-row>
                </cc-row>
            </transition>
        </div>
    </cc-row>
</template>
<style lang="scss">
    .cat-tooltip-body {
        width: fit-content;
        position: relative;
    }
    .cat-tooltip--box {
        position: relative;
    }
    .cat-tooltip--box-main {
        // top: 11px;
        z-index: $--tooltip-z-index;
        position: absolute;
        // transform: translateX(-50%);
        transition: $--transition-base;
        .cat-tooltip--arrow {
            position: absolute;
            width: 0;
            height: 0;
            border-left: $--tooltip-arrow-size / 2 solid transparent;
            border-right: $--tooltip-arrow-size / 2 solid transparent;
            border-bottom: $--tooltip-arrow-size solid;
        }
        .cat-tooltip--arrow-dark {
            border-bottom-color: $--tooltip-dark-fill;
        }
        .cat-tooltip--arrow-light {
            border-bottom-color: $--tooltip-light-fill;
        }
        .cat-tooltip--tool {
            font-size: $--tooltip-font-size;
            color: $--tooltip-color;
            padding: $--tooltip-padding;
            border-radius: $--tooltip-radius;
            width: fit-content;
            white-space: nowrap;
        }
        .cat-tooltip--dark {
            background-color: $--tooltip-dark-fill;
        }
        .cat-tooltip--light {
            background-color: $--tooltip-light-fill;
        }
    }
   
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcTooltip',
        components: {
            ccRow,
        },
        props: {
            //Boolean: 手动控制组件的消失和出现
            show: {
                type: String | Boolean,
                default: 'hover'
            },
            // 主题： dark/light
            theme: {
                type: String,
                default: 'dark'
            },
            content: {
                type: String | Number,
                default: 'calico'
            },
            direction: {
                type: String,
                default: 'bottom'
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
                styleArrow: {},
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
            getSize() {
                this.sizeP.width = this.$refs.catTooltipP.offsetWidth;
                this.sizeP.height = this.$refs.catTooltipP.offsetHeight;
            },
            caclStyle() {
                let arrSize= 6;
                // bottom
                if (this.direction === 'bottom') {
                    this.style = {
                        top: '10px',
                        transform: 'translateX(-50%)',
                    };
                    this.styleArrow = {
                        top: `-${arrSize}px`
                    }
                }
                // left
                if (this.direction === 'left') {
                    this.style = {
                        transform: 'translate(-100%, -50%)',
                        left: `${-(this.sizeP.width / 2 + 10)}px`,
                    };
                    this.styleArrow = {
                        right: `-${arrSize}px`,
                        transform: 'rotateZ(90deg)'
                    }
                }
                //right
                if (this.direction === 'right') {
                    this.style = {
                        transform: 'translateY(-50%)',
                        left: `${(this.sizeP.width / 2 + 10)}px`,
                    };
                    this.styleArrow = {
                        left: `-${arrSize}px`,
                        transform: 'rotateZ(-90deg)'
                    }
                }
                //top
                if (this.direction === 'top') {
                    this.style = {
                       transform: 'translate(-50%, -100%)',
                       top: `${-(this.sizeP.height / 2) - 10}px`,
                    };
                    this.styleArrow = {
                        bottom: `-${arrSize}px`,
                        transform: 'rotateZ(180deg)'
                    }
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