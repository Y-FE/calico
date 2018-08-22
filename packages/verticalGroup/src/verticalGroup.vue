<template>
    <cc-row
        direction="column" 
        class="cat-vertical-group">
        <slot></slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-vertical-group {
        position: relative;

        &:not(:first-of-type) {
            margin-top: 20px;
            &::before {
                content: "";
                position: absolute;
                top: -10px;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: $--color-black-opacity-1;
            }
        }

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