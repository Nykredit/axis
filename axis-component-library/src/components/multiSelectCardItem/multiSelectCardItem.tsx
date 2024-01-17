import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { CardSelectVariant } from '../../components';

@Component({
  tag: 'nk-card-select-multi',
  styleUrl: 'multiSelectCardItem.css',
  shadow: true,
})
export class MultiSelectCardItem {
  /**
   * Variant of the card select
   */
  @Prop() variant: CardSelectVariant = 'checkbox';
  /**
   * Url of the image
   */
  @Prop() imageurl: string = '';
  /**
   * Alt text to the image
   */
  @Prop() imagealttext: string = '';

  /**
   * Title of the action at the bottom of the card
   */
  @Prop() actiontitle: string = '';
  /**
   * Label to the action at the bottom of the card
   */
  @Prop() actionlabel: string = '';
  /**
   * Value of the action
   */
  @Prop() actionvalue: boolean = false;
  /**
   * Unique id of the card
   */
  @Prop() cardid: string = '';

  @Event({ bubbles: false }) cardChanged: EventEmitter<boolean>;

  render() {
    return (
      <Host>
        <nk-card-select
          variant={this.variant}
          imageurl={this.imageurl}
          imagealttext={this.imagealttext}
          actiontitle={this.actiontitle}
          actionlabel={this.actionlabel}
          actionvalue={this.actionvalue}
          cardid={this.cardid}
          onCardChanged={v => {
            v.stopImmediatePropagation();
            this.cardChanged.emit(v.detail);
          }}
        >
          <slot slot="body"></slot>
        </nk-card-select>
      </Host>
    );
  }
}
