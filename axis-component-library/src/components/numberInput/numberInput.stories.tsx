import { h } from '@stencil/core';
import { StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta = {
  title: 'SOLID/NumberInput',
  argTypes: {
    label: 'The label displayed above the input field',
    value: { description: 'The description of this property' },
  },
  render: props => React.cloneElement(<nk-number-input></nk-number-input>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    value: '42',
    width: 20,
    min: 0,
    max: 60,
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Label',
    value: '65',
    width: 30,
    maxLength: 15,
    disabled: true,
  },
};
