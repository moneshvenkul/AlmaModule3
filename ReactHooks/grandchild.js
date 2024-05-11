import React from "react";

function Grandchild({props}){
    return <h1> This is Grandchild Component {props.name}  {props.age}</h1>
}

export default Grandchild;