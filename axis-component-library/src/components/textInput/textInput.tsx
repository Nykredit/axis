import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { FieldBaseVariant } from '../fieldBase/fieldBase';

const ASTERISK: string = '*';

@Component({
  tag: 'nk-text-input',
  styleUrl: 'textInput.css',
  shadow: true,
})
export class TextInput implements BaseElement {
  componentName: string = 'TextInput';

  /**
   * The variant of the fieldBase element
   */
  @Prop() variant: FieldBaseVariant = 'default';
  /**
   * The value of the input field
   */
  @Prop() value: string = '';
  /**
   * The label shown above the input field
   */
  @Prop() label: string = '';
  /**
   * Determines if the text input is used a search input.
   * If true it will show a search icon
   */
  @Prop() issearchable: boolean;
  /**
   * Width of the field in 'ch'
   */
  @Prop() width: number;
  /**
   * Determines if the text field is read only
   */
  @Prop() disabled: boolean = false;
  /**
   * Max length of the input string
   */
  @Prop() maxLength: string;
  /**
   * Regex pattern for HTML5 validation
   */
  @Prop() pattern: string;
  /**
   * Custom error message
   */
  @Prop() customerrormessage: string;
  /**
   * Required
   */
  @Prop() required: boolean = false;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<string>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get getlabel(): string {
    if (this.required) {
      return this.label + ASTERISK;
    }
    return this.label;
  }

  get assistiveLabel(): string | null {
    if (this.maxLength) {
      return `(${(this.value || '').length}/${this.maxLength})`;
    }
    return null;
  }

  /**
   * Boolean to determine of the field has a value
   */
  get hasValue(): boolean {
    return Boolean(this.value);
  }

  render() {
    return (
      <Host>
        <nk-input-base label={this.getlabel} has-value={this.hasValue} width={this.width} variant={this.variant} labelassistive={this.assistiveLabel}>
          {this.disabled ? <nk-icon-system name="lock" size="small" slot="leading"></nk-icon-system> : null}
          <nk-text-input-base
            required={this.required}
            pattern={this.pattern}
            value={this.value}
            type="text"
            disabled={this.disabled}
            onValueChanged={d => {
              d.stopImmediatePropagation();
              this.valueChanged.emit(d.detail as string);
            }}
            max-length={this.maxLength}
            customerrormessage={this.customerrormessage}
          ></nk-text-input-base>
          {this.issearchable ? <nk-icon-system name="search" size="small" slot="postfix"></nk-icon-system> : null}
        </nk-input-base>
      </Host>
    );
  }
}
