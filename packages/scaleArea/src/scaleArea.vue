<template>
    <div class="cat-scale-area" 
        :style="[{'width': parseInt(myWidth) + 'px'},
            {'height': parseInt(myHeight) + 'px'}]">
    </div>
</template>
<style lang="scss">
    .cat-scale-area {
        border: 1px solid #403bef;
      
    }
</style>
<script>
    export default {
        name: 'CcScaleArea',
        components: {
        },
        props: {
            width: {
                type: Number,
                default: 1336
            },
            height: {
                type: Number,
                default: 768
            }
        },
        data() {
            return {
                calBgWidth: '',
                calBgHeight: '',
                myWidth: this.width,
                myHeight: this.height
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
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
            const that = this;
            that.calBgWidth = document.body.clientWidth / that.width;
            that.calBgHeight = document.documentElement.clientHeight / that.height;
            window.onresize = function temp() {
                that.myWidth = document.body.clientWidth / that.calBgWidth;
                that.myHeight = document.documentElement.clientHeight / that.calBgHeight;
            }
        }
    }
</script>