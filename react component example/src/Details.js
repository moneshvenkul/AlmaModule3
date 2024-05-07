import React, {Component} from "react";

class Details extends Component{
    render(){
       return <p> class: {this.props.class} marks: {this.props.marks}</p>
    }
}

export default Details;