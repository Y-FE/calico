<template>
    <cc-row class="cat-header-group">
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-header-group {
        padding: 0 14px;
    }
    .cat-header-group > * {
        padding: 0 10px;
    }
</style>
<script>
    export default {
        name: 'CcHeaderGroup',
        components: {
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