<template>
    <div class="cat-popover-body">
        <div style="cursor: pointer;" >
            <slot name="reference"></slot>
        </div>
        <transition name="fade">
            <cc-row 
                justify="center" 
                align="center" 
                class="cat-popover-box">
                <div class="cat-popover--tool">
                    wishing一个分数阶
                </div>
            </cc-row>
        </transition>
    </div>
</template>
<style lang="scss">
    .cat-popover-body {
        position: relative;
        width: fit-content;
    }
    .cat-popover-box {
        z-index: 99;
        position: absolute;
        width: 100%;
        .cat-popover--tool {
            background-color:  $--color-white;
            box-shadow: $--popover-box-shadow;
            padding: $--popover-padding;
            color: $--popover-color;
            font-size: $--popover-font-size;
            border-radius: $--popover-radius;
            width: fit-content;
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

        },
        data() {
            return {
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