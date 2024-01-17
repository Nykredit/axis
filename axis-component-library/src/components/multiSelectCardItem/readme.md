# nk-single-card-select-item



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                   | Type                    | Default      |
| -------------- | -------------- | --------------------------------------------- | ----------------------- | ------------ |
| `actionlabel`  | `actionlabel`  | Label to the action at the bottom of the card | `string`                | `''`         |
| `actiontitle`  | `actiontitle`  | Title of the action at the bottom of the card | `string`                | `''`         |
| `actionvalue`  | `actionvalue`  | Value of the action                           | `boolean`               | `false`      |
| `cardid`       | `cardid`       | Unique id of the card                         | `string`                | `''`         |
| `imagealttext` | `imagealttext` | Alt text to the image                         | `string`                | `''`         |
| `imageurl`     | `imageurl`     | Url of the image                              | `string`                | `''`         |
| `variant`      | `variant`      | Variant of the card select                    | `"checkbox" \| "radio"` | `'checkbox'` |


## Events

| Event         | Description | Type                   |
| ------------- | ----------- | ---------------------- |
| `cardChanged` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [nk-card-select](../cardSelect)

### Graph
```mermaid
graph TD;
  nk-card-select-multi --> nk-card-select
  nk-card-select --> nk-card-standard
  nk-card-select --> nk-stack
  nk-card-select --> nk-checkbox-item
  nk-card-select --> nk-radio-item
  nk-card-standard --> nk-box
  nk-card-standard --> nk-image
  nk-checkbox-item --> nk-canvas-button
  nk-checkbox-item --> nk-checkbox
  nk-checkbox-item --> nk-stack
  nk-checkbox-item --> nk-paragraph
  nk-canvas-button --> nk-unstyled-anchor
  nk-canvas-button --> nk-unstyled-button
  nk-canvas-button --> nk-stack
  nk-checkbox --> nk-box
  nk-checkbox --> nk-icon-system
  nk-radio-item --> nk-box
  nk-radio-item --> nk-stack
  nk-radio-item --> nk-radio
  nk-radio-item --> nk-paragraph
  style nk-card-select-multi fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
