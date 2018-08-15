<template>
    <label class="cat-radio-button">
        <span class="cat-radio-button--text" 
            @click="handleChange"
            :class="[val === label ? 'cat-radio-button--active':'cat-radio-button--default']">
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
        .cat-radio-button--default {
            &:hover {
                color: $--radio-button-checked-fill;
            }
        }
        // &:hover {
        //     .cat-radio-button--text {
        //         color: $--radio-button-checked-fill;
        //     }
        // }
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
                type:  Boolean | String | Number,
                default: ''
            },
            name:{
                type: String,
                default: ''
            },
        },
        data() {
            return {
            }
        },
        computed: {
            val() {
                return getParentModel.call(this); 
            },
        },
        watch: {
        },
        methods: {
            handleChange() {
                setParentModel.call(this, this.label);
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