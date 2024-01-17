import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Radio',
  argTypes: {
    value: { description: 'The value of this radiobutton', type: 'boolean' },
    disabled: { description: 'Is the radiobutton disabled?', type: 'boolean' },
    name: { description: 'The name of this radiobutton', type: 'string' },
  },
  render: props => React.cloneElement(<nk-radio></nk-radio>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    value: false,
    disabled: false,
    name: 'radio',
  },
};

export const Checked: StoryObj = {
  args: {
    value: true,
    disabled: false,
    name: 'radio',
  },
};

export const Disabled: StoryObj = {
  args: {
    value: false,
    disabled: true,
    name: 'radio',
  },
};

export const DisabledChecked: StoryObj = {
  name: 'Disabled and checked',
  args: {
    value: true,
    disabled: true,
    name: 'radio',
  },
};
