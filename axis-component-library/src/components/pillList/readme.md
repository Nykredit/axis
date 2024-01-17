# nk-pill-list



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type           | Default |
| --------- | --------- | ----------- | -------------- | ------- |
| `options` | --        |             | `PillOption[]` | `[]`    |
| `values`  | --        |             | `string[]`     | `[]`    |


## Events

| Event        | Description | Type                    |
| ------------ | ----------- | ----------------------- |
| `pillChange` |             | `CustomEvent<string[]>` |


## Dependencies

### Used by

 - [nk-checkbox-list](../checkboxDetailedList)

### Depends on

- [nk-pill](../pill)

### Graph
```mermaid
graph TD;
  nk-pill-list --> nk-pill
  nk-pill --> nk-stack
  nk-pill --> nk-icon-system
  nk-pill --> nk-label
  nk-checkbox-list --> nk-pill-list
  style nk-pill-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
