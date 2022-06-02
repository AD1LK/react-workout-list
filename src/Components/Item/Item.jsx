import React, { Component } from 'react';
import './Item.css';
import Button from 'react-bootstrap/Button';

export default class Item extends Component {
  handleClick = () => {
    this.props.deleteItem(this.props.id);
  }
  render() {
    return (
        <li className="item">
            {this.props.workout} ({this.props.reps})
            <Button 
            className="delete"
            onClick={this.handleClick}>
              Done
            </Button>
        </li>
    );
  }
}
