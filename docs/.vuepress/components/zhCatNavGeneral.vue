
<template>
    <code-container>
        <cc-nav v-model="nav">
            <cc-nav-item  label="课件导航" value="课件导航">课件导航</cc-nav-item>
            <cc-nav-item  label="动画风格" value="动画风格">动画风格</cc-nav-item>
        </cc-nav>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatNavGeneral',
        data() {
            return {
                nav: '课件导航',
            }
        },
    }
</script>
