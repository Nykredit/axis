import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

// button-text does not exist in the styling sheets
export type ParagraphVariant = 'manchet' | 'body' | 'body-emphasis' | 'body-secondary' | 'body-secondary-emphasis' | 'legal' | 'assistive' | 'assistive-emphasis';
export type Alignment = 'left' | 'center' | 'right';

@Component({
  tag: 'nk-paragraph',
  styleUrl: 'paragraph.css',
  shadow: true,
})
export class Paragraph implements BaseElement {
  componentName: string = 'Paragraph';

  /**
   * The paragraph variant
   */
  @Prop() variant: ParagraphVariant;

  /**
   * The text to display in the paragraph.
   */
  @Prop() text: string;
  /**
   * Text alignment for the paragraph
   */
  @Prop() alignment: Alignment = 'left';
  /**
   * Allows for direct HTML injection
   */
  @Prop() unsafe: boolean = false;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  componentDidRender() {
    if (this.unsafe) {
      this.el.shadowRoot.querySelector('[data-target]')!.innerHTML = this.text ? this.text : '';
    }
  }

  className(): string {
    return [`component`, this.alignment].join(' ');
  }

  render() {
    return (
      <Host>
        <div class={this.className()}>
          {this.unsafe ? <div data-target></div> : <div>{this.text}</div>}
          {this.unsafe ? <div style={{ display: 'none' }}>{this.text}</div> : null}
        </div>
      </Host>
    );
  }
}
