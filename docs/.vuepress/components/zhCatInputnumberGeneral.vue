
<template>
    <code-container>
        <cc-input-number v-model="number1" :max="6" :min="1" title="大小">

        </cc-input-number>
        <cc-input-number v-model="number2"  title="旋转">
            
        </cc-input-number>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatInputnumberGeneral',
        data() {
            return {
                number1: 2,
                number2: 30,
            }
        },
    }
</script>
