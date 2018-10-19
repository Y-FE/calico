
# Preview 展示列表

## 示例 Examples

<zh-cat-preview-general></zh-cat-preview-general>
<code-show>
<<< docs/.vuepress/components/zhCatPreviewGeneral.vue 
</code-show>

## preview属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| active | 是否是激活状态 | Boolean | ---- | false |
| operate | 操作区是否是hover出现 | Boolean | ---- | false |
| order | 序号 | Number / String | ---- | 0 |
| imgSrc | 图片路径 | String | ---- | ---- |
| showDelete | 是否显示删除按钮 | Boolean | ---- | true |
| showUp | 是否显示向上按钮 | Boolean | ---- | true |
| showDown | 是否显示向下按钮 | Boolean | ---- | true |

## 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| click | 点击时触发 | 当前页数 |  

## 插槽 Slots

| 插槽名称  | 说明 |
|:------|:---------------|
