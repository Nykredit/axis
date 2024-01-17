import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';
import { ParagraphVariant } from '../paragraph';

export type AssistiveTextVariant = 'error' | 'info';

@Component({
  tag: 'nk-assistive-text',
  styleUrl: 'assistiveText.css',
  shadow: true,
})
export class AssistiveText implements BaseElement {
  componentName: string = 'AssistiveText';

  /**
   * The variant of the button, such as primary and secondary
   */
  @Prop() variant: AssistiveTextVariant = 'error';
  /**
   * The label displayed inside of the div
   */
  @Prop() label: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get themeConfig() {
    return BrandConfigObject.components?.AssistiveText;
  }

  get paragraphVariant(): ParagraphVariant {
    return this.themeConfig?.[this.variant]?.components?.Paragraph?.targetVariant;
  }

  get componentClass(): string {
    return `assistive-text ${this.variant === 'error' ? 'component' : ''}`;
  }

  render() {
    return (
      <Host>
        <div class={this.componentClass}>
          <nk-paragraph variant={this.paragraphVariant} text={this.label}></nk-paragraph>
        </div>
      </Host>
    );
  }
}
