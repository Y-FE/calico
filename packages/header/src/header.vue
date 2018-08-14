<template>
    <cc-row justify="space-between" align="center" class="cat-header-body">
        <cc-row justify="space-between" align="center" style="width: 585px;">
            <slot name="left"></slot>
        </cc-row>
        <cc-row justify="space-between" align="center" style="width: 545px;">
            <slot name="right"></slot>
        </cc-row>
    </cc-row>
</template>
<style lang="scss">
    .cat-header-body {
        width: 100%;
        height: $--header-height;
        padding: $--header-padding;
        background-color: $--header-background-color;
    }
</style>
<script>
    import ccRow from '../../row/src/row.vue';
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