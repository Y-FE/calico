<template>
    <cc-row @click.native="handleChange" 
        align="center"
        class="cat-vertical-radio">
        <cc-icon-block :active="parentVal === value ? true : false">
            <slot></slot>
        </cc-icon-block>
        <p class="cat-vertical-radio--text">{{label}}</p>
    </cc-row>
</template>
<style lang="scss">
    .cat-vertical-radio {
        cursor: pointer;
    }
    .cat-vertical-radio + .cat-vertical-radio {
        margin-top: 10px;
    }
    .cat-vertical-radio--text {
        color: $--vertical-radio-color;
        font-size: $--vertical-radio-font-size;
        margin-left: 5px;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    import ccIconBlock from '@packages/iconBlock/src/iconBlock.vue'; 
    import {setParentModel, ccParent, getParentModel} from "@mixins/parentModel";
    export default {
        name: 'CcVerticalRadio',
        componentName: 'CcVerticalRadio',
        components: {
            ccRow,
            ccIconBlock
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