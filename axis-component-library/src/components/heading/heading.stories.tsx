import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Heading',
  argTypes: {
    text: { description: 'The text to be displayed in the heading' },
    variant: { description: 'The type of heading' },
    level: { description: 'The level of the heading' },
  },
  render: props => React.cloneElement(<nk-heading></nk-heading>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    text: 'Rådgivning til netop din virksomhedstype',
    variant: 'heading',
  },
};

export const Huge: StoryObj = {
  args: {
    text: 'Heading',
    variant: 'huge',
    level: 1,
  },
};

export const XLarge: StoryObj = {
  name: 'xlarge',
  args: {
    text: 'Heading',
    variant: 'xlarge',
    level: 2,
  },
};

export const Large: StoryObj = {
  args: {
    text: 'Heading',
    variant: 'large',
    level: 3,
  },
};

export const Medium: StoryObj = {
  args: {
    text: 'Heading',
    variant: 'medium',
    level: 4,
  },
};

export const Small: StoryObj = {
  args: {
    text: 'Heading',
    variant: 'small',
    level: 5,
  },
};

export const XSmall: StoryObj = {
  name: 'xsmall',
  args: {
    text: 'Heading',
    variant: 'xsmall',
    level: 6,
  },
};

export const Tiny: StoryObj = {
  args: {
    text: 'Heading',
    variant: 'tiny',
    level: 6,
  },
};

export const AlignmentLeft: StoryObj = {
  name: 'Left',
  args: {
    text: 'Rådgivning til netop din virksomhedstype',
    variant: 'heading',
    alignment: 'left',
  },
};

export const AlignmentCenter: StoryObj = {
  name: 'Center',
  args: {
    text: 'Rådgivning til netop din virksomhedstype',
    variant: 'heading',
    alignment: 'center',
  },
};

export const AlignmentRight: StoryObj = {
  name: 'Right',
  args: {
    text: 'Rådgivning til netop din virksomhedstype',
    variant: 'heading',
    alignment: 'right',
  },
};
