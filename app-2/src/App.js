import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      array: ["things", "more things", " and then even more of the things"]
    };
  }

  handleChange(value){
    this.setState({array:value});
  }

  render(){
    let arrayDisplay = this.state.array.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });
    return (
      <div className="App">{arrayDisplay}</div>
    );
  }
}

export default App;
