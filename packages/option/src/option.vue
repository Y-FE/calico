<template>
    <li class="cat-option"
        @click="optionClick">
        <span class="cat-option-left"><slot></slot></span>
        <span class="cat-option-right"><slot></slot></span>
    </li>
</template>
<style lang="scss">
</style>
<script>
    import {ccParent,setParentModel} from '@mixins/parentModel'
    export default {
        name: 'CcOption',
        componentName: 'CcOption',
        components: {
        },
        mixins: [ccParent('CcSelect')],
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