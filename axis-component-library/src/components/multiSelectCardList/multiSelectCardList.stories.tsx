import { h } from '@stencil/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { argHelper } from '../../utils/argHelper';

const imageurl =
  'https://www.nykredit.dk/globalassets/billeder/mennesker-ikke-medarbejderbilleder-eller-casebilleder/voksne/mand_kvinde_sidder_med_computer--size-ArticleHero--version-20220329133815.png';

const meta: Meta = {
  title: 'SOLID/MultiSelectCardList',
  argTypes: {
    children: { description: 'list of children' },
    values: { description: 'list of selected values' },
  },
  render: props => React.cloneElement(<nk-multi-select-card-list></nk-multi-select-card-list>, ...argHelper(props)),
};

export default meta;

export const Default: StoryObj = {
  args: {
    style: { '--max-width': '400px' },
    children: [
      <nk-card-select-multi variant="checkbox" imageurl={imageurl} imagealttext="alt text" actionlabel="Vælg" cardid="1">
        <nk-heading text="Mark og Kathrine totalrenoverer et hus: 'Nogle dage er hårde, men det er det, vi vil'" variant="card-heading"></nk-heading>
        <nk-paragraph
          text="Mød Kathrine og Mark som er i gang med at transformere et gammelt hus i Malling om til deres energioptimerede drømmehjem."
          variant="body"
        ></nk-paragraph>
      </nk-card-select-multi>,
      <nk-card-select-multi variant="checkbox" imageurl={imageurl} imagealttext="alt text" actionlabel="Vælg" cardid="2">
        <nk-heading text="Mark og Kathrine totalrenoverer et hus: 'Nogle dage er hårde, men det er det, vi vil'" variant="card-heading"></nk-heading>
        <nk-paragraph
          text="Mød Kathrine og Mark som er i gang med at transformere et gammelt hus i Malling om til deres energioptimerede drømmehjem."
          variant="body"
        ></nk-paragraph>
      </nk-card-select-multi>,
    ],
    values: ['1'],
  },
};

export const WithTitle: StoryObj = {
  args: {
    style: { '--max-width': '400px' },
    children: [
      <nk-card-select-multi variant="checkbox" imageurl={imageurl} imagealttext="alt text" actiontitle="Title of the action" actionlabel="Vælg" cardid="1">
        <nk-heading text="Mark og Kathrine totalrenoverer et hus: 'Nogle dage er hårde, men det er det, vi vil'" variant="card-heading"></nk-heading>
        <nk-paragraph
          text="Mød Kathrine og Mark som er i gang med at transformere et gammelt hus i Malling om til deres energioptimerede drømmehjem."
          variant="body"
        ></nk-paragraph>
      </nk-card-select-multi>,
      <nk-card-select-multi variant="checkbox" imageurl={imageurl} imagealttext="alt text" actiontitle="Title of the action" actionlabel="Vælg" cardid="2">
        <nk-heading text="Mark og Kathrine totalrenoverer et hus: 'Nogle dage er hårde, men det er det, vi vil'" variant="card-heading"></nk-heading>
        <nk-paragraph
          text="Mød Kathrine og Mark som er i gang med at transformere et gammelt hus i Malling om til deres energioptimerede drømmehjem."
          variant="body"
        ></nk-paragraph>
      </nk-card-select-multi>,
    ],
    values: ['1'],
  },
};
