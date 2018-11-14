<template>
    <div class="cat-option-body" :class="`cat-option-body--${size}`"
        @click="optionClick">
       <cc-row 
            justify="space-between"
            align="center" 
            style="height: 100%"
            :class="parentVal === value ? 'cat-option--acitve' : ''">
            <cc-row align="center">
                <i v-if="icon" class="iconfont cat-option--item" :class="[icon, `cat-option--iconfont-font-${size}`]"></i>
                <p class="cat-option--item" :style="{'margin-left' : icon ? '3px' : ''}">
                    {{label ? label : value}}
                </p>
            </cc-row>
            <span :option-hover-display="hoverDisplay" :class="[`cat-option--iconfont-font-${size}`]">
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
            font-size: $--select-font-size-small;
        }
        .cat-option--iconfont-font-small {
            font-size: $--select-font-size-small;
        }
        .cat-option--iconfont-font-normal {
            font-size: $--select-font-size-normal;
        }
        .cat-option--iconfont-font-large {
            font-size: $--select-font-size-large;
        }
        [option-hover-display=true] {
            // display: none;
            opacity: 0;
        }
    }
    .cat-option-body--small {
        height: $--select-height-small;
        font-size: $--select-font-size-small;
    }
    .cat-option-body--normal {
        height: $--select-height-normal;
        font-size: $--select-font-size-normal;
    }
    .cat-option-body--large {
        height: $--select-height-large;
        font-size: $--select-font-size-large;
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
    import {ccParent, setParentModel, getParentModel, setParentLabel} from '@mixins/parentModel';
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
            },
            icon: {
                type: String,
                default: '',
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
            parentVal(val) {
                if(val === this.value) {
                    setParentLabel.call(this, this.label);
                }
            }
        },
        methods: {
            optionClick() {
                if (this.parentVal === this.value) {
                    return;
                }
               setParentModel.call(this, this.value);
               this._parent.optionChange = true;
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            if(this.parentVal === this.value) {
                setParentLabel.call(this, this.label);
            }
        }
    }
</script>