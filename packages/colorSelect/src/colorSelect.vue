<template>
    <div class="cat-color-option-select" 
        v-blur="handleClose"
        @click="colorClick">
        <p class="cat-select-title" v-if="title">
            {{title}}
        </p>
        <input class="cat-color-input-body" 
            readonly="readonly" 
            autocomplete="off" 
            :style="[{'background-color': color}]" />
        <transition name="up-silde">
            <div class="cat-color-dropdown" v-if="visible">
                <cc-row justify="space-around"
                    align="center"
                    wrap="wrap"
                    class="cat-color-wrap">
                    <slot></slot>
                </cc-row>
            </div>
        </transition>
    </div>
</template>
<style lang="scss">
    .cat-color-option-select {
        display: inline-block;
        position: relative;
        width: $--select-width;
        .cat-color-input-body {
            position: relative;
            width: 100%;
            height: $--select-height;
            border-radius: $--select-option-radius; 
            cursor: pointer;
        }
        .cat-color-dropdown {
            position: absolute;  
            bottom: -60px;
            left: 0;
            transition: all .5s ease-in;
            width: 100%;
            z-index: 10;
            .cat-color-wrap {
                width: 100%; 
                background: $--color-white;
                min-height: 55px;
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
        name: 'CcColorSelect',
        componentName: 'CcColorSelect',
        mixins: [ccModel(String)],
        components: {
            ccRow
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
               visible: false 
            }
        },
        computed: {  
            color() {
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
            colorClick(){
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