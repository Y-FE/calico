<template>
    <div class="cat-radio-group">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .cat-radio-group {
        display: inline-block;
        line-height: 1;
        vertical-align: middle;
        font-size: 0;
    }
</style>
<script>
    export default {
        name: 'CcRadioGroup',
        componentName: "CcRadioGroup",
        components: {
        },
        props: {
            value: {},
            disabled: Boolean
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