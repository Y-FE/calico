
# Message 消息提示

## 示例 Examples

<zh-cat-message-general></zh-cat-message-general>
<code-show>
<<< docs/.vuepress/components/zhCatMessageGeneral.vue 
</code-show>

## 不同类型
<zh-cat-message-types></zh-cat-message-types>
<code-show>
<<< docs/.vuepress/components/zhCatMessageTypes.vue 
</code-show>

## 可关闭
<zh-cat-message-close></zh-cat-message-close>
<code-show>
<<< docs/.vuepress/components/zhCatMessageClose.vue 
</code-show>

## 属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| message | 消息文字 |	String | ---- |
| type | 主题 |	String | success/warning/info/error	| info |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | Number | 3000 |
| showClose | 是否显示关闭按钮 | Boolean | false |

## 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| close | 关闭当前的 Message | ---- |

## 插槽 Slots

| 插槽名称  | 说明 |
|:------|:---------------|
