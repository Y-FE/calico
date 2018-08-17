<template>
    <div class="cat-popover-body">
        <div style="cursor: pointer;" >
            <slot></slot>
        </div>
        <transition name="fade">
            
        </transition>
    </div>
</template>
<style lang="scss">
    .cat-popover-body {
        background-color:  $--color-white;
        box-shadow: $--popover-box-shadow;
        padding: $--popover-padding;
        color: $--popover-color;
        font-size: $--popover-font-size;
        border-radius: $--popover-radius;
        width: fit-content;
    }
</style>
<script>
    export default {
        name: 'CcPopover',
        components: {
        },
        props: {

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
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>