<template>
    <div class="cat-input-number"
        :style="{width: `${width}px`}">
        <!-- <p class="cat-input-number-title" v-if="title">{{title}}</p> -->
        <div class="cat-input-number-body">
            <div class="cat-input-number-body">
                <input type="text"
                    :value="currentValue"
                    @blur="blur" 
                    @focus="focus"
                    @keyup.stop
                    @keydown.stop
                    class="cat-input-number-input" />
            </div>
            <cc-icon-grey-block icon="icon-reduce" 
                class="cat-input-number--decrease cat-input-number-button"
                :disabled="value === min"
                @click="reduce">
            </cc-icon-grey-block>
            <cc-icon-grey-block icon="icon-add-courseware" 
                class="cat-input-number--increase cat-input-number-button"
                :disabled="value === max"
                @click="increase">
            </cc-icon-grey-block>
        </div>
    </div>
</template>
<style lang="scss">
    .cat-input-number {
        width: $--input-number-width;
        .cat-input-number-title {
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
            .cat-input-number-button {
                position: absolute;
                top: 2px;
            }
            .cat-input-number--decrease {
                left: 1px;
                border-radius: $--input-number-radius 0 0 $--input-number-radius;
            }
            .cat-input-number--increase {
                right: 1px;
                border-radius: 0 $--input-number-radius  $--input-number-radius 0;
            }
            .cat-input-number-body {
                position: relative;
                width: 100%;
                .cat-input-number-input {
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
                        border-color: $--input-number-border-color-active;
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
            // title: {
            //     type: String,
            //     default: ''
            // },
            value: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                default: Infinity
            },
            min: {
                type: Number ,
                default: -Infinity
            },
            step: {
                type: Number,
                default: 1
            },
            width: {
                type: Number,
                default: 80
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
            // currentValue(val) {
            //     this.$emit('input', val);
            //     this.$emit('on-change', val)
            // },
            value(val) {
                this.currentValue = val;
                // this.updateValue(val);
            }
        },
        methods: {
            validValue() {
                if(this.value > this.max || this.value < this.min) {
                    console.error('Incorrect range of incoming values');
                }
            },
            currentValueChange() {
                this.$emit('input', this.currentValue);
                this.$emit('on-change', this.currentValue)
            },
            reduce(){
                if (parseInt(this.value) === 1) {
                    return;
                }
                this.currentValue -= this.step;
                if (this.currentValue <= this.min) {
                    this.currentValue = this.min;
                }
                this.currentValueChange();
            },
            increase(){
                if(parseInt(this.value) === parseInt(this.max)) {
                    return;
                }
                this.currentValue += this.step;
                if(this.currentValue >= this.max) {
                    this.currentValue = this.max;
                }
                this.currentValueChange();
            },
            blur(event) {
                let val = event.target.value.trim();
                if(this.isValueNumber(val) && Number(val) !== this.currentValue) {
                    val = Number(val);
                    this.currentValue = val;
                    if(val > this.max) {
                        this.currentValue = this.max;
                    }
                    if(val < this.min) {
                        this.currentValue = this.min;
                    }
                    this.currentValueChange();
                } else {
                    //如果输入的不是数字，将输入的内容重置为之前的currentValue
                    event.target.value = this.currentValue;
                }
                this.$emit('blur');
            },
            isValueNumber(value) {
                return  (/^[0-9]+.?[0-9]*$/).test(value + '');
            },
            focus() {
                this.$emit('focus');
            },
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.validValue();
        }
    }
</script>