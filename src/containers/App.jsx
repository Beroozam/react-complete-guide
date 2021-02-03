import React, { Component, Fragment} from 'react';
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'


class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor')

  }
  state = {
    persons:[
      {id : "id1" , name : "Max" , age:28},
      {id : "id2" , name : "Menu" , age:19},
      {id : "id3" , name: "Stephanie" , age:40}
    ],
    otherState: "some other value",
    showPersons:false,
    showCockpit:true,
    changeCounter:0
  }

  static getDerivedStateFromProps (props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount () {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

    this.setState({
      persons:persons,
      changeCounter:this.state.changeCounter + 1
    })
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
    console.log('[App.js render]')

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      )
    }

    return (
      <Fragment>
        <button 
          onClick={() => {this.setState({showCockpit:false})}}
        >
          Remove Cockpit
        </button>
        { this.state.showCockpit ? <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          title={this.props.appTitle}

        /> : null }
        {persons}
      </Fragment>
    );
  }

}

export default withClass(App , classes.App);
