import React, { Component } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default class ItemList extends Component {
  generateItems() {
    return this.props.workout.map(itemData =>
      <Item
        key={itemData.key}
        id={itemData.key}
        workout={itemData.workout}
        reps={itemData.reps}
        deleteItem={this.props.deleteItem} />
    );
  }
  render() {
    return (
            <ul className="item-list">
                {this.generateItems()}
            </ul>
    );
  }
}
