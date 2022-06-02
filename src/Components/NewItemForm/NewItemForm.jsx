import React, { Component } from 'react';
import './NewItemForm.css';
import Button from 'react-bootstrap/Button';

export default class NewItemForm extends Component {
  state = {
      workout: '',
      reps: '',
  }
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.addItem(this.state.workout, this.state.reps);
      this.setState({workout: '', reps: ''});
    }
    handleWorkoutChange = (event) => {
        this.setState({
          workout: event.target.value
        });
    }
    handleRepsChange = (event) => {
        this.setState({
          reps: event.target.value
        })
    }
    render() {
      return (
        <form action="#" method="GET" onSubmit={this.handleSubmit}>
            <label className="input-label">
                Workout:
                <input 
                    type="text" 
                    className="input-field" 
                    name="workout"
                    value={this.state.workout}
                    onChange={this.handleWorkoutChange} />
            </label>
            <label>
                Reps:
                <input 
                    type="number" 
                    className="input-field" 
                    name="reps"
                    value={this.state.reps}
                    onChange={this.handleRepsChange} />
            </label>
            <Button type="submit" className="add-button">Add Workout</Button>
        </form>
      );
    }
}
