import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-avatar',
  styleUrl: 'avatar.css',
  shadow: true,
})
export class Avatar implements BaseElement {
  componentName: string = 'Avatar';

  /**
   * The source/path to the image shown in the avatar
   */
  @Prop() src: string;
  /**
   * The icon to be shown if no image src is provided or image loading fails
   */
  @Prop() iconName: string = 'circle-10';

  @State() failedLoadSrc = false;

  @Element() el: HTMLElement;

  get showImg() {
    return this.src && !this.failedLoadSrc;
  }

  onImageLoadError() {
    this.failedLoadSrc = true;
  }

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  render() {
    return (
      <Host>
        <div class="component">
          {this.showImg ? (
            <img src={this.src} class="avatar" onError={this.onImageLoadError} />
          ) : (
            <nk-icon-system size="avatar" name={this.iconName} class="avatar"></nk-icon-system>
          )}
        </div>
      </Host>
    );
  }
}
