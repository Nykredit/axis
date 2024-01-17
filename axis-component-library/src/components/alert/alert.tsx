import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type AlertVariant = 'major' | 'minor';

@Component({
  tag: 'nk-alert',
  styleUrl: 'alert.css',
  shadow: true,
})
export class Alert implements BaseElement {
  componentName: string = 'Alert';

  /**
   * description
   */
  @Prop() variant: AlertVariant = 'major';
  /**
   * The icon displayed to the left
   */
  @Prop() icon: string = '';
  /**
   * The text displayed inside the alert
   */
  @Prop() text: string = '';
  /**
   * The text inside the button to the right
   */
  @Prop() buttonLabel: string = '';

  @Element() el: HTMLElement;
  @Event() buttonClicked: EventEmitter<MouseEvent>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get buttonVariant(): string {
    return this.variant === 'major' ? 'neutral' : 'ghost';
  }

  render() {
    return (
      <Host>
        <nk-box variant="raised" class="component">
          <nk-stack variant="spacing-xlarge" orientation="horizontal" alignment="center" wrap="nowrap">
            {this.icon ? <nk-icon-system name={this.icon} size="small"></nk-icon-system> : null}
            <nk-stack variant="spacing-none" orientation="horizontal" alignment="center" justification="space-between" wrap="nowrap" class="flex-1">
              <nk-paragraph variant="body" text={this.text}></nk-paragraph>
              {this.buttonLabel ? (
                <nk-button-text variant={this.buttonVariant} label={this.buttonLabel} class="button" onClick={e => this.buttonClicked.emit(e)}></nk-button-text>
              ) : null}
            </nk-stack>
          </nk-stack>
        </nk-box>
      </Host>
    );
  }
}
