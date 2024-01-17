import { Component, Element, Host, Prop, h } from '@stencil/core';
import { BaseElement, setDefaultDataProperties } from '../../utils/setDataProperties';
import { StepProps } from '../flowStepperItem';

@Component({
  tag: 'nk-stepper-list',
  styleUrl: 'flowStepperList.css',
  shadow: true,
})
export class FlowStepperList implements BaseElement {
  componentName: string = 'flowStepperList';

  /**
   * List of steps
   */
  @Prop() steps: StepProps[];
  /**
   * The current step of the steps
   */
  @Prop() currentstep: string = '';

  @Element() el: HTMLElement;

  componentWillLoad() {
    setDefaultDataProperties(this);
  }

  get mapSteps(): StepProps[] {
    const selectedIndex = this.steps.findIndex(step => this.currentstep === step.id);
    return this.steps.map((step, index) => ({
      ...step,
      id: index.toString(),
      isactive: this.currentstep === step.id,
      iscompleted: selectedIndex > index,
      islastitem: this.steps.length === index + 1,
      class: index < this.steps.length - 1 ? 'flex-1' : '',
    }));
  }

  render() {
    return (
      <Host>
        <nk-stack variant="spacing-none" orientation="horizontal">
          {this.mapSteps.map(step => (
            <nk-stepper-item {...step} key={step.id} class={step.class} />
          ))}
        </nk-stack>
      </Host>
    );
  }
}
