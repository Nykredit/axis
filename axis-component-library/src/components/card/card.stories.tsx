import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';
import { Placeholder } from '../../utils/placeholder';

const imageFile = 'https://salesforce-components.andmoney.dk/main/public/abcircle.a87f4981.png';

const meta: Meta = {
  title: 'SOLID/Card',
  argTypes: {
    imageurl: { description: 'URL of the card image' },
    imagealttext: { description: 'Alt-text of the card image' },
  },
  render: props => React.cloneElement(<nk-card-standard></nk-card-standard>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    imageurl: imageFile,
    imagealttext: 'Card example image',
    style: { maxWidth: '500px' },
    children: [<Placeholder />],
  },
};

export const NoName: StoryObj = {
  args: {
    imageurl: '',
    imagealttext: '',
    children: [<Placeholder />],
  },
};
