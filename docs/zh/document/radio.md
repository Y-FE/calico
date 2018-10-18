
# Radio 单选框

## 示例 Examples

### 基本单选框组
<zh-cat-radio-general></zh-cat-radio-general>
<code-show>
<<< docs/.vuepress/components/zhCatRadioGeneral.vue 
</code-show>

### 答案单选框组
<zh-cat-answer-radio-button></zh-cat-answer-radio-button>
<code-show>
<<< docs/.vuepress/components/zhCatAnswerRadioButton.vue 
</code-show>

## radio属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| value | 绑定值 | String / Number / Boolean | ----- | ---- |
| label | 单选框的值 | String / Number / Boolean | ---- | ---- |

## radio 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| click | 绑定值变化时触发的事件 | 选中单选框的值 |

## radio-group 属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| column | 单选的排列方向 |  boolean | ---- | false |

## 插槽 Slots

<!-- | 插槽名称  | 说明 |
|:------|:---------------| -->
