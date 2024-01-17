import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const imageurl =
  'https://www.nykredit.dk/globalassets/billeder/mennesker-ikke-medarbejderbilleder-eller-casebilleder/voksne/mand_kvinde_sidder_med_computer--size-ArticleHero--version-20220329133815.png';

const meta: Meta = {
  title: 'SOLID/SingleSelectCardItem',
  argTypes: {
    variant: {
      options: ['radio'],
      control: {
        type: 'select',
      },
    },
    imageurl: { description: 'url of the image' },
    imagealttext: { description: 'alt text to the image' },
    actiontitle: { description: 'title to the action at the bottom of the card' },
    actionlabel: { description: 'label to the action at the bottom of the card' },
    actionvalue: { description: 'boolean: is card selected or not' },
    cardid: { description: 'unique id of the card' },
    children: { description: 'list of children' },
  },
  render: props => React.cloneElement(<nk-card-select-single></nk-card-select-single>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    style: { '--max-width': '400px' },
    variant: 'radio',
    imageurl: imageurl,
    imagealttext: 'alt text',
    actionlabel: 'Vælg',
    actionvalue: false,
    cardid: '1',
    children: [
      <div key="1">
        <nk-heading text="Mark og Kathrine totalrenoverer et hus: 'Nogle dage er hårde, men det er det, vi vil'" variant="card-heading"></nk-heading>
        <nk-paragraph
          text="Mød Kathrine og Mark som er i gang med at transformere et gammelt hus i Malling om til deres energioptimerede drømmehjem."
          variant="body"
        ></nk-paragraph>
      </div>,
    ],
  },
};

export const WithTitle: StoryObj = {
  name: 'With title',
  args: {
    style: { '--max-width': '400px' },
    variant: 'radio',
    imageurl: imageurl,
    imagealttext: 'alt text',
    actiontitle: 'Title of the action',
    actionlabel: 'Vælg',
    actionvalue: false,
    cardid: '1',
    children: [
      <div key="1">
        <nk-heading text="Mark og Kathrine totalrenoverer et hus: 'Nogle dage er hårde, men det er det, vi vil'" variant="card-heading"></nk-heading>
        <nk-paragraph
          text="Mød Kathrine og Mark som er i gang med at transformere et gammelt hus i Malling om til deres energioptimerede drømmehjem."
          variant="body"
        ></nk-paragraph>
      </div>,
    ],
  },
};

export const WithCustom: StoryObj = {
  name: 'With custom properties',
  args: {
    style: { '--max-width': '400px', '--card-image-height': '100px', '--card-image-fit': 'contain' },
    variant: 'radio',
    imageurl: imageurl,
    imagealttext: 'alt text',
    actiontitle: 'Title of the action',
    actionlabel: 'Vælg',
    actionvalue: false,
    cardid: '1',
    children: [
      <div key="1">
        <nk-heading text="Mark og Kathrine totalrenoverer et hus: 'Nogle dage er hårde, men det er det, vi vil'" variant="card-heading"></nk-heading>
        <nk-paragraph
          text="Mød Kathrine og Mark som er i gang med at transformere et gammelt hus i Malling om til deres energioptimerede drømmehjem."
          variant="body"
        ></nk-paragraph>
      </div>,
    ],
  },
};
