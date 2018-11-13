<template>
    <button 
        @click="buttonClick" 
        class="cat-button-body" 
        :class="[
            disabled ?  `cat-button--${type}-disabled` : `cat-button--${type}`,
            shape ? `cat-button--${shape}` : '',
            size ? `cat-button--${size}` : ''
        ]" 
        :disabled="disabled">
        <slot></slot>
    </button>
</template>
<style lang="scss">
    .cat-button-body {
        color: $--button-default-color;
        padding:  $--button-padding-vertical $--button-padding-horizontal;
        display: inline-block;
        cursor: pointer;
        text-align: center;
    }
    .cat-button--normal {
        font-size: $--button-font-size-normal;
    }
    .cat-button--large {
        font-size: $--button-font-size-large;
        height: $--button-height-large;
    }
    .cat-button--square {
        border-radius: $--button-radius;
    }
    .cat-button--round {
        border-radius: $--button-radius-round;
    }
    .cat-button--default {
        background: $--button-default-fill;
        border: 1px solid $--button-default-border;
        color: $--button-default-color;
        transition: $--transition-primary;  
        &:hover {
            background: $--button-default-fill-hover;
            border: 1px solid $--button-default-border-hover;  
        }
    }
    .cat-button--primary {
        background: $--button-primary-fill;
        border: 1px solid $--button-primary-border;
        color: $--button-primary-color;
        transition: $--transition-primary;
        &:hover {
            background: $--button-primary-fill-hover;
            border-color: $--button-primary-border-hover;
        }
    }
    .cat-button--transparent {
        background: $--button-transparent-fill;
        border: 1px solid $--button-transparent-border;
        color: $--button-transparent-color;
        transition: $--transition-primary;
        &:hover {
            background: $--button-transparent-fill-hover;
            border-color: $--button-transparent-border-hover;
        }
    }

    .cat-button--default-disabled {
        background: $--button-default-fill;
        color: $--button-default-color-disabled;
        border: 1px solid $--button-default-border-disabled;
        cursor: not-allowed;
       
    }
    .cat-button--primary-disabled {
        background: $--button-primary-fill-disabled; 
        color: $--button-primary-color;
        border: 1px solid $--button-primary-border-disabled;
        cursor: not-allowed;
    }

    .cat-button--transparent-disabled {
        background: $--button-transparent-fill; 
        color: $--button-transparent-color-disabled;
        border: 1px solid $--button-transparent-border-disabled;
        cursor: not-allowed;
    }

</style>
<script>
    export default {
        name: 'CcButton',
        components: {
        },
        props: {
            // 类型
            // primary， default, transparent
            type: {
                type: String,
                default: 'primary'
            },
            //形状
            shape: {
                type: String,
                default: 'square'
            },
            //是否禁用
            disabled: {
                type: Boolean,
                default: false,
            },
            //normal, large
            size: {
                type: String,
                default: 'normal'
            }
        },
        data() {
            return {
                hover: false
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            buttonClick() {
                if(this.disabled){
                    return ;
                }
                this.$emit('click');
            },
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    } 
</script>