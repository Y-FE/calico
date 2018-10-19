
<template>
    <code-container>
        <div>
            <cc-button @click="show = true">
                展示模态框
            </cc-button>
        </div>
        <cc-modal 
            :show.sync="show"
            width="820"
            title="我是一个分数字键">
            <template slot="body">
                <cc-course-radio-group v-model="courseRadio">
                    <cc-course-radio v-for="i in 6" :key="i" :value="i">
                        我是一个粉刷匠
                    </cc-course-radio>
                </cc-course-radio-group>
            </template>
        </cc-modal>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatModalGeneral',
        components: {
        },
        props: {},
        data() {
            return {
                show: false,
                courseRadio: 1
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
