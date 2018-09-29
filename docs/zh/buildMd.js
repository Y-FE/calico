const fs = require('fs');
const name = process.argv[2];
//首字母大写
const cname = name.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
const addressMd = `./document/${name}.md`;
const addressCode = `../.vuepress/components/zhCat${cname}General.vue`;
const templateMd = `
# ${cname} 

## 示例 Examples

<zh-cat-${name}-general></zh-cat-${name}-general>
<code-show>
<<< docs/.vuepress/components/zhCat${cname}General.vue 
</code-show>

## 属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|

## 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|

## 插槽 Slots

| 插槽名称  | 说明 |
|:------|:---------------|
`;

fs.writeFileSync(addressMd, templateMd);

const templateCode = `
<template>
    <code-container>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCat${cname}General',
        components: {
        },
        props: {},
        data() {
            return {
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>
`;
fs.writeFileSync(addressCode, templateCode);