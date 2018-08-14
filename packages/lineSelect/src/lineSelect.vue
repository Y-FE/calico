<template>
    <div class="cat-line-option-select" @click="switchClick">
        <p class="cat-select-title" v-if="title">
            {{title}}
        </p>
        <input class="cat-line-input-body" 
            readonly="readonly" 
            autocomplete="off" 
            :style="[{'border-color': color}]" />
         <div class="cat-line-dropdown" v-if="ifDrop">
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
        }
        .cat-line-dropdown {
            position: absolute;  
            bottom: -60px;
            left: 0;
            transition: all .5s ease-in;
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
            }
        },
        computed: {
            color(){
                getModel.call(this);
            }
        },
        watch: {
        },
        methods: {
            switchClick(){
                
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