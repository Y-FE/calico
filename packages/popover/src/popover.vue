<template>
    <cc-row 
        justify="center" 
        align="center"  
        direction="column" 
        class="cat-popover-body" >
        <div style="cursor: pointer;" >
            <slot name="reference"></slot>
        </div>
        <div class="cat-popover--box">
            <transition name="fade-in">
                <cc-row 
                    justify="center" 
                    align="center" 
                    class="cat-popover--box-main">
                    <cc-row 
                        justify="center" 
                        align="center" 
                        class="cat-popover--tool" :style="{'width': width}">
                        <slot>caclo威武</slot>
                    </cc-row>
                </cc-row>
            </transition>
        </div>
    </cc-row>
</template>
<style lang="scss">
    .cat-popover-body {
        position: relative;
        width: fit-content;
    }
    .cat-popover--box {
        margin-top: 5px;
    }
    .cat-popover--box-main {
        z-index: $--popover-z-index;
        position: absolute;
        transform: translateX(-50%);
        width: 100%;
        .cat-popover--tool {
            background-color: $--popover-fill;
            box-shadow: $--popover-box-shadow;
            padding: $--popover-padding;
            color: $--popover-color;
            font-size: $--popover-font-size;
            border-radius: $--popover-radius;
            min-width: 150px;
        }
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcPopover',
        components: {
            ccRow,
        },
        props: {

        },
        data() {
            return {
                width: {
                    type: String | Number,
                    default: 150
                },
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