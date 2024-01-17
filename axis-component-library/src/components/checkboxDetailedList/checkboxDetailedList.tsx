import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { Orientation } from '../../utils/propsTypes';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';
import { CheckboxDetailedProps } from '../checkboxDetailed/checkboxDetailed';
import { PillOption } from '../pillList/pillList';

export type CheckboxDetailedListVariant = 'pill' | 'default' | 'canvas' | 'checkbox';

@Component({
  tag: 'nk-checkbox-list',
  styleUrl: 'checkboxDetailedList.css',
  shadow: true,
})
export class CheckboxDetailedList implements BaseElement {
  componentName: string = 'CheckboxListInput';
  hasvalue = true;

  /**
   * Field label
   */
  @Prop() label: string;
  /**
   * available options
   */
  @Prop() options: CheckboxDetailedProps[] = [];
  /**
   * selected keys
   */
  @Prop() values: string[] = [];
  /**
   * Checkbox variant. Should we show the list as pills or checkboxes?
   */
  @Prop() variant: CheckboxDetailedListVariant = 'default';
  /**
   * Orientation of the checkbox list. Defaults to vertical
   */
  @Prop() orientation: Orientation = 'vertical';

  @Element() el: HTMLElement;
  @Event() valuesChanged: EventEmitter<string[]>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get checkboxOptions() {
    return this.options.map(opt => ({
      id: opt.id,
      label: opt.label,
      titlelabel: opt.titlelabel,
      value: this.values.some(v => v === opt.id),
      disabled: opt.disabled,
      handler: (evt: CustomEvent<boolean>) => {
        evt.stopImmediatePropagation();
        const values = new Set(this.values);
        if (values.has(opt.id)) {
          values.delete(opt.id);
        } else {
          values.add(opt.id);
        }
        this.valuesChanged.emit(Array.from(values));
      },
    }));
  }

  get themeConfig() {
    return BrandConfigObject.components?.CheckboxListInput;
  }

  get stackVariant(): string {
    if (this.orientation === 'vertical') {
      return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariantVertical;
    } else {
      return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariantHorizontal;
    }
  }

  get pillOptions(): PillOption[] {
    return this.options.map(opt => ({
      id: opt.id,
      label: opt.label,
      disabled: opt.disabled || false,
      icon: 'check',
    }));
  }

  render() {
    return (
      <Host>
        <nk-field-base label={this.label} has-value={this.hasvalue}>
          <div>
            {this.variant === 'pill' ? (
              <nk-pill-list values={this.values} options={this.pillOptions}></nk-pill-list>
            ) : (
              <nk-stack variant={this.stackVariant} orientation={this.orientation}>
                {this.checkboxOptions.map(checkbox => (
                  <div key={checkbox.id}>
                    <nk-checkbox-item
                      class="checkbox"
                      variant={this.variant}
                      label={checkbox.label}
                      value={checkbox.value}
                      titlelabel={checkbox.titlelabel}
                      onValueChanged={checkbox.handler}
                      disabled={checkbox.disabled}
                    ></nk-checkbox-item>
                  </div>
                ))}
              </nk-stack>
            )}
          </div>
        </nk-field-base>
      </Host>
    );
  }
}
