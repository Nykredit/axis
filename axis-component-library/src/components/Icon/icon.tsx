import { Component, Element, Host, Prop, h } from '@stencil/core';
import { DO_NOT_REFERENCE_NYKREDIT_SOLID } from '../../Icons';
import { DO_NOT_REFERENCE_NYKREDIT_LEGACY } from '../../Icons/nykreditLegacy';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type IconSize = 'large' | 'medium' | 'small' | 'xsmall' | string;
type Coloring = 'stroke' | 'fill' | 'both' | 'none';

@Component({
  tag: `nk-icon-system`,
  styleUrl: 'icon.css',
  shadow: true,
})
export class Icon implements BaseElement {
  componentName: string = 'Icon';

  /**
   * The name of the icon, e.g. 'add', 'remove', 'lock'
   */
  @Prop() name: string;
  /**
   * Icon variant determining color and size
   */
  @Prop() variant: string;
  /**
   * The size category of the icon
   */
  @Prop() size: IconSize;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
    setDataProperty(this.el, `data-size`, this.size);
    setDataProperty(this.el, `data-icon`, this.name);
  }

  componentDidRender() {
    this.addIcon();
  }

  private get coloring(): Coloring {
    if (
      [
        'lock',
        'add',
        'remove',
        'i-add',
        'i-delete',
        'menu-4',
        'menu-8',
        'circle-10',
        'video-camera',
        'none',
        'home',
        'user',
        'hand-shake',
        'remove-circle',
        'remove',
        'user-home',
      ].includes(this.name)
    ) {
      return 'stroke';
    }
    if (['check', 'arrow-right', 'arrow-left', 'phone', 'chevron-right', 'calendar-blank'].includes(this.name)) {
      return 'fill';
    }
    if (['check-small'].includes(this.name)) {
      return 'both';
    }
    return 'fill';
  }

  private className(): string {
    return ['component', this.coloring].join(' ');
  }

  addIcon() {
    if (!this.el) {
      return null;
    }

    const elem = this.el.shadowRoot.querySelector('div');

    if (!elem) {
      return null;
    }

    elem.innerHTML = getIcon(this.name);
  }

  render() {
    return (
      <Host>
        <div class={this.className()}></div>
      </Host>
    );
  }
}

function getIcon(iconName: string): string | null {
  return nykreditIcons.hasOwnProperty(iconName) ? nykreditIcons[iconName] : null;
}

const nykreditIcons = Object.assign({}, DO_NOT_REFERENCE_NYKREDIT_SOLID, DO_NOT_REFERENCE_NYKREDIT_LEGACY);
