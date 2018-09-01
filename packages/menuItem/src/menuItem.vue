<template>
    <div class="cat-menu-body" 
        :class="[disabled ? 'cat-menu--disabled':'']"
        @click="menuClick"> 
        <div class="cat-menu-header" 
            :style="[{'background-color': disabled ? disabledColor : close ? closeColor : color}]">
            <i class="iconfont" :class="icon" ></i>
        </div>
        <div class="cat-menu--text">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">
    .cat-menu-body {
        display: inline-block;
        text-align: center;
        margin: 0 ;
        cursor: pointer;
        .cat-menu-header {
            width: $--icon-large-block;
            height: $--icon-large-block;
            border-radius: $--menu-item-radius;
            line-height:  $--icon-large-block;
            margin: 0 auto;
            i {
                color: $--menu-item-icon-color;
                font-size: $--menu-item-icon-size;
            }
        }
        .cat-menu--text {
            height: $--menu-item-text-size;
            line-height: $--menu-item-text-size;
            font-size: $--menu-item-text-size;
            color: $--menu-item-text-color;
            text-align: center;
            margin-top: 4px;
        }
        &:hover {
            filter: $--color-brightness-base;
        }
    }
    .cat-menu--disabled {
        cursor: not-allowed;
        .cat-menu-header {
            cursor: not-allowed;
        }
        .cat-menu--text {
            color: $--menu-item-text-color-disabled;
        }
        &:hover {
            filter: brightness(100%);
        }
    }
</style>
<script>
    export default {
        name: 'CcMenuItem',
        components: {
        },
        props: {
            // 色值16进制
            color: {
                type: String,
                default: '',
            },
            //icon
            icon: {
                type: String,
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            close: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                disabledColor: '#CCCCCC',
                closeColor: '#666666'
            }
        },
        computed: {

        },
        watch: {
        },
        methods: {
            menuClick(){
                if(this.disabled) {
                    return;
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