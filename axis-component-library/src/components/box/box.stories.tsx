import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Box',
  argTypes: {
    variant: {
      options: ['none', 'flat', 'inherit', 'raised'],
      control: {
        type: 'select',
      },
    },
  },
  render: props => React.cloneElement(<nk-box></nk-box>, ...argHelper(props)),
};

export default meta;

export const None: StoryObj = {
  args: {
    variant: 'none',
    children: [<nk-label text="This is a box" key="1"></nk-label>],
  },
};

export const Flat: StoryObj = {
  args: {
    variant: 'flat',
    children: [<nk-label text="This is a box" key="1"></nk-label>],
  },
};

export const Inherit: StoryObj = {
  args: {
    variant: 'inherit',
    children: [<nk-label text="This is a box" key="1"></nk-label>],
  },
};

export const Raised: StoryObj = {
  args: {
    variant: 'raised',
    children: [<nk-label text="This is a box" key="1"></nk-label>],
  },
};
