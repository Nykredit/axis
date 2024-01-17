import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';
import { Placeholder } from '../../utils/placeholder';

const meta: Meta = {
  title: 'SOLID/Divider',
  argTypes: {
    orientation: { description: 'The label variant' },
  },
  render: props => React.cloneElement(<nk-divider></nk-divider>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: StoryObj = {
  args: {
    orientation: 'horizontal',
    variant: 'related',
    justification: 'space-between',
    children: [<Placeholder />, <nk-divider orientation="vertical"></nk-divider>, <Placeholder />],
  },
  render: props => <nk-stack {...props} />,
};
