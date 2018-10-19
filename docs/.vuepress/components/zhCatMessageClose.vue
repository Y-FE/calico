<template>
     <code-container>
        <div>
            <cc-button type="default"  @click="open1">成功</cc-button>
            <cc-button type="default"  @click="open2">警告</cc-button>
            <cc-button type="default"  @click="open3">消息</cc-button>
            <cc-button type="default"  @click="open4">错误</cc-button>
        </div>
        
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatMessageClose',
        methods: {
            open1() {
                 this.$message.success({
                    message: '我是一个粉刷匠粉刷本领强，我要把那新房子，刷的很漂亮',
                    duration: 0,
                    showClose: true,
                });
            },
            open2() {
                this.$message.warning({
                    message: '我是一个粉刷匠粉刷本领强，我要把那新房子，刷的很漂亮',
                    duration: 0,
                    showClose: true,
                });
            },
            open3 () {
                this.$message.info({
                    message: '我是一个粉刷匠粉刷本领强，我要把那新房子，刷的很漂亮',
                    duration: 0,
                    showClose: true,
                });
            },
            open4() {
                this.$message.error({
                    message: '我是一个粉刷匠粉刷本领强，我要把那新房子，刷的很漂亮',
                    duration: 0,
                    showClose: true,
                });
            },
        },
        
    }
</script>