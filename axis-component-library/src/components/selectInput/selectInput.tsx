import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { picklistValues } from '../../utils/globals';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { FieldBaseVariant } from '../fieldBase/fieldBase';
import { SelectInputValue } from '../selectInputBase/selectInputBase';

@Component({
  tag: 'nk-select-input',
  styleUrl: 'selectInput.css',
  shadow: true,
})
export class SelectInput implements BaseElement {
  componentName: string = 'SelectInput';

  /**
   * The variant of the fieldBase element
   */
  @Prop() variant: FieldBaseVariant = 'default';
  /**
   * The selected value. This should match the value of an object in Options
   */
  @Prop() value: string | number;
  /**
   * Possible options to select from
   */
  @Prop() options: SelectInputValue[];
  /**
   * Label to be displayed above the select
   */
  @Prop() label: string;
  /**
   * Width of the field in 'ch'
   */
  @Prop() width: number;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<string | number>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get hasvalue(): boolean {
    return this.value !== undefined && this.value !== null && this.value !== picklistValues.empty;
  }

  /**
   * Event handler setting the _value while the event propagates
   */
  handleChange = (evt: CustomEvent<string | number>) => {
    evt.stopImmediatePropagation();
    this.valueChanged.emit(evt.detail);
  };

  render() {
    return (
      <Host>
        <nk-input-base label={this.label} has-value={this.hasvalue} width={this.width} variant={this.variant}>
          <nk-select-input-base value={this.value.toString()} options={this.options} onValueChanged={this.handleChange}></nk-select-input-base>
        </nk-input-base>
      </Host>
    );
  }
}
