import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/SelectInput',
  argTypes: {
    value: { description: 'The description of this property' },
    options: {
      description: 'the options to show. Should be a list of value/label objects',
    },
    label: { description: 'label to display above the select element' },
  },
  render: props => React.cloneElement(<nk-select-input></nk-select-input>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    value: 'second',
    options: [
      { value: '', label: '' },
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' },
      { value: 'third', label: 'Third' },
    ],
    label: 'Chosen option',
    width: 20,
  },
};
