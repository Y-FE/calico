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
    import {ccModel, getModel}  from "@mixins/parentModel";
    export default {
        name: 'CcRadioGroup',
        componentName: "CcRadioGroup",
        mixins: [ccModel(String | Number | Boolean)],
        components: {
        },
        props: {
        },
        data() {
            return {
            }
        },
        computed: {
            value(){
                return getModel.call(this);
            }
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