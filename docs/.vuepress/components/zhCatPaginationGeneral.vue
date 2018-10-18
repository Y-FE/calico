
<template>
    <code-container>
        <cc-pagination v-model="currentPage" :total="4"></cc-pagination>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatPaginationGeneral',
        data() {
            return {
                currentPage: 1,
            }
        },
    }
</script>
