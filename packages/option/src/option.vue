<template>
    <div class="cat-option-body" :class="`cat-option-body--${size}`"
        @click="optionClick">
       <cc-row 
            justify="space-between"
            align="center" 
            style="height: 100%"
            :class="parentVal === value ? 'cat-option--acitve' : ''">
            <p class="cat-option--item">
                {{label ? label : value}}
            </p>
            <span :option-hover-display="hoverDisplay">
                <slot name="right"></slot>
            </span>
        </cc-row> 
    </div>
</template>
<style lang="scss">
    .cat-option-body {
        min-width: 100%;
        padding: $--select-option-item-padding; 
        cursor: pointer;
        font-size: $--select-font-size;
        color: $--select-option-color;
        transition: $--transition-primary;
        &:hover {
            background: $--select-option-background-color-hover;
            color: $--select-option-color-active;
            transition: $--transition-primary;
            [option-hover-display=true] {
                display: inline;
                opacity: 1;
            }
        }
        .iconfont {
            font-size: $--select-font-size;
        }
        [option-hover-display=true] {
            // display: none;
            opacity: 0;
        }
    }
    .cat-option-body--normal {
        height: $--select-height;
    }
    .cat-option-body--large {
        height: $--select-height-large;
    }
    .cat-option--acitve {
        color: $--select-option-color-active;
    }
    .cat-option--item {
        // min-width: 100%;
        white-space: nowrap;
    }
    .cat-option--item + span{
        margin-left: 20px;
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
            hoverDisplay: {
                type: Boolean,
                default: true
            }
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
            size() {
                return this._parent.size;
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