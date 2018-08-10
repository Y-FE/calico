<template>
    <label class="cat-radio-button"  @click="radioClick">
        <input type="radio" 
            class="cat-inner-radio" 
            :value="label" 
            :checked="checked">
        <span class="cat-radio-button--text">{{label}}</span>
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
            font-size: $--radio-button-font-size;
            color: $--radio-button-unchecked-color;
            line-height: 1;
            white-space: nowrap;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            margin: 0;
            border-left: 0;
            cursor: pointer;
            transition: all .3s cubic-bezier(.645,.045,.355,1); 
            border: 1px solid $--radio-button-unchecked-border-color;
            padding: $--radio-button-padding;  
        }
        .cat-inner-radio:checked+.cat-radio-button--text {
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
            box-shadow: -1px 0 0 0 #409eff;
        } 
    }
    .cat-radio-button--checked {
        background: $--radio-button-checked-fill;
        border: 1px solid $--radio-button-checked-border-color;
        .cat-radio-button--text {
           color: $--radio-button-checked-color;
        }
    }
   
</style>
<script>
    export default {
        name: 'CcRadioButton',
        components: {
        },
        model: {//自定义 v-model的 prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
            prop: 'model',
            event: 'change'
        },
        props: {
            checked:{
                type: Boolean,
                default: false
            },
            label:{
                type: String,
                default: ''
            }
        },
        data() {
            return {
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            radioClick(){
                this.$emit('click');
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