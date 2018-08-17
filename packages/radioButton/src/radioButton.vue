<template>
    <label class="cat-radio-button">
        <span class="cat-radio-button--text" 
            @click="handleChange"
            :class="parentVal === value ? 'cat-radio-button--active':'cat-radio-button--default'">
            <slot>
                {{label ? label : value}}
            </slot>
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
        .cat-radio-button--default {
            &:hover {
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
            // 自身绑定值
            value: {
                type:  Boolean | String | Number,
                default: ''
            },
            // 绑定值的描述
            label: {
                type: Number | String,
            },
        },
        data() {
            return {
            }
        },
        computed: {
            // 父组件的v-model值
            parentVal() {
                return getParentModel.call(this); 
            },
        },
        watch: {
        },
        methods: {
            handleChange() {
                setParentModel.call(this, this.value);
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