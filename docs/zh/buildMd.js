const fs = require('fs');
const name = process.argv[2];
const address = `./document/${name}.md`;
const template = `
# ${name.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())} 

## 示例 Examples

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

fs.writeFileSync(address, template);