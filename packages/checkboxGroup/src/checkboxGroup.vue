<template>
    <cc-row 
        :align="column ? '' : 'center'" 
        justify="center" 
        :direction="column ? 'column' : ''"
        class="cat-checkbox-group">
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-checkbox-group {
        width: fit-content;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue'; 
    import {ccModel}  from "@mixins/parentModel";
    export default {
        name: 'CcCheckboxGroup',
        componentName: "CcCheckboxGroup",
        mixins: [ccModel(Array)],
        components: {
            ccRow
        },
        props: {
            column: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            }
        },
        computed: {
            // value(){
            //     return getModel.call(this);
            // }
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