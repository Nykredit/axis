import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type CheckboxDetailedVariant = 'default' | 'canvas' | string;

export type CheckboxDetailedProps<V extends string = CheckboxDetailedVariant> = {
  id: string;
  variant: V;
  label: string;
  titlelabel?: string;
  disabled?: boolean;
  hideinput?: boolean;
};

@Component({
  tag: 'nk-checkbox-item',
  styleUrl: 'checkboxDetailed.css',
  shadow: true,
})
export class CheckboxDetailed implements BaseElement {
  componentName: string = 'CheckboxWithLabel';

  /**
   * The value of the checkbox. True if checked, false if unchecked.
   */
  @Prop() value: boolean = false;
  /**
   * Is this checkbox disabled?
   */
  @Prop() disabled: boolean = false;
  /**
   * Label of the checkbox
   */
  @Prop() label: string = '';

  /**
   * The emphasized text above the label
   */
  @Prop() titlelabel: string = '';

  /**
   * The variant of the checkbox
   */
  @Prop() variant: CheckboxDetailedVariant = 'default';
  /**
   * Boolean to tell if input should be displayed in DOM or not
   */
  @Prop() hideinput: boolean = false;

  @Element() el: HTMLElement;
  @Event() valueChanged: EventEmitter<boolean>;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
  }

  get isCanvasCheckbox() {
    return this.variant === 'canvas';
  }

  get themeConfig() {
    return BrandConfigObject.components?.CheckboxWithLabel;
  }

  get elevationVariant() {
    return this.themeConfig?.[this.variant]?.components?.Elevation?.targetVariant;
  }

  get canvasButtonVariant() {
    return this.themeConfig?.[this.variant]?.components?.CanvasButton?.targetVariant;
  }

  get stackVariantContainer() {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariant;
  }

  get stackVariantParagraph() {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariantParagraph;
  }

  get titleParagraphVariant() {
    return this.themeConfig?.[this.variant]?.components?.Paragraph?.targetTitleParagraph;
  }

  get bodyParagraphVariant() {
    return this.themeConfig?.[this.variant]?.components?.Paragraph?.targetBodyParagraph;
  }

  get stackVariantInput() {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariantInput;
  }

  get stackAlignmentInput() {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetAlignmentInput;
  }

  get stackAlignment() {
    return this.titlelabel ? 'start' : 'center';
  }

  handleClick = (evt: MouseEvent) => {
    if (!this.disabled) {
      evt.preventDefault();
      this.valueChanged.emit(!this.value);
    }
  };

  render() {
    return (
      <Host>
        {this.isCanvasCheckbox ? (
          <label class="component" onClick={this.handleClick}>
            <nk-canvas-button disabled={this.disabled} alignment="left" isactive={this.value} variant={this.canvasButtonVariant}>
              <nk-checkbox slot="leading" data-checkbox value={this.value} disabled={this.disabled} hideinput={this.hideinput}></nk-checkbox>
              <nk-stack variant={this.stackVariantParagraph} orientation="vertical">
                {this.titlelabel ? <nk-paragraph variant={this.titleParagraphVariant} text={this.titlelabel}></nk-paragraph> : null}
                <nk-paragraph data-paragraph variant={this.bodyParagraphVariant} text={this.label}></nk-paragraph>
              </nk-stack>
            </nk-canvas-button>
          </label>
        ) : (
          <nk-elevation variant={this.elevationVariant}>
            <label class="component" onClick={this.handleClick}>
              <nk-stack variant={this.stackVariantContainer} orientation="horizontal" alignment={this.stackAlignment} wrap="nowrap">
                <nk-stack variant={this.stackVariantInput} orientation="vertical" alignment={this.stackAlignmentInput} class="stack-input">
                  <nk-checkbox data-checkbox value={this.value} disabled={this.disabled} hideinput={this.hideinput}></nk-checkbox>
                </nk-stack>
                <nk-stack variant={this.stackVariantParagraph} orientation="vertical">
                  {this.titlelabel ? <nk-paragraph variant={this.titleParagraphVariant} text={this.titlelabel}></nk-paragraph> : null}
                  <nk-paragraph data-paragraph variant={this.bodyParagraphVariant} text={this.label}></nk-paragraph>
                </nk-stack>
              </nk-stack>
            </label>
          </nk-elevation>
        )}
      </Host>
    );
  }
}
