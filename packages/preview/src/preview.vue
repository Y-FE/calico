<template>
</template>
<style lang="scss">
</style>
<script>
    export default {
        name: 'CcPreview',
        components: {
        },
        props: {},
        data() {
            return {
                // 激活状态
                active: {
                    type: Boolean,
                    default: false,
                },
                //operate区是否hover出现
                operate: {
                    type: Boolean,
                    default: false,
                },
                // 序号
                order: {
                    type: Number | String,
                    default: 0,
                },
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            deletItem() {
                if (!operate) {
                    return;
                } else {
                    this.$emit('delete-item');
                }
            },
            changeOrder(direction) {
                // direction: up / down
                if (!operate) {
                    return;
                } else {
                    this.$emit('change-order', direction);
                }
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