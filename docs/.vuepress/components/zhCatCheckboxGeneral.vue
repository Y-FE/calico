
<template>
    <code-container>
        <cc-checkbox-group v-model="horiArr" title="多选">
            <cc-horizontal-checkbox  value="77">
                <i class="iconfont icon-triangle"></i>
            </cc-horizontal-checkbox>
            <cc-horizontal-checkbox  :value="1">
                <i class="iconfont icon-rectangle"></i>
            </cc-horizontal-checkbox>
        </cc-checkbox-group>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatCheckboxGeneral',
        data() {
            return {
                 horiArr: [],
            }
        },
    }
</script>
