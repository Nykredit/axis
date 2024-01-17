# nk-pill



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description            | Type      | Default     |
| ---------- | ---------- | ---------------------- | --------- | ----------- |
| `disabled` | `disabled` | Is this pill disabled? | `boolean` | `false`     |
| `icon`     | `icon`     |                        | `string`  | `undefined` |
| `label`    | `label`    |                        | `string`  | `undefined` |
| `value`    | `value`    | Is checked             | `boolean` | `false`     |


## Events

| Event        | Description | Type                   |
| ------------ | ----------- | ---------------------- |
| `pillChange` |             | `CustomEvent<boolean>` |


## Dependencies

### Used by

 - [nk-pill-list](../pillList)

### Depends on

- [nk-stack](../stack)
- [nk-icon-system](../Icon)
- [nk-label](../label)

### Graph
```mermaid
graph TD;
  nk-pill --> nk-stack
  nk-pill --> nk-icon-system
  nk-pill --> nk-label
  nk-pill-list --> nk-pill
  style nk-pill fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
