<template>
    <div
        class="cat-main">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .cat-main {
        width: 100%;
        height: 100%;
        background-color: $--color-grey;
    }
</style>
<script>
    export default {
        name: 'CcMain',
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