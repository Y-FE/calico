
# InputNumber 计数器

## 示例 Examples

<zh-cat-inputnumber-general></zh-cat-inputnumber-general>
<code-show>
<<< docs/.vuepress/components/zhCatInputnumberGeneral.vue 
</code-show>


## 属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| value | 绑定值 | Number | ----- | 1 |
| max | 设置计数器允许的最大值 | Number | ---- | Infinity |
| min | 设置计数器允许的最小值 | Number | ---- | -Infinity |
| step | 计数器步长 | Number | ---- | 1 |
| width | 文字输入框的宽度 | String | ---- | 80 |
## 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| change | 绑定值被改变时触发 |	最后变更的值 |
| blur | 失去焦点时触发 | (event: Event) |
| focus | 获得焦点时触发 | (event: Event) |

## 插槽 Slots

<!-- | 插槽名称  | 说明 |
|:------|:---------------| -->
