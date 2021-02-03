import React, { PureComponent } from 'react'
import Person from './Person/person'

class Persons extends PureComponent {
    // static getDerivedStateFromProps (props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps',props);
    //     return state;
    // }

<<<<<<< HEAD
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if( 
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed
    //     ){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
=======
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        // if( nextProps.persons !== this.props.persons){
        //     return true;
        // }else{
        //     return false;
        // }
        return true;
    }
>>>>>>> 17c641a701bce9675a360135cf7d9157d42f0869

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { Message:'Snapshot!' };
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('Persons.js rendering...')
        return this.props.persons.map((person , index) => {
        return <Person
                    click={this.props.clicked.bind(this,index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event,person.id)} />
                
        })
    }
}

export default Persons;