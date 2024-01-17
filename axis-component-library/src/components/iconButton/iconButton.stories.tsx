import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/IconButton',
  argTypes: {
    icon: { description: 'The name of an icon' },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'outline'],
      control: {
        type: 'select',
      },
    },
  },
  render: props => React.cloneElement(<nk-button-icon></nk-button-icon>, ...argHelper(props)),
};

export default meta;

export const Add: StoryObj = {
  name: 'Add',
  args: {
    icon: 'i-add',
    title: 'Title',
  },
};

export const Primary: StoryObj = {
  name: 'Primary button',
  args: {
    icon: 'i-add',
    variant: 'primary',
    title: 'Title',
  },
};

export const PrimaryDisabled: StoryObj = {
  name: 'Disabled Primary button',
  args: {
    icon: 'i-add',
    variant: 'primary',
    title: 'Title',
    disabled: true,
  },
};

export const Secondary: StoryObj = {
  name: 'Secondary button',
  args: {
    icon: 'i-add',
    variant: 'secondary',
    title: 'Title',
  },
};

export const SecondaryDisabled: StoryObj = {
  name: 'Disabled Secondary button',
  args: {
    icon: 'i-add',
    variant: 'secondary',
    title: 'Title',
    disabled: true,
  },
};

export const Tertiary: StoryObj = {
  name: 'Tertiary button',
  args: {
    icon: 'i-add',
    variant: 'tertiary',
    title: 'Title',
  },
};

export const TertiaryDisabled: StoryObj = {
  name: 'Disabled Tertiary button',
  args: {
    icon: 'i-add',
    variant: 'tertiary',
    title: 'Title',
    disabled: true,
  },
};

export const Outline: StoryObj = {
  name: 'Outline button',
  args: {
    icon: 'i-add',
    variant: 'outline',
    title: 'Title',
  },
};

export const OutlineDisabled: StoryObj = {
  name: 'Disabled Outline button',
  args: {
    icon: 'i-add',
    variant: 'outline',
    title: 'Title',
  },
};
