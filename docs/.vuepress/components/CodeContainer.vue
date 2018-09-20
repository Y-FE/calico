<template>
    <div class="code-container">
        <slot></slot>
    </div>
</template>
<style scoped>
    .code-container {
        margin-top: 20px;
        border: 1px solid #eee;
        padding: 0 0 20px 20px;
        border-radius: 4px;
    }
    .code-container > div{
        margin-top: 20px;
    }
</style>
<script>
    export default {
        name: 'CodeContainer',
    }
</script>