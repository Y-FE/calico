<template>
    <div class="cat-icon-circle-body" 
        @click="iconClick">
        <slot>
            <i class="iconfont" :class="icon"></i>
        </slot>
    </div>
</template>
<style lang="scss">
    .cat-icon-circle-body {
        width: $--icon-huge-block;
        height: $--icon-huge-block;
        line-height:  $--icon-huge-block;
        background: $--icon-circle-fill;
        border-radius: $--icon-circle-radius;
        box-shadow: $--icon-circle-shadow; 
        text-align: center;
        cursor: pointer;
        transition: $--transition-primary;
        i {
            color: $--icon-circle-color;
            font-size: $--icon-circle-icon-size;
        }
        &:hover {
            background: $--icon-circle-fill-hover;
            box-shadow: none;
            i {
                color: $--icon-circle-color-hover;
            }
        }
    }
</style>
<script>
    export default {
        name: 'CcIconCircle',
        components: {
        },
        props: {
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
            iconClick() {
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