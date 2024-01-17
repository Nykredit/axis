import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty } from '../../utils/setDataProperties';

export type CanvasButtonVariant = 'default';
export type CanvasButtonAlignment = 'center' | 'right' | 'left';
export type CanvasButtonType = 'action' | 'anchor';

@Component({
  tag: 'nk-canvas-button',
  styleUrl: 'canvasButton.css',
  shadow: true,
})
export class CanvasButton implements BaseElement {
  componentName: string = 'CanvasButton';
  @Element() el: HTMLElement;

  /**
   * Variant of the canvas button
   */
  @Prop() variant: CanvasButtonVariant = 'default';
  /**
   * Controls the horizontal alignment of the nested content
   */
  @Prop() alignment: CanvasButtonAlignment = 'center';
  /**
   * The type of the canvas button
   */
  @Prop() type: CanvasButtonType = 'action';
  /**
   * Used to change the look of the canvas button, depending on whether it is active or not
   */
  @Prop() isactive: boolean = false;
  /**
   * Href for the link
   */
  @Prop() href: string = '';
  /**
   * Determines if the button is disabled
   */
  @Prop() disabled: boolean = false;

  @State()
  hasSlot = {
    leading: false,
    trailing: false,
    unnamed: false,
  };

  componentWillLoad: () => void;

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
    this.type === 'action' && this.href !== '' && console.error('You can\'t set href on a button. Choose type "anchor".');
  }

  get contentClasses() {
    return ['canvas-content', `align-${this.alignment}`].join(' ');
  }

  get isAnchor() {
    return this.type === 'anchor';
  }

  get themeConfig() {
    return BrandConfigObject.components?.CanvasButton;
  }

  get stackVariant() {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariant;
  }

  //TODO: Ensure this works as intended
  handleSlotChange = (evt: any) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    const slot = path[0];
    this.hasSlot[slot.name || 'unnamed'] = slot.assignedNodes().length > 0;
  };

  render() {
    return (
      <Host>
        <div class="component" data-active={this.isactive}>
          {this.isAnchor ? (
            <nk-unstyled-anchor class="anchor" href={this.href}>
              <div class="wrapper">
                <slot name="leading" data-active={this.hasSlot.leading} onSlotchange={this.handleSlotChange}></slot>
                <div class={this.contentClasses} data-active={this.hasSlot.unnamed}>
                  <slot onSlotchange={this.handleSlotChange}></slot>
                </div>
                <slot name="trailing" data-active={this.hasSlot.trailing} onSlotchange={this.handleSlotChange}></slot>
              </div>
            </nk-unstyled-anchor>
          ) : (
            <nk-unstyled-button class="button">
              <nk-stack variant={this.stackVariant} orientation="horizontal" alignment="center" wrap="nowrap" class="wrapper">
                <slot name="leading" data-active={this.hasSlot.leading} onSlotchange={this.handleSlotChange}></slot>
                <div class={this.contentClasses} data-active={this.hasSlot.unnamed}>
                  <slot onSlotchange={this.handleSlotChange}></slot>
                </div>
                <slot name="trailing" data-active={this.hasSlot.trailing} onSlotchange={this.handleSlotChange}></slot>
              </nk-stack>
            </nk-unstyled-button>
          )}
        </div>
      </Host>
    );
  }
}
