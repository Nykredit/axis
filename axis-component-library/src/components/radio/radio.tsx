import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-radio',
  styleUrl: 'radio.css',
  shadow: true,
})
export class Radio implements BaseElement {
  componentName: string = 'RadioButton';

  /**
   * The value of the radiobutton. True if checked, false in unchecked
   */
  @Prop() value: boolean = false;
  /**
   * Is the radiobutton disabled?
   */
  @Prop() disabled: boolean = false;
  /**
   * Name of the radiobutton
   */
  @Prop() name: string;
  /**
   * Boolean to tell if input should be displayed in DOM or not
   */
  @Prop() hideinput: boolean = false;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<boolean>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, `data-checked`, String(this.value));
    setDataProperty(this.el, `data-disabled`, String(this.disabled));
  }

  get inputAriaHidden(): string {
    return String(this.hideinput);
  }

  get className() {
    return `input hit-target ${this.hideinput ? 'hidden' : ''}`;
  }

  handleValueChange = () => {
    this.valueChanged.emit(!this.value);
  };

  render() {
    return (
      <Host>
        <div class="component">
          <input
            class={this.className}
            name={this.name}
            checked={this.value}
            type="radio"
            disabled={this.disabled}
            onChange={this.handleValueChange}
            aria-hidden={this.inputAriaHidden}
          />
          <c-elevation variant="flat" class="box hit-target"></c-elevation>
          <div class="radiobutton"></div>
        </div>
      </Host>
    );
  }
}
