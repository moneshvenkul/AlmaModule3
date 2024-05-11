import React from "react";

class MyComponent extends React.Component {
    handleClick = () => {
      console.log("Click event handled by ParentComponent");
    };
  
    render() {
      return (
        <div onClick={this.handleClick}>
          <ChildComponent />
        </div>
      );
    }
  }
  
  class ChildComponent extends React.Component {
    handleClick = () => {
      console.log("Click event handled by ChildComponent");
    };
  
    render() {
      return <button onClick={this.handleClick}>Click Me</button>;
    }
  }

export default MyComponent;