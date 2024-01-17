import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type AccordionItemVariant = 'default' | 'icon-heading';

@Component({
  tag: 'nk-accordion',
  styleUrl: 'accordionItem.css',
  shadow: true,
})
export class AccordionItem implements BaseElement {
  componentName: string = 'AccordionItem';

  /**
   * The variant of the accordion item
   */
  @Prop() variant: AccordionItemVariant = 'default';
  @Prop() isopen: boolean = false;
  /**
   * The title of the accordion item
   */
  @Prop() text: string = '';
  /**
   * Does the slot have content
   */
  @State() hasContent: boolean = false;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-open', String(this.isopen));
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get themeConfig() {
    return BrandConfigObject.components?.AccordionItem;
  }

  get isDefaultVariant(): boolean {
    return this.variant === 'default';
  }

  get hasText() {
    return !!this.text;
  }

  get labelVariant() {
    return this.themeConfig?.[this.variant]?.components?.Label?.targetVariant;
  }

  get iconClassName() {
    if (this.isopen) {
      return ['icon', 'icon-open'].join(' ');
    } else {
      return ['icon', 'icon-closed'].join(' ');
    }
  }

  handleClick = e => {
    e.stopPropagation();
    if (this.hasContent) {
      this.isopen = !this.isopen;
    }
  };

  handleSlotChanged = () => {
    this.hasContent = true;
  };

  render() {
    return (
      <Host>
        <nk-stack class="header" variant="spacing-4x" orientation="horizontal" justification="space-between" alignment="center" onClick={this.handleClick}>
          {this.hasText ? <nk-label variant={this.labelVariant} text={this.text}></nk-label> : null}
          <slot name="heading"></slot>
          <nk-icon-system class={this.iconClassName} name="arrow-sm-down"></nk-icon-system>
        </nk-stack>
        <div class="content">
          <slot name="content" onSlotchange={this.handleSlotChanged}></slot>
        </div>
      </Host>
    );
  }
}
