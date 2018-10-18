
<template>
    <code-container>
        <cc-progress :percent="40"></cc-progress>
        <cc-progress :percent="50" strokeWidth="12"></cc-progress>
        <cc-progress :percent="50" status="error"></cc-progress>
        <cc-progress :percent="40" status="success"></cc-progress>
        <cc-progress :percent="50" length="400"></cc-progress>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatProgressGeneral',
    }
</script>
