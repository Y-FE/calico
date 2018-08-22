<template>
    <div @click="handleChange" class="cat-horizontal-radio">
        <cc-icon-block :active="parentVal === value ? true : false">
            <slot></slot>
        </cc-icon-block>
    </div>
</template>
<style lang="scss">
    .cat-horizontal-radio + .cat-horizontal-radio {
        margin-left: 5px;
    }
</style>
<script>
    import ccIconBlock from '@packages/iconBlock/src/iconBlock.vue'; 
    import {setParentModel, ccParent, getParentModel} from "@mixins/parentModel";
    export default {
        name: 'CcHorizontalRadio',
        componentName: 'CcHorizontalRadio',
        components: {
            ccIconBlock
        },
        mixins: [ccParent('CcRadioGroup')],
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