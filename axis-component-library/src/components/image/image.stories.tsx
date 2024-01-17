import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';
const imageurl =
  'https://www.nykredit.dk/globalassets/billeder/mennesker-ikke-medarbejderbilleder-eller-casebilleder/voksne/mand_kvinde_sidder_med_computer--size-ArticleHero--version-20220329133815.png';

const meta: Meta = {
  title: 'SOLID/Image',
  argTypes: {
    variant: {
      options: ['cover', 'contain', 'fill', 'none'],
      control: {
        type: 'select',
      },
    },
    url: { description: 'url of the image' },
    alt: { description: 'alt text to the image' },
  },
  render: props => React.cloneElement(<nk-image></nk-image>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    url: imageurl,
    alt: 'alt text',
    variant: 'cover',
  },
};
