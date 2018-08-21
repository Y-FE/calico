<template>
    <div class="cat-aside-body">
        <cc-row 
            justify="center" 
            align="center"
            class="cat-aside--head">
            <slot name="head">
                头
            </slot>
        </cc-row>
        <cc-row 
            justify="center" 
            align="center" 
            direction="column" 
            class="cat-aside--body">
            <slot name="body">
                身体
            </slot>
        </cc-row>
        <cc-row 
            justify="center" 
            align="center" 
            direction="column" 
            class="cat-aside--foot">
            <slot name="foot">
                脚
            </slot>
        </cc-row>
    </div>
</template>
<style lang="scss">
    .cat-aside-body {
        width: $--aside-width;
        height: 100%;
    }
    .cat-aside--head {
        height: $--aside-head-height;
    }
    .cat-aside--body {
        height: $--aside-body-height;
        border: 1px solid $--aside-body-border-color;
        border-left: none;
        overflow-y: auto;
        padding: $--aside-body-padding;
    }
    .cat-aside--foot {
        height: $--aside-foot-height;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcAside',
        components: {
        },
        props: {
            left: {
                type: Boolean,
                default: true,
            },
            right: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                ccRow
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>