<template>
    <cc-row justify="center" align="center"
        class="cat-answer-radio-body"
        :class="parentVal === value ? 'cat-answer-radio-body--active' : 'cat-answer-radio-body--default'"
        @click.native="handleChange">
        <slot>
            {{label ? label : value}}
        </slot>
    </cc-row>
</template>
<style lang="scss">
    .cat-answer-radio-body {
        font-size: $--answer-radio-font-size;
        border-radius: $--answer-radio-border-radius;
        padding: $--answer-radio-padding;
        border: 1px solid $--answer-radio-border-color;
        cursor: pointer;
        transition: all .3s;
        &:hover {
            filter: $--color-brightness-base;
        }
    }
    .cat-answer-radio-body + .cat-answer-radio-body {
        margin-top: 10px;
    }
    .cat-answer-radio-body--active {
        background: $--answer-radio-background-color-active;
        color: $--answer-radio-color-active;
    }
    .cat-answer-radio-body--default {
        background: $--answer-radio-background-color-default;
        color: $--answer-radio-color-default;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue'; 
    import {setParentModel, ccParent, getParentModel} from '@mixins/parentModel';
    export default {
        name: 'CcAnswerRadio',
        componentName: 'CcAnswerRadio',
        components: {
            ccRow
        },
        mixins: [ccParent('CcRadioGroup')],
        props: {
            // 自身绑定值
            value: {
                type:  Boolean | String | Number,
                default: ''
            },
            // 绑定值的描述
            label: {
                type: Number | String,
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