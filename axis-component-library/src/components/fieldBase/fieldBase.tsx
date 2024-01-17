import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type FieldBaseVariant = 'default' | string;

@Component({
  tag: 'nk-field-base',
  styleUrl: 'fieldBase.css',
  shadow: true,
})
export class FieldBase implements BaseElement {
  componentName: string = 'FieldBase';

  /**
   * The variant of the fieldBase element
   */
  @Prop() variant: FieldBaseVariant = 'default';
  /**
   * The label to render. This should be descriptive of the field
   */
  @Prop() label: string = '';
  /**
   * Assistive label which is placed below the component
   */
  @Prop() labelassistive: string;
  /**
   * Determines if the label should be raised
   */
  @Prop() hasValue: boolean;
  /**
   * Width of the component in "ch"
   */
  @Prop() width: number;
  @State() hasSlot = {
    trailing: false,
    leading: false,
    unnamed: false,
  };

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get componentStyle() {
    return { width: this.width ? `${this.width}ch` : '100%' };
  }

  get cssClasses(): string {
    return ['component', this.variant].join(' ');
  }

  get opacityStyle(): string {
    return `opacity: ${this.hasValue ? 1 : 0}`;
  }

  get themeConfig() {
    return BrandConfigObject.components?.FieldBase;
  }

  get stackVariant(): string {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariant;
  }

  handleSlotChange = (evt: any) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    const slot = path[0];
    this.hasSlot[slot.name || 'unnamed'] = slot.assignedNodes().length > 0;
  };

  render() {
    return (
      <Host>
        <div class={this.cssClasses} style={this.componentStyle}>
          <label data-content={this.hasValue}>
            <div class="horizontalWrapper">
              <slot name="leading" slot="leading" data-active={this.hasSlot.leading} onSlotchange={this.handleSlotChange}></slot>
              <nk-stack orientation="vertical" variant={this.stackVariant} class="vertical">
                {this.label ? <nk-label variant="field" text={this.label}></nk-label> : null}
                <slot onSlotchange={this.handleSlotChange} data-active={this.hasSlot.unnamed}></slot>
              </nk-stack>
              <slot name="trailing" slot="trailing" data-active={this.hasSlot.trailing} onSlotchange={this.handleSlotChange}></slot>
            </div>
          </label>
        </div>
      </Host>
    );
  }
}
