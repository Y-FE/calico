<template>
        <i class="iconfont"  
            :class="[icon, disabled ? 'cat-icon--default-disabled':'cat-icon--default', `cat-icon--${size}`]" 
            @click="iconClick"></i>
</template>
<style lang="scss">
    .cat-icon--default {
        color: $--icon-default-color;
        cursor: pointer;
        &:hover {
            color: $--icon-default-color-hover;
        }
    }
    .cat-icon--default-disabled {
        cursor: not-allowed;
        color: $--icon-default-color-disabled;
    }
    .cat-icon--normal {
        font-size: $--icon-font-size-normal;
    }
    .cat-icon--large {
        font-size: $--icon-font-size-large;
    }
</style>
<script>
    export default {
        name: 'CcIconDefault',
        components: {
        },
        props: {
            icon: {
                type: String,
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            // normal, large
            size: {
                type: String,
                default: 'normal'
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