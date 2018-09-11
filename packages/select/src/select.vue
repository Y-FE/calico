<template>
    <div class="cat-select" 
        :style="{width: `${width}px`}"
        v-blur="handleClose"
        @click="selectClick">
        <!-- <p class="cat-select-title" v-if="title">
            {{title}}
        </p> -->
        <div class="cat-select-input-body" :class="`cat-select-input-body--${size}`">
            <input class="cat-select-input-main" 
                :value="label ? label : value" 
                readonly
                :placeholder="placeholder"
                :class="[visible === false ? 'cat-select-input-border--default':'cat-select-input-border--active']"/>
            <cc-row justify="center" 
                align="center"
                class="cat-select-input-icon"
                :class="`cat-select-input-icon--${size}`">
                <i class="iconfont icon-take-up cat-select-icon-dropdown"  
                    :class="[visible === false ? '':'cat-select-icon-resever']">
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
        .cat-select-input-body {
            position: relative;
            width: 100%;
            cursor: pointer;
            .cat-select-input-main {
                border-radius: $--select-option-radius; 
                color: $--select-color;
                display: inline-block;
                font-size: $--select-title-font-size;
                height: 100%;
                line-height: 100%;
                outline: none;
                padding: 0 10px;
                transition: border-color $--transition-base;
                width: 100%;
                cursor: pointer;
            }
            .cat-select-input-icon {
                position: absolute;
                height: calc(100% - 2px);
                right: 2px;
                top: 1px;
                text-align: center;
                transition: $--transition-base;
                pointer-events: none;
                background-color: #fff;
                i {
                    color: $--select-title-color;
                    font-size: $--select-font-size;
                    transition: transform .3s;
                    transform: rotate(0deg);
                    cursor: pointer;
                }
                .cat-select-icon-resever {
                    transform: rotate(180deg);
                }
            }
            .cat-select-input-icon--normal {
                padding: 0 5px;
            }
            .cat-select-input-icon--large {
                padding: 0 8px;
            }
            .cat-select-input-border--default {
                border: 1px solid $--select-border-color;
                &:hover {
                    border: 1px solid $--select-border-color-hover;
                }
            }
            .cat-select-input-border--active {
                border: 1px solid $--select-border-color-active;
            }
        }
        .cat-select-input-body--normal {
            height: $--select-height; 
        }
        .cat-select-input-body--large {
            height: $--select-height-large; 
        }
        .cat-select-dropdown {
            position: absolute;  
            top: calc(100% + 5px);
            left: 0;
            transition: all .2s ease-in;
            min-width: 100%;
            z-index:  $--select-z-index;
            .cat-select-wrap {
                min-width: 100%;  
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
            },
            placeholder: {
                type: String,
                default: ''
            },
            //normal , large
            size: {
                type: String,
                default: 'normal',
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