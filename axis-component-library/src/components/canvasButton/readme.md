# nk-canvas-button



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                            | Type                            | Default     |
| ----------- | ----------- | -------------------------------------------------------------------------------------- | ------------------------------- | ----------- |
| `alignment` | `alignment` | Controls the horizontal alignment of the nested content                                | `"center" \| "left" \| "right"` | `'center'`  |
| `disabled`  | `disabled`  | Determines if the button is disabled                                                   | `boolean`                       | `false`     |
| `href`      | `href`      | Href for the link                                                                      | `string`                        | `''`        |
| `isactive`  | `isactive`  | Used to change the look of the canvas button, depending on whether it is active or not | `boolean`                       | `false`     |
| `type`      | `type`      | The type of the canvas button                                                          | `"action" \| "anchor"`          | `'action'`  |
| `variant`   | `variant`   | Variant of the canvas button                                                           | `"default"`                     | `'default'` |


## Dependencies

### Used by

 - [nk-checkbox-item](../checkboxDetailed)

### Depends on

- [nk-unstyled-anchor](../unstyledAnchor)
- [nk-unstyled-button](../unstyledButton)
- [nk-stack](../stack)

### Graph
```mermaid
graph TD;
  nk-canvas-button --> nk-unstyled-anchor
  nk-canvas-button --> nk-unstyled-button
  nk-canvas-button --> nk-stack
  nk-checkbox-item --> nk-canvas-button
  style nk-canvas-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
