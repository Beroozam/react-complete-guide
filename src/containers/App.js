import React, { Component} from 'react';
// import './App.css';
import classes from './App.css'
import Person from '../components/Persons/Person/person'


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
    let btnClass = '';

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
          btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold) // classes = ['red' , 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }

}

export default App;
