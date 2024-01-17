import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/CheckboxDetailed',
  argTypes: {
    variant: {
      options: ['default', 'plain'],
      control: {
        type: 'select',
      },
    },
    value: { description: 'The value of this checkbox', type: 'boolean' },
    disabled: { description: 'Is the checkbox disabled?', type: 'boolean' },
    titlelabel: { description: 'Checkbox title text' },
    label: { description: 'Checkbox text', type: 'string' },
  },
  render: props => React.cloneElement(<nk-checkbox-item></nk-checkbox-item>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  name: 'Checkbox detailed default',
  args: {
    value: false,
    disabled: false,
    label: 'I accept the terms and conditions that apply',
    titlelabel: 'Terms and conditions',
    variant: 'default',
  },
};

export const Plain: StoryObj = {
  name: 'Checkbox detailed plain',
  args: {
    value: false,
    disabled: false,
    label: 'I accept the terms and conditions that apply',
    titlelabel: 'Terms and conditions',
    variant: 'plain',
  },
};
