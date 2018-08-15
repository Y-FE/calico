<template>
    <div class="cat-select" 
        v-blur="handleClose"
        @click="selectClick">
        <p class="cat-select-title" v-if="title">
            {{title}}
        </p>
        <div class="cat-input-body">
            <input class="cat-input-main" 
                :value="label" 
                readonly
                :class="[visible === false ? 'cat-input-border--default':'cat-input-border--active']"/>
            <span class="cat-input-icon">
                <i class="cat-triangle iconfont "  
                    :class="[visible === false ? 'icon-dropDown':'cat-icon-resever icon-TakeUp']">
                </i>    
            </span>
        </div>
        <div class="cat-select-dropdown" v-show="visible">
            <cc-row justify="space-around"
                align="center"
                wrap="wrap"
                class="cat-select-wrap">
                <slot></slot>
            </cc-row>
        </div>
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
                transition: all .3s;
                pointer-events: none;
                line-height: $--select-height ;
                i {
                    color: $--select-title-color;
                    font-size: $--select-font-size;
                    transition: transform .3s;
                    transform: rotate(180deg);
                    cursor: pointer;
                }
                .cat-icon-resever {
                    transform: rotate(0deg);
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
            top: 60px;
            left: 0;
            transition: all .5s ease-in;
            width: 100%;
            .cat-select-wrap {
                width: 100%;     
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
            // 选择框描述
            title: {
                type: String,
                default: '',
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