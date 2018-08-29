<template>
    <cc-row align="center"
        style="width: fit-content">
        <cc-row 
            justify="center" 
            align="center" 
            class="cat-tool-item-horizal-layout--slot">
            <slot name="tool">
            </slot>
        </cc-row>
        <p class="cat-tool-item-horizal-layout--text">
            <slot></slot>
        </p>
    </cc-row>
</template>
<style lang="scss">
    .cat-tool-item-horizal-layout--slot {
        width : $--icon-large-block;
        height: $--icon-large-block;
    }
    .cat-tool-item-horizal-layout--text {
        font-size: $--tool-item-text-size;
        line-height: $--tool-item-text-size; 
        color: $--tool-item-color;
        display: inline-block;
        margin-left: 6px;
    }
</style>
<script>
    export default {
        name: 'CcToolItemHorizalLayout',
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