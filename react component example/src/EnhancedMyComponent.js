import React from 'react';

function withLogging(WrappedComponent){
    return class extends React.Component{
        componentDidMount(){
            console.log('Component is mounted');
        }
        componentWillUnmount(){
            console.log('Component is unmounted');
        }
        render(){
            return <WrappedComponent {...this.props} />;
        }
    }
}

class MyComponent extends React.Component{
    render(){
        return <div> Monesh {this.props.message} </div>
    }
}

const EnhancedMyComponent = withLogging(MyComponent);

export default EnhancedMyComponent;