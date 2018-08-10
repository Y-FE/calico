<template>
    <div class="cat-menu-body" 
        :class="[disabled ? 'cat-menu--disabled':'']"
        @click="menuClick"
        @mouseover="darken"
        @mouseout="quitHover"> 
        <div class="cat-menu-header" :style="[{'background-color': getColor}]">
            <i class="iconfont" :class="icon" ></i>
        </div>
        <div class="cat-menu--text">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">
    .cat-menu-body {
        display: inline-block;
        text-align: center;
        margin: 0 ;
        .cat-menu-header {
            width: $--icon-large-block;
            height: $--icon-large-block;
            border-radius: $--menu-item-radius;
            line-height:  $--icon-large-block;
            margin: 0 auto;
            cursor: pointer;
            i {
                color: $--menu-item-icon-color;
                font-size: $--menu-item-icon-size;
            }
        }
        .cat-menu--text {
            height: $--menu-item-text-size;
            line-height: $--menu-item-text-size;
            font-size: $--menu-item-text-size;
            color: $--menu-item-text-color;
            text-align: center;
            margin-top: 4px;
            cursor: pointer;
        }
    }

    .cat-menu--disabled {
        cursor: not-allowed;
        .cat-menu-header {
            cursor: not-allowed;
        }
        .cat-menu--text {
            color: $--menu-item-text-color-disabled;
        }
    }
</style>
<script>
    export default {
        name: 'CcMenuItem',
        components: {
        },
        props: {
            // 色值16进制
            color: {
                type: String,
                default: '',
            },
            //icon
            icon: {
                type: String,
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                hover: false,
            }
        },
        computed: {
            getColor(){
                if(this.disabled){
                    return '#CCCCCC';
                }else{
                    if(this.hover){
                        var colorDark = this.darkenColor(this.color, 0.1);
                        return colorDark;
                    }else{
                        return this.color;
                    }
                    
                }
            },
        },
        watch: {
        },
        methods: {
            menuClick(){
                this.$emit('click');
            },
            darken(){
               this.hover = true;
            },
            quitHover(){
                this.hover = false;
            },
            // 1.将hex颜色值color转化成rgb数组
            transformRgb(str) {
                var r = /^\#?[0-9A-F]{6}$/;
                if (!r.test(str)) return false;
                //replace替换查找的到的字符串
                str = str.replace("#", "");
                //match得到查询数组
                var hxs = str.match(/../g);
                for (var i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16); 
                return hxs;
            },
            darkenColor(color,level) {
                var r = /^\#?[0-9A-F]{6}$/;
                if (!r.test(color)) return false;
                var rgbc = this.transformRgb(color);
                for (var i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level));
                return this.getNewColor(rgbc[0], rgbc[1], rgbc[2]);
            },
            getNewColor(a,b,c){
                var r = /^\d{1,3}$/;
                if (!r.test(a) || !r.test(b) || !r.test(c)) return false;
                var hexs = [a.toString(16), b.toString(16), c.toString(16)];
                for (var i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = "0" + hexs[i];
                var colorItem = "#" + hexs.join("");
                return colorItem;     
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