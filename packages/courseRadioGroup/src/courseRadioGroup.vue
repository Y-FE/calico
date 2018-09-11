<template>
    <cc-row 
        wrap="wrap" 
        align="center" 
        justify="space-between">
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-course-radio-group {
        // width: fit-content;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue'; 
    import {ccModel}  from "@mixins/parentModel";
    export default {
        name: 'CcCourseRadioGroup',
        componentName: 'CcCourseRadioGroup',
        mixins: [ccModel(String | Number | Boolean)],
        components: {
            ccRow,
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