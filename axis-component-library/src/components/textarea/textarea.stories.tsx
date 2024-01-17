import { h } from '@stencil/core';
import { StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta = {
  title: 'SOLID/Textarea',
  argTypes: {
    label: 'Descriptive label of the textarea',
    value: { description: 'The description of this property' },
  },
  render: props => React.cloneElement(<nk-textarea></nk-textarea>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    maxLength: 400,
  },
};

export const Prefilled: StoryObj = {
  name: 'pre-filled',
  args: {
    value: 'Lorem Ipsum dolor',
    label: 'Description',
  },
};
