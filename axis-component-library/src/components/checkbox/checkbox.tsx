import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-checkbox',
  styleUrl: 'checkbox.css',
  shadow: true,
})
export class Checkbox implements BaseElement {
  componentName: string = 'Checkbox';

  /**
   * The value of the checkbox. True if checked, false if unchecked.
   */
  @Prop() value: boolean = false;
  /**
   * Is this checkbox disabled?
   */
  @Prop() disabled: boolean;
  /**
   * boolean to tell if input should be displayed in DOM or not
   */
  @Prop() hideinput: boolean = false;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<boolean>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-checked', String(this.value));
    setDataProperty(this.el, 'data-disabled', String(this.disabled));
  }

  get inputClass(): string {
    return `checkbox-native-control ${this.hideinput ? 'hidden' : ''}`;
  }

  get inputAriaHidden(): string {
    return this.hideinput.toString();
  }

  /**
   * Change state if checkbox changed value
   */
  handleValueChange = () => {
    this.valueChanged.emit(!this.value);
  };

  render() {
    return (
      <Host>
        <nk-box variant="flat" class="box">
          <input class={this.inputClass} type="checkbox" checked={this.value} onChange={this.handleValueChange} disabled={this.disabled} aria-hidden={this.inputAriaHidden} />
          <div class="checkbox">
            <nk-icon-system class="icon" name="check-small" />
          </div>
        </nk-box>
      </Host>
    );
  }
}
