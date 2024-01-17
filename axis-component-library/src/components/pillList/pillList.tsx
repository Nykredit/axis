import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

export type PillOption = {
  id: string;
  label: string;
  disabled: boolean;
  icon?: string;
};

@Component({
  tag: 'nk-pill-list',
  styleUrl: 'pillList.css',
  shadow: true,
})
export class PillList implements BaseElement {
  componentName: string = 'PillList';
  @Prop() options: PillOption[] = [];
  @Prop() values: string[] = [];

  @Element() el: HTMLElement;
  @Event() pillChange: EventEmitter<string[]>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get pills() {
    return this.options.map(opt => ({
      icon: opt.icon,
      id: opt.id,
      label: opt.label,
      value: this.values.some(v => v === opt.id),
      disabled: opt.disabled,
      handler: evt => {
        evt.stopImmediatePropagation();
        const values = new Set(this.values);
        if (evt.detail.value) {
          values.add(opt.id);
        } else {
          values.delete(opt.id);
        }
        this.values = Array.from(values);
        this.pillChange.emit(this.values);
      },
    }));
  }

  render() {
    return (
      <Host>
        <div class="component">
          {this.pills.map(pill => (
            <nk-pill
              label={pill.label}
              key={pill.id}
              value={pill.value}
              disabled={pill.disabled}
              icon={pill.icon}
              onChange={pill.handler}
              data-root="false"
              /**TODO: Get from service */
              data-context={'Default'}
              data-brand={'Nykredit'}
            ></nk-pill>
          ))}
        </div>
      </Host>
    );
  }
}
