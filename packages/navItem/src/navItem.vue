<template>
    <div class="cat-nav-item" 
        :class="parentVal === value ? 'cat-nav-item--active':'cat-nav-item--default'">
        <span class="cat-nav-item--text" 
            @click="handleChange"
            >
            <slot></slot>
            <template v-if="!$slots.default">
                {{label ? label : value}}
            </template> 
        </span>
    </div> 
</template>
<style lang="scss">
    .cat-nav-item {
        margin-right: 10px;
        padding: $--nav-item-padding;
        transition: $--transition-base;
       .cat-nav-item--text {
           font-size: $--nav-font-size;
           color: $--nav-item-color;
           &:hover {
               color: $--nav-item-color-hover;
           } 
       }
    }
    .cat-nav-item--active {
        border-bottom: 1px solid $--nav-item-border-active;
        .cat-nav-item--text {
            color: $--nav-item-color-acitve;
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