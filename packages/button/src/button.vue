<template>
    <button @click="buttonClick">
        <slot></slot>
    </button>
</template>
<style lang="scss">
    .main {
        color: $--cat-color-primary;
    }
</style>
<script>
    export default {
        name: 'CcButton',
        components: {
        },
        props: {
            // 类型
            type: {
                type: String,
                default: 'primary'
            },
            //形状
            shape: {
                type: String,
                default: 'square'
            },
            //是否禁用
            disabled: {
                type: Boolean,
                default: false,
            }
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
            buttonClick() {
                this.$emit('click');
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