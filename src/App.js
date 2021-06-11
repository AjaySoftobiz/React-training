import './App.css';
import React from 'react';
import Person from './Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'ajay', age: '28' },
      { name: 'alka', age: 29 },
    ]
  }
  switchNameHandler = (data) => {
    // console.log('clicked')
    this.setState({
      persons: [
        { name: data, age: 29 },
        { name: 'ajay', age: 28 },
      ]
    })
  }
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 29 },
        { name: 'ajay', age: 28 },
      ]
    })
  }

  render() {
    return (
      <>
        <Person
          name={this.state.persons[0].name}
          change={this.changeNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
        />
        <button onClick={() => this.switchNameHandler('pawar')}
        >Switch name</button>
      </>
    )
  }
}

export default App;
