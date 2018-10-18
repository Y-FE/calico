
<template>
    <code-container>
        <cc-input title="基本输入框"  v-model="input" placeholder="请输入">

        </cc-input>
        <cc-input title="不同尺寸输入框" size="large" v-model="input" placeholder="请输入" width="400">

        </cc-input>

    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatInputGeneral',
        components: {
        },
        props: {},
        data() {
            return {
                input: ''
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
