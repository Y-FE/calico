<template>
    <div class="cat-menu-body" @click="menuClick"> 
        <div class="cat-menu-header" :style="{'background-color': color}">
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
            menuClick(){
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