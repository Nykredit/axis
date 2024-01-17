import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { CardSelect } from '../cardSelect/cardSelect';
import { SingleSelectCardItem } from '../singleSelectCardItem/singleSelectCardItem';

@Component({
  tag: 'nk-single-select-card-list',
  styleUrl: 'singleSelectCardList.css',
  shadow: true,
})
export class SingleSelectCardList {
  /**
   * Selected cardid
   */
  @Prop() value: string = '';

  @Event() cardChanged: EventEmitter<string>;

  @State() indexArray: SingleSelectCardItem[] = [];

  handleChange = evt => {
    evt.stopImmediatePropagation();
    const id = (evt.target as CardSelect).cardid;
    if (!id) {
      return;
    }

    this.indexArray.forEach((item: SingleSelectCardItem) => {
      item.actionvalue = item.cardid === id;
    });
    this.cardChanged.emit(id);
  };

  handleChangeSlot = (evt: any) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    const slot = path[0];

    this.indexArray = [];
    slot.assignedNodes().forEach((node: HTMLElement) => {
      const typedNode = node as unknown as SingleSelectCardItem;
      typedNode.actionvalue = this.value === typedNode.cardid;
      this.indexArray.push(typedNode);
    });
  };

  render() {
    return (
      <Host>
        <nk-stack class="component" orientation="horizontal" wrap="wrap" variant="spacing-xlarge" onClick={this.handleChange}>
          <slot onSlotchange={this.handleChangeSlot}> </slot>
        </nk-stack>
      </Host>
    );
  }
}
