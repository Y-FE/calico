<template>
    <cc-row align="center" class="cat-course-radio-body">
        <cc-row 
            align="center" 
            justify="center" 
            @click.native="handleChange"
            class="cat-course-radio-body--back"
            :class="parentVal === value ? 'cat-course-radio-body--back-active' : 'cat-course-radio-body--back-default'"
            :style="{'background': back}">
            <slot></slot>
        </cc-row>
        <cc-row class="cat-course-radio--icon-body" 
            align="center" 
            justify="center" 
            v-if="parentVal === value">
            <i class="iconfont icon-select cat-course-radio--icon"></i>
        </cc-row>
    </cc-row>
</template>
<style lang="scss">
    .cat-course-radio-body {
        position: relative;
        width: $--course-raido-width;
        height: $--course-raido-height;
        transition: $--transition-primary;
        .cat-course-radio--icon-body {
            font-size: $--course-raido-icon-font-size;
            color: $--course-raido-icon-color;
            height: 100%;
            width: 100%;
            position: absolute;
            filter: brightness(1) !important;
            .cat-course-radio--icon {
                font-size: $--course-raido-icon-font-size;
            }
        }
    }
    .cat-course-radio-body--back {
        width: 100%;
        height: $--course-raido-back-height;
        cursor: pointer;
        font-size: $--course-raido-font-size;
        color: $--course-raido-color;
    }
    .cat-course-radio-body--back-default {
        &:hover {
            filter: $--color-brightness-base;
        }
    }
    .cat-course-radio-body--back-active {
        filter: $--color-brightness-modal
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    import {setParentModel, ccParent, getParentModel} from "@mixins/parentModel";
    export default {
        name: 'CcCourseRadio',
        componentName: 'CcCourseRadio',
         mixins: [ccParent('CcCourseRadioGroup')],
        components: {
            ccRow
        },
        props: {
            back: {
                type: String,
                default: '#666'
            },
            // 自身绑定值
            value: {
                type:  Boolean | String | Number,
                default: ''
            },
        },
        data() {
            return {
            }
        },
        computed: {
            // 父组件的v-model值
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