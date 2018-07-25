module.exports = componentName => {
    return `<template>
</template>
<style>
</style>
<script>
    export default {
        name: '${componentName}',
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
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>`;
};
