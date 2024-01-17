# nk-tag-list



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description              | Type                         | Default        |
| --------- | --------- | ------------------------ | ---------------------------- | -------------- |
| `tags`    | --        | List of tags             | `TagProps[]`                 | `[]`           |
| `variant` | `variant` | Variant of the tag stack | `"horizontal" \| "vertical"` | `'horizontal'` |


## Dependencies

### Depends on

- [nk-stack](../stack)
- [nk-tag](../tag)

### Graph
```mermaid
graph TD;
  nk-tag-list --> nk-stack
  nk-tag-list --> nk-tag
  nk-tag --> nk-box
  nk-tag --> nk-stack
  nk-tag --> nk-icon-system
  nk-tag --> nk-label
  style nk-tag-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
