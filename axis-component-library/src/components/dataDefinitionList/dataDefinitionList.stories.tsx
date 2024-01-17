import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/DataDefinitionList',
  argTypes: {
    children: { description: 'list of children' },
  },
  render: props => React.cloneElement(<nk-table-list></nk-table-list>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    children: [
      <div key="1">
        <nk-table-item variant="emphasis" label="This is a paragraph" value="1.000 kr."></nk-table-item>
        <nk-table-item variant="default" label="This is a paragraph" value="1.000 kr."></nk-table-item>
        <nk-table-item variant="emphasis-with-border" label="This is a paragraph" value="1.000 kr."></nk-table-item>
        <nk-table-item variant="regular" label="This is a paragraph" value="1.000 kr."></nk-table-item>
      </div>,
    ],
  },
};
