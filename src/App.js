import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Davio', age: 28 },
      { name: 'Merlin', age: 29 },
      { name: 'Lintin', age: 27 }
    ],
    showPersons: false
  }

  switchNameHandler = (arg) => {
    this.setState({
      persons: [
        { name: arg, age: 28 },
        { name: 'Jasu', age: 29 },
        { name: 'Manu', age: 45 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'David', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Manu', age: 45 }
      ]
    })
  }

  togglePersons = () => {
    const tmpshowPer = this.state.showPersons;
    this.setState({ showPersons: !tmpshowPer });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',

      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersons}>Toggle Name</button>        
        {persons}
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!! ')
  }
}

export default App;
