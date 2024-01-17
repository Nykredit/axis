import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';

export type StepProps = {
  id: string;
  icon: string;
  label: string;
  isactive: boolean;
  iscompleted: boolean;
  lastitem?: boolean;
  class?: string;
};

@Component({
  tag: 'nk-stepper-item',
  styleUrl: 'flowStepperItem.css',
  shadow: true,
})
export class FlowStepperItem implements BaseElement {
  componentName: string = 'FlowStepperItem';

  /**
   * Id of the item
   */
  @Prop() stepperId: string = '';
  /**
   * Icon of the bar
   */
  @Prop() icon: string = '';
  /**
   * Label used for title on bar
   */
  @Prop() label: string = '';
  /**
   * If bar is active
   */
  @Prop() isactive: boolean = false;
  /**
   * If bar is completed
   */
  @Prop() iscompleted: boolean = false;
  /**
   * Is it the last item in the steps
   */
  @Prop() islastitem: boolean = false;

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get className() {
    if (this.isactive) {
      return 'is-active';
    }

    if (this.iscompleted) {
      return 'is-completed';
    }
  }

  render() {
    return (
      <Host>
        <nk-stack variant="spacing-none" orientation="horizontal" alignment="center" wrap="nowrap" class={this.className}>
          <nk-box variant="flat" class="box">
            <div class="center">
              <nk-icon-system size="small" name={this.icon}></nk-icon-system>
            </div>
          </nk-box>
          {!this.islastitem ? <nk-divider orientation="horizontal" class="divider"></nk-divider> : null}
        </nk-stack>
      </Host>
    );
  }
}
