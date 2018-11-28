<template>
    <i class="iconfont cat-nano-body" 
        :class="[icon, active ? 'cat-nano-body-active' : 'cat-nano-body-default']"
        @click="clickNano">
    </i>
</template>
<style lang="scss">
    .cat-nano-body {
        font-size: $--nano-font-size;
        transition: $--transition-primary;
        cursor: pointer;
    }
    .cat-nano-body-default {
        color: $--nano-color;
    }
    .cat-nano-body-active {
        color: $--nano-color-active;
    }
</style>
<script>
    export default {
        name: 'CcIconNano',
        components: {
        },
        props: {
            icon: {
                type: String,
                default: 'icon_calico-setting',
            },
            active: {
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
            clickNano() {
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