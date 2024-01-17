import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Button',
  argTypes: {
    label: { description: 'The text inside button' },
  },
  render: props => React.cloneElement(<nk-button-text></nk-button-text>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: 'filled',
    label: 'Click me!',
  },
};

export const Filled: StoryObj = {
  args: {
    label: 'Gem',
    trailingicon: 'arrow-right',
    variant: 'filled',
  },
};

export const FilledDisabled: StoryObj = {
  args: {
    label: 'Gem',
    variant: 'filled',
    disabled: true,
  },
};

export const Neutral: StoryObj = {
  args: {
    label: 'Tilbage',
    variant: 'neutral',
  },
};

export const NeutralDisabled: StoryObj = {
  args: {
    label: 'Tilbage',
    variant: 'neutral',
    disabled: true,
  },
};

export const Outline: StoryObj = {
  args: {
    label: 'Annuller',
    variant: 'outline',
  },
};

export const OutlineDisabled: StoryObj = {
  args: {
    label: 'Annuller',
    variant: 'outline',
    disabled: true,
  },
};

export const Ghost: StoryObj = {
  args: {
    label: 'Annuller',
    variant: 'ghost',
  },
};

export const GhostDisabled: StoryObj = {
  args: {
    label: 'Annuller',
    variant: 'ghost',
    disabled: true,
  },
};
