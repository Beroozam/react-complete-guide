import React ,{ Fragment } from 'react'
import classes from './person.css'
// import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'



const person = (props) => {
    console.log('[Person.js rendering...]')
    return ( 
        <Fragment>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age}years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </Fragment>
    )
};

export default withClass(person , classes.Person);