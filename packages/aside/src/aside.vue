<template>
    <cc-row>

    </cc-row>
</template>
<style lang="scss">
    .cat-aside-body--left {
        
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