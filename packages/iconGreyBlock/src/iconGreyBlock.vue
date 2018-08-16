<template>
    <cc-row justify="center" align="center" 
        class="cat-icon-grey-block-boby" 
        :class="[disabled ? 'cat-icon-grey-block--disabled':'']"
        @click.native="iconClick">
        <slot>
            <i class="iconfont" :class="icon"></i>
        </slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-icon-grey-block-boby {
        width: $--icon-small-block;
        height: $--icon-small-block;
        text-align: center;
        background: $--icon-grey-block-fill;
        cursor: pointer;
        i {
            font-size: $--icon-grey-block-font-size;
            color: $--icon-grey-block-color;
        }
        &:hover {
            background: $--icon-grey-block-fill-hover;
             transition: $--transition-primary;
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
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcIconGreyBlock',
        components: {
            ccRow
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