<template>
    <cc-row class="cat-nav-item" 
        justify="center"
        @click.native="handleChange" 
        :style="{'width': width ? `${width}px` : ''}"
        :class="parentVal === value ? ['cat-nav-item--active', `cat-nav-item--active-${theme}`] : 'cat-nav-item--default'">
        <span class="cat-nav-item--text" 
            :class="parentVal === value ? 'cat-nav-item--text-active' : `cat-nav-item--text-${textState}`">
            <slot>
                {{label ? label : value}}
            </slot>
        </span>
    </cc-row> 
</template>
<style lang="scss">
    .cat-nav-item {
        padding: $--nav-item-padding;
        transition: $--transition-base;
        position: relative;
        cursor: pointer;
        .cat-nav-item--text {
           font-size: $--nav-font-size;
        //    color: $--nav-item-color;
           &:hover {
               color: $--nav-item-color-hover;
            } 
        }
        .cat-nav-item--text-default {
            color: $--nav-item-color-default;
        }
        .cat-nav-item--text-active {
            color: $--nav-item-color-acitve;
       }    
        .cat-nav-item--text-success {
            color: $--nav-item-color-success;
       }    
        .cat-nav-item--text-error {
            color: $--nav-item-color-error;
       }    
    }
    .cat-nav-item + .cat-nav-item {
        margin-left: 10px;
    }
    .cat-nav-item--active {
        &::after{
            position: absolute;
            content: "";
            bottom: 1px;
            left: 0;
            width: 100%;
            height: 2px;
            animation: transX .3s;
            transition: all .3s ease-in;
        }
    }
    .cat-nav-item--active-blue {
        &::after{ background: $--nav-item-border-active-blue; }
    }
    .cat-nav-item--active-dark {
        &::after{ background: $--nav-item-border-active-dark; }
    }
    @keyframes transX {
    0% {
        width: 0%;
    }
    50% {
        width: 50%;;
    }
    100% {
        width: 100%;
    }
  } 
</style>
<script>
    import {setParentModel, ccParent, getParentModel} from "@mixins/parentModel";
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcNavItem',
        components: {
            ccRow
        },
        props: {
            value: {
                type:  Boolean | String | Number,
                default: ''
            },
            // 绑定值的描述
            label: {
                type: Number | String,
                default: '',
            },
            // item的宽度
            width: {
                type: Number | String,
                default:  '',
            },
            // blue dark
            theme: {
                type: String,
                default: 'blue',
            },
            // default, error, success
            textState: {
                type: String,
                default: 'default',
            }
        },
        mixins: [ccParent('CcNav')],
        data() {
            return {
            }
        },
        computed: {
            parentVal() {
                return getParentModel.call(this); 
            },
        },
        watch: {
        },
        methods: {
            handleChange() {
                setParentModel.call(this, this.value);
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