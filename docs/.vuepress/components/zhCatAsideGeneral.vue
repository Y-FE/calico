
<template>
    <code-container>
        <cc-aside style="height: 400px;">
            <div slot="body">
                <cc-preview v-for="(item, index) in courseList"
                    :order="(index+1)" 
                    :key="index" 
                    @select="changeNow"
                    operate                
                    :active="index === nowIndex">
                    <i class="iconfont icon-delete-page"></i>
                    <div slot="content">
                    </div>
                </cc-preview>
            </div>
        </cc-aside>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatAsideGeneral',
        components: {
        },
        props: {},
        data() {
            return {
                nowIndex: 0,
                courseList:[
                    {val: 1, name: "课件1"},
                    {val: 2, name: "课件2"},
                    {val: 3, name: "课件3"},
                ],
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            deletePage(name) {
                console.log(name);
            },
             changeNow(data){
                this.nowIndex = data;
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
