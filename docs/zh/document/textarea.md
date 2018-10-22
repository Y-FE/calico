
# Textarea 文字输入框

## 示例 Examples

<zh-cat-textarea-general></zh-cat-textarea-general>
<code-show>
<<< docs/.vuepress/components/zhCatTextareaGeneral.vue 
</code-show>

## 属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| value | 绑定值 | String / Number | ---- | ---- |
| title | 标题 | String | ---- | ---- |
| placeholder | 文字框占位文本 | String | ---- | ---- |
| width | 文字输入框的宽度 | String | ---- | 100 |
| rows | 文字输入框行数 | Number | ---- | 2 |
| resize | 是否可以任意缩放 | Boolean | ---- | false |

## 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| focus | 得到焦点时触发 | (event: Event) |
| blur | 失去焦点时触发 | (event: Event) |

## 插槽 Slots
<!-- 
| 插槽名称  | 说明 |
|:------|:---------------| -->
