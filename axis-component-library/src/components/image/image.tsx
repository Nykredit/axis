import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type ImageVariant = 'cover' | 'contain' | 'fill' | 'none' | string;

export type ImageProps<V extends string> = {
  url: string;
  alt: string;
  variant?: V;
};

@Component({
  tag: 'nk-image',
  styleUrl: 'image.css',
  shadow: true,
})
export class Image implements BaseElement, ImageProps<ImageVariant> {
  componentName: string = 'Image';

  /**
   * The image URL of the card
   */
  @Prop() url: string;
  /**
   * The `alt` text of the image
   */
  @Prop() alt: string;
  /**
   * Variant of the image
   */
  @Prop() variant: ImageVariant = 'cover';

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
        <picture class="component">
          <source srcSet={this.url} />
          <img class="image" src={this.url} alt={this.alt} />
        </picture>
      </Host>
    );
  }
}
