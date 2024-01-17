import { Component, Element, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type BoxVariant = 'none' | 'inherit' | string;

@Component({
  tag: 'nk-box',
  styleUrl: 'box.css',
  shadow: true,
})
export class Elevation implements BaseElement {
  componentName: string = 'Elevation';

  /**
   * The elevation variant
   */
  @Prop() variant: BoxVariant;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get className() {
    return ['component', this.variant].join(' ');
  }

  render() {
    return (
      <div class={this.className}>
        <div class="backplane"></div>
        <div class="frontplane">
          <slot></slot>
        </div>
      </div>
    );
  }
}
