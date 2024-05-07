import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1> Hello, {this.props.name} {this.props.age} </h1>;
    }
}

export default Welcome;