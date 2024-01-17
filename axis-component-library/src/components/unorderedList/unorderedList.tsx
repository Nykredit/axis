import { Component, Element, Host, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-list-unordered',
  styleUrl: 'unorderedList.css',
  shadow: true,
})
export class UnorderedList implements BaseElement {
  componentName: string = 'UnorderedList';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get themeConfig() {
    return BrandConfigObject.components?.UnorderedList;
  }

  get themedVariant() {
    return this.themeConfig?.default?.components?.Stack?.targetVariant;
  }

  render() {
    return (
      <Host>
        <ul class={this.componentName}>
          <nk-stack orientation="vertical" variant="medium">
            <slot></slot>
          </nk-stack>
        </ul>
      </Host>
    );
  }
}
