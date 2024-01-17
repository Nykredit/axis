import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type RadioDetailedVariant = 'default';
export type RadioButtonWithLabelProps<V extends string = RadioDetailedVariant> = {
  variant: V;
  id?: string;
  buttonid?: string;
  titlelabel?: string;
  label: string;
  disabled?: boolean;
  hideinput?: boolean;
  name?: string;
  value: boolean;
};

@Component({
  tag: 'nk-radio-item',
  styleUrl: 'radioDetailed.css',
  shadow: true,
})
export class RadioDetailed implements BaseElement, RadioButtonWithLabelProps {
  componentName: string = 'RadioButtonWithLabel';

  /**
   * The variant of the radiobutton with label component
   */
  @Prop() variant: RadioDetailedVariant = 'default';
  /**
   * Determines if the radio button is disabled
   */
  @Prop() disabled: boolean = false;
  /**
   * The emphasized text above the label
   */
  @Prop() titlelabel: string;
  /**
   * The label shown next to the radio button
   */
  @Prop() label: string;
  /**
   * The value of the radio button
   */
  @Prop() value: boolean;
  /**
   * Name of the radiobutton
   */
  @Prop() name: string;
  /**
   * The id of the radiobutton
   */
  @Prop() buttonid: string;
  /**
   * Boolean to tell if input should be displayed in DOM or not
   */
  @Prop() hideinput: boolean;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<boolean>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWilRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get stackAlignment() {
    return this.titlelabel ? 'start' : 'center';
  }

  get themeConfig() {
    return BrandConfigObject.components?.RadioButtonWithLabel;
  }

  get elevationVariant() {
    return this.themeConfig[this.variant]?.components?.Elevation?.targetVariant;
  }

  get stackVariantContainer() {
    return this.themeConfig[this.variant]?.components?.Stack?.targetVariant;
  }

  get stackVariantParagraph() {
    return this.themeConfig[this.variant]?.components?.Stack?.targetVariantParagraph;
  }

  get titleParagraphVariant() {
    return this.themeConfig[this.variant]?.components?.Paragraph?.targetTitleParagraph;
  }

  get bodyParagraphVariant() {
    return this.themeConfig[this.variant]?.components?.Paragraph?.targetBodyParagraph;
  }

  get stackVariantInput() {
    return this.themeConfig[this.variant]?.components?.Stack?.targetVariantInput;
  }

  get stackAlignmentInput() {
    return this.themeConfig[this.variant]?.components?.Stack?.targetAlignmentInput;
  }

  /**
   * handles click event on the radiobutton label
   * @param {MouseEvent} evt - the click event
   */
  handleClick = (evt: MouseEvent) => {
    evt.stopImmediatePropagation();
    if (this.disabled) {
      return;
    }
    this.valueChanged.emit(!this.value);
  };

  render() {
    return (
      <Host>
        <label class="component" onChange={this.handleClick}>
          <nk-box variant={this.elevationVariant}>
            <nk-stack variant={this.stackVariantContainer} orientation="horizontal" alignment={this.stackAlignment} wrap="nowrap">
              <nk-stack variant={this.stackVariantInput} orientation="vertical" alignment={this.stackAlignmentInput} class="stack-input">
                <nk-radio data-radiobutton value={this.value} disabled={this.disabled} name={this.name} hideinput={this.hideinput} />
              </nk-stack>
              <nk-stack variant={this.stackVariantParagraph} orientation="vertical">
                {this.titlelabel ? <nk-paragraph variant={this.titleParagraphVariant} text={this.titlelabel}></nk-paragraph> : null}
                <nk-paragraph data-paragraph variant={this.bodyParagraphVariant} text={this.label}></nk-paragraph>
              </nk-stack>
            </nk-stack>
          </nk-box>
        </label>
      </Host>
    );
  }
}
