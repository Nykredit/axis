import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/RadioDetailedList',
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'select',
      },
    },
    label: { description: 'The label above the list' },
    options: { description: 'The list of radio buttons' },
    value: { description: 'The selected radiobutton id' },
  },
  render: args => React.cloneElement(<nk-radio-list></nk-radio-list>, ...argHelper(args)),
};

export default meta;

export const Example: StoryObj = {
  name: 'Vertical',
  args: {
    orientation: 'vertical',
    label: 'Select an item',
    radiobuttons: [
      { id: 'one', titlelabel: 'Title', label: 'label' },
      { id: 'two', titlelabel: 'Title', label: 'label' },
    ],
    value: 'one',
  },
};

export const Horizontal: StoryObj = {
  args: {
    orientation: 'horizontal',
    label: 'Select an item',
    radiobuttons: [
      { id: 'one', titlelabel: 'Title', label: 'label' },
      { id: 'two', titlelabel: 'Title', label: 'label' },
    ],
    value: 'one',
  },
};
