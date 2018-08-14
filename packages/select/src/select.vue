<template>
    <div class="cat-select"  @click="lineClick">
         <p class="cat-select-title" v-if="title">
            {{title}}
        </p>
        <div class="cat-input-body">
            <input class="cat-input-main" />
            <span :class="['triangle',visible === false?'triangleShow':'triangleHidden']">

            </span>
        </div>
        <div class="cat-select-dropdown" v-if="visible">
            <ul class="cat-select-wrap">
                <slot></slot>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
</style>
<script>
    // import {ccModel} from '@mixins/parentModel'
    export default {
        name: 'CcSelect',
        componentName: 'CcSelect',
        // mixins: [ccModel(String)],
        components: {
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
                visible: false
            }
        },
        computed: {
            value(){
                //return getModel.call(this);
            }
        },
        watch: {
        },
        methods: {
            lineClick(){

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