import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/EmailInput',
  argTypes: {
    label: { description: 'The label displayed above the input field' },
    value: { description: 'The value of the input' },
    variant: {
      options: ['default', 'inline'],
      control: {
        type: 'select',
      },
    },
    width: { description: "Width of the field in 'ch'" },
    maxLength: { description: 'Max length of the input string' },
    labelassistive: { description: 'custom label to display under input' },
  },
  render: props => React.cloneElement(<nk-email-input></nk-email-input>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    value: 'my.email@andmoney.dk',
    width: 40,
    maxLength: 120,
  },
};

export const Default: StoryObj = {
  args: {
    label: 'Label',
    value: 'my.email@andmoney.dk',
    width: 40,
    maxLength: 120,
    variant: 'default',
    labelassistive: 'This is your primary email address',
  },
};

export const Inline: StoryObj = {
  args: {
    label: 'Label',
    value: 'my.email@andmoney.dk',
    width: 40,
    maxLength: 120,
    variant: 'inline',
  },
};
