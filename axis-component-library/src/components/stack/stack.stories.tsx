import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';
import { Placeholder } from '../../utils/placeholder';

const meta: Meta = {
  title: 'SOLID/Stack',
  argTypes: {
    children: { description: 'The description of this property' },
  },
  render: props => React.cloneElement(<nk-stack></nk-stack>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    orientation: 'vertical',
    variant: 'spacing-medium',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const VerticalOrientation: StoryObj = {
  name: 'Vertical orientation',
  args: {
    orientation: 'vertical',
    variant: 'spacing-xsmall',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const HorizontalOrientation: StoryObj = {
  name: 'Horizontal orientation',
  args: {
    orientation: 'horizontal',
    variant: 'spacing-xsmall',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const SpacingNone: StoryObj = {
  name: 'spacing-none',
  args: {
    orientation: 'vertical',
    variant: 'spacing-none',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const SpacingMin: StoryObj = {
  name: 'spacing-min',
  args: {
    orientation: 'vertical',
    variant: 'spacing-min',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const SpacingTiny: StoryObj = {
  name: 'spacing-tiny',
  args: {
    orientation: 'vertical',
    variant: 'spacing-tiny',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const SpacingXSmall: StoryObj = {
  name: 'spacing-xsmall',
  args: {
    orientation: 'vertical',
    variant: 'spacing-xsmall',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const SpacingSmall: StoryObj = {
  name: 'spacing-small',
  args: {
    orientation: 'vertical',
    variant: 'spacing-small',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const SpacingMedium: StoryObj = {
  name: 'spacing-medium',
  args: {
    orientation: 'vertical',
    variant: 'spacing-medium',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const SpacingXLarge: StoryObj = {
  name: 'spacing-xlarge',
  args: {
    orientation: 'vertical',
    variant: 'spacing-xlarge',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};

export const SpacingMax: StoryObj = {
  name: 'spacing-max',
  args: {
    orientation: 'vertical',
    variant: 'spacing-max',
    children: [<Placeholder />, <Placeholder />, <Placeholder />],
  },
};
