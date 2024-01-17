import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Icon',
  argTypes: {
    name: { description: 'The icon name' },
    size: {
      options: ['x-small', 'small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
  render: props => React.cloneElement(<nk-icon-system></nk-icon-system>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'search',
    size: 'large',
  },
};

export const XSmall: StoryObj = {
  name: 'Size x-small',
  args: {
    name: 'search',
    size: 'x-small',
  },
};

export const Small: StoryObj = {
  name: 'Size small',
  args: {
    name: 'search',
    size: 'small',
  },
};

export const Medium: StoryObj = {
  name: 'Size medium',
  args: {
    name: 'search',
    size: 'medium',
  },
};

export const Large: StoryObj = {
  name: 'Size large',
  args: {
    name: 'search',
    size: 'large',
  },
};
