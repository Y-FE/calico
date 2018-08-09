<template>
    <div class="code-container">
        <slot></slot>
    </div>
</template>
<style scoped>
    .code-container {
        margin-top: 20px;
    }
</style>
<script>
    export default {
        name: 'CodeContainer',
    }
</script>