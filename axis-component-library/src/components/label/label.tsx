import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type LabelVariant = 'button' | 'nav-button' | 'input' | 'superscript' | string;

@Component({
  tag: 'nk-label',
  styleUrl: 'label.css',
  shadow: true,
})
export class Label implements BaseElement {
  componentName: string = 'Label';

  /**
   * The label variant
   */
  @Prop() variant: LabelVariant;

  /**
   * The text of the label
   */
  @Prop() text: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  render() {
    return (
      <Host>
        <div class="component">
          <div class="visible" title={this.text}>
            {this.text}
          </div>
        </div>
      </Host>
    );
  }
}
