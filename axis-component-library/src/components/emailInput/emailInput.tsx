import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { FieldBaseVariant } from '../fieldBase/fieldBase';

@Component({
  tag: 'nk-email-input',
  styleUrl: 'emailInput.css',
  shadow: true,
})
export class EmailInput implements BaseElement {
  componentName: string = 'EmailInput';
  componentWillLoad() {
    setDefaultDataProperties(this);
  }
  @Element() el: HTMLElement;

  /**
   * The variant of the fieldBase element
   */
  @Prop() variant: FieldBaseVariant = 'default';
  /**
   * The value of the input
   */
  @Prop() value: string = '';
  /**
   *  The label shown above the input field
   */
  @Prop() label: string;
  /**
   * Width of the field in 'ch'
   */
  @Prop() width: number;
  /**
   * Max length of the input string
   */
  @Prop() maxLength: string;
  /**
   * Custom label to display under input
   */
  @Prop() labelassistive: string | null;
  @Event() valueChanged: EventEmitter<string>;

  get hasValue() {
    return this.value;
  }

  get displayedAssistiveLabel(): string | null {
    let maxLength = '';

    if (this.maxLength) {
      maxLength += `(${(this.value || '').length}/${this.maxLength})`;
    }

    return `${maxLength} ${this.labelassistive || ''}`.trim();
  }

  /**
   * Event handler attached to the wrapped Input
   */
  handleChange = (evt: CustomEvent<string>) => {
    evt.stopImmediatePropagation();
    const newValue = evt.detail.replace(/\s/g, '');
    this.valueChanged.emit(newValue);
  };

  render() {
    return (
      <Host>
        <nk-input-base label={this.label} has-value={this.hasValue} width={this.width} variant={this.variant} labelassistive={this.displayedAssistiveLabel}>
          <nk-text-input-base onValueChanged={this.handleChange} value={this.value} type="email" max-length={this.maxLength}></nk-text-input-base>
        </nk-input-base>
      </Host>
    );
  }
}
