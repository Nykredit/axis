import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/FlowStepperList',
  argTypes: {
    steps: { description: 'Array of steps' },
    currentstep: { description: 'The current step' },
  },
  render: args => React.cloneElement(<nk-stepper-list></nk-stepper-list>, ...argHelper(args)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    steps: [
      {
        id: '1',
        label: 'arrow left icon',
        icon: 'arrow-left',
      },
      {
        id: '2',
        icon: 'arrow-right',
        label: 'step 2',
      },
      {
        id: '3',
        icon: 'arrow-download',
        label: 'step 3',
      },
      {
        id: '4',
        icon: 'arrow-growing',
        label: 'step 4',
      },
    ],
    currentstep: '2',
  },
};
