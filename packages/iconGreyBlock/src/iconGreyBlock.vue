<template>
    <div class="cat-icon-grey-block-boby" 
        @click="iconClick" 
        :class="[disabled ? 'cat-icon-grey-block--disabled':'']">
        <slot>
            <i class="iconfont" :class="icon"></i>
        </slot>
    </div>
</template>
<style lang="scss">
    .cat-icon-grey-block-boby {
        width: $--icon-small-block;
        height: $--icon-small-block;
        line-height: $--icon-small-block;
        text-align: center;
        background: $--icon-grey-block-fill;
        cursor: pointer;
        i {
            font-size: $--icon-grey-block-font-size;
            color: $--icon-grey-block-color;
        }
        &:hover {
            background: $--icon-grey-block-fill-hover;
        }
    }
    .cat-icon-grey-block--disabled {
        cursor: not-allowed;
        i {
            color: $--icon-grey-block-color-disabled;
        }
    }
</style>
<script>
    export default {
        name: 'CcIconGreyBlock',
        components: {
        },
        props: {
            icon: {
                type: String,
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
               
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            iconClick() {
                if(this.disabled){
                    return;
                }
                this.$emit('click');
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