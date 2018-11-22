<template>
    <cc-row align="center" justify="center" class="cat-icon-opacity-circle-body">
        <i class="iconfont" :class="icon"></i>
    </cc-row>
</template>
<style lang="scss">
    .cat-icon-opacity-circle-body {
        background: $--icon-opacity-circle-fill;
        color: $--icon-opacity-circle-color;
        width: 26px;
        height: 26px;
        border-radius: $--icon-opacity-circle-radius;
        cursor: pointer;
        i {
            font-size: $--icon-opacity-circle-icon-size
        }
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcIconOpacityCircle',
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
                ccRow
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>