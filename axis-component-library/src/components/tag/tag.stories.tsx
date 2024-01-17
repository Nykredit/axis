import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Tag',
  argTypes: {
    variant: {
      options: ['default', 'with-icon'],
      control: {
        type: 'select',
      },
    },
    icon: { description: 'Icon name to be displayed' },
    text: { description: 'Text to be displayed' },
  },
  render: props => React.cloneElement(<nk-tag></nk-tag>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    text: 'text button',
  },
};

export const WithIcon: StoryObj = {
  name: 'with-icon',
  args: { variant: 'with-icon', icon: 'arrow-left', text: 'text button' },
};
