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
            // 状态 default：普通状态， active: 激活状态
            state: {
                type: String,
                default: 'default',
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