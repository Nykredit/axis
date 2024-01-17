import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { CardSelect } from '../cardSelect/cardSelect';
import { MultiSelectCardItem } from '../multiSelectCardItem/multiSelectCardItem';

@Component({
  tag: 'nk-multi-select-card-list',
  styleUrl: 'multiSelectCardList.css',
  shadow: true,
})
export class MultiSelectCardList {
  /**
   * selected cards containing their cardid
   */
  @Prop() values: string[] = [];

  @Event({ bubbles: false }) cardChanged: EventEmitter<string[]>;

  indexArray: MultiSelectCardItem[] = [];

  handleChange = evt => {
    evt.stopImmediatePropagation();
    const id = (evt.target as CardSelect).cardid;
    if (!id) {
      return;
    }
    const values = new Set(this.values);

    if (values.has(id)) {
      values.delete(id);
    } else {
      values.add(id);
    }

    this.indexArray.forEach((item: MultiSelectCardItem) => {
      item.actionvalue = values.has(item.cardid);
    });

    this.cardChanged.emit(Array.from(values));
  };

  handleChangeSlot = evt => {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    const slot = path[0];

    this.indexArray = [];
    slot.assignedNodes().forEach((node: HTMLElement) => {
      const typedNode = node as unknown as MultiSelectCardItem;
      typedNode.actionvalue = this.values.includes(typedNode.cardid);
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
