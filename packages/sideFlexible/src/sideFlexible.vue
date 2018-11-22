<template>
    <div class="cat-side-flexible-body">
        <transition :name="`slide-flex-${direction}`">
            <cc-row 
                v-show="show"
                :direction="directionPosition[direction]" 
                justify="space-between"
                :style="{'width' : width ? `${width}px` : ''}">
                <cc-row 
                    justify="center" 
                    align="center" 
                    class="cat-side-flexible--expand-body"
                    :class="[`cat-side-flexible--expand-body-${direction}`]"
                    @click.native="setShow(false)">
                    <i class="iconfont cat-side-flexible--icon" :class="`icon-open-takeup-${direction}`"></i>
                </cc-row>
                <div>
                    <slot></slot>
                </div>
            </cc-row>
        </transition>
        <transition :name="`slide-flex-${direction}`">
            <cc-row 
                v-if="!show"
                direction="column" 
                align="center"
                class="cat-side-flexible--collapse-body"
                :class="`cat-side-flexible--collapse-radius-${direction}`"
                @click.native="setShow(true)">
                <i class="iconfont cat-side-flexible--icon" :class="`icon-open-takeup-${directionIcon[direction]}`"></i>
                <p class="cat-side-flexible--p">{{title}}</p>
            </cc-row>
        </transition>
    </div>
</template>
<style lang="scss">
    .cat-side-flexible-body {
        position: relative;
    }
    .cat-side-flexible--expand-body {
        margin-top: 10px;
        background-color: $--side-flexible-fill;
        width: $--side-flexible-expand-width;
        height: $--side-flexible-expand-height;
        border-radius: $--side-flexible-radius;
        cursor: pointer;
        position: absolute;
    }
    .cat-side-flexible--expand-body-left {
        right: -41px;
    }
    .cat-side-flexible--expand-body-right {
        left: -41px;
    }
    .cat-side-flexible--collapse-body {
        background-color: $--side-flexible-fill;
        width: $--side-flexible-collapse-width;
        padding: $--side-flexible-collapse-padding; 
        font-size: $--side-flexible-font-size;
        color: $--side-flexible-color;
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 10px;
    }
    .cat-side-flexible--collapse-radius-left {
        border-radius: 0 $--side-flexible-radius $--side-flexible-radius 0;
    }
    .cat-side-flexible--collapse-radius-right {
        border-radius: $--side-flexible-radius 0  0 $--side-flexible-radius;
    }
    .cat-side-flexible--icon {
        font-size: $--side-flexible-icon-font-size;
        color: $--side-flexible-icon-color
    }
    .cat-side-flexible--p {
        margin-top: 8px;
        line-height: 16px;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcSideFlexible',
        components: {
            ccRow
        },
        props: {
            // left, right
            direction: {
                type: String,
                default: 'left',
            },
            width: {
                type: String,
                default: '',
            },
            //是否展示
            show: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                directionPosition: {
                    left: 'row-reverse',
                    right: 'row'
                },
                directionIcon: {
                    left: 'right',
                    right: 'left'
                },
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            setShow(val) {
                this.$emit('update:show', val);
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