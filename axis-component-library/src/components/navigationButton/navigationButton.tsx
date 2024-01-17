import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type NavigationButtonVariant = 'default' | 'icon-only';

@Component({
  tag: 'nk-button-nav',
  styleUrl: 'navigationButton.css',
  shadow: true,
})
export class NavigationButton implements BaseElement {
  componentName: string = 'NavigationButton';

  /**
   * The variant of the navigation button
   */
  @Prop() variant: NavigationButtonVariant = 'default';
  /**
   * Text of the navigation button label
   */
  @Prop() label: string;
  /**
   * Name of the icon to use
   */
  @Prop() iconname: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get showLabel() {
    return this.variant === 'default';
  }

  render() {
    return (
      <Host>
        <nk-unstyled-button>
          <div class="container">
            <nk-stack orientation="vertical" variant="spacing-0x">
              <nk-stack orientation="vertical" variant="spacing-2x" alignment="center">
                <nk-icon-system name={this.iconname} size="small"></nk-icon-system>
                {this.showLabel ? <nk-label text={this.label} variant="nav-button"></nk-label> : null}
              </nk-stack>
              <div class="hover-bar"></div>
            </nk-stack>
          </div>
        </nk-unstyled-button>
      </Host>
    );
  }
}
