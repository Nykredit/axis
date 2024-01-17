import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

export type InputElementType =
  | 'text'
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'url';

@Component({
  tag: 'nk-text-input-base',
  styleUrl: 'textInputBase.css',
  shadow: true,
})
export class TextInputBase implements BaseElement {
  componentName: string = 'TextInputBase';

  /** Last externally updated value. We use this in case the input field has reached an undesirable state and we want to reset the value */
  @State() initValue: string | Date | null;
  /**
   * The type of the HTMLInputField
   */
  @Prop() type: InputElementType = 'text';
  @Prop() inputMode: string;
  /**
   * Regex pattern for HTML5 validation
   */
  @Prop() pattern: string;
  /**
   * Required
   */
  @Prop() required: boolean;
  /**
   * The value of the input field
   */
  @Prop() value: string | Date | null;
  /**
   * Disables input if true.
   */
  @Prop() disabled: boolean = false;
  /**
   * Maximum allowed length of the input string
   */
  @Prop() maxLength: string;
  /**
   * Minimum value of the input
   */
  @Prop() min: string;
  /**
   * Maximum value of the input
   */
  @Prop() max: string;
  /**
   * Custom error message
   */
  @Prop() customerrormessage: string;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<string>;
  @Event() validChanged: EventEmitter<{ isValid: boolean; value: string | Date; message: string }>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    this.initValue = this.value;
    if (this.required) {
      (this.el.querySelector('.component') as HTMLInputElement).required = true;
    }
  }

  focus() {
    (this.el.querySelector('.component') as HTMLElement).focus();
  }

  /**
   * Reset the input field to the last externally designated value.
   * This is useful if the input field accepts characters which is not accepted by the use case (such as using a text input as a currency input) or there is a difference between the reported value and the actual displayed value (Gecko)
   */
  reset() {
    this.valueChanged.emit(typeof this.initValue === 'string' ? this.initValue : this.initValue.toISOString().slice(0, 10));
  }

  /**
   * Event handler attached to the input element
   */
  handleChange = (evt: Event) => {
    /** The Salesforce Synthetic Shadow DOM does not filter {composed:false} events, so we need to prevent them from leaking */
    evt.stopImmediatePropagation();
    let val: string | Date | null;
    if (this.type === 'date') {
      val = (evt.target as HTMLInputElement).valueAsDate;
      if (this.value !== val && !!val) {
        this.valueChanged.emit(val.toISOString().slice(0, 10));
      }
    } else {
      val = (evt.target as HTMLInputElement).value;
      if (this.value !== val) {
        this.valueChanged.emit(val);
      }
    }
  };

  handleBlur = (evt: Event) => {
    evt.stopPropagation();
    const elem = evt.target as HTMLInputElement;
    const isValid = elem.checkValidity();

    if (!isValid) {
      let validationMessage = elem.validationMessage;
      if (this.customerrormessage) {
        validationMessage = this.customerrormessage;
      }
      this.validChanged.emit({ isValid, value: elem.value, message: validationMessage });
    } else {
      this.validChanged.emit({ isValid, value: elem.value, message: '' });
    }
  };

  render() {
    return (
      <Host>
        <div class="capsize">
          {this.disabled ? (
            <div class="component">{this.value}</div>
          ) : (
            <input
              pattern={this.pattern}
              type={this.type}
              inputmode={this.inputMode}
              value={typeof this.value === 'string' ? this.value : this.value.getTime()}
              class="component"
              maxlength={this.maxLength}
              onChange={this.handleChange}
              onKeyUp={this.handleChange}
              onBlur={this.handleBlur}
              min={this.min}
              max={this.max}
            />
          )}
        </div>
      </Host>
    );
  }
}
