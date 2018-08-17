<template>
    <div class="cat-line-option"
        :style="{'background':value}" 
        @click="lineClick">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .cat-line-option {
        width: $--color-select-option-size;
        height: $--color-select-option-size;
        cursor: pointer;
        transition: $--transition-primary;
        &:hover {
            filter: $--color-brightness-base;
        }
    }
</style>
<script>
    import {ccParent, setParentModel} from '@mixins/parentModel';
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