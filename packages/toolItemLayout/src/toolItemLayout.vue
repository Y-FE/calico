<template>
    <cc-row justify="center" 
        align="center" 
        direction="column" 
        style="width: fit-content">
        <cc-row 
            justify="center" 
            align="center" 
            class="cat-tool-item-layout--slot">
            <slot name="tool">
            </slot>
        </cc-row>
        <p class="cat-tool-item-layout--text">
            <slot></slot>
        </p>
    </cc-row>
</template>
<style lang="scss">
    .cat-tool-item-layout--slot {
        width : $--icon-large-block;
        height: $--icon-large-block;
    }
    .cat-tool-item-layout--text {
        font-size: $--tool-item-text-size;
        line-height: $--tool-item-text-size; 
        color: $--tool-item-color;
        display: inline-block;
        margin-top: 4px;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcToolItemLayout',
        components: {
            ccRow
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