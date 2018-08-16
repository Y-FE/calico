<template>
    <div class="cat-float-panel-body" draggable="true">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .cat-float-panel-body {
        background-color: $--float-panel-fill;
        box-shadow: $--float-panel-box-shadow;
        padding: $--float-panel-padding;
        border-radius: $--float-panel-radius;
        width: fit-content;
        cursor: pointer;
    }
</style>
<script>
    export default {
        name: 'CcFloatPanel',
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