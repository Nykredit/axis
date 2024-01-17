import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-textarea-base',
  styleUrl: 'textareaBase.css',
  shadow: true,
})
export class TextareaBase implements BaseElement {
  componentName: string = 'TextareaBase';

  /**
   * Text value of the textarea
   */
  @Prop() value: string;

  /**
   * Max length of the value string
   */
  @Prop() maxLength: string;
  @Prop() placeholderText: string;
  /**
   * Disables input if true.
   */
  @Prop() disabled: boolean = false;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<string>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  focus() {
    this.el.querySelector('textarea')!.focus();
  }

  /**
   * Event handler attached to the wrapped textarea
   */
  handleChange = (evt: Event) => {
    /** The Salesforce Synthetic Shadow DOM does not filter {composed:false} events, so we need to prevent them from leaking */
    evt.stopImmediatePropagation();
    const val = (evt.target as HTMLTextAreaElement).value;
    if (this.value !== val) {
      this.valueChanged.emit(val);
    }
  };

  render() {
    return (
      <Host>
        <textarea class="component" maxlength={this.maxLength} onChange={this.handleChange} onKeyUp={this.handleChange} disabled={this.disabled} placeholder={this.placeholderText}>
          {this.value}
        </textarea>
      </Host>
    );
  }
}
