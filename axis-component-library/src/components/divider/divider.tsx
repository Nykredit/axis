import { Component, Element, Prop, h } from '@stencil/core';
import { Orientation } from '../../utils/propsTypes';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-divider',
  styleUrl: 'divider.css',
  shadow: true,
})
export class Divider implements BaseElement {
  componentName: string = 'Divider';

  @Prop() orientation: Orientation = 'horizontal';

  private getClassName(): string {
    return [`component`, this.orientation].join(' ');
  }
  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  render() {
    return <div class={this.getClassName()} />;
  }
}
