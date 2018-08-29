<template>
    <cc-row 
        justify="center"
        align="center"
        class="cat-line-option"
        :style="{'background': value}" 
        @click.native="lineClick">
        {{value ? '' : '/'}}
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-line-option {
        width: $--color-select-option-size;
        height: $--color-select-option-size;
        cursor: pointer;
        color: $--color-danger;
        transition: $--transition-primary;
        &:hover {
            filter: $--color-brightness-base;
        }
    }
</style>
<script>
    import {ccParent, setParentModel} from '@mixins/parentModel';
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcLineOption',
        components: 'CcLineOption',
        mixins: [ccParent('CcLineSelect')],
        components: {
            ccRow
        },
        props: {
            value: {
                type: String,
                default: ''
            }
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
            lineClick(){
                setParentModel.call(this, this.value); 
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>