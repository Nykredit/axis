import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/CheckboxDetailedList',
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'select',
      },
    },
    label: { description: 'The label above the list' },
    options: { description: 'The list of checkboxes' },
    values: { description: 'The list with selected checkbox ids' },
  },
  render: props => React.cloneElement(<nk-checkbox-list></nk-checkbox-list>, ...argHelper(props)),
};

export default meta;

export const Vertical: StoryObj = {
  args: {
    orientation: 'vertical',
    label: 'Select some checkboxes',
    options: [
      { id: 'one', titlelabel: 'Title', label: 'One' },
      { id: 'two', titlelabel: 'Title', label: 'Two' },
    ],
    values: ['one'],
  },
};

export const Horizontal: StoryObj = {
  args: {
    orientation: 'horizontal',
    label: 'Select some checkboxes',
    options: [
      { id: 'one', titlelabel: 'Title', label: 'One' },
      { id: 'two', titlelabel: 'Title', label: 'Two' },
    ],
    values: ['one'],
  },
};
