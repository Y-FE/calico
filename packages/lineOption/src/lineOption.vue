<template>
    <li class="cat-line-option" 
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
        components: {
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
            lineClick(){
                
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