import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { picklistValues } from '../../utils/globals';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

export type SelectInputValue = { value: string; label: string };

@Component({
  tag: 'nk-select-input-base',
  styleUrl: 'selectInputBase.css',
  shadow: true,
})
export class SelectInputBase implements BaseElement {
  componentName: string = 'SelectInputBase';
  /**
   * Value of the select input
   */
  @Prop() value: string | null;
  /**
   * Allowed values
   */
  @Prop() options: SelectInputValue[] = [];

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<string>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  focus() {
    /* Note that setting focus on a select doesn't actually open the options box (at least on Chromium and FF). */
    const elem = this.el.querySelector?.('select');
    if (elem) {
      elem.focus();
    }
  }

  /**
   * Enriched options, marking the option matching the value property as selected
   */
  get displayOptions(): (SelectInputValue & { selected: boolean })[] {
    return Array.from(this.options).map(opt => ({
      ...opt,
      selected: opt.value === this.value,
    }));
  }

  /**
   * Event handler attached to the wrapped select element
   */
  handleChange = (cEvt: Event) => {
    /** The Salesforce Synthetic Shadow DOM does not filter {composed:false} events, so we need to prevent them from leaking */
    cEvt.stopImmediatePropagation();
    const val = (cEvt.target as HTMLTextAreaElement).value;
    this.valueChanged.emit(val === picklistValues.empty ? null : val);
  };

  render() {
    return (
      <Host>
        <div class="capsize">
          <select class="component" onChange={this.handleChange}>
            {this.displayOptions.map(opt => (
              <option key={opt.value} selected={opt.value === this.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </Host>
    );
  }
}
