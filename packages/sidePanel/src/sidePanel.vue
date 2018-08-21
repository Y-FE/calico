<template>
    <cc-row
        class="cat-side-panel"
        direction="column"
        >
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-side-panel {
        position: fixed;
        right: 0;
        top: calc(100% - 165px);
        width:66px;
        height:331px;
        border-top-left-radius: $--radius-panel;
        border-bottom-left-radius: $--radius-panel;
        box-shadow: $--side-panel-box-shadow;
        border: $--side-panel-border-color 1px solid;
    }
</style>
<script>
    export default {
        name: 'CcSidePanel',
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