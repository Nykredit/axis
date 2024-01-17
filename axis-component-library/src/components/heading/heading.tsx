import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type HeadingVariant = 'huge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | string;
export type HeadingAlignment = 'none' | 'start' | 'center' | 'end';

@Component({
  tag: 'nk-heading',
  styleUrl: 'heading.css',
  shadow: true,
})
export class Heading implements BaseElement {
  componentName: string = 'Heading';

  /**
   * Determines the header variant
   */
  @Prop() variant: HeadingVariant;
  /**
   * The text to show in the heading
   */
  @Prop() text: string;
  /**
   * Header level. Use appropriate level according to the global header outline
   */
  @Prop() level: number;
  /**
   * Text alignment for the header
   */
  @Prop() alignment?: HeadingAlignment = 'none';

  @Element() el: HTMLElement;

  className(): string {
    return [`component`, this.alignment].join(' ');
  }

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  getHeaderTag() {
    if (!this.level || this.level > 6) {
      return 'h1';
    }
    return `h${this.level}`;
  }

  render() {
    const Element = this.getHeaderTag();
    return (
      <Host>
        <Element class={this.className()}>{this.text}</Element>
      </Host>
    );
  }
}
