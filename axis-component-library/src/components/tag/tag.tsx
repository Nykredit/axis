import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

export type TagProps = {
  icon?: string;
  text: string;
};

@Component({
  tag: 'nk-tag',
  styleUrl: 'tag.css',
  shadow: true,
})
export class Tag implements BaseElement, TagProps {
  componentName: string = 'Tag';

  /**
   * Optional icon name
   */
  @Prop() icon: string;
  /**
   * The text that is displayed
   */
  @Prop() text: string;
  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get themeConfig() {
    return BrandConfigObject.components?.Tag;
  }

  get elevationVariant() {
    return this.themeConfig?.default?.components?.Elevation?.targetVariant;
  }

  get stackVariant() {
    return this.themeConfig?.default?.components?.Stack?.targetVariant;
  }

  get iconVariant() {
    return this.themeConfig?.default?.components?.Icon?.targetVariant;
  }

  get labelVariant() {
    return this.themeConfig?.default?.components?.Label?.targetVariant;
  }

  render() {
    return (
      <Host>
        <nk-box variant={this.elevationVariant} class="component">
          <nk-stack variant={this.stackVariant} alignment="center" orientation="horizontal">
            {this.icon ? <nk-icon-system name={this.icon} variant={this.iconVariant}></nk-icon-system> : null}
            <nk-label variant={this.labelVariant} text={this.text} class="label"></nk-label>
          </nk-stack>
        </nk-box>
      </Host>
    );
  }
}
