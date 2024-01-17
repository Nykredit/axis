import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/TagStack',
  argTypes: {
    variant: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
    tags: { description: 'Stack of tags' },
  },
  render: props => React.cloneElement(<nk-tag-list></nk-tag-list>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  name: 'Horizontal',
  args: {
    variant: 'horizontal',
    tags: [
      {
        variant: 'with-icon',
        icon: 'arrow-left',
        text: '4 sæder',
      },
      {
        variant: 'default',
        icon: '',
        text: '4 sæder',
      },
    ],
  },
};

export const Vertical: StoryObj = {
  name: 'Vertical',
  args: {
    variant: 'vertical',
    tags: [
      {
        variant: 'with-icon',
        icon: 'arrow-left',
        text: '4 sæder',
      },
      {
        variant: 'default',
        icon: '',
        text: '4 sæder',
      },
    ],
  },
};
