<template>
    <div @click="handleChange" class="cat-horizontal-checkbox">
        <cc-icon-block 
            :active="Array.isArray(parentVal) ? parentVal.some(item => item === value) ? true : false : false">
            <slot></slot>
        </cc-icon-block>
    </div>
</template>
<style lang="scss">
    .cat-horizontal-checkbox + .cat-horizontal-checkbox {
        margin-left: 5px;
    }
</style>
<script>
    import ccIconBlock from '@packages/iconBlock/src/iconBlock.vue'; 
    import {setParentModel, ccParent, getParentModel} from "@mixins/parentModel";
    export default {
        name: 'CcHorizontalCheckbox',
        componentName: 'CcHorizontalCheckbox',
        components: {
            ccIconBlock
        },
        mixins: [ccParent('CcCheckboxGroup')],
        props: {
            // 自身绑定值
            value: {
                type:  Boolean | String | Number,
                default: ''
            },
            // 绑定值的描述
            label: {
                type: Number | String,
            },
        },
        data() {
            return {
            }
        },
        computed: {
            // 父组件的v-model值
            parentVal() {
                return getParentModel.call(this); 
            },
        },
        watch: {
        },
        methods: {
            handleChange() {
                let arr = getParentModel.call(this);
                if(arr.some(item => item === this.value)) {
                    arr = arr.filter(item => item !== this.value);
                } else {
                    arr.push(this.value);
                }
                setParentModel.call(this, arr);
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