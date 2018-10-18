
<template>
    <code-container>
        <cc-textarea title="评价" 
            v-model="largeInput" 
            width="400"
            resize="large"
            placeholder="请输入你想要说的话">

        </cc-textarea>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatTextareaGeneral',
        data() {
            return {
                largeInput: '',
            }
        },
    }
</script>
