<template>
    <div class="cat-scale-area" 
        :style="[{'width': parseInt(myWidth) + 'px'}, {'height': parseInt(myHeight) + 'px'}]">
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
                myHeight: this.height,
                screenWidth: document.documentElement.clientWidth,
                screenHeight: document.documentElement.clientHeight,
            }
        },
        computed: {
        },
        watch: {
            screenWidth (val) {
                //console.log(val + 'w');
                this.screenWidth = val;
                this.myWidth = val / this.calBgWidth;
                this.myHeight = this.myWidth / (this.width / this.height);
            },
            screenHeight(val){
                //console.log(val + 'h');
                this.screenHeight = val;
                this.myHeight = val / this.calBgHeight;
                this.myWidth = this.myHeight * (this.width / this.height);    
            }
        },
        methods: {
    
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            // 然后监听window的resize事件．监听浏览器窗口变化
            const that = this;
            that.calBgWidth = document.documentElement.clientWidth / that.width;
            that.calBgHeight = document.documentElement.clientHeight / that.height;
            window.onresize = function temp() {
                that.screenWidth = document.documentElement.clientWidth;
                that.screenHeight = document.documentElement.clientHeight;
            }
        }
    }
</script>