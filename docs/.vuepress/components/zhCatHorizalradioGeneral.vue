
<template>
    <code-container>
        <cc-radio-group v-model="hori" title="形状">
            <cc-horizontal-radio  :value="77">
                <i class="iconfont icon-triangle"></i>
            </cc-horizontal-radio>
            <cc-horizontal-radio  :value="1">
                <i class="iconfont icon-rectangle"></i>
            </cc-horizontal-radio>
        </cc-radio-group>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatHorizalradioGeneral',
        data() {
            return {
                hori: 77
            }
        },
    }
</script>
