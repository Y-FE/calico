
# Modal 模态框

## 示例 Examples

<zh-cat-modal-general></zh-cat-modal-general>
<code-show>
<<< docs/.vuepress/components/zhCatModalGeneral.vue 
</code-show>

## 属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| show | 是否显示Modal | Boolean | ---- | false |
| title | Modal的标题 | String | ---- | ---- |
| width | Modal的宽度 | Number | ---- | 580 |
| showClose	| 是否显示关闭按钮 | Boolean | ---- | true |
| line| 是否需要分割线 | Boolean | ---- | true |

## 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| sure | 打开的回调 | ---- |
| close | 关闭的回调 | ---- |
## 插槽 Slots

| 插槽名称  | 说明 |
|:------|:---------------|
| body | Modal的主要内容 |
| title | Modal的标题区的内容 |
| footer | Modal的按钮操作区的内容 |