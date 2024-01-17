import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

export type DataDefinitionItemVariant = 'default' | 'emphasis' | string;

@Component({
  tag: 'nk-table-item',
  styleUrl: 'dataDefinitionItem.css',
  shadow: true,
})
export class DataDefinitionItem implements BaseElement {
  componentName: string = 'DataDefinitionItem';
  /**
   * Variant of the item
   */
  @Prop() variant: DataDefinitionItemVariant = 'default';
  /**
   * The label displayed to the left
   */
  @Prop() label: string = '';
  /**
   * The value displayed to the right
   */
  @Prop() value: string = '';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get className() {
    switch (this.variant) {
      case 'emphasis-with-border':
        return 'component border-bottom';
      case 'emphasis':
      case 'regular':
        return 'component hide-border-bottom';
      default:
        return 'component';
    }
  }

  get paragraphVariant() {
    switch (this.variant) {
      case 'emphasis-with-border':
      case 'emphasis':
        return 'assistive-emphasis';
      default:
        return 'assistive';
    }
  }

  render() {
    return (
      <Host>
        <nk-box variant="flat" class={this.className}>
          <nk-stack variant="flat" orientation="horizontal" alignment="center" justification="space-between">
            <nk-paragraph variant={this.paragraphVariant} alignment="left" text={this.label}></nk-paragraph>
            <nk-paragraph variant={this.paragraphVariant} alignment="right" text={this.value}></nk-paragraph>
          </nk-stack>
        </nk-box>
      </Host>
    );
  }
}
