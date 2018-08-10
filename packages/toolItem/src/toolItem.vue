<template>
    <div class="cat-tool-item-container" 
        @click="selectedClick"
        :disabled="disabled" 
        :class="[
            disabled ? 'cat-tool-item-disabled' : '',
            state == 'active' ? 'cat-tool-item-add-active' : ''
        ]">
        <div class="cat-tool-item-icon-box">
            <i class="iconfont" :class="icon"></i>
        </div>
        <p class="cat-tool-item-text">
            <slot></slot>
        </p>
    </div>
</template>
<style lang="scss">
    .cat-tool-item-container {
        display: inline-block;
        text-align: center;
        margin: 0;
        padding: 0;
        .cat-tool-item-icon-box {
            width : $--cat-icon-large-block;
            height: $--cat-icon-large-block;
            line-height: $--cat-icon-large-block;
            background: $--cat-tool-item-fill;
            margin: 0 auto;
            margin-bottom: 4px;
            i {
                font-size: $--cat-tool-item-icon-size;
            }
        }
        .cat-tool-item-text {
            font-size: $--cat-tool-item-text-size;
            line-height: $--cat-tool-item-text-size; 
            color: $--cat-tool-item-color;
            margin: 0;
            display: inline-block;
        }
        &:hover { 
            .cat-tool-item-icon-box {
                box-shadow: $--cat-tool-item-shadow-hover;
            }
        }  
    }

    .cat-tool-item-disabled {
        cursor: not-allowed;
        .cat-tool-item-text {
           color: $--cat-tool-item-color-disabled;
        }
        &:hover { 
            .cat-tool-item-icon-box {
                box-shadow: none;
                i {
                    color: $--cat-tool-item-color-disabled; 
                }
            }
        }  
    }

    .cat-tool-item-add-active {
        .cat-tool-item-icon-box {
            i {
                color: $--cat-tool-item-color-active; 
            }
        }
        .cat-tool-item-text {
           color: $--cat-tool-item-color-active;
        }
        &:hover { 
            .cat-tool-item-icon-box  {
                box-shadow: none;
            } 
        }  
    }

   
</style>
<script>
    export default {
        name: 'CcToolItem',
        components: {
        },
        props: {
            icon: {
                type: String,
                default: 'icon-icon-zidingyishezhi',
            },
            // 状态 default：普通状态， active: 激活状态
            state: {
                type: String,
                default: 'default',
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
                this.$emit('click')
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            console.log(this.state);
        }
    }
</script>