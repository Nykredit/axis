import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Checkbox',
  argTypes: {
    value: { description: 'The value of this checkbox', type: 'boolean' },
    disabled: { description: 'Is the checkbox disabled?', type: 'boolean' },
  },
  render: props => React.cloneElement(<nk-checkbox></nk-checkbox>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    value: false,
    disabled: false,
  },
};

export const DisabledFalse: StoryObj = {
  name: 'Disabled false',
  args: {
    value: false,
    disabled: true,
  },
};

export const DisabledTrue: StoryObj = {
  name: 'Disabled true',
  args: {
    value: true,
    disabled: true,
  },
};
