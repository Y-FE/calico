<template>
    <div class="cat-select" 
        :style="{width: `${width}px`}"
        v-blur="handleClose"
        @click="selectClick">
        <!-- <p class="cat-select-title" v-if="title">
            {{title}}
        </p> -->
        <div class="cat-input-body">
            <input class="cat-input-main" 
                :value="label ? label : value" 
                readonly
                :class="[visible === false ? 'cat-input-border--default':'cat-input-border--active']"/>
            <cc-row justify="center" 
                align="center"
                class="cat-input-icon">
                <i class="cat-triangle iconfont icon-dropdown"  
                    :class="[visible === false ? '':'cat-icon-resever']">
                </i>    
            </cc-row>
        </div>
        <transition name="drop-down">
            <div class="cat-select-dropdown" v-show="visible">
                <cc-row justify="space-around"
                    align="center"
                    wrap="wrap"
                    class="cat-select-wrap">
                    <slot></slot>
                </cc-row>
            </div>
        </transition>
    </div>
</template>
<style lang="scss">
    .cat-select {
        width: $--select-width;
        display: inline-block;
        position: relative;
        .cat-select-title {
            font-size: $--select-font-size;
            color: $--select-color; 
            margin-bottom: 10px;
        }
        .cat-input-body {
            position: relative;
            width: 100%;
            height: $--select-height; 
            cursor: pointer;
            .cat-input-main {
                border-radius: $--select-option-radius; 
                color: $--select-color;
                display: inline-block;
                font-size: $--select-title-font-size;
                height: $--select-height;
                line-height: $--select-height;
                outline: none;
                padding: 0 10px;
                transition: border-color $--transition-base;
                width: 100%;
                cursor: pointer;
            }
            .cat-input-icon {
                position: absolute;
                height: 100%;
                right: 5px;
                top: 0;
                text-align: center;
                transition: $--transition-base;
                pointer-events: none;
                i {
                    color: $--select-title-color;
                    font-size: $--select-font-size;
                    transition: transform .3s;
                    transform: rotate(0deg);
                    cursor: pointer;
                }
                .cat-icon-resever {
                    transform: rotate(180deg);
                }
            }
            .cat-input-border--default {
                border: 1px solid $--select-option-border-color;
            }
            .cat-input-border--active {
                border: 1px solid $--select-option-border-color-active;
            }
        }
        .cat-select-dropdown {
            position: absolute;  
            top: 38px;
            left: 0;
            transition: all .2s ease-in;
            width: 100%;
            z-index:  $--select-z-index;
            .cat-select-wrap {
                width: 100%;  
                background: $--color-white;    
                border: 1px solid $--select-option-border-color; 
                border-radius: $--select-option-radius; 
            }
        }
    }
    
    

</style>
<script>
    import {ccModel, getModel} from '@mixins/parentModel';
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcSelect',
        componentName: 'CcSelect',
        mixins: [ccModel(Number | String)],
        components: {
            ccRow
        },
        props: {
            width: {
                type: Number,
                default: 80
            }          
        },
        data() {
            return {
                visible: false,
                labelList: [],
            }
        },
        computed: {
            label() {
                let label = this.labelList.find(i => i.value === getModel.call(this));
                if (label) {
                    return label.label;
                }
                return label;
            },
            value() {
                return getModel.call(this);
            },
        },
        watch: {
        },
        methods: {
            selectClick() {
                this.visible = !this.visible;
            },
            handleClose() {
                this.visible = false;
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            if (this.$slots && this.$slots.default && this.$slots.default.length) {
                this.labelList = this.$slots.default.map(item => item.componentInstance ? item.componentInstance : '');
            }
        }
    }
</script>