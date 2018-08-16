<template>
</template>
<style lang="scss">
</style>
<script>
    export default {
        name: 'CcPreviewOperate',
        components: {
        },
        props: {},
        data() {
            return {
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            deletItem() {
                this.$emit('delete-item');
                
            },
            changeOrder(direction) {
                // direction: up / down
                this.$emit('change-order', direction);
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