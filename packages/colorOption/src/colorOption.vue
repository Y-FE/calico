<template>    
    <cc-row 
        justify="center"
        align="center"
        class="cat-color-option" 
        @click.native="optionClick"
        :style="{'background-color': value}">
        {{value ? '' : '/'}}
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-color-option {
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
        name: 'CcColorOption',
        componentName: 'CcColorOption',
        mixins: [ccParent('CcColorSelect')],
        components: {
            ccRow
        },
        props: {
            value:{ //颜色值
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
            optionClick(){
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