<template>
    <cc-tool-item-layout 
        class="cat-tool-item-body"
        @click.native="selectedClick"
        :class="[
            disabled ? 'cat-tool-item--disabled' : `cat-tool-item--${state}`,
            active && state === 'default'  ? 'cat-tool-item--active' : '', ]">
        <cc-row 
            justify="center" 
            align="center" 
            class="cat-tool-item-icon-box"
            slot="tool">
            <i class="iconfont" :class="icon"></i>
        </cc-row>
        <p>
            <slot></slot>
        </p>
    </cc-tool-item-layout>
</template>
<style lang="scss">
    .cat-tool-item-container {
        display: inline-block;
        //width: fit-content;
        text-align: center;
         cursor: pointer;
        .cat-tool-item--text {
            margin-top: 4px;
            font-size: $--tool-item-text-size;
            line-height: $--tool-item-text-size; 
            color: $--tool-item-color;
            display: inline-block;
        }
        &:hover { 
            .cat-tool-item-icon-box {
                box-shadow: $--tool-item-shadow-hover;
                transition: $--transition-primary;
            }
        }  
    }
    .cat-tool-item-body {
        cursor: pointer;
    }
    .cat-tool-item-icon-box {
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
    .cat-tool-item--default {
        .cat-tool-item-icon-box {
            i {
                font-size: $--tool-item-icon-size; 
            }
        }
        .cat-tool-item--text {
           color: $--tool-item-color;
        }
        p {
           color: $--tool-item-color;
        }
        &:hover { 
            .cat-tool-item-icon-box  {
                box-shadow: $--tool-item-shadow-hover;
                transition: $--transition-primary;
            } 
        }  
    }
    .cat-tool-item--active {
        .cat-tool-item-icon-box {
            i {
                color: $--tool-item-color-active; 
            }
        }
        .cat-tool-item--text {
           color: $--tool-item-color-active;
        }
        p {
           color: $--tool-item-color-active;
        }
        &:hover { 
            .cat-tool-item-icon-box  {
                box-shadow: none;
            } 
        }  
    }
    .cat-tool-item--success{
        .cat-tool-item-icon-box {
            i {
                color: $--tool-item-color-success;
            }
        }
        .cat-tool-item--text {
           color: $--tool-item-color-success;
        }
        p {
           color: $--tool-item-color-success;
        }
        &:hover { 
            .cat-tool-item-icon-box {
                box-shadow: $--tool-item-shadow-hover-success;
                transition: $--transition-primary;
            }
        }     
    }
    .cat-tool-item--danger{
        .cat-tool-item-icon-box {
            i {
                color: $--tool-item-color-danger;
            }
        }
        .cat-tool-item--text {
           color: $--tool-item-color-danger;
        }
        p {
           color: $--tool-item-color-danger;
        }
        &:hover { 
            .cat-tool-item-icon-box {
                box-shadow: $--tool-item-shadow-hover-danger;
                transition: $--transition-primary;
            }
        }    
    }
    .cat-tool-item--disabled {
        cursor: not-allowed;
        .cat-tool-item-icon-box {
            i {
                color: $--tool-item-color-disabled
            }
        }
        .cat-tool-item--text {
           color: $--tool-item-color-disabled;
        }
        p {
           color: $--tool-item-color-disabled;
        }
        &:hover { 
            .cat-tool-item-icon-box {
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
    import ccToolItemLayout from '@packages/toolItemLayout/src/toolItemLayout.vue';
    export default {
        name: 'CcToolItem',
        components: {
            ccRow,
            ccToolItemLayout
        },
        props: {
            icon: {
                type: String,
                default: 'icon_calico-setting',
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
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            selectedClick(){
                if(this.disabled) {
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