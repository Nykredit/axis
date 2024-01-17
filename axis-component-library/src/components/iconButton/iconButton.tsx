import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';
import { ButtonVariant } from '../button/button';

@Component({
  tag: 'nk-button-icon',
  styleUrl: 'iconButton.css',
  shadow: true,
})
export class IconButton implements BaseElement {
  componentName: string = 'IconButton';

  /**
   * The icon displayed inside of the button
   */
  @Prop() icon: string;
  /**
   * The variant of the button, such as primary and secondary
   */
  @Prop() variant: ButtonVariant = 'primary';
  /**
   * Is disabled
   */
  @Prop() disabled: boolean = false;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
    setDataProperty(this.el, 'data-disabled', String(this.disabled));
  }

  render() {
    return (
      <Host>
        <nk-box variant="inherit">
          <nk-unstyled-button>
            <div class="button-content">
              <nk-icon-system name={this.icon} size="small" />
            </div>
          </nk-unstyled-button>
        </nk-box>
      </Host>
    );
  }
}
