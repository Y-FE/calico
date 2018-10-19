
<template>
    <code-container>
        <cc-select v-model="courseNew" title="动态修改选项">
            <cc-option 
                v-for="(item, index) in courseListNew" 
                :key="index" 
                :value="item.val" 
                :label="item.name">
                <i slot="right" class="iconfont icon-delete"></i>
            </cc-option>
        </cc-select>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatSelectGeneral',
        components: {
        },
        props: {},
        data() {
            return {
                courseListNew: [
                    {val: 1, name: "课件1"},
                    {val: 2, name: "课件2"},
                    {val: 3, name: "课件3"},
                    {val: 4, name: "课件1"},
                    {val: 5, name: "课件2"},
                    {val: 6, name: "课件3"},
                ],
                courseNew: 1 ,
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
