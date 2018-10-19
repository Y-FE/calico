
<template>
    <code-container>
        <div>
            <cc-button @click="open">打开</cc-button>
        </div>
        
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatMessageGeneral',
        components: {
        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            open() {
                this.$message('这是一条消息提示');
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
