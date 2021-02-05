import React ,{ Component, Fragment  } from 'react'
import PropsTypes from 'prop-types'
import classes from './person.css'
// import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'



class Person extends Component {

    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }

    render(){
        console.log('[Person.js rendering...]')
        return ( 
            <Fragment>

                    {
                        this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> 
                    }

                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                />
            </Fragment>
        )
    }
};

Person.propTypes = {
    click: PropsTypes.func,
    name: PropsTypes.string,
    age: PropsTypes.number,
    changed: PropsTypes.func
};

export default withClass(Person , classes.Person);