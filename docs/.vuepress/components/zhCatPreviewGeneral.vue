
<template>
    <code-container>
        <cc-preview v-for="(item, index) in courseList" 
            :order="(index+1)" 
            :key="index" 
            @select="changeNow"
            @delete-item="deletePage('dd')"
            operate                
            :active="index === nowIndex">
            <i class="iconfont icon-deletePage"></i>
        </cc-preview>          
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatPreviewGeneral',
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
        methods: {
            deletePage(name) {
                console.log(name);
            },
             changeNow(data){
                this.nowIndex = data;
            }
        },
        
    }
</script>
