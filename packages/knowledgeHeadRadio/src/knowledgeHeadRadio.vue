<template>
    <cc-button 
        :disabled="disabled" 
        :type="parentVal === value ? 'primary' : 'default'" 
        shape="round"
        @click="handleChange"
        class="cat-knowledge-head-body"
        :style="{'padding-right': editable ? '' : '34px'}">
        <cc-row align="center">
            <template v-if="!editable">
                <p>{{label.length > 4 ? `${label.substr(0, 4)}...` : label}}</p>
                <cc-row justify="center" 
                    align="center" 
                    class="cat-knowledge-head-radio-edit--body">
                    <i class="iconfont icon-ellipsis cat-knowledge-head-radio--icon"></i>
                    <div class="cat-knowledge-head-radio-edit--box" v-show="parentVal === value">
                        <div class="cat-knowledge-head-radio-edit--box-box">
                            <cc-row justify="center" align="center" 
                                class="cat-knowledge-head-radio-edit--box-item" 
                                @click.native="editItem()">
                                编辑
                            </cc-row>
                            <cc-row justify="center" align="center" 
                                class="cat-knowledge-head-radio-edit--box-item" 
                                @click.native="deleteItem()">
                                删除
                            </cc-row>
                        </div>
                    </div>
                </cc-row>
            </template>
            <template v-else>
                <input class="cat-knowledge-head-radio--input" 
                    v-model="inputName"
                    v-focus="parentVal === value"/>
            </template>
        </cc-row>
    </cc-button>
</template>
<style lang="scss">
    .cat-knowledge-head-body + .cat-knowledge-head-body {
        margin-left: 10px;
    }
    .cat-knowledge-head-body {
        position: relative; 
        font-size: $--font-size-title;
    }
    .cat-knowledge-head-radio--icon {
        font-size: $--knowledge-head-radio-icon-font-size; 
        // margin-left: 8px;
        // position: absolute;
        // top: 0;
    }
    .cat-knowledge-head-radio--input {
        background-color: $--knowledge-head-radio-input-fill;
        color: $--knowledge-head-radio-input-color;
        font-size: $--knowledge-head-radio-font-size;
        width: 88px;
        height: 1em;
    }
    .cat-knowledge-head-radio-edit--body {
        position: absolute;
        right: 0;
        height: 100%;
        width: 26px;
    }
    .cat-knowledge-head-radio-edit--body:hover .cat-knowledge-head-radio-edit--box{
        display: block;
    }
    .cat-knowledge-head-radio-edit--box {
        display: none;
        width: 44px;
        height: 62px;
        position: absolute;
        right: 0;
        top: 100%;
    }
    .cat-knowledge-head-radio-edit--box-box {
        width: 60px;
        height: 75px;
        margin-top: 8px;
        color: $--color-info;
        background: $--knowledge-head-radio-edit-box-fill;
        box-shadow: $--knowledge-head-radio-edit-box-box-shadow;
        border-radius: $--knowledge-head-radio-edit-box-radius;
    }
    .cat-knowledge-head-radio-edit--box-item {
        height: 50%;
        width: 100%;
        &:hover {
            background: $--button-default-fill-hover;  
        }
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
                inputName: '',
            }
        },
        computed: {
            // 父组件的v-model值
            parentVal() {
                return getParentModel.call(this); 
            },
        },
        watch: {
            label(val) {
                this.inputName = val;
            },
            inputName(val) {
                this.$emit('change-name', val);
            },
        },
        methods: {
            handleChange() {
                if (this.parentVal === this.value) {
                    return;
                }
                setParentModel.call(this, this.value);
            },
            editItem() {
                console.log('7777');
                this.$emit('edit-item')
            },
            deleteItem() {
                this.$emit('delete-item')
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.inputName = this.label;
        }
    }
</script>