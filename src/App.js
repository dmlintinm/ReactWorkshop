import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Davio', age: 28},
      {name: 'Merlin', age: 29},
      {name: 'Lintin', age: 27}
    ]
  }

  switchNameHandler = (arg) => {
    this.setState({
      persons : [
        {name: arg, age: 28},
        {name: 'Merlin', age: 29},
        {name: 'Lintin', age: 45}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Davio', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Lintin', age: 45}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this,'Dally')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Shelto')} 
          changed={this.nameChangeHandler}>India</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />          
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!! ')
  }
}

export default App;
