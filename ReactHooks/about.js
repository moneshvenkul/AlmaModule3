import React from 'react';
import { useParams } from 'react-router-dom';

class About extends React.Component {

    componentDidMount() {
        console.log("About is mounted.");
    };
    render() {
        // Accessing the route params directly from props passed by the wrapper component
        const { id } = this.props.params;
        return <h1>Page {JSON.stringify(id)}</h1>;
    }
}


// Creating a wrapper functional component to use hooks and pass params to the class component
function AboutWrapper() {
    const params = useParams();
    return <About params={params} />;
}

export default AboutWrapper;
