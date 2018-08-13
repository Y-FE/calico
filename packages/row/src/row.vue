<template>
    <div class="cat-layout-flex" :style="style">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .cat-layout-flex {
        display: flex;
    }
    // @mixin cat-layout-flex--justify($val: center) {
    //     @extend .cat-layout-flex;
    //     justify-content: $val;
    // }
    // @mixin cat-layout-flex--align($val: center) {
    //     @extend .cat-layout-flex;
    //     align-items: $val;
    // }
</style>
<script>
    export default {
        name: 'CcRow',
        components: {
        },
        props: {
            // row | row-reverse | column | column-reverse;
            direction: {
                type: String,
                default: 'row',
            },
            // nowrap | wrap | wrap-reverse;
            wrap: {
                type: String,
                default: 'nowrap',                
            },
            // flex-start | flex-end | center | space-between | space-around;
            justify: {
                type: String,
                default: 'flex-start',
            },
            // flex-start | flex-end | center | baseline | stretch;
            align: {
                type: String,
                default: 'stretch',
            },
        },
        data() {
            return {
                style: {},
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            initStyle() {
                this.style = {
                    flexDirection: this.direction,
                    flexWrap: this.wrap,
                    justifyContent: this.justify,
                    alignItems: this.align,
                }; 
            },
        },
        created() {
            this.initStyle();
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>