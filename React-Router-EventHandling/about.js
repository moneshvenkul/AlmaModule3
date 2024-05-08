import React from "react";
import { useParams } from "react-router-dom";

function About() {

    let {id} = useParams();
    return <h1>Page  {JSON.stringify(id)}</h1>;
}

export default About;