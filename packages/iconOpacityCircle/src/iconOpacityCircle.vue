<template>
    <cc-row align="center" justify="center" class="cat-icon-opacity-circle-body" @click.native="click">
        <i class="iconfont" :class="icon"></i>
    </cc-row>
</template>
<style lang="scss">
    .cat-icon-opacity-circle-body {
        background: $--icon-opacity-circle-fill;
        color: $--icon-opacity-circle-color;
        width: 30px;
        height: 30px;
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
            click() {
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