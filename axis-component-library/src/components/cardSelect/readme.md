# nk-card-select



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

### Used by

 - [nk-card-select-multi](../multiSelectCardItem)
 - [nk-card-select-single](../singleSelectCardItem)

### Depends on

- [nk-card-standard](../card)
- [nk-stack](../stack)
- [nk-checkbox-item](../checkboxDetailed)
- [nk-radio-item](../radioDetailed)

### Graph
```mermaid
graph TD;
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
  nk-card-select-multi --> nk-card-select
  nk-card-select-single --> nk-card-select
  style nk-card-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
