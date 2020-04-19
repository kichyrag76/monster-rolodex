import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi This is Raghu
        </a>
      </header>
    </div>
  );
}
**/

//Instead of the function we can also use the class to render the html
class App extends Component {
  //This is a class using render function to do the same thing
  //what App function does
  constructor(){
    super();
    //Component constructor gives us access to the state variable
    this.state = {
      string : "Hello rendering Raghu from the state"
    };
  }
  render(){
      return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <p>{this.state.string}</p>
              <button onClick = {() => this.setState({string:"Changed"})}>changeText</button>
            </header>
          </div>
        );
  }
}
export default App;
