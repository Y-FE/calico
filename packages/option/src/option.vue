<template>
    <div class="cat-option"
        @click="optionClick">
       <cc-row 
            justify="space-between"
            align="center" 
            :class="parentVal === value ? 'cat-option--acitve' : ''">
            <span>
                {{label ? label : value}}
            </span>
            <slot name="right"></slot>
        </cc-row> 
    </div>
</template>
<style lang="scss">
    .cat-option {
        width: 100%;
        height: $--select-height;
        padding: $--select-option-item-padding; 
        cursor: pointer;
        font-size: $--select-font-size;
        color: $--select-option-color;
        &:hover {
            background: $--select-option-background-color-hover;
            color: $--select-option-color-active;
        }
        .iconfont {
            font-size: $--select-font-size;
        }
    }
    .cat-option--acitve {
        color: $--select-option-color-active;
    }
</style>
<script>
    import {ccParent, setParentModel, getParentModel} from '@mixins/parentModel';
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcOption',
        componentName: 'CcOption',
        components: {
            ccRow
        },
        mixins: [ccParent('CcSelect')],
        props: {
            // 自身绑定值
            value: {
                type: Number | String,
                default: ''
            },
            //绑定值的描述
            label: {
                type: Number | String,
                default: '',
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
            optionClick() {
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