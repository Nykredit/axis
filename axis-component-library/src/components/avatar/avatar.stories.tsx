import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Avatar',
  render: props => React.cloneElement(<nk-avatar></nk-avatar>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {};
