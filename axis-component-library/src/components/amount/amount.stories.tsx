import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Amount',
  argTypes: {
    variant: {
      options: ['large', 'medium', 'x-small'],
      control: { type: 'select' },
    },
    text: { description: 'The label above the price' },
    price: { description: 'The price' },
    rate: { description: 'The rate for the price' },
    alignment: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
  },
  render: props => React.cloneElement(<nk-amount></nk-amount>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    variant: 'x-large',
    text: 'label variant text above price and rate',
    price: '1.000',
    rate: 'kr/md',
    alignment: 'left',
  },
};

export const XLarge: StoryObj = {
  name: 'x-large',
  args: {
    variant: 'x-large',
    text: 'label variant',
    price: '1.000',
    rate: 'kr/md',
    alignment: 'left',
  },
};

export const Medium: StoryObj = {
  name: 'medium',
  args: {
    variant: 'medium',
    text: 'label variant',
    price: '1.000',
    rate: 'kr/md',
    alignment: 'left',
  },
};

export const XSmall: StoryObj = {
  name: 'x-small',
  args: {
    variant: 'x-small',
    text: 'label variant',
    price: '1.000',
    rate: 'kr/md',
    alignment: 'left',
  },
};

export const AlignRight: StoryObj = {
  name: 'alignment-right',
  args: {
    variant: 'large',
    text: 'label variant',
    price: '1.000',
    rate: 'kr/md',
    alignment: 'right',
  },
};

export const WithoutLabel: StoryObj = {
  name: 'without label',
  args: {
    variant: 'x-large',
    text: '',
    price: '1.000',
    rate: 'kr/md',
    alignment: 'right',
  },
};
