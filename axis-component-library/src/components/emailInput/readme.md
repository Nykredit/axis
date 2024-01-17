# nk-email-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                           | Type     | Default     |
| ---------------- | ---------------- | ------------------------------------- | -------- | ----------- |
| `label`          | `label`          | The label shown above the input field | `string` | `undefined` |
| `labelassistive` | `labelassistive` | Custom label to display under input   | `string` | `undefined` |
| `maxLength`      | `max-length`     | Max length of the input string        | `string` | `undefined` |
| `value`          | `value`          | The value of the input                | `string` | `''`        |
| `variant`        | `variant`        | The variant of the fieldBase element  | `string` | `'default'` |
| `width`          | `width`          | Width of the field in 'ch'            | `number` | `undefined` |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `valueChanged` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [nk-input-base](../inputBase)
- [nk-text-input-base](../textInputBase)

### Graph
```mermaid
graph TD;
  nk-email-input --> nk-input-base
  nk-email-input --> nk-text-input-base
  nk-input-base --> nk-stack
  nk-input-base --> nk-field-base
  nk-input-base --> nk-icon-system
  nk-input-base --> nk-assistive-text
  nk-input-base --> nk-layout-split
  nk-input-base --> nk-label
  nk-field-base --> nk-stack
  nk-field-base --> nk-label
  nk-assistive-text --> nk-paragraph
  style nk-email-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
