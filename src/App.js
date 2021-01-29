import React, { Component} from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {
  state = {
    persons:[
      {name : "Max" , age:28},
      {name : "Menu" , age:"19"},
      {name: "Stephanie" , age:"40"}
    ],
    otherState: "some other value",
    showPersons:false
  }

  switchNameHandler = (event) => {
    this.setState({
      persons:[
        {name : event , age:28},
        {name : "Menu" , age:29},
        {name: "Stephanie" , age:30}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name : "Max" , age:28},
        {name : event.target.value , age:29},
        {name: "Stephanie" , age:26}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
  
  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Another heading</h1>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {
          this.state.showPersons === true ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              click={this.switchNameHandler} 
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
            >
              THIS IS A TEST FOR CHILDREN BY HTML TAGS
            </Person>
            <Person 
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div> : null
        }
      </div>
    );
  }

}

export default App;
