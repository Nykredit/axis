import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core';
import { AssistiveTextVariant } from '../../components';
import { BrandConfigObject } from '../../designConfigs/nykredit';
import { BaseElement, setDataProperty, setDefaultDataProperties } from '../../utils/setDataProperties';

export type InputBaseVariant = 'default' | 'material' | string;
export type InputBaseState = 'error' | 'default';

@Component({
  tag: 'nk-input-base',
  styleUrl: 'inputBase.css',
  shadow: true,
})
export class InputBase implements BaseElement {
  componentName: string = 'InputBase';

  constructor() {
    this.validChangedHandler = this.validChangedHandler.bind(this);
  }
  /**
   * The variant of the fieldBase element
   */
  @Prop() variant: InputBaseVariant = 'default';
  /**
   * Component state. Useful for signaling errors
   */
  @Prop() state: InputBaseState = 'default';
  /**
   * The label to render. This should be descriptive of the field
   */
  @Prop() label: string = '';
  /**
   * Assistive label which is placed below the input box
   */
  @Prop() labelassistive: string;
  /**
   * Determines if the label should be raised
   */
  @Prop() hasValue: boolean = false;
  /**
   * Width of the input field in "ch"
   */
  @Prop() width: number;

  @State() hasSlot = {
    leading: false,
    prefix: false,
    postfix: false,
    unnamed: false,
    trailing: false,
  };

  @Element() el: HTMLElement;

  @State() errorMessageInput: string | undefined = undefined;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }
  componentWillRender() {
    setDataProperty(this.el, 'data-variant', this.variant);
    setDataProperty(this.el, 'data-state', this.state);
  }

  get themeConfig() {
    return BrandConfigObject.components?.InputBase;
  }

  get displayAssistiveTextComponent(): boolean {
    return this.themeConfig?.[this.variant]?.components?.AssistiveText?.targetDisplay;
  }

  get labelVariant(): string {
    return this.themeConfig?.[this.variant]?.components?.Label?.targetVariant;
  }

  get stackVariantContainer(): string {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariantContainer;
  }

  get stackVariantField(): string {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariantField;
  }

  get inlineLabelStackVariant(): string {
    return this.themeConfig?.[this.variant]?.components?.Stack?.targetVariantInlineLabel;
  }

  get isDefault(): boolean {
    return this.variant === 'default';
  }

  get isError() {
    return this.state === 'error';
  }

  get labelAssistiveValue(): string {
    if (this.state === 'error') {
      return (this.errorMessageInput as string) || this.labelassistive;
    }

    return this.labelassistive;
  }

  /** toggles between variants for assistive text component
   */
  get assistiveTextVariant(): AssistiveTextVariant {
    return this.state === 'error' ? 'error' : 'info';
  }

  /** determines if there's a label or state = "error"
   */
  get shouldDisplayAssistiveText(): boolean {
    return !!(this.labelassistive || this.state === 'error');
  }

  get componentStyle() {
    return { width: this.width ? `${this.width}ch` : '100%' };
  }

  get wrapperClasses(): string {
    return ['wrapper', this.variant].join(' ');
  }

  get componentClasses(): string {
    return ['component', this.variant].join(' ');
  }

  handleClick = (evt: MouseEvent) => {
    if (evt.target === this.el.querySelector('.box')) {
      //Fun fact. Slot content is not owned by the shadow dom and therefore we need to use this.querySelector to get the input field in the unnamed slot, instead of through the template
      const elem = this.el.querySelector('*:not([slot])') as HTMLElement;

      try {
        if (elem) {
          elem.focus();
        }
      } catch (e) {
        console.error(`Error caught in ${this.constructor.name}`, e.toString());
      }
    }
  };

  get opacityStyle(): string {
    return `opacity: ${this.hasValue ? 1 : 0}`;
  }

  /**
   * Change label state if nested input has changed content
   */
  handleValueChange = evt => {
    /** The Salesforce Synthetic Shadow DOM does not filter {composed:false} events, so they might be leaking   */
    if (!evt.detail) {
      return;
    }
    this.hasValue = !!evt.detail.value;
    this.state = 'default';
  };

  get icon() {
    const conf = this.themeConfig?.[this.variant]?.components?.Icon;
    return {
      name: conf?.targetName || 'remove',
      color: conf?.targetColor || undefined,
      size: conf?.targetSize || 'avatar',
      variant: conf?.targetVariant || undefined,
    };
  }

  handleSlotChange = (evt: any) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    const slot = path[0];
    this.hasSlot[slot.name || 'unnamed'] = slot.assignedNodes().length > 0;
  };

  @Listen('validChanged')
  validChangedHandler(evt: CustomEvent) {
    if (evt.detail.isValid) {
      this.state = 'default';
      this.errorMessageInput = undefined;
    } else {
      this.errorMessageInput = evt.detail?.message;
      this.state = 'error';
    }
  }

  render() {
    return (
      <Host>
        {this.isDefault ? (
          <div class="component" style={this.componentStyle} onChange={this.handleValueChange}>
            <nk-stack orientation="horizontal" variant={this.stackVariantContainer}>
              <nk-field-base label={this.label} labelassistive={this.labelAssistiveValue} variant={this.variant}>
                <div class="box">
                  <slot name="leading" data-active={this.hasSlot.leading} onSlotchange={this.handleSlotChange}></slot>
                  <nk-stack orientation="horizontal" variant={this.stackVariantField} class="content-box" alignment="center" wrap="nowrap">
                    <slot name="prefix" data-active={this.hasSlot.prefix} onSlotchange={this.handleSlotChange}></slot>
                    <slot onSlotchange={this.handleSlotChange} data-active={this.hasSlot.unnamed}></slot>
                    <slot name="postfix" data-active={this.hasSlot.postfix} onSlotchange={this.handleSlotChange}></slot>
                  </nk-stack>
                  {this.isError ? (
                    <nk-icon-system class="error" name={this.icon.name} variant={this.icon.variant} size={this.icon.size} color={this.icon.color}></nk-icon-system>
                  ) : (
                    <slot name="trailing" data-active={this.hasSlot.trailing} onSlotchange={this.handleSlotChange}></slot>
                  )}
                </div>
              </nk-field-base>
              {this.displayAssistiveTextComponent && this.shouldDisplayAssistiveText ? (
                <div>
                  <nk-assistive-text key={this.labelAssistiveValue} label={this.labelAssistiveValue} variant={this.assistiveTextVariant}></nk-assistive-text>
                </div>
              ) : null}
              {!this.displayAssistiveTextComponent && this.labelAssistiveValue ? (
                <nk-layout-split key={this.labelAssistiveValue}>
                  <nk-label slot="left" text={this.labelAssistiveValue} variant={this.labelVariant}></nk-label>
                  <div slot="right"></div>
                </nk-layout-split>
              ) : null}
            </nk-stack>
          </div>
        ) : (
          <div class="component" style={this.componentStyle} onChange={this.handleValueChange} onClick={this.handleClick}>
            <nk-stack orientation="horizontal" variant={this.stackVariantContainer}>
              <nk-field-base labelassistive={this.labelAssistiveValue} variant={this.variant}>
                <div class="box">
                  <slot name="leading" data-active={this.hasSlot.leading} onSlotchange={this.handleSlotChange}></slot>
                  <nk-stack orientation="vertical" variant={this.inlineLabelStackVariant} class="content-stack padding-y">
                    <nk-label variant={this.labelVariant} text={this.label}></nk-label>
                    <nk-stack orientation="horizontal" variant="close" class="content-box" wrap="nowrap" alignment="center" data-hasvalue={this.hasValue}>
                      <slot name="prefix" data-active={this.hasSlot.prefix} onSlotchange={this.handleSlotChange}></slot>
                      <slot onSlotchange={this.handleSlotChange} data-active={this.hasSlot.unnamed}></slot>
                      <slot name="postfix" data-active={this.hasSlot.postfix} onSlotchange={this.handleSlotChange}></slot>
                    </nk-stack>
                  </nk-stack>
                  {this.isError ? (
                    <nk-icon-system class="error" name="exclamation-circle" size="small"></nk-icon-system>
                  ) : (
                    <slot name="trailing" data-active={this.hasSlot.trailing} onSlotchange={this.handleSlotChange}></slot>
                  )}
                </div>
              </nk-field-base>
              {this.displayAssistiveTextComponent && this.shouldDisplayAssistiveText ? (
                <nk-assistive-text key={this.labelAssistiveValue} label={this.labelAssistiveValue} variant={this.assistiveTextVariant}></nk-assistive-text>
              ) : null}
              {!this.displayAssistiveTextComponent && this.labelAssistiveValue ? (
                <nk-layout-split key={this.labelAssistiveValue}>
                  <nk-label slot="left" text={this.labelAssistiveValue} variant={this.labelVariant}></nk-label>
                  <div slot="right"></div>
                </nk-layout-split>
              ) : null}
            </nk-stack>
          </div>
        )}
      </Host>
    );
  }
}
