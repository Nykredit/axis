import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/RadioDetailed',
  argTypes: {
    variant: {
      options: ['default', 'plain'],
      control: {
        type: 'select',
      },
    },
    value: { description: 'The value of this radiobutton', type: 'boolean' },
    disabled: { description: 'Is the radiobutton disabled?', type: 'boolean' },
    titlelabel: { description: 'The title of the radiobutton', type: 'string' },
    label: { description: 'The label of the radiobutton', type: 'string' },
    name: { description: 'The name of the radiobutton', type: 'string' },
  },
  render: props => React.cloneElement(<nk-radio-item></nk-radio-item>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  name: 'Radio detailed default',
  args: {
    variant: 'default',
    value: false,
    name: 'radio',
    titlelabel: 'This is the title of the label',
    label: 'This is a radio button',
  },
};

export const Plain: StoryObj = {
  name: 'Radio detailed plain',
  args: {
    variant: 'plain',
    value: false,
    name: 'radio',
    titlelabel: 'This is the title of the label',
    label: 'This is a radio button',
  },
};
