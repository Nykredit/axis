import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Alert',
  argTypes: {
    variant: {
      options: ['major', 'minor'],
      control: { type: 'select' },
    },
    icon: { description: 'The icon displayed to the left' },
    text: { description: 'The text for the alert' },
    buttonLabel: { description: 'The label for the button' },
    onButtonClicked: { description: 'Event for when button is clicked', type: 'function' },
  },
  render: props => React.cloneElement(<nk-alert></nk-alert>, ...argHelper(props)),
};

export default meta;

export const Major: StoryObj = {
  name: 'Major',
  args: { variant: 'major', icon: 'arrow-left', text: 'Alert: This is a Solid paragraf component where you can change variant and properties', buttonLabel: 'Enabled' },
};

export const Minor: StoryObj = {
  name: 'Minor',
  args: {
    variant: 'minor',
    icon: 'arrow-left',
    text: 'Alert: This is a Solid paragraf component where you can change variant and properties',
    buttonLabel: 'Enabled',
  },
};
