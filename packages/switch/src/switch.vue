<template>
    <div class="cat-switch-body" 
        :class="value ? 'cat-switch-body--on' : 'cat-switch-body--off'" 
        @click="switchClick"> 
        <div class="cat-switch--back"></div>
        <div class="cat-switch--circle"></div>
    </div>
</template>
<style lang="scss">
    .cat-switch-body {
        position: relative;
        width: $--switch-width;
        height: $--switch-height;
        border-radius: $--switch-border-radius;
        cursor: pointer;
    }
    .cat-switch-body--off {
        background-color: $--switch-background-color;
    }
    .cat-switch--back {
        position: absolute;
        top: 1px;
        left: 1px;
        width: $--switch-width - 2px;
        height: $--switch-height - 2px;
        background-color: $--switch-off-color;
        border-radius: $--switch-border-radius;
        transition: $--transition-base;
    }
    .cat-switch--circle {
        border-radius: $--switch-circle-border-radius;
        width: $--switch-circle-size;
        height: $--switch-circle-size;
        position: absolute;
        border: 1px solid $--color-success;
        top: -1px;
        transition: $--transition-base;
    }
    .cat-switch-body--on {
        background-color: $--switch-on-color;
        .cat-switch--back {
            background-color: $--switch-on-color;
        }
        .cat-switch--circle {
            transform: translateX(100%);
            background-color: $--switch-off-color;
        }
    }
</style>
<script>
    export default {
        name: 'CcSwitch',
        components: {
        },
        props: {
            value: {
                type: Boolean,
                default: false,
            },
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
            switchClick() {
                this.$emit('input', !this.value);
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