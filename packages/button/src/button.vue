<template>
    <div class="main">
        <!-- <slot></slot> -->
        88877
    </div>
</template>
<style lang="scss">
    // @import '../../../src/css/index.scss';
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
            type: {
                type: String,
                default: 'primary'
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