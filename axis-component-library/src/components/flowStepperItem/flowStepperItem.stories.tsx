import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/FlowStepperItem',
  argTypes: {
    id: { description: 'id of the item' },
    label: { description: 'label to be displayed when hover over item' },
    icon: { description: 'icon shown in the item' },
    isactive: { description: 'if the item is active', type: 'boolean' },
    iscompleted: { description: 'if the item is completed', type: 'boolean' },
    islastitem: { description: 'if the item is the last item', type: 'boolean' },
  },
  render: props => React.cloneElement(<nk-stepper-item></nk-stepper-item>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    id: '1',
    label: 'arrow left icon',
    icon: 'arrow-left',
    isactive: false,
    iscompleted: false,
    islastitem: false,
  },
};
