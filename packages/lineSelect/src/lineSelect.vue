<template>
    <div class="cat-line-option-select" 
        v-blur="handleClose"
        @click="lineClick">
        <!-- <p class="cat-select-title" v-if="title">
            {{title}}
        </p> -->
        <cc-row class="cat-line-input-body" 
            justify="center"
            align="center"
            :style="[{'border-color': (color !== 'rgba(0,0,0,0)' && color) ? color : '#FF336A'}]"> 
            {{(color !== 'rgba(0,0,0,0)' && color) ? '' : '/'}}
        </cc-row>
        <transition name="up-silde">
            <div class="cat-line-dropdown" v-if="visible">
                <cc-row justify="space-around"
                    align="center"
                    wrap="wrap"
                    class="cat-line-wrap">
                    <slot></slot>
                </cc-row>
            </div>
        </transition>
    </div>
</template>
<style lang="scss">
    .cat-line-option-select {
        display: inline-block;
        position: relative;
        width: $--select-width;
        .cat-line-input-body {
            position: relative;
            width: 100%;
            height: $--select-height-small;
            border-radius: $--select-option-radius; 
            cursor: pointer;
            border-width: 1px;
            border-style: solid;
            color: $--color-danger;
            font-size: $--font-size-base;
        }
        .cat-line-dropdown {
            position: absolute;  
            bottom: -60px;
            left: 0;
            transition: $--transition-base;
            width: 100%;
            z-index:  $--select-z-index;
            .cat-line-wrap {
                width: 100%;
                min-height: 55px;
                background: $--color-white;
                padding: $--color-select-option-padding;     
                border: 1px solid $--select-option-border-color; 
                border-radius: $--select-option-radius; 
            }
        }
    }
    .cat-select-title {
        font-size: $--select-font-size-small;
        color: $--color-text-title; 
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }
</style>
<script>
    import {ccModel, getModel} from '@mixins/parentModel';
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcLineSelect',
        componentName: 'CcLineSelect',
        mixins: [ccModel(String)],
        components: {
            ccRow
        },
        props: {
            // // 选择框描述
            // title: {
            //     type: String,
            //     default: '',
            // }
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