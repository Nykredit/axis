import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/LoadingBar',
  argTypes: {
    text: { description: 'Text to be displayed' },
    percentage: { description: 'Percentage of the loading from 0 - 100' },
  },
  render: props => React.cloneElement(<nk-loader></nk-loader>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    text: 'Giv os et øjeblik... <br /> Vi samler dit overblik',
    percentage: 0,
  },
};

export const HalfFull: StoryObj = {
  name: '50%',
  args: {
    text: 'Giv os et øjeblik... <br /> Vi samler dit overblik',
    percentage: 50,
  },
};

export const Done: StoryObj = {
  name: '100%',
  args: {
    text: 'Giv os et øjeblik... <br /> Vi samler dit overblik',
    percentage: 100,
  },
};
