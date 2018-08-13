<template>
    <div class="cat-color-option-select">
        <p class="cat-select-title" v-if="title">
            {{title}}
        </p>
        <input class="cat-color-input-body" 
            readonly="readonly" 
            autocomplete="off" 
            :style="[{'background-color': color}]" />
         <div class="cat-color-dropdown">
            <ul class="cat-color-wrap">
                <slot></slot>
            </ul>
         </div>
    </div>
</template>
<style lang="scss">
    .cat-color-option-select {
        display: inline-block;
        position: relative;
        .cat-color-input-body {
            position: relative;
            width: $--select-width;
            height: $--select-height;
            border-radius: $--select-option-radius; 
            cursor: pointer;
        }
        .cat-color-dropdown {
            position: absolute;  
            bottom: -60px;
            left: 0;
            .cat-color-wrap {
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
    import {ccModel, modelProp} from '@mixins/parentModel';

    export default {
        name: 'CcColorSelect',
        componentName: 'CcColorSelect',
        mixins: [ccModel(String)],
        components: {
        },
        props: {
            // 选择框描述
            title: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                
            }
        },
        computed: {  
            color() {
                return this[modelProp];
            }
        },
        watch: {
        },
        methods: {
            
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
   
</script>