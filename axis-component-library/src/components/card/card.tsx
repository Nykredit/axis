import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type CardVariant = 'default' | 'inherit' | 'flex';

@Component({
  tag: 'nk-card-standard',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card implements BaseElement {
  componentName: string = 'Card';

  /**
   * The image URL of the card
   */
  @Prop() imageurl: string;
  @Prop() imagealttext: string;
  /**
   * The card variant
   */
  @Prop() variant: CardVariant = 'default';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get className(): string {
    return `component ${this.variant === 'flex' && 'flex flex-col'}`;
  }

  get bodyClass(): string {
    return `body ${this.variant === 'flex' ? 'flex-1' : ''}`;
  }

  get componentAttribute(): string {
    return `card ${this.variant}`;
  }

  get themeConfig() {
    return BrandConfigObject.components?.Card;
  }

  get elevationVariant(): string {
    return this.themeConfig?.default?.components?.Elevation?.targetVariant;
  }

  get imageVariant(): string {
    return this.themeConfig?.default?.components?.Image?.targetVariant;
  }

  render() {
    return (
      <Host>
        <div class={this.className}>
          <nk-box variant={this.elevationVariant} class="flex-1">
            {this.imageurl ? <nk-image variant={this.imageVariant} url={this.imageurl} alt={this.imagealttext}></nk-image> : null}
            <div class={this.bodyClass}>
              <slot></slot>
            </div>
          </nk-box>
        </div>
      </Host>
    );
  }
}
