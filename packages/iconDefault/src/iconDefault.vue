<template>
        <i class="iconfont cat-icon--default"  
            :class="[icon, disabled ? 'cat-icon--default-disabled':'']" 
            @click="iconClick"></i>
</template>
<style lang="scss">
    .cat-icon--default {
        font-size: $--icon-default-font-size;
        color: $--icon-default-color;
        cursor: pointer;
        &:hover {
            color: $--icon-default-color-hover;
        }
    }
    .cat-icon--default-disabled {
        cursor: not-allowed;
        color:$--icon-default-color-disabled;
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