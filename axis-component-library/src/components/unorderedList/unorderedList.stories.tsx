import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/UnorderedList',
  render: props => React.cloneElement(<nk-list-unordered></nk-list-unordered>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    children: [
      <nk-paragraph text="Bullet point example 1" variant="body"></nk-paragraph>,
      <nk-paragraph text="Bullet point example 2" variant="body"></nk-paragraph>,
      <nk-paragraph text="Bullet point example 3" variant="body"></nk-paragraph>,
    ],
  },
};
