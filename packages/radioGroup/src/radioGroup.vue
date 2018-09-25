<template>
    <cc-row 
        :align="column ? '' : 'center'" 
        justify="center" 
        :direction="column ? 'column' : ''"
        class="cat-radio-group">
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-radio-group {
        width: fit-content;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue'; 
    import {ccModel}  from '@mixins/parentModel';
    export default {
        name: 'CcRadioGroup',
        componentName: 'CcRadioGroup',
        mixins: [ccModel(String | Number | Boolean)],
        components: {
            ccRow,
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