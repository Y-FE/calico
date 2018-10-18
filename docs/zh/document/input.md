
# Input 输入框

## 示例 Examples

<zh-cat-input-general></zh-cat-input-general>
<code-show>
<<< docs/.vuepress/components/zhCatInputGeneral.vue 
</code-show>

## 属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| value | 绑定值 | String / Number | ---- | ---- |
| title | 标题 | String | ---- | ---- |
| placeholder | 输入框占位文本 | String | ---- | ---- |
| width | 输入框的宽度 | String | ---- | 100 |
| size | 输入框尺寸 | String | normal / large | normal |

## 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| focus | 得到焦点时触发 | (event: Event) |
| blur | 失去焦点时触发 | (event: Event) |

## 插槽 Slots

<!-- | 插槽名称  | 说明 |
|:------|:---------------| -->
