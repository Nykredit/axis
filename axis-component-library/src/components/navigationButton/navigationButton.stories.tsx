import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/NavigationButton',
  render: props => React.cloneElement(<nk-button-nav></nk-button-nav>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    iconname: 'check',
  },
};

export const IconOnly: StoryObj = {
  name: 'Icon Only Variant',
  args: {
    label: 'Label',
    variant: 'icon-only',
    iconname: 'check',
  },
};
