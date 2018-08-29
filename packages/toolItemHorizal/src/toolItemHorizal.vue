<template>
    <cc-tool-item-horizal-layout 
        class="cat-tool-item-horizal-body"
        @click.native="selectedClick"
        :class="[
            disabled ? 'cat-tool-item-horizal--disabled' : `cat-tool-item-horizal--${state}`,
            active && state === 'default'  ? 'cat-tool-item-horizal--active' : '', ]">
        <cc-row 
            justify="center" 
            align="center" 
            class="cat-tool-item-horizal-icon-box"
            slot="tool">
            <i class="iconfont" :class="icon"></i>
        </cc-row>
        <p>
            <slot></slot>
        </p>
    </cc-tool-item-horizal-layout>
</template>
<style lang="scss">
    .cat-tool-item-horizal-body {
        cursor: pointer;
    }
    .cat-tool-item-horizal-icon-box {
        width : $--icon-large-block;
        height: $--icon-large-block;
        border-radius: $--radius-icon;
        line-height: $--icon-large-block;
        background: $--tool-item-fill;
        margin: 0 auto;
        text-align: center;
        i {
            color: $--tool-item-color;
            font-size: $--tool-item-icon-size;
        }
    }
    .cat-tool-item-horizal--default {
        .cat-tool-item-horizal-icon-box {
            i {
                font-size: $--tool-item-icon-size; 
            }
        }
        .cat-tool-item-horizal--text {
           color: $--tool-item-color;
        }
        p {
           color: $--tool-item-color;
        }
        &:hover { 
            .cat-tool-item-horizal-icon-box  {
                box-shadow: $--tool-item-shadow-hover;
                transition: $--transition-primary;
            } 
        }  
    }
    .cat-tool-item-horizal--active {
        .cat-tool-item-horizal-icon-box {
            i {
                color: $--tool-item-color-active; 
            }
        }
        .cat-tool-item-horizal--text {
           color: $--tool-item-color-active;
        }
        p {
           color: $--tool-item-color-active;
        }
        &:hover { 
            .cat-tool-item-horizal-icon-box  {
                box-shadow: none;
            } 
        }  
    }
    .cat-tool-item-horizal--success{
        .cat-tool-item-horizal-icon-box {
            i {
                color: $--tool-item-color-success;
            }
        }
        .cat-tool-item-horizal--text {
           color: $--tool-item-color-success;
        }
        p {
           color: $--tool-item-color-success;
        }
        &:hover { 
            .cat-tool-item-horizal-icon-box {
                box-shadow: $--tool-item-shadow-hover-success;
                transition: $--transition-primary;
            }
        }     
    }
    .cat-tool-item-horizal--danger{
        .cat-tool-item-horizal-icon-box {
            i {
                color: $--tool-item-color-danger;
            }
        }
        .cat-tool-item-horizal--text {
           color: $--tool-item-color-danger;
        }
        p {
           color: $--tool-item-color-danger;
        }
        &:hover { 
            .cat-tool-item-horizal-icon-box {
                box-shadow: $--tool-item-shadow-hover-danger;
                transition: $--transition-primary;
            }
        }    
    }
    .cat-tool-item-horizal--disabled {
        cursor: not-allowed;
        .cat-tool-item-horizal-icon-box {
            i {
                color: $--tool-item-color-disabled
            }
        }
        .cat-tool-item-horizal--text {
           color: $--tool-item-color-disabled;
        }
        p {
           color: $--tool-item-color-disabled;
        }
        &:hover { 
            .cat-tool-item-horizal-icon-box {
                box-shadow: none;
                i {
                    color: $--tool-item-color-disabled; 
                }
            }
        }  
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    import CcToolItemHorizalLayout from '@packages/toolItemHorizalLayout/src/toolItemHorizalLayout.vue';
    export default {
        name: 'CcToolItemHorizal',
        components: {
        },
        props: {
            icon: {
                type: String,
                default: 'icon-icon-zidingyishezhi',
            },
            // 状态: 默认:  'default'， 成功：'success'， 失败：'danger'
            state: {
                type: String,
                default: 'default',
            },
            //active 选中
            active: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                ccRow,
                CcToolItemHorizalLayout
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            selectedClick(){
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