<template>
    <cc-row
        direction="column" 
        class="cat-vertical-group">
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-vertical-group {
        > *:not(:first-child) {
            margin-top: 20px;
        }
    }
</style>
<script>
    export default {
        name: 'CcVerticalGroup',
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
</script>