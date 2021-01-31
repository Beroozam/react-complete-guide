import React, { Component} from 'react';
import './App.css';
import Person from './Person/person'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color:${props => props.alt ? 'red' : 'green'};
  color:#fff;
  padding:10px 15px;
  font-family:system-ui;
  font-weight:bold;
  border:none;
  transition:all .4s ease-in-out;
  &:hover{
    background-color:${props => props.alt ? 'salmon' : 'lightgreen'};
    color:black;
    transition:all .4s ease-in-out;
  }
`
class App extends Component {
  state = {
    persons:[
      {id : "id1" , name : "Max" , age:28},
      {id : "id2" , name : "Menu" , age:19},
      {id : "id3" , name: "Stephanie" , age:40}
    ],
    otherState: "some other value",
    showPersons:false
  }

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    
    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
    console.table(this.state.persons);
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
  
  render(){
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person , index) => {
            return <Person
                      click={this.deletePersonHandler.bind(this,index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event,person.id)} />
          })}
        </div> 
      )
          // style.backgroundColor='red';
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red') // classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold') // classes = ['red' , 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton onClick={this.togglePersonsHandler} alt={this.state.showPersons}>Switch Name</StyledButton>
        {persons}
      </div>
    );
  }

}

export default App;
