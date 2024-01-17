import { Component, Element, Host, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-layout-split',
  styleUrl: 'layoutSplit.css',
  shadow: true,
})
export class LayoutSplit implements BaseElement {
  componentName: string = 'LayoutSplit';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  render() {
    return (
      <Host>
        <div class="component">
          <slot name="left"></slot>
          <slot name="right"></slot>
        </div>
      </Host>
    );
  }
}
