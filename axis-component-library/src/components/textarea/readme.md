# nk-text-area



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                          | Type      | Default     |
| ----------------- | ------------------ | ------------------------------------ | --------- | ----------- |
| `disabled`        | `disabled`         | Disables input if true.              | `boolean` | `false`     |
| `label`           | `label`            | Description of this property         | `string`  | `undefined` |
| `maxLength`       | `max-length`       | Maximum length of the value string   | `string`  | `undefined` |
| `placeholderText` | `placeholder-text` |                                      | `string`  | `undefined` |
| `value`           | `value`            | The text value within the textarea   | `string`  | `undefined` |
| `variant`         | `variant`          | The variant of the fieldBase element | `string`  | `'default'` |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `valueChanged` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [nk-input-base](../inputBase)
- [nk-textarea-base](../textareaBase)

### Graph
```mermaid
graph TD;
  nk-textarea --> nk-input-base
  nk-textarea --> nk-textarea-base
  nk-input-base --> nk-stack
  nk-input-base --> nk-field-base
  nk-input-base --> nk-icon-system
  nk-input-base --> nk-assistive-text
  nk-input-base --> nk-layout-split
  nk-input-base --> nk-label
  nk-field-base --> nk-stack
  nk-field-base --> nk-label
  nk-assistive-text --> nk-paragraph
  style nk-textarea fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
