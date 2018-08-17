<template>
    <div class="cat-nav-item" 
        @click="handleChange" 
        :class="parentVal === value ? 'cat-nav-item--active':'cat-nav-item--default'">
        <span class="cat-nav-item--text">
            <slot>
                {{label ? label : value}}
            </slot>
        </span>
    </div> 
</template>
<style lang="scss">
    .cat-nav-item {
        margin-right: 10px;
        padding: $--nav-item-padding;
        transition: $--transition-base;
        position: relative;
        cursor: pointer;
       .cat-nav-item--text {
           font-size: $--nav-font-size;
           color: $--nav-item-color;
           &:hover {
               color: $--nav-item-color-hover;
           } 
       }
    }
    .cat-nav-item--active {
        &::after{
            position: absolute;
            content: "";
            bottom: 1px;
            left: 0;
            width: 100%;
            height: 2px;
            background: $--nav-item-border-active;
            animation: transX .3s;
            transition: all .3s ease-in;
        }
        .cat-nav-item--text {
            color: $--nav-item-color-acitve;
       }    
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
    export default {
        name: 'CcNavItem',
        components: {
        },
        props: {
            value: {
                type:  Boolean | String | Number,
                default: ''
            },
            // 绑定值的描述
            label: {
                type: Number | String,
            },
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