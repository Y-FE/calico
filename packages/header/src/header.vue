<template>
    <cc-row justify="space-between" align="center" class="cat-header-body">
        <cc-row align="center">
            <slot name="left"></slot>
        </cc-row>
        <cc-row align="center">
            <slot name="center"></slot>
        </cc-row>
        <cc-row align="center">
            <slot name="right"></slot>
        </cc-row>
    </cc-row>
</template>
<style lang="scss">
    .cat-header-body {
        width: 100%;
        height: $--header-height;
        background-color: $--header-background-color;

        border-bottom: $--color-black-opacity-1 1px solid;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcHeader',
        components: {
            ccRow
        },
        props: {},
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