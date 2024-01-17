# nk-input-base



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                  | Type                   | Default     |
| ---------------- | ---------------- | ------------------------------------------------------------ | ---------------------- | ----------- |
| `hasValue`       | `has-value`      | Determines if the label should be raised                     | `boolean`              | `false`     |
| `label`          | `label`          | The label to render. This should be descriptive of the field | `string`               | `''`        |
| `labelassistive` | `labelassistive` | Assistive label which is placed below the input box          | `string`               | `undefined` |
| `state`          | `state`          | Component state. Useful for signaling errors                 | `"default" \| "error"` | `'default'` |
| `variant`        | `variant`        | The variant of the fieldBase element                         | `string`               | `'default'` |
| `width`          | `width`          | Width of the input field in "ch"                             | `number`               | `undefined` |


## Dependencies

### Used by

 - [nk-email-input](../emailInput)
 - [nk-number-input](../numberInput)
 - [nk-select-input](../selectInput)
 - [nk-text-input](../textInput)
 - [nk-textarea](../textarea)

### Depends on

- [nk-stack](../stack)
- [nk-field-base](../fieldBase)
- [nk-icon-system](../Icon)
- [nk-assistive-text](../assistiveText)
- [nk-layout-split](../layoutSplit)
- [nk-label](../label)

### Graph
```mermaid
graph TD;
  nk-input-base --> nk-stack
  nk-input-base --> nk-field-base
  nk-input-base --> nk-icon-system
  nk-input-base --> nk-assistive-text
  nk-input-base --> nk-layout-split
  nk-input-base --> nk-label
  nk-field-base --> nk-stack
  nk-field-base --> nk-label
  nk-assistive-text --> nk-paragraph
  nk-email-input --> nk-input-base
  nk-number-input --> nk-input-base
  nk-select-input --> nk-input-base
  nk-text-input --> nk-input-base
  nk-textarea --> nk-input-base
  style nk-input-base fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
