<template>
    <cc-row justify="center" align="center" class="cat-icon-block-body" 
        @click="iconClick" 
        :class="[active ? 'cat-icon-block--active':'']">
        <div class="cat-icon-block--content">
            <slot>
                <i class="iconfont" :class="icon"></i>
            </slot>
        </div>
    </cc-row>
</template>
<style lang="scss">
    .cat-icon-block-body {
        width: $--icon-large-block;
        height: $--icon-large-block;
        background: $--icon-block-fill;
        border-radius: $--icon-block-radius;
        transition: $--transition-primary;
        .cat-icon-block--content {
           font-size: $--icon-block-icon-size;
           color: $--icon-block-color; 
           cursor: pointer;
        }
        &:hover {
            box-shadow: $--icon-block-shadow-hover;   
        }
    }
    .cat-icon-block--active {
        background: $--icon-block-fill-active;
        box-shadow: none;
        .cat-icon-block--content {
            color: $--icon-block-color-active;
        } 
        &:hover {
            box-shadow: none;
        }
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcIconBlock',
        components: {
            ccRow
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