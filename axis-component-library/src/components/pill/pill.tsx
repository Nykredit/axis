import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type PillProps = {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  value: boolean;
};

@Component({
  tag: 'nk-pill',
  styleUrl: 'pill.css',
  shadow: true,
})
export class Pill implements BaseElement {
  componentName: string = 'Pill';

  @Prop() label: string;
  /**
   * Is checked
   */
  @Prop() value: boolean = false;
  @Prop() icon: string;
  /**
   * Is this pill disabled?
   */
  @Prop() disabled: boolean = false;

  @Element() el: HTMLElement;
  @Event() pillChange: EventEmitter<boolean>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }
  componentWillRender() {
    setDataProperty(this.el, 'data-checked', String(this.value));
    setDataProperty(this.el, 'data-disabled', String(this.disabled));
  }

  get iconColor() {
    if (this.value) {
      return 'font-inverse';
    }
    return 'interaction';
  }

  handleChange = (evt: InputEvent) => {
    if (this.disabled) {
      return;
    }
    this.value = (evt.target as HTMLInputElement).checked;
    this.pillChange.emit(this.value);
  };

  get iconClass(): string {
    return `icon ${this.value ? '' : 'hidden'}`;
  }

  get themeConfig() {
    return BrandConfigObject.components?.Pill;
  }

  get stackVariant(): string {
    return this.themeConfig?.default?.components?.Stack?.targetVariant;
  }

  get iconSize(): string {
    return this.themeConfig?.default?.components?.Icon?.targetSize;
  }

  get labelVariant(): string {
    return this.themeConfig?.default?.components?.Label?.targetVariant;
  }

  get iconDisplay(): boolean {
    return this.themeConfig?.default?.components?.Icon?.targetDisplay === true;
  }

  render() {
    return (
      <Host>
        <div>
          {this.disabled ? (
            <div class="component">
              <input type="checkbox" disabled onChange={this.handleChange} />
              <nk-elevation variant="inherit">
                <div class="overlay">
                  <nk-stack variant={this.stackVariant} orientation="horizontal" alignment="center">
                    {this.iconDisplay ? <nk-icon-system class="icon" name={this.icon} color={this.iconColor} size={this.iconSize}></nk-icon-system> : null}
                    <nk-label class="label" variant={this.labelVariant} text={this.label}></nk-label>
                    {this.iconDisplay ? <div class="empty-box"></div> : null}
                  </nk-stack>
                </div>
              </nk-elevation>
            </div>
          ) : (
            <div class="component">
              {this.value ? <input type="checkbox" checked onChange={this.handleChange} /> : <input type="checkbox" onChange={this.handleChange} />}
              <nk-elevation variant="inherit">
                <div class="overlay">
                  <nk-stack variant={this.stackVariant} orientation="horizontal" alignment="center">
                    {this.iconDisplay ? <nk-icon-system class={this.iconClass} name={this.icon} color={this.iconColor} size={this.iconSize}></nk-icon-system> : null}
                    <nk-label class="label" variant={this.labelVariant} text={this.label}></nk-label>
                    {this.iconDisplay ? <div class="empty-box"></div> : null}
                  </nk-stack>
                </div>
              </nk-elevation>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
