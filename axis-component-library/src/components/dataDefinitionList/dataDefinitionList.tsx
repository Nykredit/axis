import { Component, Element, Host, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-table-list',
  styleUrl: 'dataDefinitionList.css',
  shadow: true,
})
export class DataDefinitionList implements BaseElement {
  componentName: string = 'DataDefinitionList';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  render() {
    return (
      <Host>
        <nk-stack orientation="vertical" variant="spacing-none">
          <slot></slot>
        </nk-stack>
      </Host>
    );
  }
}
