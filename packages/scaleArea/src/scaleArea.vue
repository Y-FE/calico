<template>
    <div class="cat-scale-area"
        :style="outerStyle">
        <div
            :style="containerStyle">
            <div class="cat-scale-area-inner"
                :style="innerStyle">
                <slot></slot>
            </div>
            <slot name="container"></slot>
        </div>
    </div>
</template>
<style lang="scss">
    .cat-scale-area {
        border: 1px solid #403bef;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cat-scale-area-inner {
        border: 1px solid #403b00;
        transform-origin: 0 0;
    }
</style>
<script>
    export default {
        name: 'CcScaleArea',
        components: {
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