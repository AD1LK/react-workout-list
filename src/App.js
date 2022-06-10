import './App.css';
import React from 'react';
import NewItemForm from './Components/NewItemForm/NewItemForm';
import ItemList from './Components/ItemList/ItemList'; 

class App extends React.Component {
  state = {
    workout: [
      {
        workout: "Pushups",
        reps: 10,
        key: 1
      },
      {
        workout: "Pullups",
        reps: 8,
        key: 2
      },
      {
        workout: "Curls",
        reps: 10,
        key: 3
      },
      {
        workout: "Tricep extensions",
        reps: 10,
        key: 4
      },
    ],
    nextKey: 5
  }
  addItem = (workout, reps) => {
    let newActivities = [
      ...this.state.workout, 
      { 
        workout, 
        reps,
        key: this.state.nextKey 
      }
    ]
    this.setState({
      workout: newActivities,
      nextKey: this.state.nextKey + 1
    })
  }
  deleteItem = (key) => {
    this.setState({
      workout: this.state.workout.filter(item => item.key !== key)
    });
  }
  render() {
    return (
    <div className="App">
     <h1>Workout List</h1>
     <NewItemForm addItem={this.addItem}/>
     <ItemList 
        workout={this.state.workout} 
        deleteItem={this.deleteItem} />
    </div>
   );
  }

}

export default App;
