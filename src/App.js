import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Another heading</h1>
        <Person name="Max" age="28" />
        <Person name="Menu" age="29"><h1 class="first">THIS IS A TEST FOR CHILDREN BY HTML TAGS</h1></Person>
        <Person name="elnaz" age="30"/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
