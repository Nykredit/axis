import { Component, Element, Prop, h } from '@stencil/core';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

@Component({
  tag: 'nk-unstyled-button',
  styleUrl: 'unstyledButton.css',
  shadow: true,
})
export class UnstyledButton implements BaseElement {
  componentName: string = 'UnstyledButton';

  @Prop() inline: boolean;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get style() {
    return { display: this.inline ? 'inline' : 'block' };
  }

  handleFocus = () => {
    setDataProperty(this.el, 'data-state', 'Focus');
  };

  handleBlur = () => {
    setDataProperty(this.el, 'data-state', 'Default');
  };

  handlemousedown = () => {
    setDataProperty(this.el, 'data-state', 'Active');
  };

  handleClick = () => {
    setDataProperty(this.el, 'data-state', 'Default');
  };

  render() {
    return (
      <button class="component" style={this.style} onFocus={this.handleFocus} onBlur={this.handleBlur} onMouseDown={this.handlemousedown} onClick={this.handleClick}>
        <slot></slot>
      </button>
    );
  }
}
