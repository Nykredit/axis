import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { Orientation } from '../../utils/propsTypes';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { TagProps } from '../tag';

@Component({
  tag: 'nk-tag-list',
  styleUrl: 'tagStack.css',
  shadow: true,
})
export class TagStack implements BaseElement {
  componentName: string = 'TagList';
  /**
   * Variant of the tag stack
   */
  @Prop() variant: Orientation = 'horizontal';
  /**
   * List of tags
   */
  @Prop() tags: TagProps[] = [];

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get themeConfig() {
    return BrandConfigObject.components?.TagList;
  }

  get stackVariant() {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariant;
  }

  render() {
    return (
      <Host>
        <nk-stack orientation={this.variant} wrap="wrap" variant={this.stackVariant}>
          {this.tags.map((tag, i) => (
            <nk-tag key={i} icon={tag.icon} text={tag.text}></nk-tag>
          ))}
        </nk-stack>
      </Host>
    );
  }
}
