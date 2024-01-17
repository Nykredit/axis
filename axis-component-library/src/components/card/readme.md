# nk-card



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description               | Type                               | Default     |
| -------------- | -------------- | ------------------------- | ---------------------------------- | ----------- |
| `imagealttext` | `imagealttext` |                           | `string`                           | `undefined` |
| `imageurl`     | `imageurl`     | The image URL of the card | `string`                           | `undefined` |
| `variant`      | `variant`      | The card variant          | `"default" \| "flex" \| "inherit"` | `'default'` |


## Dependencies

### Used by

 - [nk-card-select](../cardSelect)

### Depends on

- [nk-box](../box)
- [nk-image](../image)

### Graph
```mermaid
graph TD;
  nk-card-standard --> nk-box
  nk-card-standard --> nk-image
  nk-card-select --> nk-card-standard
  style nk-card-standard fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
