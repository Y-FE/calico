<template>
    <div class="cat-menu-body" 
        :class="[disabled ? 'cat-menu--disabled':'']"
        @click="menuClick"
        ref="menu"
        @mouseover="darken(color)"> 
        <div class="cat-menu-header" :style="{'background-color': getColor}">
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
    }

    .cat-menu--disabled {
        cursor: not-allowed;
        .cat-menu--text {
            color: $--menu-item-text-color-disabled;
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
            }
        },
        data() {
            return {
            }
        },
        computed: {
            getColor(){
                if(this.disabled){
                    return '#CCCCCC';
                }else{
                    return this.color;
                }
            }
        },
        watch: {
        },
        methods: {
            menuClick(){
                this.$emit('click');
            },
            darken(color){
                console.log(color)
               document.getElementsByClassName("cat-menu-body")[0].
               getElementsByClassName("cat-menu-header")[0].style.background = `darken(${color},10%)`;
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