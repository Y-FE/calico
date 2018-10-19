
<template>
    <code-container>
        <cc-row wrap="wrap" aglin="center" justify="space-between">
            <cc-row  :style="{'width': `calc(100% / 4`, 'margin-top': index > 3 ? '20px' : ''}"
                justify="center" align="center" 
                v-for="(item, index) in toolItemList"                 
                :key="index">
                <cc-tool-item 
                    :icon="item.icon">
                    {{item.name}}
                </cc-tool-item>
            </cc-row>
        </cc-row>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatToolitemGeneral',
        data() {
            return {
                toolItemList: [
                    {icon: 'icon-word', name: '文字'},
                    {icon: 'icon-picture', name: '图片'},
                    {icon: 'icon-shape', name: '形状'},
                    {icon: 'icon-line', name: '直线'},
                ],
            }
        },
    }
</script>
