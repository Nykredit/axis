import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/DataDefinitionItem',
  argTypes: {
    variant: {
      options: ['default', 'emphasis-with-border', 'emphasis', 'regular'],
      control: {
        type: 'select',
      },
    },
    label: { description: 'The label displayed to the left' },
    value: { description: 'The value displayed to the right' },
  },
  render: props => React.cloneElement(<nk-table-item></nk-table-item>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: 'default',
    label: 'This is a paragraph',
    value: '1.000 kr.',
  },
};
