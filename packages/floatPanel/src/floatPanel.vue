<template>
    <div class="cat-float-panel-body" 
        :style="style"
        draggable="true">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .cat-float-panel-body {
        background-color: $--float-panel-fill;
        box-shadow: $--float-panel-box-shadow;
        padding: $--float-panel-padding;
        border-radius: $--float-panel-radius;
        width: fit-content;
        cursor: pointer;
        position: fixed;
    }
</style>
<script>
    export default {
        name: 'CcFloatPanel',
        components: {
        },
        props: {},
        data() {
            return {
                style: {
                    left: '220px',
                    top: '72px' 
                }
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