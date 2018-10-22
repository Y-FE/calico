
<template>
    <code-container>
        <cc-radio-group v-model="hori" column>
            <cc-vertical-radio  :value="77" label="我是三角形">
                <i class="iconfont icon-triangle"></i>
            </cc-vertical-radio>
            <cc-vertical-radio  :value="1" label="你是正方形">
                <i class="iconfont icon-rectangle"></i>
            </cc-vertical-radio>
        </cc-radio-group>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatVerticalradioGeneral',
        data() {
            return {
                hori: 77
            }
        },
    }
</script>
