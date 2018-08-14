<template>
    <div class="cat-line-option-select" 
        v-blur="handleClose"
        @click="lineClick">
        <p class="cat-select-title" v-if="title">
            {{title}}
        </p>
        <input class="cat-line-input-body" 
            readonly="readonly" 
            autocomplete="off" 
            :style="[{'border-color': color}]" />
         <div class="cat-line-dropdown" v-if="visible">
            <ul class="cat-line-wrap">
                <slot></slot>
            </ul>
         </div>
    </div>
</template>
<style lang="scss">
    .cat-line-option-select {
        display: inline-block;
        position: relative;
        .cat-line-input-body {
            position: relative;
            width: $--select-width;
            height: $--select-height;
            border-radius: $--select-option-radius; 
            cursor: pointer;
            border-width: 1px;
            border-style: solid;
        }
        .cat-line-dropdown {
            position: absolute;  
            bottom: -60px;
            left: 0;
            transition: $--transition-base;
            .cat-line-wrap {
                width: $--select-width; 
                min-height: 55px;
                padding: $--color-select-option-padding;     
                border: 1px solid $--select-option-border-color; 
                border-radius: $--select-option-radius; 
                display: flex;
                justify-content: space-around;
                flex-flow:row wrap;
                align-items: center;
                align-content: space-around;
            }
        }
        .cat-select-title {
            font-size: $--select-font-size;
            color: $--select-color; 
            margin-bottom: 10px;
        }
    }
</style>
<script>
    import {ccModel, getModel} from '@mixins/parentModel';
    export default {
        name: 'CcLineSelect',
        componentName: 'CcLineSelect',
        mixins: [ccModel(String)],
        components: {
        },
        props: {
            // 选择框描述
            title: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                visible: false
            }
        },
        computed: {
            color(){
                return getModel.call(this);
            }
        },
        watch: {
            color(val, oldVal){
                if(val !== oldVal){
                   this.visible = false; 
                }
            }
        },
        methods: {
            lineClick(){
                this.visible = !this.visible;
            },
            handleClose(){
                this.visible = false;
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