<template>
    <cc-row justify="center" align="center"  direction="column" class="cat-tooltip-body" 
        @mouseover.native="mouseChange(true)"
        @mouseleave.native="mouseChange(false)">
        <div style="cursor: pointer;" >
            <slot></slot>
        </div>
        <div class="cat-tooltip--box">
            <transition name="fade-in">
                <cc-row justify="center" align="center" class="cat-tooltip--box-main" v-show="showState">
                    <div class="cat-tooltip--arrow"
                        :class="`cat-tooltip--arrow-${theme}`">
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
        margin-top: 11px;
    }
    .cat-tooltip--box-main {
        z-index: 99;
        position: absolute;
        transform: translateX(-50%);
        transition: $--transition-base;
        .cat-tooltip--arrow {
            position: absolute;
            width: 0;
            height: 0;
            border-left: $--tooltip-arrow-size / 2 solid transparent;
            border-right: $--tooltip-arrow-size / 2 solid transparent;
            border-bottom: $--tooltip-arrow-size solid;
            top: -$--tooltip-arrow-size;
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