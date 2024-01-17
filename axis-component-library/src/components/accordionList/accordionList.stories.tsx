import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/AccordionList',
  render: props => React.cloneElement(<nk-accordion-list></nk-accordion-list>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    children: [
      <nk-accordion text="This is accordion 1">
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
        </nk-stack>
        <p slot="left" key="left">
          text left
        </p>
        <p slot="right" key="right">
          text right
        </p>
      </nk-accordion>,
      <nk-accordion text="This is accordion 2">
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
        </nk-stack>
        <p slot="left" key="left">
          text left
        </p>
        <p slot="right" key="right">
          text right
        </p>
      </nk-accordion>,
    ],
  },
};
