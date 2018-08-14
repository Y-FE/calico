<template>
    <label class="cat-radio-button">
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
            z-index: -1;
        } 
        .cat-radio-button--text {
            position: relative;
            display: inline-block;
            outline: none;
            font-size: $--radio-button-font-size;
            color: $--radio-button-unchecked-color;
            cursor: pointer;
            border: 1px solid $--radio-button-unchecked-border-color;
            transition: $--transition-base; 
            padding: $--radio-button-padding; 
            border-left: 0; 
        }
        .cat-inner-radio:checked+.cat-radio-button--text ,
        .cat-radio-button--active {
            color: $--radio-button-checked-color;
            background-color: $--radio-button-checked-fill;
            border-color: $--radio-button-checked-border-color;
        } 
        &:hover {
            .cat-radio-button--text {
                color: $--radio-button-checked-fill;
            }
        }
    }
    .cat-radio-button:last-child .cat-radio-button--text {
        border-radius: 0 $--radio-button-radius $--radio-button-radius 0;
    }
    .cat-radio-button:first-child .cat-radio-button--text {
        border-radius: $--radio-button-radius 0 0 $--radio-button-radius;
        border-left: 1px solid $--radio-button-unchecked-border-color;
    }
    .cat-radio-button:nth-of-type(1) .cat-radio-button--text {
        border: 1px solid $--radio-button-unchecked-border-color; 
    }
   
   

</style>
<script>
    import {setParentModel, ccParent, getParentModel} from "@mixins/parentModel";
    export default {
        name: 'CcRadioButton',
        componentName: 'CcRadioButton',
        components: {
        },
        mixins: [ccParent('CcRadioGroup')],
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
            value:{
                get(){
                   return getParentModel.call(this); 
                } ,
                set(value){
                    if(this.radioGroup){
                        this.$emit('input', value); 
                    }   
                }
            },
            radioGroup() { // 判断是否是组单选按钮
                return ccParent('CcRadioGroup');
            },
        },
        watch: {
        },
        methods: {
            handleChange() {
                if(this.radioGroup){
                    setParentModel.call(this,this.label)
                }    
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