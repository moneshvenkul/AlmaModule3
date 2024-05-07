import './App.css';
import Welcome from './welcome';
import Details from './Details';
import EnhancedMyComponent from './EnhancedMyComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the App</h1>

      <Welcome name="Monesh" age="25"/>
      <h1>Student Details:</h1>

      <Details class="9th" marks="98"/>

      <EnhancedMyComponent message="Hello, I am a message from MyComponent"/>

    </div>
  );
}

export default App;
