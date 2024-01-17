import { Component, Element, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { LabelVariant } from '../label';
import { Justification } from '../stack';

export type AmountVariant = 'large' | 'medium' | 'small';
export type AmountAlignment = 'left' | 'right';

@Component({
  tag: 'nk-amount',
  styleUrl: 'amount.css',
  shadow: true,
})
export class Amount implements BaseElement {
  componentName: string = 'Amount';

  /**
   * Variant of the amount component
   */
  @Prop() variant: AmountVariant = 'large';
  /**
   * The text for the label above
   */
  @Prop() text: string;
  /**
   * The price that is displayed
   */
  @Prop() price: string;
  /**
   * The rate that is displayed next to the price
   */
  @Prop() rate: string;
  /**
   * Alignment of the label above
   */
  @Prop() alignment: AmountAlignment = 'left';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get stackJustification(): Justification {
    return this.alignment === 'right' ? 'end' : 'none';
  }

  get getTextVariant(): LabelVariant {
    switch (this.variant) {
      case 'large':
      case 'medium':
        return 'field';
      default:
        return 'superscript';
    }
  }

  get getPriceVariant(): LabelVariant {
    switch (this.variant) {
      case 'large':
        return 'amount-xlarge';
      case 'medium':
        return 'amount-large';
      case 'small':
        return 'amount-medium';
    }
  }

  render() {
    return (
      <nk-stack variant="spacing-xsmall" orientation="vertical">
        {this.text ? <nk-label variant={this.getTextVariant} text={this.text} class={this.alignment} /> : null}
        <nk-stack variant="spacing-tiny" orientation="horizontal" alignment="end" justification={this.stackJustification}>
          <nk-label variant={this.getPriceVariant} text={this.price} />
          <nk-label variant="amount-medium" text={this.rate} />
        </nk-stack>
      </nk-stack>
    );
  }
}
