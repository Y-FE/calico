<template>
 <div class="cat-color-option-select">
        <div class="cat-color-input-body">
            <input type="text" 
                readonly="readonly" 
                autocomplete="off" 
                placeholder="请选择" 
                class="cat-input--inner">
            <span class="el-input__suffix">
                <span class="el-input__suffix-inner">
                    <i class="el-select--caret iconfont el-icon-arrow-up"></i>
                    </span>
            </span>
        </div>
    </div>
</template>
<style lang="scss">
</style>
<script>
    export default {
        name: 'CcSelect',
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
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>