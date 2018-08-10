<template>
    <div class="cat-icon-block-body" 
        @click="iconClick" 
        :class="[active ? 'cat-icon-block--active':'']">
        <i class="iconfont" :class="icon"></i>
    </div>
</template>
<style lang="scss">
    .cat-icon-block-body {
        width: $--icon-large-block;
        height: $--icon-large-block;
        line-height:  $--icon-large-block;
        background: $--icon-block-fill;
        text-align: center;
        i {
           font-size: $--icon-block-icon-size;
           color: $--icon-block-color; 
        }
        &:hover {
            box-shadow: $--icon-block-shadow-hover;
        }
        
    }

    .cat-icon-block--active {
        background: $--icon-block-fill-active;
        box-shadow: none;
        i {
            color: $--icon-block-color-active;
        } 
        &:hover {
            box-shadow: none;
        }
    }
</style>
<script>
    export default {
        name: 'CcIconBlock',
        components: {
        },
        props: {
            icon: {
                type: String,
                default: '',
            },
            active: {
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
            iconClick(){
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