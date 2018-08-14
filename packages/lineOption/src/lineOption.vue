<template>
    <li class="cat-line-option"
        :style="{'background':value}" 
        @click="lineClick">
        <slot></slot>
    </li>
</template>
<style lang="scss">
</style>
<script>
    import {setParentModel,ccParent} from '@mixins/parentModel'
    export default {
        name: 'CcLineOption',
        components: 'CcLineOption',
        mixins: [ccParent('CcLineSelect')],
        components: {
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