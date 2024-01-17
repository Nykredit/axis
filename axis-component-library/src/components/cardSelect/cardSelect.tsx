import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type CardSelectVariant = 'checkbox' | 'radio';

@Component({
  tag: 'nk-card-select',
  styleUrl: 'cardSelect.css',
  shadow: true,
})
export class CardSelect implements BaseElement {
  componentName: string = 'CardSelect';

  /**
   * Variant of the card select
   */
  @Prop() variant: CardSelectVariant = 'checkbox';
  /**
   * Url of the image
   */
  @Prop() imageurl: string = '';
  /**
   * Alt text to the image
   */
  @Prop() imagealttext: string = '';
  /**
   * Title of the action at the bottom of the card
   */
  @Prop() actiontitle: string = '';
  /**
   * Label to the action at the bottom of the card
   */
  @Prop() actionlabel: string = '';
  /**
   * Value of the action
   */
  @Prop() actionvalue: boolean = false;
  /**
   * Unique id of the card
   */
  @Prop() cardid: string = '';

  hideinput: boolean = true;

  @Element() el: HTMLElement;

  @Event({ bubbles: false }) cardChanged: EventEmitter<boolean>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-checked', String(this.actionvalue));
    setDataProperty(this.el, 'data-variant', this.variant);
    setDataProperty(this.el, 'data-id', this.cardid);
  }

  handleChange = () => {
    this.cardChanged.emit(!this.actionvalue);
  };

  render() {
    return (
      <Host>
        <label class="contents">
          <input type={this.variant} class="component" checked={this.actionvalue} onChange={this.handleChange} />
          <nk-card-standard imageurl={this.imageurl} imagealttext={this.imagealttext} variant="flex" class="card">
            <nk-stack orientation="vertical" variant="spacing-medium" justification="space-between" class="flex-1 h-full">
              <slot name="body"></slot>
              {this.variant === 'checkbox' ? (
                <nk-checkbox-item titlelabel={this.actiontitle} label={this.actionlabel} value={this.actionvalue} hideinput={this.hideinput} class="remove-box"></nk-checkbox-item>
              ) : (
                <nk-radio-item titlelabel={this.actiontitle} label={this.actionlabel} value={this.actionvalue} hideinput={this.hideinput} class="remove-box"></nk-radio-item>
              )}
            </nk-stack>
          </nk-card-standard>
        </label>
      </Host>
    );
  }
}
