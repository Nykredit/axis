import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Label',
  argTypes: {
    text: { description: 'The text of the label' },
    variant: { description: 'The label variant' },
  },
  render: props => React.cloneElement(<nk-label></nk-label>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    text: 'This is a label',
    variant: 'field',
  },
};

export const ButtonField: StoryObj = {
  name: 'Button label',
  args: {
    text: 'This is a button label',
    variant: 'button',
  },
};

export const FieldLabel: StoryObj = {
  name: 'Field label',
  args: {
    text: 'This is a field label',
    variant: 'field',
  },
};

export const NavLabel: StoryObj = {
  name: 'Nav-button label',
  args: {
    text: 'This is a nav-button label',
    variant: 'nav-button',
  },
};

export const AmountXLabel: StoryObj = {
  name: 'Amount-xlarge label',
  args: {
    text: 'This is an amount-xlarge label',
    variant: 'amount-xlarge',
  },
};

export const AmountLargeLabel: StoryObj = {
  name: 'Amount-large label',
  args: {
    text: 'This is an amount-large label',
    variant: 'amount-large',
  },
};

export const AmountMediumLabel: StoryObj = {
  name: 'Amount-medium label',
  args: {
    text: 'This is an amount-medium label',
    variant: 'amount-medium',
  },
};
