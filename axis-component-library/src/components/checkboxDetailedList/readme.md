# nk-checkbox-with-label



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                       | Type                                            | Default      |
| ------------- | ------------- | ----------------------------------------------------------------- | ----------------------------------------------- | ------------ |
| `label`       | `label`       | Field label                                                       | `string`                                        | `undefined`  |
| `options`     | --            | available options                                                 | `CheckboxDetailedProps[]`                       | `[]`         |
| `orientation` | `orientation` | Orientation of the checkbox list. Defaults to vertical            | `"horizontal" \| "vertical"`                    | `'vertical'` |
| `values`      | --            | selected keys                                                     | `string[]`                                      | `[]`         |
| `variant`     | `variant`     | Checkbox variant. Should we show the list as pills or checkboxes? | `"canvas" \| "checkbox" \| "default" \| "pill"` | `'default'`  |


## Events

| Event           | Description | Type                    |
| --------------- | ----------- | ----------------------- |
| `valuesChanged` |             | `CustomEvent<string[]>` |


## Dependencies

### Depends on

- [nk-field-base](../fieldBase)
- [nk-pill-list](../pillList)
- [nk-stack](../stack)
- [nk-checkbox-item](../checkboxDetailed)

### Graph
```mermaid
graph TD;
  nk-checkbox-list --> nk-field-base
  nk-checkbox-list --> nk-pill-list
  nk-checkbox-list --> nk-stack
  nk-checkbox-list --> nk-checkbox-item
  nk-field-base --> nk-stack
  nk-field-base --> nk-label
  nk-pill-list --> nk-pill
  nk-pill --> nk-stack
  nk-pill --> nk-icon-system
  nk-pill --> nk-label
  nk-checkbox-item --> nk-canvas-button
  nk-checkbox-item --> nk-checkbox
  nk-checkbox-item --> nk-stack
  nk-checkbox-item --> nk-paragraph
  nk-canvas-button --> nk-unstyled-anchor
  nk-canvas-button --> nk-unstyled-button
  nk-canvas-button --> nk-stack
  nk-checkbox --> nk-box
  nk-checkbox --> nk-icon-system
  style nk-checkbox-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
