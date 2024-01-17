import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { FieldBaseVariant } from '../fieldBase/fieldBase';

@Component({
  tag: 'nk-textarea',
  styleUrl: 'textarea.css',
  shadow: true,
})
export class Textarea implements BaseElement {
  componentName: string = 'TextArea';

  /**
   * The variant of the fieldBase element
   */
  @Prop() variant: FieldBaseVariant = 'default';
  @Prop() placeholderText: string;
  /**
   * The text value within the textarea
   */
  @Prop() value: string;
  /**
   * Description of this property
   */
  @Prop() label: string;
  /**
   * Maximum length of the value string
   */
  @Prop() maxLength: string;
  /**
   * Disables input if true.
   */
  @Prop() disabled: boolean = false;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<string>;

  get assistiveLabel(): string | null {
    if (this.maxLength) {
      return `(${(this.value || '').length}/${this.maxLength})`;
    }
    return null;
  }

  handleChange = (evt: CustomEvent<string>) => {
    evt.stopImmediatePropagation();
    this.valueChanged.emit(evt.detail);
  };

  focus = () => {
    const elem = this.el.querySelector('component') as HTMLTextAreaElement;
    elem.focus();
  };

  render() {
    return (
      <Host>
        <nk-input-base label={this.label} has-value={this.value} variant={this.variant} labelassistive={this.assistiveLabel}>
          <nk-textarea-base
            onValueChanged={this.handleChange}
            max-length={this.maxLength}
            onChange={this.handleChange}
            value={this.value}
            disabled={this.disabled}
            placeholder-text={this.placeholderText}
          ></nk-textarea-base>
        </nk-input-base>
      </Host>
    );
  }
}
