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
            width: 100%;
            z-index: 10;
            .cat-line-wrap {
                width: 100%;
                min-height: 55px;
                background: $--color-white;
                padding: $--color-select-option-padding;     
                border: 1px solid $--select-option-border-color; 
                border-radius: $--select-option-radius; 
            }
        }
        .cat-select-title {
            font-size: $--select-font-size;
            color: $--select-color; 
            margin-bottom: 10px;
        }
    }
    .up-silde-enter {
        opacity: 0;
        transform:translateY(50%);
    }
    .up-silde-leave-to {
        opacity: 0;
        transform:translateY(50%);
    }
    .up-silde-enter-active, 
    .up-silde-leave-active {
        transition: .5s 
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