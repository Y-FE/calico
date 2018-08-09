<template>
    <button 
        @click="buttonClick" 
        class="cat-button-main" 
        :class="[
            disabled ?  `cat-button-${type}-disabled` : `cat-button-${type}`,
            shape ? 'cat-button-square' : 'cat-button-round'
        ]" 
        :disabled="disabled">
        <slot></slot>
    </button>
</template>
<style lang="scss">
    .cat-button-main {
        color: $--cat-button-default-color;
        font-size: $--cat-button-font-size;
        padding:  $--cat-button-padding-vertical $--cat-button-padding-horizontal;
        background: $--cat-button-default-fill;
        display: inline-block;
        cursor: pointer;
        text-align: center;
    }
    .cat-button-square {
        border-radius: $--cat-button-radius;
    }
    .cat-button-round {
        border-radius: $--cat-button-radius-round;
    }
    .cat-button-default {
        color: $--cat-button-default-color;
        border: 1px solid $--cat-button-default-border;  
        &:hover {
            background: $--cat-button-default-fill-hover;
            border: 1px solid $--cat-button-default-border-hover;   
        }
    }
    .cat-button-primary {
        background: $--cat-button-primary-fill;
        border: none;
        color: $--cat-button-primary-color;
        &:hover {
            background: $--cat-button-primary-fill-hover;
        }
    }

    .cat-button-default-disabled {
        color: $--cat-button-default-color-disabled;
        border: 1px solid $--cat-button-default-border-disabled;
        cursor: not-allowed;
       
    }
    .cat-button-primary-disabled {
        background: $--cat-button-primary-fill-disabled; 
        color: $--cat-button-primary-color;
        border: 1px solid $--cat-button-primary-border-disabled;
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