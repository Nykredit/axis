import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const meta: Meta = {
  title: 'SOLID/Paragraph',
  argTypes: {
    text: { description: 'The HTML text displayed in the paragraph' },
    variant: { description: 'The visual variant to display' },
    unsafe: { description: 'Allows for HTML injection' },
  },
  render: props => React.cloneElement(<nk-paragraph></nk-paragraph>, ...argHelper(props)),
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: 'body',
    unsafe: false,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem felis, mattis imperdiet lobortis ut, pharetra ut lacus. Proin malesuada neque at maximus tincidunt. Nunc consectetur enim magna, ac aliquam ligula eleifend eget. Curabitur vitae maximus nunc, ac viverra orci. Cras dictum eros at porta commodo. Ut tristique volutpat ipsum in scelerisque. Curabitur semper nibh id leo placerat egestas id porta nibh. Etiam sit amet massa sem. Proin ullamcorper venenatis diam, non ultrices mauris consequat non.`,
  },
};

export const Manchet: StoryObj = {
  args: {
    variant: 'manchet',
    unsafe: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem felis, mattis imperdiet lobortis ut, pharetra ut lacus. Proin malesuada neque at maximus tincidunt. Nunc consectetur enim magna, ac aliquam ligula eleifend eget. Curabitur vitae maximus nunc, ac viverra orci. Cras dictum eros at porta commodo. Ut tristique volutpat ipsum in scelerisque. Curabitur semper nibh id leo placerat egestas id porta nibh. Etiam sit amet massa sem. Proin ullamcorper venenatis diam, non ultrices mauris consequat non.',
  },
};

export const Body: StoryObj = {
  args: {
    variant: 'body',
    unsafe: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem felis, mattis imperdiet lobortis ut, pharetra ut lacus. Proin malesuada neque at maximus tincidunt. Nunc consectetur enim magna, ac aliquam ligula eleifend eget. Curabitur vitae maximus nunc, ac viverra orci. Cras dictum eros at porta commodo. Ut tristique volutpat ipsum in scelerisque. Curabitur semper nibh id leo placerat egestas id porta nibh. Etiam sit amet massa sem. Proin ullamcorper venenatis diam, non ultrices mauris consequat non.',
  },
};

export const BodyEmphasis: StoryObj = {
  name: 'Body Emphasis',
  args: {
    variant: 'body-emphasis',
    unsafe: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem felis, mattis imperdiet lobortis ut, pharetra ut lacus. Proin malesuada neque at maximus tincidunt. Nunc consectetur enim magna, ac aliquam ligula eleifend eget. Curabitur vitae maximus nunc, ac viverra orci. Cras dictum eros at porta commodo. Ut tristique volutpat ipsum in scelerisque. Curabitur semper nibh id leo placerat egestas id porta nibh. Etiam sit amet massa sem. Proin ullamcorper venenatis diam, non ultrices mauris consequat non.',
  },
};

export const Legal: StoryObj = {
  args: {
    variant: 'legal',
    unsafe: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem felis, mattis imperdiet lobortis ut, pharetra ut lacus. Proin malesuada neque at maximus tincidunt. Nunc consectetur enim magna, ac aliquam ligula eleifend eget. Curabitur vitae maximus nunc, ac viverra orci. Cras dictum eros at porta commodo. Ut tristique volutpat ipsum in scelerisque. Curabitur semper nibh id leo placerat egestas id porta nibh. Etiam sit amet massa sem. Proin ullamcorper venenatis diam, non ultrices mauris consequat non.',
  },
};

export const Assistive: StoryObj = {
  args: {
    variant: 'assistive',
    unsafe: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem felis, mattis imperdiet lobortis ut, pharetra ut lacus. Proin malesuada neque at maximus tincidunt. Nunc consectetur enim magna, ac aliquam ligula eleifend eget. Curabitur vitae maximus nunc, ac viverra orci. Cras dictum eros at porta commodo. Ut tristique volutpat ipsum in scelerisque. Curabitur semper nibh id leo placerat egestas id porta nibh. Etiam sit amet massa sem. Proin ullamcorper venenatis diam, non ultrices mauris consequat non.',
  },
};

export const AssistiveEmphasis: StoryObj = {
  name: 'Assistive emphasis',
  args: {
    variant: 'assistive-emphasis',
    unsafe: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem felis, mattis imperdiet lobortis ut, pharetra ut lacus. Proin malesuada neque at maximus tincidunt. Nunc consectetur enim magna, ac aliquam ligula eleifend eget. Curabitur vitae maximus nunc, ac viverra orci. Cras dictum eros at porta commodo. Ut tristique volutpat ipsum in scelerisque. Curabitur semper nibh id leo placerat egestas id porta nibh. Etiam sit amet massa sem. Proin ullamcorper venenatis diam, non ultrices mauris consequat non.',
  },
};

export const BodyUnsafe: StoryObj = {
  name: 'Body with Unsafe',
  args: {
    variant: 'body',
    unsafe: true,
    text: 'Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit. <a href="#">Ut lorem felis</a>, mattis imperdiet lobortis ut, pharetra ut lacus. Proin malesuada neque at maximus tincidunt. Nunc consectetur enim magna, ac aliquam ligula eleifend eget. Curabitur vitae maximus nunc, ac viverra orci. Cras dictum eros at porta commodo. Ut tristique volutpat ipsum in scelerisque. Curabitur semper nibh id leo placerat egestas id porta nibh. Etiam sit amet massa sem. Proin ullamcorper venenatis diam, non ultrices mauris consequat non.',
  },
};
