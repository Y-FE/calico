<template>
    <div class="cat-option"
        @click="optionClick">
       <cc-row 
            justify="space-between"
            align="center">
            <span class="cat-option-left">{{value}}</span>
            <span class="cat-option-right"><slot></slot></span>
        </cc-row> 
    </div>
</template>
<style lang="scss">
    .cat-option {
        width: 100%;
        height: $--color-select-option-size;
        padding: $--color-select-option-padding; 
        cursor: pointer;
        .cat-option-left {
            font-size: $--select-font-size;
            color: $--select-option-color;
        }
        &:hover {
            background: $--select-option-background-color-hover;
            color: $--select-option-color-active;
        }
    }
</style>
<script>
    import {ccParent,setParentModel} from '@mixins/parentModel';
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcOption',
        componentName: 'CcOption',
        components: {
            ccRow
        },
        mixins: [ccParent('CcSelect')],
        props: {
            value: {
                type: Number | String,
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
               setParentModel.call(this, this.value) 
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