import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/AccordionItem',
  argTypes: {
    text: { description: 'The text displayed to the left of the accordion' },
    isopen: { description: 'Whether or not the accordion is open', type: 'boolean' },
    children: { description: 'Array of children to be displayed inside the accordion' },
  },
  render: props => React.cloneElement(<nk-accordion></nk-accordion>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    text: 'This is a label for the accordion item',
    children: [
      <nk-stack slot="content" key="content">
        <div>
          <nk-stack orientation="horizontal" justification="space-between">
            <p>Text here</p>
            <p>Text here</p>
          </nk-stack>
          <nk-divider></nk-divider>
        </div>
        <div>
          <nk-stack orientation="horizontal" justification="space-between">
            <p>Text here</p>
            <p>Text here</p>
          </nk-stack>
          <nk-divider></nk-divider>
        </div>
      </nk-stack>,
    ],
  },
};
