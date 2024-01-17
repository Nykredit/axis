import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { FieldBaseVariant } from '../fieldBase/fieldBase';

@Component({
  tag: 'nk-number-input',
  styleUrl: 'numberInput.css',
  shadow: true,
})
export class NumberInput implements BaseElement {
  componentName: string = 'NumberInput';

  /**
   * The variant of the fieldBase element
   */
  @Prop() variant: FieldBaseVariant = 'default';
  /**
   * The value in the input field
   */
  @Prop() value: number | null = null;
  /**
   * The label shown above the input field
   */
  @Prop() label: string;
  /**
   * Width of the field in 'ch'
   */
  @Prop() width: number;
  /**
   * Minimum numerical value
   */
  @Prop() min: string;
  /**
   * Maximum numerical value
   */
  @Prop() max: string;
  /**
   * Determines if the text field is read only
   */
  @Prop() disabled: boolean = false;
  /**
   * Max length of the input string
   */
  @Prop() maxLength: string;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<number>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get assistiveLabel(): string | null {
    if (this.maxLength) {
      return `(${String(this.value || '').length}/${this.maxLength})`;
    }
    return null;
  }

  handleChange = (evt: CustomEvent<string>) => {
    evt.stopImmediatePropagation();
    this.valueChanged.emit(Number(evt.detail));
  };

  render() {
    return (
      <Host>
        <nk-input-base label={this.label} has-value={this.value} width={this.width} variant={this.variant} labelassistive={this.assistiveLabel}>
          {this.disabled ? <nk-icon-system name="lock" size="small" slot="leading"></nk-icon-system> : null}
          <nk-text-input-base
            value={this.value.toString()}
            min={this.min}
            max={this.max}
            type="number"
            disabled={this.disabled}
            onValueChanged={this.handleChange}
            max-length={this.maxLength}
          ></nk-text-input-base>
        </nk-input-base>
      </Host>
    );
  }
}
