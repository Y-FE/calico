<template>
    <label class="cat-radio-button"  
            role="radio">
        <input type="radio" 
            class="cat-inner-radio" 
            :value="label" 
            v-model="value"
            :name="name"  
            @change="handleChange"
            :disabled="disabled">
        <span class="cat-radio-button--text" 
            :class="[value === label ? 'cat-radio-button--active':'']">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template> 
        </span>
    </label> 
</template>
<style lang="scss">
    .cat-radio-button {
        position: relative;
        display: inline-block;
        outline: none;
        cursor: pointer;
        text-align: center;
        background: $--radio-button-unchecked-fill;
       .cat-inner-radio {
            opacity: 0;
            outline: none;
            position: absolute;
        } 
        .cat-radio-button--text {
            font-size: $--radio-button-font-size;
            color: $--radio-button-unchecked-color;
            line-height: 1;
            white-space: nowrap;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            margin: 0;
            cursor: pointer;
            border: 1px solid $--radio-button-unchecked-border-color;
            transition: all .3s cubic-bezier(.645,.045,.355,1); 
            padding: $--radio-button-padding; 
            border-left: 0; 
        }
        .cat-inner-radio:checked+.cat-radio-button--text ,
        .cat-radio-button--active {
            color: $--radio-button-checked-color;
            background-color:$--radio-button-checked-fill;
            border-color: $--radio-button-checked-border-color;
            box-shadow: -1px 0 0 0 $--radio-button-checked-border-color;
        } 
    }
    .cat-radio-button:last-child .cat-radio-button--text {
        border-radius: 0 $--radio-button-radius $--radio-button-radius 0;
    }
    .cat-radio-button:first-child .cat-radio-button--text {
        border-radius: $--radio-button-radius 0 0 $--radio-button-radius;
        box-shadow: none!important;
        border-left: 1px solid $--radio-button-unchecked-border-color;
    }
    .cat-radio-button:nth-of-type(1) .cat-radio-button--text {
        border: 1px solid $--radio-button-unchecked-border-color; 
    }
   
   

</style>
<script>
    import Emitter from "../mixins/emitter";
    export default {
        name: 'CcRadioButton',
        components: {
        },
        mixins: [Emitter],
        props: {
            label:{
                type: String,
                default: ''
            },
            name:{
                type: String,
                default: ''
            },
            disabled:{
                type: Boolean,
                default: false 
            }
        },
        data() {
            return {
            }
        },
        computed: {
            value: {
                get() {
                    return this._radioGroup.value;
                },
                set(value) {
                    if(this._radioGroup){
                        this._radioGroup.$emit('input', value); 
                    }   
                }
            },
            // 判断是否是组单选按钮
            _radioGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'CcRadioGroup') {
                        parent = parent.$parent;
                    } else {
                        return parent;
                    }
                }
                return false;
            },
            size() {
                return this._radioGroup.size || this.disabled;
            },
            isDisable() {
                return this._radioGroup.disabled || this.disabled;
            }
        },
        watch: {
        },
        methods: {
            handleChange() {
                this.$nextTick(() => {
                    this.isGroup && this.dispatch("CcRadioGroup", "handleChange", this.value);
                });
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