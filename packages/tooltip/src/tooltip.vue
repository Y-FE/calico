<template>
    <div class="cat-tooltip-body">
        <div style="cursor: pointer;" 
            @mouseover="mouseChange(true)"
            @mouseleave="mouseChange(false)">
            <slot></slot>
        </div>
        <transition name="fade-in">
            <cc-row justify="center" align="center" class="cat-tooltip-box" v-if="showState">
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
</template>
<style lang="scss">
    .cat-tooltip-body {
        position: relative;
        width: fit-content;
    }
    .cat-tooltip-box {
        position: absolute;
        bottom: -37px;
        width: 100%;
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
            console.log(this.show);
        }
    }
</script>