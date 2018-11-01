<template>
    <cc-button 
        :disabled="disabled" 
        :type="parentVal ===  value ? 'primary' : 'default'" 
        shape="round"
        @click="handleChange">
        <cc-row align="center">
            <template v-if="!editable">
                <p>{{label.length > 4 ? `${label.substr(0, 4)}...` : label}}</p>
                <i class="iconfont icon-move-up cat-knowledge-head-radio-icon"></i>
            </template>
            <template v-else>
                <input class="cat-knowledge-head-radio-input" v-model="label"/>
            </template>
        </cc-row>
    </cc-button>
</template>
<style lang="scss">
    .cat-knowledge-head-radio-icon {
        font-size: $--knowledge-head-radio-icon-font-size; 
        margin-left: 8px;
    }
    .cat-knowledge-head-radio-input {
        background-color: $--knowledge-head-radio-input-fill;
        color: $--knowledge-head-radio-input-color;
        width: 52px;
    }
</style>
<script>
    import ccButton from '@packages/button/src/button.vue'; 
    import ccRow from '@packages/row/src/row.vue'; 
    import {setParentModel, ccParent, getParentModel} from '@mixins/parentModel';
    export default {
        name: 'CcKnowledgeHeadRadio',
        componentName: 'CcKnowledgeHeadRadio',
        components: {
            ccButton,
            ccRow
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
            // -----新增-----
            //禁用状态
            disabled: {
                type: Boolean,
                default: false
            },
            //编辑状态
            editable: {
                type: Boolean,
                default: false,
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