
# Pagination 分页器

## 示例 Examples

<zh-cat-pagination-general></zh-cat-pagination-general>
<code-show>
<<< docs/.vuepress/components/zhCatPaginationGeneral.vue 
</code-show>

## 属性 Attributes

| 参数  | 说明  | 类型   | 可选值           | 默认值 |
|:------|:-------------|:-------|:------------------|:--------|
| value | 绑定值 | Number | ---- | 1 |
| total | 总条目数 | Number | ---- | ---- |
| column | 排列 | Boolean | ---- | false |

## 事件 Events

| 事件名称  | 说明    | 回调参数 |
|:------|:---------------|:--------|
| prev-click | 用户点击上一页按钮改变当前页后触发 | 当前页 |
| next-click | 用户点击下一页按钮改变当前页后触发 | 当前页 |

## 插槽 Slots
<!-- 
| 插槽名称  | 说明 |
|:------|:---------------| -->
