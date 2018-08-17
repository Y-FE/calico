<template>
    <transition name="fade-in">
        <div class="flex-modal-body" 
            :style="{'top': `${top}px`, 'left': `${left}px`, 'width': `${width}px`}" 
            v-if="show">
            <slot></slot>
        </div>
    </transition>
</template>
<style lang="scss">
    .flex-modal-body {
        z-index: 100;
        position: fixed;
        background-color: $--flex-background-color;
        box-shadow: $--flex-modal-box-shadow;
        padding: $--flex-modal-padding;
        color: $--flex-modal-color;
        font-size: $--flex-modal-font-size;
        border-radius: $--flex-modal-radius;
        min-width: 150px;
    }
</style>
<script>
    export default {
        name: 'CcFlexModal',
        components: {
        },
        props: {
            show: {
                type: Boolean,
                default: false
            },
            width: {
                type: String | Number,
                default: 150
            },
            top: {
                type: String | Number,
                default: 72,
            },
            left: {
                type: String | Number,
                default: 220,
            }
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