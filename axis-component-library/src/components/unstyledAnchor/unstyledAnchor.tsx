import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'nk-unstyled-anchor',
  styleUrl: 'unstyledAnchor.css',
  shadow: true,
})
export class UnstyledAnchor {
  componentName: string = 'UnstyledAnchor';
  /**
   * href
   */
  @Prop() href: string;
  /**
   * target
   */
  @Prop() target: 'blank' | undefined;
  /**
   * Determine if the anchor is an inline element or block;
   */
  @Prop() inline: boolean;

  get style() {
    return { display: `${this.inline ? 'inline' : 'block'}` };
  }

  render() {
    return (
      <Host>
        <a href={this.href} target={this.target} class="component" style={this.style}>
          <slot></slot>
        </a>
      </Host>
    );
  }
}
