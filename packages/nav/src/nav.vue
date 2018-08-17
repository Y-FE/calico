<template>
    <div class="cat-nav">
        <cc-row 
            justify="flex-start"
            align="center"
            class="cat-nav-list">
            <slot></slot>
        </cc-row>
    </div>
</template>
<style lang="scss">
    .cat-nav {
        border-bottom: 1px solid $--nav-border;
        .cat-nav-list {
            width: fit-content;
            position: relative;
        }   
    }
</style>
<script>
    import {ccModel, getModel}  from "@mixins/parentModel";
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcNav',
        componentName: 'CcNav',
        components: {
            ccRow
        },
        mixins: [ccModel(String | Number | Boolean)],
        props: {},
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