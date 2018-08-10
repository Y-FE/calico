<template>
</template>
<style lang="scss">
</style>
<script>
    export default {
        name: 'CcIconCircle',
        components: {
        },
        props: {},
        data() {
            return {
                icon: {
                    type: String,
                    default: '',
                }
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