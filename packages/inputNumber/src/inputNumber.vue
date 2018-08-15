<template>
    <div class="cat-input-number">
        <p class="cat-input-title" v-if="title">{{title}}</p>
        <div class="cat-input-number-body">
            <div class="cat-input-body">
                <input type="text"
                    :value="currentValue"
                    @keyup.up='increase' 
                    @keyup.down='reduce'
                    @change="handleChange" 
                    class="cat-input" />
            </div>
            <cc-icon-grey-block icon="icon-reduce" 
                class="cat-input-number--decrease cat-input-button"
                :disabled="value === min"
                @click="reduce">
            </cc-icon-grey-block>
            <cc-icon-grey-block icon="icon-addCourseware" 
                class="cat-input-number--increase cat-input-button"
                :disabled="value === max"
                @click="increase">
            </cc-icon-grey-block>
        </div>
    </div>
</template>
<style lang="scss">
    .cat-input-number {
        width: $--input-number-width;
        .cat-input-title {
            font-size: $--input-number-title-font-size;
            color: $--input-number-title-color;
            margin-bottom: 10px;
        }
        .cat-input-number-body {
            position: relative;
            display: inline-block;
            width: 100%; 
            height: $--input-number-height;
            line-height: $--input-number-height;
            .cat-input-button {
                position: absolute;
                z-index: 1;
                top: 1px;
                height: 95%;
                line-height: 1.2;
            }
            .cat-input-number--decrease {
                left: 1px;
                border-radius: $--input-number-radius 0 0 $--input-number-radius;
            }
            .cat-input-number--increase {
                right: 1px;
                border-radius: 0 $--input-number-radius  $--input-number-radius 0;
            }
            .cat-input-body {
                position: relative;
                width: 100%;
                .cat-input {
                    border-radius: $--input-number-radius;
                    border: 1px solid $--input-number-border-color;
                    color: $--input-number-color;
                    display: inline-block;
                    font-size: $--input-number-title-font-size;
                    height: $--input-number-height;
                    line-height: $--input-number-height;
                    padding: 0 25px;
                    transition: border-color $--transition-base;
                    width: 100%;
                    text-align: center;
                    &:focus {
                        border-color: $--color-primary;
                    }
                } 
            }
        }
    }
</style>
<script>
    import CcIconGreyBlock from '@packages/iconGreyBlock/src/iconGreyBlock.vue';
    export default {
        name: 'CcInputNumber',
        components: {
            CcIconGreyBlock
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            value: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                default: 1
            },
            min: {
                type: Number ,
                default: 1
            },
            step: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                currentValue: this.value 
            }
        },
        computed: {
        
        },
        watch: {
            currentValue: function(val) {
                //$emit与父组件通信  （子组件-->父组件）
                //this指向当前组件实例
                this.$emit('input', val);
                //定义自定义函数进行通信
                this.$emit('on-change', val)
            },
            //监听父组件value是否改变
            value: function(val) {
                this.updateValue(val);
            }
        },
        methods: {
            updateValue(val) {
                if(val > this.max) {
                    val = this.max;
                }
                if(val < this.min) {
                    val = this.min;
                }
                this.currentValue = val;
            },
            reduce(){
                if (parseInt(this.value) === 1) {
                    return;
                }
                this.currentValue -= this.step;
                if(this.currentValue <= this.min) {
                    this.currentValue = this.min;
                }
            },
            increase(){
                if(parseInt(this.value) === parseInt(this.max)) {
                    return;
                }
                this.currentValue += this.step;
                if(this.currentValue >= this.max) {
                    this.currentValue = this.max;
                }
            },
            handleChange(event) {
                var val = event.target.value.trim();
                var max = this.max;
                var min = this.min;
                if(this.isValueNumber(val)) {
                    val = Number(val);
                    this.currentValue = val;
                    if(val > max) {
                        this.current = max;
                    }
                    if(val < min) {
                        this.current = min;
                    }
                } else {
                    //如果输入的不是数字，将输入的内容重置为之前的currentValue
                    event.target.value = this.currentValue;
                }
            },
            isValueNumber(value) {
                return(/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9]*$)|(^-?0{1}$)/).test(value + '');
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.updateValue(this.value);
        }
    }
</script>