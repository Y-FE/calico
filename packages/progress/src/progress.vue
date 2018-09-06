<template>
    <div class="cat-progress-body" :style="style">
        <div 
            class="cat-progress--item" 
            :class="`cat-progress--${status}`" 
            :style="styleItem">
        </div>
    </div>
</template>
<style lang="scss">
    .cat-progress-body {
        background-color: $--progress-fill; 
        position: relative;
    }
    .cat-progress--item {
        height: 100%;
        transition: all .3s;
    }
    .cat-progress--default {
        background-color: $--progress-fill-default;
    }
    .cat-progress--error {
        background-color: $--progress-fill-error;
    }
    .cat-progress--success {
        background-color: $--progress-fill-success;
    }
</style>
<script>
    export default {
        name: 'CcProgress',
        components: {
        },
        props: {
            // 0 - 100
            percent: {
                type: Number | String,
                default: 0
            },
            //滚动条多粗
            strokeWidth: {
                type: Number | String,
                default: 6
            },
            // 滚动条长度
            length: {
                type: Number | String,
                default: 200
            },
            //error success default
            status: {
                type: String,
                default: 'default'
            }
        },
        data() {
            return {
                style: {
                    width: `${this.length}px`,
                    height: `${this.strokeWidth}px`,
                    borderRadius: `${this.strokeWidth}px`
                },
                styleItem: {
                    width: parseInt(this.percent) > 100 || parseInt(this.percent) < 0 ? `${this.length}px` : `${parseInt(this.length * this.percent / 100)}px`,
                    borderRadius: `${this.strokeWidth}px`
                }
            }
        },
        computed: {
        },
        watch: {
            percent() {
                this.styleItem = {
                    width: parseInt(this.percent) > 100 || parseInt(this.percent) < 0 ? `${this.length}px` : `${parseInt(this.length * this.percent / 100)}px`,
                    borderRadius: `${this.strokeWidth}px`
                }
            }
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