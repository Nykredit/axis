import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-loader',
  styleUrl: 'loadingBar.css',
  shadow: true,
})
export class LoadingBar implements BaseElement {
  componentName: string = 'LoadingBar';
  /**
   * Text displayed below the loading bar
   */
  @Prop() text: string = '';
  /**
   * How far the loading is
   */
  @Prop() percentage: number = 0;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  render() {
    return (
      <Host>
        <nk-stack orientation="vertical" alignment="center" variant="spacing-medium">
          <progress max="100" value={this.percentage}></progress>
          {this.text ? <nk-paragraph variant="assistive" unsafe={true} text={this.text} alignment="center"></nk-paragraph> : null}
        </nk-stack>
      </Host>
    );
  }
}
