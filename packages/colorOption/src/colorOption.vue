<template>    
    <li class="cat-color-option" 
        @click="optionClick"
        :style="{'background-color': value}">
        <slot></slot>
    </li>
</template>
<style lang="scss">
    .cat-color-option {
        width: $--color-select-option-size;
        height: $--color-select-option-size;
        cursor: pointer;
        &:hover {
            filter: $--color-brightness-base;
        }
    }
   
    
</style>
<script>
    import {ccParent, setParentModel} from '@mixins/parentModel';
    export default {
        name: 'CcColorOption',
        componentName: 'CcColorOption',
        mixins: [ccParent('CcColorSelect')],
        components: {
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