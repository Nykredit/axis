# nk-stepper-list



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                   | Type          | Default     |
| ------------- | ------------- | ----------------------------- | ------------- | ----------- |
| `currentstep` | `currentstep` | The current step of the steps | `string`      | `''`        |
| `steps`       | --            | List of steps                 | `StepProps[]` | `undefined` |


## Dependencies

### Depends on

- [nk-stack](../stack)
- [nk-stepper-item](../flowStepperItem)

### Graph
```mermaid
graph TD;
  nk-stepper-list --> nk-stack
  nk-stepper-list --> nk-stepper-item
  nk-stepper-item --> nk-stack
  nk-stepper-item --> nk-box
  nk-stepper-item --> nk-icon-system
  nk-stepper-item --> nk-divider
  style nk-stepper-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
