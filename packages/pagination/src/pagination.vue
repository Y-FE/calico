<template>
</template>
<style lang="scss">
</style>
<script>
    export default {
        name: 'CcPagination',
        components: {
        },
        props: {
            // 总条目数
            total: {
                type: String | Number,
                default: 0,
            },
            //当前页
            currentPage: {
                type: String | Number,
                default: 1,
            },
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
            preClick() {
                let page = parseInt(this.currentPage) - 1;
                this.$emit('pre-click', page);
                this.$emit('current-change', page);
            },
            nextClick() {
                let page = parseInt(this.currentPage) + 1;
                this.$emit('next-click', page);
                this.$emit('current-change', page);
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