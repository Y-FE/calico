
# Select 选择器

## 示例 Examples

### 基础用法
<zh-cat-select-general></zh-cat-select-general>
<code-show>
<<< docs/.vuepress/components/zhCatSelectGeneral.vue 
</code-show>

## 自定义选择器
### 颜色选择器
<zh-cat-color-select></zh-cat-color-select>
<code-show>
<<< docs/.vuepress/components/zhCatColorSelect.vue 
</code-show>

### 线条选择器
<zh-cat-line-select></zh-cat-line-select>
<code-show>
<<< docs/.vuepress/components/zhCatLineSelect.vue 
</code-show>


## select属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| placeholder | 输入框占位文本 | String | ---- | ---- |
| width | 输入框的宽度 | String | ---- | 80 |
| size | 输入框尺寸 | String | normal / large | normal |

##  select事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|

## option属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| value | 选项的值 | String / Number | ---- |
| label | 选项的标签，若不设置则默认与 value 相同 |	String / Number | ---- |
| hoverDisplay | 是否移入展示 | Boolean |  ----   | true |

##  option事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| click | 点击时触发 | 选中单选的值 | 
## 插槽 Slots

| 插槽名称  | 说明 |
|:------|:---------------|
| right | option组件右边内容 |