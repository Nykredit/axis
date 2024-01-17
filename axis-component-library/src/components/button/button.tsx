import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | string;
export type ButtonProps<V extends string = ButtonVariant> = {
  id: string;
  label: string;
  variant: V;
  disabled?: boolean;
  minwidth?: number;
};

@Component({
  tag: 'nk-button-text',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button implements BaseElement {
  componentName: string = 'Button';
  /**
   * The label displayed inside of the button and as a tooltip
   */
  @Prop() label: string;
  /**
   * The variant of the button, such as primary and secondary
   */
  @Prop() variant: ButtonVariant = 'primary';
  /**
   * icon preceding the label
   */
  @Prop() leadingicon: string;
  /**
   * icon following the label
   */
  @Prop() trailingicon: string;
  /**
   * Is this button disabled?
   */
  @Prop() disabled?: boolean;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
    setDataProperty(this.el, 'data-disabled', String(this.disabled));
    setDataProperty(this.el, 'data-state', 'default');
  }

  get className(): string {
    return ['component', this.variant].join(' ');
  }

  get themeConfig() {
    return BrandConfigObject.components?.Button;
  }

  get elevationVariant() {
    return this.themeConfig?.[this.variant]?.components?.Elevation?.targetVariant;
  }

  get labelVariant() {
    return this.themeConfig?.[this.variant]?.components?.Label?.targetVariant;
  }

  get stackVariant() {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariant;
  }

  get iconSize() {
    return this.themeConfig?.[this.variant]?.components?.Icon?.targetSize;
  }

  clickHandler = () => {
    setDataProperty(this.el, 'data-state', 'default');
  };

  focusHandler = () => {
    setDataProperty(this.el, 'data-state', 'focus');
  };

  blurHandler = () => {
    setDataProperty(this.el, 'data-state', 'default');
  };

  mousedownHandler = () => {
    setDataProperty(this.el, 'data-state', 'active');
  };

  render() {
    return (
      <Host>
        <div class={this.className}>
          <nk-box variant={this.elevationVariant}>
            <button
              class="frontplane"
              onClick={this.clickHandler}
              onFocus={this.focusHandler}
              onBlur={this.blurHandler}
              onMouseDown={this.mousedownHandler}
              title={this.label}
              disabled={this.disabled}
            >
              <nk-stack variant={this.stackVariant} orientation="horizontal" alignment="center" wrap="nowrap">
                {this.leadingicon ? <nk-icon-system name={this.leadingicon} size={this.iconSize}></nk-icon-system> : null}
                <nk-label variant={this.labelVariant} text={this.label} class="label"></nk-label>
                {this.trailingicon ? <nk-icon-system name={this.trailingicon} size={this.iconSize}></nk-icon-system> : null}
              </nk-stack>
            </button>
          </nk-box>
        </div>
      </Host>
    );
  }
}
