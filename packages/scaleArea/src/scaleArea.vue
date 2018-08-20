<template>
    <cc-row class="cat-scale-area"
        justify="center"
        align="center"
        :style="outerStyle">
        <div
            :style="containerStyle">
            <div class="cat-scale-area-inner"
                :style="innerStyle">
                <slot></slot>
            </div>
            <slot name="container"></slot>
        </div>
    </cc-row>
</template>
<style lang="scss">
    .cat-scale-area {
        border: 1px solid #403bef;
    }
    .cat-scale-area-inner {
        border: 1px solid #403b00;
        transform-origin: 0 0;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcScaleArea',
        components: {
            ccRow,
        },
        props: {
            outWidth: {
                type: Number,
                default: 1366
            },
            outHeight: {
                type: Number,
                default: 768
            },
            width: {
                type: Number,
                default: 1366
            },
            height: {
                type: Number,
                default: 768
            }
        },
        data() {
            return {
            }
        },
        computed: {
            scale() {
                return this.caclScale(this.width, this.height, this.outWidth, this.outHeight);
            },
            outerStyle() {
                return {
                    width: `${this.outWidth}px`,
                    height: `${this.outHeight}px`
                }
            },
            containerStyle() {
                return {
                    width: `${this.width * this.scale}px`,
                    height: `${this.height * this.scale}px`
                }
            },
            innerStyle() {
                return {
                    width: `${this.width}px`,
                    height: `${this.height}px`,
                    transform: `scale(${this.scale})`
                }
            }
        },
        watch: {
        },
        methods: {
            caclScale(width, height, outWidth, outHeight) {
                const hScale = outWidth / width;
                const vScale = outHeight / height;
                const scale = Math.min(hScale, vScale);
                return scale;
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