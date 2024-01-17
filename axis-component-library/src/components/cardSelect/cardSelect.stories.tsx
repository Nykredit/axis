import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const imageurl =
  'https://www.nykredit.dk/globalassets/billeder/mennesker-ikke-medarbejderbilleder-eller-casebilleder/voksne/mand_kvinde_sidder_med_computer--size-ArticleHero--version-20220329133815.png';

const meta: Meta = {
  title: 'SOLID/CardSelect',
  argTypes: {
    variant: {
      options: ['checkbox', 'radio'],
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
  render: props => React.cloneElement(<nk-card-select></nk-card-select>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    variant: 'checkbox',
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
    variant: 'checkbox',
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
