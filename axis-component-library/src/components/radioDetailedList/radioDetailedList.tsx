import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { Orientation } from '../../utils/propsTypes';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { RadioButtonWithLabelProps, RadioDetailed } from '../radioDetailed/radioDetailed';

@Component({
  tag: 'nk-radio-list',
  styleUrl: 'radioDetailedList.css',
  shadow: true,
})
export class RadioDetailedList implements BaseElement {
  componentName: string = 'RadioButtonListInput';

  /**
   * Orientation of the radio button list. Defaults to vertical
   */
  @Prop() orientation: Orientation = 'vertical';
  /**
   * The label to show above the list of radiobuttons
   */
  @Prop() label: string;
  /**
   * The name of the radiobutton group
   */
  @Prop() groupname: string;
  /**
   * The id of the currently chosen radiobutton
   */
  @Prop() value: string;

  @Prop() radiobuttons: RadioButtonWithLabelProps[] = [];

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<string>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get options(): RadioButtonWithLabelProps[] {
    return this.radiobuttons.map(rb => {
      return {
        variant: rb.variant || 'default',
        id: rb.id,
        label: rb.label,
        titlelabel: rb.titlelabel,
        disabled: rb.disabled,
        value: rb.id === this.value,
        name: rb.name,
      };
    });
  }

  get themeConfig() {
    return BrandConfigObject.components?.RadioButtonListInput;
  }

  get stackVariant(): string {
    if (this.orientation === 'vertical') {
      return this.themeConfig?.default?.components?.Stack?.targetVariantVertical;
    } else {
      return this.themeConfig?.default?.components?.Stack?.targetVariantHorizontal;
    }
  }

  handleChange = evt => {
    evt.stopImmediatePropagation();

    const val = (evt.target as RadioDetailed).buttonid;
    if (val === this.value) {
      return;
    }
    this.valueChanged.emit(val);
  };

  render() {
    return (
      <Host>
        <div class="component">
          <nk-label text={this.label} variant="field"></nk-label>
          <nk-stack variant={this.stackVariant} orientation={this.orientation}>
            {this.options.map(radioButton => (
              <nk-radio-item
                radioGroup={this.groupname}
                key={radioButton.id}
                buttonid={radioButton.id}
                label={radioButton.label}
                titlelabel={radioButton.titlelabel}
                name={radioButton.name}
                disabled={radioButton.disabled}
                value={radioButton.value}
                variant={radioButton.variant}
                onValueChanged={this.handleChange}
              />
            ))}
          </nk-stack>
        </div>
      </Host>
    );
  }
}
