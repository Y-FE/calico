<template>
    <div>
        <i class="iconfont icon-icon-zidingyishezhi"></i>
    </div>
</template>
<style lang="scss">
</style>
<script>
    export default {
        name: 'CcToolItem',
        components: {
        },
        props: {
            icon: {
                type: String,
                default: 'icon-icon-zidingyishezhi',
            },
            title: {
                type: String,
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false,
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
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>