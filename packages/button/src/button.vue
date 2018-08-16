<template>
    <button 
        @click="buttonClick" 
        class="cat-button-body" 
        :class="[
            disabled ?  `cat-button--${type}-disabled` : `cat-button--${type}`,
            shape ? `cat-button--${shape}` : ''
        ]" 
        :disabled="disabled">
        <slot></slot>
    </button>
</template>
<style lang="scss">
    .cat-button-body {
        color: $--button-default-color;
        font-size: $--button-font-size;
        padding:  $--button-padding-vertical $--button-padding-horizontal;
        background: $--button-default-fill;
        display: inline-block;
        cursor: pointer;
        text-align: center;
    }
    .cat-button--square {
        border-radius: $--button-radius;
    }
    .cat-button--round {
        border-radius: $--button-radius-round;
    }
    .cat-button--default {
        color: $--button-default-color;
        border: 1px solid $--button-default-border;  
        &:hover {
            background: $--button-default-fill-hover;
            border: 1px solid $--button-default-border-hover;
            transition: $--transition-primary;
        }
    }
    .cat-button--primary {
        background: $--button-primary-fill;
        border: 1px solid $--button-primary-fill;
        color: $--button-primary-color;
        &:hover {
            background: $--button-primary-fill-hover;
            border-color: $--button-primary-fill-hover;
            transition: $--transition-primary;
        }
    }

    .cat-button--default-disabled {
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

</style>
<script>
    export default {
        name: 'CcButton',
        components: {
        },
        props: {
            // 类型
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