import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/TextInput',
  argTypes: {
    label: { description: 'The label displayed above the input field' },
    value: { description: 'The value of the input' },
    variant: {
      options: ['default', 'inline'],
      control: {
        type: 'select',
      },
    },
    issearchable: { description: 'Determines if the text input is used a search input.' },
    width: { description: "Width of the field in 'ch'" },
    disabled: { description: 'Determines if the text field is read only' },
    maxLength: { description: 'Max length of the input string' },
  },
  render: props => React.cloneElement(<nk-text-input></nk-text-input>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    value: 'Some input value',
    width: 40,
    maxLength: 120,
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Label',
    value: 'Some input value',
    width: 40,
    maxLength: 120,
    disabled: true,
  },
};

export const Inline: StoryObj = {
  args: {
    label: 'Label',
    value: 'Some input value',
    width: 40,
    maxLength: 120,
    variant: 'inline',
  },
};
