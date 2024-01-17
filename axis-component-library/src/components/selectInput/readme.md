# nk-select-input



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                             | Type                 | Default     |
| --------- | --------- | ----------------------------------------------------------------------- | -------------------- | ----------- |
| `label`   | `label`   | Label to be displayed above the select                                  | `string`             | `undefined` |
| `options` | --        | Possible options to select from                                         | `SelectInputValue[]` | `undefined` |
| `value`   | `value`   | The selected value. This should match the value of an object in Options | `number \| string`   | `undefined` |
| `variant` | `variant` | The variant of the fieldBase element                                    | `string`             | `'default'` |
| `width`   | `width`   | Width of the field in 'ch'                                              | `number`             | `undefined` |


## Events

| Event          | Description | Type                            |
| -------------- | ----------- | ------------------------------- |
| `valueChanged` |             | `CustomEvent<number \| string>` |


## Dependencies

### Depends on

- [nk-input-base](../inputBase)
- [nk-select-input-base](../selectInputBase)

### Graph
```mermaid
graph TD;
  nk-select-input --> nk-input-base
  nk-select-input --> nk-select-input-base
  nk-input-base --> nk-stack
  nk-input-base --> nk-field-base
  nk-input-base --> nk-icon-system
  nk-input-base --> nk-assistive-text
  nk-input-base --> nk-layout-split
  nk-input-base --> nk-label
  nk-field-base --> nk-stack
  nk-field-base --> nk-label
  nk-assistive-text --> nk-paragraph
  style nk-select-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
