import { Component, Element, Host, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-accordion-list',
  styleUrl: 'accordionList.css',
  shadow: true,
})
export class AccordionList implements BaseElement {
  componentName: string = 'AccordionList';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
