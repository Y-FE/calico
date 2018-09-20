# Button <Badge text="beta" type="warn"/> <Badge text="0.0.1+"/>

## Example
### General button

<cat-button-general></cat-button-general>

<<< docs/.vuepress/components/CatButtonGeneral.vue


### Disabled button

<cat-button-disabled></cat-button-disabled>

<<< docs/.vuepress/components/CatButtonDisabled.vue

## Interface

::: tip PROPS
| Name  | Description  | Type   | Options           | Default |
|:------|:-------------|:-------|:------------------|:--------|
| type  | button type  | String | primary / default | default |
| shape | button shape | String | square / round    | square  |
:::

::: tip EVENTS
| Name  | Description    | Payload |
|:------|:---------------|:--------|
| click | button clicked | -       |
:::

::: warning SLOTS
None
:::