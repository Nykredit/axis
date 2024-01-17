import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { Orientation } from '../../utils/propsTypes';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type StackVariant = 'none' | 'min' | 'tiny' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'huge' | 'xhuge' | 'max' | string;
export type Wrap = 'wrap' | 'nowrap';
export type Alignment = 'none' | 'start' | 'center' | 'end';
export type Justification = 'none' | 'space-between' | 'end';

export type StackProps<V extends string = StackVariant> = {
  variant: V;
  orientation: Orientation;
  alignment: Alignment;
  justification: Justification;
  wrap: Wrap;
};

@Component({
  tag: 'nk-stack',
  styleUrl: 'stack.css',
  shadow: true,
})
export class Stack implements BaseElement, StackProps {
  componentName: string = 'Stack';
  /**
   * Dictates the spacing and contextual use of the stack
   */
  @Prop() variant: StackVariant;
  /**
   * Dictates the orientation of the stack
   */
  @Prop() orientation: Orientation = 'vertical';
  /**
   * Dictates the aligment of the stack
   */
  @Prop() alignment: Alignment = 'none';
  /**
   * Dictates justification of the stack items
   */
  @Prop() justification: Justification = 'none';
  /**
   * Disable wrap
   */
  @Prop() wrap: Wrap = 'wrap';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.mappedStackVariant);
  }

  get className(): string {
    return ['component', this.orientation, `align-items-${this.alignment}`, `justify-content-${this.justification}`, this.wrap].join(' ');
  }

  get themeConfig() {
    return BrandConfigObject.components?.Stack;
  }

  get mappedStackVariant(): string {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariant || this.variant;
  }

  render() {
    return (
      <Host>
        <div class={this.className}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
